(function () {
  let buttonsCreated = false;    
  const data_ark_id = 'hlpt-scb';  
  const checkScbAttribute = () => {
    const ark_att = document.getElementById(data_ark_id);
    if (ark_att && ark_att.hasAttribute('data-scb')) {
      const scbValue = ark_att.getAttribute('data-scb');
      return scbValue !== 'false';
    }
    return true; 
  };

  if (!checkScbAttribute()) {
    return;
  }

  const API_BASE_URL = 'https://pdulo7z2b2.execute-api.us-west-1.amazonaws.com';
  const AUTH_API_URL = 'https://auth.locationapi.co';
  // const CUSTOMIZER_API_URL = 'https://customizerapi.locationapi.co/dev';
  const CUSTOMIZER_API_URL = 'https://customizerapi.locationapi.co';
  const CDN_BASE_URL = 'https://cdn2.locationapi.co';
  const AGSETTINGS_KEY = 'smartbtn_agsettings';
  const AGSETTINGS_TIMESTAMP_KEY = 'smartbtn_agsettings_timestamp';
  const AGSETTINGS_CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

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

  const fetchData = (callback) => {
    return new Promise((resolve) => {
      const locationId = getLocationId();
      resolve(callback(locationId));
    });
  };

  const reference_key = get_data_attribute_value('data-ark');

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

  const get_contact_id = function () {
    let pu = document.location.href;
    if (
      pu.includes('/location') &&
      (pu.includes('/contacts/detail') || pu.includes('/conversations/conversations'))
    ) {
      const match = pu.match(/\/(?:contacts\/detail|conversations\/conversations)\/([^\/]+)$/);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }; 

  const toTitleCase = (str) => {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getCustomFieldValue = (locationInfo, contactInfo, customFieldName) => {
    if (!contactInfo || !customFieldName) {
      return null;
    }
    const standardFields = {
      'First Name': contactInfo.first_name,
      'Last Name': contactInfo.last_name,
      'Name': contactInfo.name,
      'Email': contactInfo.email,
      'Phone': contactInfo.phone || contactInfo.contact_info?.phone,
      'Country': contactInfo.country
    };

    if (standardFields[customFieldName]) {
      return standardFields[customFieldName];
    }

    if (!locationInfo) {
      return null;
    }
    const formattedFieldName = customFieldName.replace(/{{|}}/g, '').trim();
    if (!locationInfo.custom_fields || !Array.isArray(locationInfo.custom_fields)) {
      return null;
    }    
    const customField = locationInfo.custom_fields.find(field => field.fieldKey === formattedFieldName);
    if (!customField) {
      return null;
    }
    const fieldId = customField.id;
    const nestedContactInfo = contactInfo.contact_info;
    if (!nestedContactInfo || !nestedContactInfo.customFields) {
      return null;
    }
    const customFieldValue = nestedContactInfo.customFields.find(field => field.id === fieldId);

    if (!customFieldValue) {
      return null;
    }
    return customFieldValue.value;
  };

  const fetchContactInfo = async (refKey, locationId, contactId) => {
    let pu = document.location.href;
    const contactIdType = pu.includes('/conversations/conversations') ? 'conversation_id' : 'contact_id';
    const contactPersonId = get_contact_id();
    const apiUrl = `${API_BASE_URL}/contact_info?ref_key=${encodeURIComponent(refKey)}&location_id=${encodeURIComponent(locationId)}&${contactIdType}=${encodeURIComponent(contactId)}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      if (data.contact_info) {
        localStorage.setItem('smartbtn_contact_Id', contactPersonId);
        localStorage.setItem(`contact_info_${contactPersonId}`, JSON.stringify(data.contact_info));
        return data.contact_info;
      }
      return null;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      return null;
    }
  };

  const fetchLocationInfo = async (refKey, locationId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/location_info?ref_key=${encodeURIComponent(refKey)}&location_id=${encodeURIComponent(locationId)}`);
      if (!response.ok) {
        throw new Error(`Location info API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      return data.location_info;
    } catch (error) {
      console.error('Error fetching location info:', error);
      return null;
    }
  };

  const buildQueryString = (contactInfo, locationInfo, buttonCustomFields) => {
    if (!contactInfo || !locationInfo || !buttonCustomFields) {
      return '';
    }
    const baseParams = {
      id: contactInfo.contact_info?.id
    };

    const customFieldParams = {};
    buttonCustomFields.forEach(field => {     
      if (field.name && field.queryKey) {
        let value;
        if (field.isStandard) {
          value = getCustomFieldValue(locationInfo, contactInfo, field.name);
        } else if (field.isCustomKey) {
          const formattedName = field.name.replace(/{{|}}/g, '').trim();
          value = getCustomFieldValue(locationInfo, contactInfo, formattedName);
        }        
        const cleanQueryKey = field.queryKey.trim();
        customFieldParams[cleanQueryKey] = value || '';
      }
    });
    const allParams = { ...baseParams, ...customFieldParams };  
    const filteredParams = Object.fromEntries(
      Object.entries(allParams).filter(([_, value]) => value !== undefined && value !== null)
    );
    const queryString = '?' + Object.entries(filteredParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    return queryString;
  };

  async function getContactInfo() {
    const contactPersonId = get_contact_id();
    try {
      return await fetchData(async (locationId) => {
        const contactInfo = await fetchContactInfo(reference_key, locationId, contactPersonId);
        if (contactInfo) {
          return contactInfo;
        } else {
          return null;
        }
      });
    } catch (error) {
      console.error('Error fetching contact info:', error);
      return null;
    }
  }

  const createCenteredSpinner = function() {
    const backgroundShade = document.createElement('div');
    backgroundShade.className = 'iframe-back-shade';
    backgroundShade.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.0) !important;
      z-index: -1;
      display: none !important;
    `;
    backgroundShade.innerHTML = '<div class="insideshadow"></div>';
    document.body.appendChild(backgroundShade);

    const spinnerContainer = document.createElement('div');
    spinnerContainer.id = 'smartbtn-spinner-container';
    spinnerContainer.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      z-index: 9999;
    `;
    
    const spinner = document.createElement('span');
    spinner.className = 'button-spinner';
    spinner.innerHTML = '';
    
    spinnerContainer.appendChild(spinner);
    document.body.appendChild(spinnerContainer);
    return { spinnerContainer, backgroundShade };
  };

  async function openIframe(buttonId, iframeUrl) {    
    let queryString = '';  
    const contactPersonId = get_contact_id();
    const contactInfo = await getContactInfo();
    const locationInfo = await fetchLocationInfo(reference_key, getLocationId());
    const existingIframeContainer = document.getElementById('smartbtn-iframe-container');     
    const spinnerContainer = document.getElementById('smartbtn-spinner-container') || createCenteredSpinner().spinnerContainer;
    const backgroundShade = document.querySelector('.iframe-back-shade');
    spinnerContainer.style.display = 'block';
    backgroundShade.style.setProperty('display', 'block', 'important');
    backgroundShade.style.setProperty('z-index', '9998', 'important');
    backgroundShade.style.setProperty('background-color', 'rgba(0, 0, 0, 0.2)', 'important');
    
    if (existingIframeContainer) {
      const iframe = existingIframeContainer.querySelector('iframe');
      if (iframe) {
        if (contactInfo && locationInfo) {
          const button = window.agsettings.buttons.find(b => b.button_ref === buttonId);
          if (button && button.button_info.custom_fields) {
            queryString = buildQueryString(contactInfo, locationInfo, button.button_info.custom_fields);
          }
        }
        const fullUrl = iframeUrl + queryString;
        iframe.src = fullUrl;
        return;
      }
    }

    const iframeContainer = document.createElement('div');
    iframeContainer.classList.add('smartbtn-iframe-container');
    iframeContainer.id = 'smartbtn-iframe-container';
    const spinner = document.createElement('div');
    spinner.classList.add('iframe-spinner');
    spinner.innerHTML = `
      <div class="spinner"></div>
    `;            
    if (contactInfo && locationInfo) {
      const button = window.agsettings.buttons.find(b => b.button_ref === buttonId);
      if (button && button.button_info.custom_fields) {
        queryString = buildQueryString(contactInfo, locationInfo, button.button_info.custom_fields);
      }
    }
    
    const fullUrl = iframeUrl + queryString;
    const iframe = document.createElement('iframe');
    iframe.classList.add('smart-button');
    iframe.id = 'smart-button';
    iframe.setAttribute('allow', 'autoplay; camera; microphone; geolocation');
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-modals');
    iframe.src = fullUrl;
    iframe.style.display = 'none'; 

    const closeButton = createCloseButton();
    iframeContainer.appendChild(closeButton);
    iframeContainer.appendChild(spinner);
    iframeContainer.appendChild(iframe);
    document.body.appendChild(iframeContainer);

    iframe.onload = function () {
      setTimeout(() => {
        spinner.style.display = 'none'; 
        iframe.style.display = 'block';
        spinnerContainer.style.display = 'none';
        document.querySelectorAll('.button-spinner').forEach(spinner => {
          spinner.style.display = 'none';
        });
        document.querySelectorAll('.button-icon').forEach(icon => {
          icon.style.display = 'inline-block';
        });
      }, 1500);
    };
  };

  const checkAndUpdateIframeShade = function() {
    const iframeShade = document.querySelector('.iframe-back-shade');
    if (iframeShade) {
      const currentDisplay = iframeShade.style.display;
      if (currentDisplay === 'inline') {
        iframeShade.style.setProperty('display', 'none', 'important');
      }
    }
  };

  const createCloseButton = function() {
    const closeButton = document.createElement('button');
    closeButton.classList.add('smart-button--btns');
    closeButton.id = 'smart-button--btns';
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeButton.addEventListener('click', function() {
      const container = closeButton.closest('.smartbtn-iframe-container');
      if (container) {
        container.remove();
        const backgroundShade = document.querySelector('.iframe-back-shade');
        if (backgroundShade) {
          backgroundShade.style.setProperty('display', 'none', 'important');
          backgroundShade.style.setProperty('z-index', '-1', 'important');
          backgroundShade.style.setProperty('background-color', 'rgba(0, 0, 0, 0.0)', 'important');
        }
        checkAndUpdateIframeShade();
        document.querySelectorAll('.button-spinner').forEach(spinner => {
          spinner.style.display = 'none';
        });
        document.querySelectorAll('.button-icon').forEach(icon => {
          icon.style.display = 'inline-block';
        });
      }
    });
    return closeButton;
  };


  const createButtonHTML = function(buttons) {
    if (!buttons || !buttons.length) return '';
    
    return `
      <div class="smart-buttons--btn-wrap" style="margin-top: 5px !important;">
        ${[...buttons].reverse().map((button, index) => {
          const btnInfo = button.button_info;
          const indexClass = `smartbtn-nextindex-${index + 1}`;
          const specialClasses = [
            'smartbtn-avatar_img',
            'smartbtn-hl_header--help-icon',
            'smartbtn-recent_activities-toggle',
            'smartbtn-canny_logs-toggle',
            'smartbtn-hl_header--phone-icon'
          ];
          const specialClass = specialClasses[index % specialClasses.length];
          
          return `
            <button id="${button.button_ref}" class="btn btn-primary mx-1 ${indexClass} ${specialClass}" 
                   style="background-color: ${btnInfo.btn_bg_color} !important; color: ${btnInfo.btn_text_color} !important; border-color: ${btnInfo.btn_bg_color} !important; font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 5px">
              <span class="button-spinner" style="display: none;"><i class="fa-solid fa-circle-notch fa-spin fa-spin" style="margin-right: 5px"></i></span>
              <span class="button-icon me-2" style="margin-right: 5px"><i class="${btnInfo.icon}"></i></span>
              <span class="ms-0">${btnInfo.name}</span> 
            </button>
          `;
        }).join('')}
      </div>
    `;
  };

  const setupButtonEventListeners = function(buttons) {
    if (!buttons || !buttons.length) return;
    
    buttons.forEach(button => {
      const btnElement = document.querySelector(`#${button.button_ref}`);
      if (btnElement) {
        btnElement.addEventListener('click', async function() {
          const spinner = btnElement.querySelector('.button-spinner');
          const icon = btnElement.querySelector('.button-icon');
          spinner.style.display = 'inline-block';
          icon.style.display = 'none';
          
          const contactPersonId = get_contact_id();
          const contactInfo = await getContactInfo();
          const locationInfo = await fetchLocationInfo(reference_key, getLocationId());
          let queryString = '';
          
          if (contactInfo && locationInfo) {
            if (button.button_info.custom_fields) {
              queryString = buildQueryString(contactInfo, locationInfo, button.button_info.custom_fields);
            }
          }
          
          const fullUrl = button.button_info.link_url + queryString;
          
          if (button.button_info.link_type === 'externaltab') {
            window.open(fullUrl, '_blank');
            spinner.style.display = 'none';
            icon.style.display = 'inline-block';
          } else {
            openIframe(button.button_ref, button.button_info.link_url);
          }
        });
      }
    });
  };

  const appendButtonToDOM = function (buttonHTML) {
    const targets = [
      document.querySelector('.hl_contact-details-new--wrap'),
      document.querySelector('.hl_conversations--wrap'),
      document.querySelector('#conversations-new-app'),
      document.querySelector('#record-details-new-ui .contactsHighriseApp')      
    ];
    targets.forEach((targetDiv) => {
      if (targetDiv) {
        if (targetDiv.querySelector('.smart-buttons--btn-wrap')) {
          return;
        }
        const div = document.createElement('div');
        div.innerHTML = buttonHTML.trim();
        targetDiv.parentNode.insertBefore(div.firstChild, targetDiv);
      }
    });
  };

  const setup_create_smart_buttons = function(agsettings) {
    const pu = window.location.href;
    if (
      !pu.includes('/location') ||
      (!pu.includes('/contacts/detail/') && !pu.includes('/conversations/conversations'))
    ) {
      return;
    }

    fetchData(async (locationId) => {
      const smartButtonScript = document.getElementById('hlpt-smart-buttons');
      const filteredButtons = agsettings.buttons.filter(button => {
        const buttonLocations = button.button_info.locations;
        const isEnabled = button.button_info.is_enabled;
        const isContactPage = pu.includes('/contacts/detail/');
        const isConversationPage = pu.includes('/conversations/conversations');
        
        if (!isEnabled) return false;
        
        const locationMatch = buttonLocations.includes(locationId) || buttonLocations.includes('alllocations');
        if (!locationMatch) return false;
        
        if (isContactPage && !button.button_info.btn_enabled_contacts) return false;
        if (isConversationPage && !button.button_info.btn_enabled_conversations) return false;
        
        return true;
      });

      if (filteredButtons.length > 0) {
        createButtons(filteredButtons);
      } else {
        const smartButtonsWrapper = document.querySelector('.smart-buttons--btn-wrap');
        if (smartButtonsWrapper) {
          smartButtonsWrapper.remove();
        }
      }
    });
  };

  function createButtons(buttons) {
    if (!checkElementsReady()) {
      setTimeout(() => setup_create_smart_buttons({ buttons }), 250);
      return;
    }
    if (document.querySelector('.smart-buttons--btn-wrap')) {
      buttonsCreated = true;
      return;
    }
    const buttonHTML = createButtonHTML(buttons);
    appendButtonToDOM(buttonHTML);
    setupButtonEventListeners(buttons);
  }

  const checkElementsReady = function() {
    const is_app_ready = document.querySelector('#app');
    const is_elem_ready = document.querySelector('.hl_contact-details-new--wrap');
    const is_elem_ready_v2 = document.querySelector('#conversations-new-app');
    const is_elem_conversations = document.querySelector('.hl_conversations--wrap');
    const is_elem_conversations_v2 = document.querySelector('#record-details-new-ui .contactsHighriseApp');
    return document.body.contains(is_app_ready) && (document.body.contains(is_elem_ready) || (document.body.contains(is_elem_ready_v2)) || (document.body.contains(is_elem_conversations)) || (document.body.contains(is_elem_conversations_v2)));
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
      } else {
        // console.log('Cache expired, fetching fresh data');
      }
    } else {
      // console.log('No cache found, fetching fresh data');
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
    const pu = window.location.href;
    if (
      !pu.includes('/location') ||
      (!pu.includes('/contacts/detail/') && !pu.includes('/conversations/conversations'))
    ) {
      return;
    }
    const existingButtons = document.querySelector('.smart-buttons--btn-wrap');
    if (existingButtons) {
      existingButtons.remove();
      buttonsCreated = false; 
    }
    setup_create_smart_buttons(agsettings);
    // console.log(`change`); 
  }

  
hlpt_loadEmbed(`${AUTH_API_URL}/resources1?k=${get_data_attribute_value('data-ark')}&s=smartbtns_styles&v=${Date.now()}`, async function (j) {
    let r = JSON.parse(j);
    if (r.e) {
      const agsettings = await getAgencySettings();
      if (agsettings) {
        window.agsettings = agsettings;
        add_styles('smartbutton-styles', `${CDN_BASE_URL}/hlptsmartbtns/smartbtn_styles.css`);
        // createCenteredSpinner();
        $(function () {
          setInterval(function () {
            if (window.location.href !== handlePgChange.lastUrl) {
              handlePgChange.lastUrl = window.location.href;
              handlePgChange(agsettings);
            }
            checkAndUpdateIframeShade();
          }, 250);
        });
      }
    }
  });
  // console.log(`scb... v1.1`); 
})();