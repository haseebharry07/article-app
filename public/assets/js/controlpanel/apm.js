(function () {
  const AUTH_API_URL = 'https://auth.locationapi.co';
  // const CUSTOMIZER_API_URL = 'https://customizerapi.locationapi.co/dev'; // dev
  const CUSTOMIZER_API_URL = 'https://customizerapi.locationapi.co'; // live
  // const CONFIG_URL = 'https://dev.d2dmsjxcbev33g.amplifyapp.com'; // dev
  const CONFIG_URL = 'https://cp.modalsupport.com'; // live
  const CDN_BASE_URL = 'https://cdn2.locationapi.co/cp/apm';
  // const CDN_BASE_URL = 'https://cdn.locationapi.co/test/controlpanel';
  const AGSETTINGS_KEY = 'alertpopup_agsettings';
  const AGSETTINGS_TIMESTAMP_KEY = 'alertpopup_agsettings_timestamp';
  const AGSETTINGS_CACHE_DURATION = 30 * 60 * 1000; 

  const data_ark_id = 'hlpt-apm';  
  const checkApmAttribute = () => {
    const ark_att = document.getElementById(data_ark_id);
    if (ark_att && ark_att.hasAttribute('data-apm')) {
      const apmValue = ark_att.getAttribute('data-apm');
      return apmValue !== 'false';
    }
    return true; 
  };
  if (!checkApmAttribute()) {
    return;
  }

  const get_data_attribute_value = function (data_attribute_name) {
    let data_attribute_value = '';
    if (data_attribute_name == 'data-ark') {
      data_attribute_value = 'REFERENCE_KEY';
    }
    let ark_att = document.getElementById(data_ark_id);
    if (document.body.contains(ark_att)) {
      if (ark_att.hasAttribute(data_attribute_name)) {
        data_attribute_value = ark_att.getAttribute(data_attribute_name);
      }
    } else if (document.head.contains(ark_att)) {
      if (ark_att.hasAttribute(data_attribute_name)) {
        data_attribute_value = ark_att.getAttribute(data_attribute_name);
      }
    }
    return data_attribute_value;
  };

  const getLocationId = () => {
    let locationId = '';
    let url = document.location.href;
    if (url.includes('/location')) {
      let parts = url.split('/');
      let index = parts.indexOf('location');
      if (index !== -1 && index + 1 < parts.length) {
        locationId = parts[index + 1];
      }
    } else if (!url.includes('/location')) {
      locationId = window.current_location_id_cp;
    } else {
      locationId = '';
    }
    return locationId;
  };
  
  const getRouteAfterLocationId = (url, locationId) => {
    if (!locationId || !url.includes(`/location/${locationId}`)) {
      return '';
    }    
    const locationPattern = `/location/${locationId}`;
    const locationIndex = url.indexOf(locationPattern);
    if (locationIndex !== -1) {
      const afterLocation = url.substring(locationIndex + locationPattern.length);
      return afterLocation.split('?')[0].split('#')[0];
    }
    return '';
  };

  const fetchData = (callback) => {
    return new Promise((resolve) => {
      const locationId = getLocationId();
      resolve(callback(locationId));
    });
  };

  const hlpt_loadEmbed = (url, cb) => {
    let xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        cb(xmlhttp.responseText);
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  };

  const add_styles = (linkid, linkurl) => {
    if (!document.head.contains(document.querySelector('#' + linkid))) {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.id = linkid;
      link.href = linkurl + '?v=' + Date.now();
      document.getElementsByTagName('HEAD')[0].appendChild(link);
    }
  };  

  const formatPreviewText = (text) => {
    if (!text) return '';
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
      .replace(/\*(.*?)\*/g, '<em>$1</em>');     
    return formattedText;
  };
  
  function get_user_data() {
    const user_name = currentScript.getAttribute('data-user-name') || '';
    const user_email = currentScript.getAttribute('data-user-email') || '';
    const user_role = currentScript.getAttribute('data-user-role') || '';
    window.user_name = user_name;
    window.user_email = user_email;
    window.user_role = user_role;
    return { user_name, user_email, user_role };
  }
     
  const getCurrentPage = () => {
    const url = window.location.href;
    const pathname = window.location.pathname;        
    const url_config = `${CONFIG_URL}/popup-pages-config.json?v=${Date.now()}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url_config, false); 
    xhr.send();    
    if (xhr.status === 200) {
      try {
        const config = JSON.parse(xhr.responseText);
        if (config.popup_display_settings && config.popup_display_settings.pages) {
          const pages = config.popup_display_settings.pages; 
          // Extract the route part after location ID from the current URL
          const locationId = getLocationId();
          const routeAfterLocationId = getRouteAfterLocationId(url, locationId);  
          // First, check for subpages with exact route matching after location ID
          for (const [pageKey, pageData] of Object.entries(pages)) {
            if (pageData.subpages) {
              for (const [subPageKey, subPageData] of Object.entries(pageData.subpages)) {
                if (validateRouteMatch(subPageData.route_url, routeAfterLocationId)) {                 
                  return subPageKey; 
                }
              }
            }
          }
          
          // Then check for main pages with exact route matching after location ID
          for (const [pageKey, pageData] of Object.entries(pages)) {
            if (validateRouteMatch(pageData.route_url, routeAfterLocationId)) {
              return pageKey; 
            }
          }
        }
      } catch (error) {
        console.error('Error parsing config:', error);
      }
    } else {
      console.error('Error fetching CONFIG_URL:', xhr.status);
    }
    return 'no page found';
  };
    // Helper function to check if a page has subpages in the new structure
  const hasSubpages = (pages, pageKey) => {
    return pages[pageKey] && typeof pages[pageKey] === 'object' && pages[pageKey].subpages;
  };

  // Helper function to validate route matching
  const validateRouteMatch = (routeUrl, currentRoute) => {
    if (!routeUrl || !currentRoute) {
      return false;
    }    
    // Ensure exact match - no partial matches
    const exactMatch = routeUrl === currentRoute;
    // New: Check if routeUrl is a prefix of currentRoute
    const prefixMatch = currentRoute.startsWith(routeUrl);
    if (routeUrl === '/marketing/social-planner/') {
      // console.log('APM Debug - Route validation:', {
      //   routeUrl: routeUrl,
      //   currentRoute: currentRoute,
      //   exactMatch: exactMatch,
      //   prefixMatch: prefixMatch,
      //   finalResult: exactMatch || prefixMatch
      // });
    }    
    return exactMatch || prefixMatch;
  };
 
  // Helper function to check if a page is a subpage and if it's enabled
  const checkSubpageStatus = (pages, currentPage) => {
    if (!pages || typeof pages !== 'object') {
      return false;
    }    
    // Check if currentPage is a subpage of any main page
    for (const [mainPageKey, mainPage] of Object.entries(pages)) {
      if (hasSubpages(pages, mainPageKey)) {
        // Check if currentPage is a subpage of this main page
        if (mainPage.subpages && mainPage.subpages[currentPage] !== undefined) {
          // Found the subpage, return its status
          const subpageStatus = mainPage.subpages[currentPage];
          return subpageStatus;
        }
      }
    }
    return false;
  };
  
  // Helper function to check if a main page is enabled
  const checkMainPageStatus = (pages, currentPage) => {
    if (!pages || typeof pages !== 'object') {
      return false;
    }    
    // Check if currentPage is a main page and if it's enabled
    if (pages[currentPage] !== undefined) {
      if (typeof pages[currentPage] === 'boolean') {
        return pages[currentPage];
      } else if (typeof pages[currentPage] === 'object' && pages[currentPage].enabled !== undefined) {
        return pages[currentPage].enabled;
      } else if (typeof pages[currentPage] === 'object') {
        if (pages[currentPage].subpages) {
          return true; 
        }
      }
    }
    return false;
  };
  
  const shouldShowPopup = (popup, currentPage, locationId) => {
    // Validate popup object structure
    if (!popup || !popup.popup_info) {
      console.warn('APM Debug - Invalid popup object in shouldShowPopup:', popup);
      return false;
    }
    
    if (!popup.popup_info.is_enabled) return false;    
    if (!window.location.href.includes('/location')) {
      // console.log('APM Debug - shouldShowPopup: No location in URL, hiding popup');
      return false;
    }
    if (currentPage === 'no page found') {
      // console.log('APM Debug - shouldShowPopup: No page found, hiding popup');
      return false;
    }
  
    const displaySettings = popup.popup_info.popup_display_settings;       
    // Check if current page should show popup based on display settings
    let shouldShow = false;    
    if (displaySettings.mode === 'include') {
      // Check if page is in selected_pages
      const inSelectedPages = displaySettings.selected_pages && displaySettings.selected_pages.includes(currentPage);      
      // Check if it's an enabled main page in the new structure
      const isEnabledMainPage = displaySettings.pages ? checkMainPageStatus(displaySettings.pages, currentPage) : false;      
      // Check if it's an enabled subpage in the new structure
      const isEnabledSubpage = displaySettings.pages ? checkSubpageStatus(displaySettings.pages, currentPage) : false;      
      // Show popup if ANY of these conditions is true
      shouldShow = inSelectedPages || isEnabledMainPage || isEnabledSubpage;        
    } else if (displaySettings.mode === 'exclude') {
      // Check if page is in selected_pages (these should be EXCLUDED)
      const inSelectedPages = displaySettings.selected_pages && displaySettings.selected_pages.includes(currentPage);      
      // Check if it's an enabled main page in the new structure
      const isEnabledMainPage = displaySettings.pages ? checkMainPageStatus(displaySettings.pages, currentPage) : false;      
      // Check if it's an enabled subpage in the new structure
      const isEnabledSubpage = displaySettings.pages ? checkSubpageStatus(displaySettings.pages, currentPage) : false;      
      // For exclude mode:
      // - If page is in selected_pages: HIDE popup (exclude it)
      // - If page is NOT in selected_pages: SHOW popup (unless it's explicitly disabled)
      // - If it's a main page or subpage that's enabled: SHOW popup
      shouldShow = !inSelectedPages && (isEnabledMainPage || isEnabledSubpage);
    }    
    if (!shouldShow) {
      return false;
    }       
    
    // New popup location logic based on the 6 criteria
    const popupScope = popup.popup_info.popup_scope || 'Agency';
    const popupIncludeLocations = popup.popup_info.popup_include_locations || 'alllocations';
    const popupExcludeLocations = popup.popup_info.popup_exclude_locations || [];
    const popupLocations = popup.popup_info.popup_locations || '';
    
    // Case 1: Sub account + onlylocations + empty locations + empty exclude
    if (popupScope === 'Sub account' && 
        popupIncludeLocations === 'onlylocations' && 
        (!popupLocations || popupLocations === '') && 
        popupExcludeLocations.length === 0) {
      return false; // No popup on any location
    }
    
    // Case 2: Sub account + onlylocations + specific location
    if (popupScope === 'Sub account' && 
        popupIncludeLocations === 'onlylocations' && 
        popupLocations && popupLocations !== '') {
      return popupLocations === locationId; // Only show on specified location
    }
    
    // Case 3: Agency + onlylocations + empty locations + empty exclude
    if (popupScope === 'Agency' && 
        popupIncludeLocations === 'onlylocations' && 
        (popupLocations || !popupLocations || popupLocations === '') && 
        popupExcludeLocations.length === 0) {
      return false; // No popup on any location
    }
    
    // Case 4: Agency + onlylocations + empty locations + with exclude locations
    if (popupScope === 'Agency' && 
        popupIncludeLocations === 'onlylocations' && 
        (popupLocations || !popupLocations || popupLocations === '') && 
        popupExcludeLocations.length > 0) {
      // Show popup only on locations that are in exclude list
      return popupExcludeLocations.some(loc => loc.id === locationId);
    }
    
    // Case 5: Agency + alllocations + empty exclude + empty locations
    if (popupScope === 'Agency' && 
        popupIncludeLocations === 'alllocations' && 
        popupExcludeLocations.length === 0 && 
        (popupLocations || !popupLocations || popupLocations === '')) {
      return true; // Show popup on all locations
    }
    
    // Case 6: Agency + alllocations + with exclude locations + empty locations
    if (popupScope === 'Agency' && 
        popupIncludeLocations === 'alllocations' && 
        popupExcludeLocations.length > 0 && 
        (popupLocations || !popupLocations || popupLocations === '')) {
      // Show popup on all locations except those in exclude list
      return !popupExcludeLocations.some(loc => loc.id === locationId);
    }
    
         // If no specific location logic applies, default to showing popup
     return true;
  };

  const createAlertPopup = (popup) => {
    // Validate popup object
    if (!popup || !popup.popup_info) {
      console.error('APM Debug - Cannot create popup: Invalid popup object:', popup);
      return null;
    }    
    const popupInfo = popup.popup_info;    
    const popupContainer = document.createElement('div');
    popupContainer.id = popup.popup_ref || `popup-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    popupContainer.className = 'alert-popup-container';    
    const position = popupInfo.popup_position || 'topright';    
    // Add special class for center position
    if (position === 'center') {
      popupContainer.classList.add('custom-popup-position-center');
    }
    const width = popupInfo.popup_width || 490;
    const height = 150;     
    const positionStyles = {
      'topright': `top: 20px; right: 20px;`,
      'topleft': `top: 20px; left: 20px;`,
      'bottomright': `bottom: 20px; right: 20px;`,
      'bottomleft': `bottom: 20px; left: 20px;`,
      'topcenter': `top: 20px; left: 50%; transform: translateX(-50%);`,
      'bottomcenter': `bottom: 20px; left: 50%; transform: translateX(-50%);`,
      'center': `top: 50%; left: 50%; transform: translate(-50%, -50%);`
    };    
    const alignment = popupInfo.popup_content_alignment || {};
    const titleIconAlign = alignment.title_icon || 'left';
    const titleAlign = alignment.title || 'left';
    const bodyAlign = alignment.body_message || 'left';
    const buttonAlign = alignment.button || 'left';    
    const colors = popupInfo.popup_color || {};
    const iconColor = colors.icon_color || '#000000';
    const titleColor = colors.title_color || '#000000';
    const textColor = colors.text_color || '#000000';
    const bgColor = colors.bg_color || '#FFFFFF';    
    const ctaButtons = popupInfo.popup_cta_buttons || [popupInfo.popup_cta_button || {}];
    const buttonTextColor = ctaButtons[0]?.text_color || '#FFFFFF';
    const buttonBgColor = ctaButtons[0]?.bg_color || '#000000';    
    popupContainer.style.cssText = `
      position: fixed;
      ${positionStyles[position]}
      width: ${width}px;
      min-height: ${height}px;
      background-color: ${bgColor};
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.20);
      z-index: 999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
      animation: slideIn 0.3s ease-out;
    `;
    
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
      padding: 22px;
      height: 100%;
      display: flex;
      flex-direction: column;
    `;    
    const header = document.createElement('div');   
    const isCenterAligned = titleAlign === 'center';    
    if (isCenterAligned) {
      header.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
        text-align: ${titleAlign};
      `;      
      if (popupInfo.popup_icon) {
        const icon = document.createElement('i');
        icon.className = popupInfo.popup_icon;
        icon.style.cssText = `
          font-size: 26px;
          color: ${iconColor};
          margin-bottom: 8px;
          text-align: ${titleIconAlign};
        `;
        header.appendChild(icon);
      }

      // console.log('window.user_nameXX', window.user_name) 
      const title = document.createElement('h3');
      if (popupInfo.popup_title.includes('{{user.name}}')) {
        title.innerHTML = formatPreviewText(popupInfo.popup_title.replace('{{user.name}}', window.user_name) || 'Alert');
      } else {
        title.innerHTML = formatPreviewText(popupInfo.popup_title || 'Alert');
      }
      title.style.cssText = `
        margin: 0 !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        color: ${titleColor} !important;
        text-align: ${titleAlign} !important;
      `;
      header.appendChild(title);
    } else {
      header.style.cssText = `
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        text-align: ${titleAlign};
      `;    

      if (popupInfo.popup_icon) {
        const icon = document.createElement('i');
        icon.className = popupInfo.popup_icon;
        icon.style.cssText = `
          font-size: 26px;
          color: ${iconColor};
          margin-right: 12px;
          text-align: ${titleIconAlign};
        `;
        header.appendChild(icon);
      }    

      const title = document.createElement('h3');
      title.innerHTML = formatPreviewText(popupInfo.popup_title || 'Alert');
      title.style.cssText = `
        margin: 0 !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        color: ${titleColor} !important;
        text-align: ${titleAlign} !important;
      `;
      header.appendChild(title);
    }    

    const body = document.createElement('div');
    body.innerHTML = formatPreviewText(popupInfo.popup_body_message || '');
    body.style.cssText = `
      flex: 1;
      color: ${textColor};
      line-height: 1.4;
      margin-bottom: 20px;
      text-align: ${bodyAlign};
    `;    
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
      text-align: ${buttonAlign};
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: ${buttonAlign === 'center' ? 'center' : buttonAlign === 'right' ? 'flex-end' : 'flex-start'};
    `;    
    ctaButtons.forEach((ctaButton, index) => {
      if (!ctaButton || !ctaButton.label || ctaButton.label.trim() === '' || !ctaButton.ctaButton_is_enabled) return;
      // if (!ctaButton || !ctaButton.label) return;
      const ctaBtn = document.createElement('button');
      // console.log('ctaButton.labelXX', ctaButton.label)
      ctaBtn.textContent = ctaButton.label || 'OK';
      ctaBtn.style.cssText = `
        background-color: ${ctaButton.bg_color || buttonBgColor};
        color: ${ctaButton.text_color || buttonTextColor};
        border: none;
        padding:7px 15px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: opacity 0.2s;
        white-space: nowrap;
      `;      
      ctaBtn.addEventListener('mouseenter', () => {
        ctaBtn.style.opacity = '0.8';
      });      
      ctaBtn.addEventListener('mouseleave', () => {
        ctaBtn.style.opacity = '1';
      });      
      ctaBtn.addEventListener('click', async () => {
        if (ctaButton.action_type !== 'dismiss') {
          try {
            await postToZapierWebhook(popupInfo, ctaButton);
          } catch (error) {
            console.error('APM Debug - Webhook failed, but proceeding with navigation:', error);
          }
        }

        if (ctaButton.action_type === 'dismiss') {
          closePopup(popupContainer);
        } else if ((ctaButton.action_type === 'internal-link' || ctaButton.action_type === 'external-link') && ctaButton.link_url) {
          const target = ctaButton.target || 'self';
          if (ctaButton.action_type === 'internal-link') {
            fetchData(async (locationId) => {
              const linkUrl = `${window.location.origin}/v2/location/${locationId}${ctaButton.link_url}`;
              
              if (target === 'new-tab') {
                window.open(linkUrl, '_blank');
              } else {
                window.location.href = linkUrl;
              }
            });            
          } else {
            if (target === 'new-tab') {
              window.open(ctaButton.link_url, '_blank');
            } else {
              window.open(ctaButton.link_url, '_self');
            }
          }
          // closePopup(popupContainer);
        }
      });      
      buttonContainer.appendChild(ctaBtn);
    });
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 5px;
      right: 5px;
      background: none;
      border: none;
      font-size: 20px;
      color: ${textColor};
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background-color 0.2s;
    `;       
    closeBtn.addEventListener('click', () => {
      closePopup(popupContainer);
    });    
    popupContent.appendChild(header);
    popupContent.appendChild(body);
    popupContent.appendChild(buttonContainer);    
    popupContainer.appendChild(closeBtn);
    popupContainer.appendChild(popupContent);    
    return popupContainer;
  };

  const postToZapierWebhook = async (popupInfo, clickedButton) => {
    const locationId = getLocationId();
    const popupId = popupInfo.popup_ref || `popup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const popupName = popupInfo.popup_title || '';
    
     const webhookUrl = popupInfo.popup_post_data_url;
     if (!webhookUrl || webhookUrl.trim() === '') {
       return; 
     }
    //  console.log('APM Debug - webhookUrl', webhookUrl);
    
    if (clickedButton.action_type === 'dismiss') {
      return;
    }
    
    const webhookData = {
      'Domain': window.location.hostname,
      'Sub Account ID': locationId,
      'Page URL': window.location.href,
      'Popup ID': popupId,
      'Popup Name': popupName,
      'CTA Button ID': clickedButton.id || '',
      'CTA Button Name': clickedButton.label || ''
    };
    // Post to webhook
    try {
      const formData = new URLSearchParams();
      Object.keys(webhookData).forEach(key => {
        formData.append(key, webhookData[key]);
      });
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });
      
      if (response.ok) {
        const data = await response.text();
      } 
    } catch (error) {
      // console.error('APM Debug - Error posting to webhook:', error);
      throw error; 
    }
  };

  const closePopup = (popupContainer) => {
    popupContainer.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      if (popupContainer.parentNode) {
        popupContainer.parentNode.removeChild(popupContainer);
      }
    }, 300);
  };

  const isPopupAlreadyDisplayed = (popupRef) => {
    return document.getElementById(popupRef) !== null;
  };

  const addPopupStyles = () => {
    if (document.getElementById('alert-popup-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'alert-popup-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }      
      @keyframes slideOut {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-20px);
        }
      }     
      .alert-popup-container {
        transition: all 0.3s ease;
      }
      .app-loader { z-index: 9999999 !important; }      
    `;    
    document.head.appendChild(style);
  };

  const showAlertPopups = (popups, currentPage, locationId) => {
    if (!popups || !popups.length) return;
    
    addPopupStyles();
    const filteredPopups = popups.filter(popup => {
      const shouldShow = shouldShowPopup(popup, currentPage, locationId);
      return shouldShow;
    });
    
    // Clear any existing popups for this page to prevent duplicates
    document.querySelectorAll('.alert-popup-container').forEach(popup => {
      popup.remove();
    });
    
    filteredPopups.forEach((popup, index) => {
      // Validate popup object before processing
      if (!popup || !popup.popup_ref) {
        // console.warn('APM Debug - Invalid popup object:', popup);
        return;
      }
      
      setTimeout(() => {
        try {
          if (!isPopupAlreadyDisplayed(popup.popup_ref)) {
            const popupElement = createAlertPopup(popup);
            if (popupElement) {
              document.body.appendChild(popupElement);  
              setTimeout(() => {
                if (popupElement.parentNode) {
                  closePopup(popupElement);
                }
              }, 21600000);
            }
          }
        } catch (error) {
          console.error('APM Debug - Error creating popup:', error, popup);
        }
      }, 
      ((window.__popup_show_after_unload || false) ? 500 : 500) + (index * 100));
    });    
  };

  const setup_alert_popups = function(agsettings) {
    const currentPage = getCurrentPage();
    fetchData(async (locationId) => {
      if (agsettings.alertpopups && agsettings.alertpopups.length > 0) {
        showAlertPopups(agsettings.alertpopups, currentPage, locationId);
      }
    });
  };

  const getAgencySettings = async () => {
    const isPageReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;
    if (isPageReload) {
      localStorage.removeItem(AGSETTINGS_KEY);
      localStorage.removeItem(AGSETTINGS_TIMESTAMP_KEY);
    }
    const storedSettings = localStorage.getItem(AGSETTINGS_KEY);
    const storedTimestamp = localStorage.getItem(AGSETTINGS_TIMESTAMP_KEY);
    const currentTime = Date.now();
    if (storedSettings && storedTimestamp) {
      const age = currentTime - parseInt(storedTimestamp);
      if (age < AGSETTINGS_CACHE_DURATION) {
        return JSON.parse(storedSettings);
      }
    }

    const cust_url = `${CUSTOMIZER_API_URL}/agency?k=${get_data_attribute_value('data-ark')}&v=${Date.now()}`;
    try {
      const response = await fetch(cust_url);
      const agsettings = await response.json();
      localStorage.setItem(AGSETTINGS_KEY, JSON.stringify(agsettings));
      localStorage.setItem(AGSETTINGS_TIMESTAMP_KEY, currentTime.toString());
      return agsettings;
    } catch (error) {
      return null;
    }
  };
    
  function handlePgChange(agsettings) {
    const currentPage = getCurrentPage();            
    // Clear existing popups
    const existingPopups = document.querySelectorAll('.alert-popup-container');
    // console.log('APM Debug - Clearing existing popups:', existingPopups.length);
    existingPopups.forEach(popup => {
      popup.remove();
    });    
    
    setup_alert_popups(agsettings);
    handlePgChange.lastPage = currentPage;
  }

  hlpt_loadEmbed(`${AUTH_API_URL}/resources1?k=${get_data_attribute_value('data-ark')}&s=alertpopup_styles&v=${Date.now()}`, async function (j) {
    let r = JSON.parse(j);
    if (r.e) {
      get_user_data();
      const agsettings = await getAgencySettings();
      if (agsettings) {
        window.agsettings = agsettings;
        add_styles('alertpopup-styles', `${CDN_BASE_URL}/apm_styles.css`);        
        $(function () {
          setup_alert_popups(agsettings);          
          setInterval(function () {
            if (window.location.href !== handlePgChange.lastUrl) {
              handlePgChange.lastUrl = window.location.href;
              handlePgChange(agsettings);
            }
          }, 250);
        });
      }
    }
  });
  // console.log(`apm... v1.1`); 
})();