(function () {
  const data_ark_id = 'hlpt-cp';
  window.tokenKey = '';
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
  //// setup GET-Receive data.
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

  function hlpt_cp_css() {
    let t = document.createElement('style');
    t.id = 'hlpt_cp_css';
    let s = `
    #sidebar-v2 {
      box-shadow: 1px 60px 6px 0px rgba(0, 0, 0, 0.08) !important;
    }
    body #app .sidebar-v2-agency .hl_header.--agency {
      z-index: 10 !important;
    }
    `;
    t.innerHTML = s;
    document.getElementsByTagName('head')[0].appendChild(t);
  }

  function is_saas_config_active() {
    const checkElems = document.querySelector('.hl_nav-header');
    if (!document.body.contains(checkElems)) {
      setTimeout(is_saas_config_active, 250);
    } else {
      const checkAgency = document.querySelector('.sidebar-v2-agency');
      let saas_config = 1;
      if (checkAgency) {
        let navLinks = document.querySelectorAll('.hl_nav-header a');
        navLinks.forEach(function (link) {
          if (link.id === 'sb_agency-saas-configurator') {
            saas_config = 0;
          }
        });
      }
      return saas_config;
    }
  }

  async function getTokenKey() {
    let dataArk =  get_data_attribute_value('data-ark')
    const url = `https://customizerapi.locationapi.co/token?k=${dataArk}`;    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } 
        const data = await response.text(); 
        return data;
    } catch (error) {
        console.error("Error fetching token key:", error);
        return null;
    }
  }

  function create_sidebar_cp() {
    let pu = document.location.href;
    if (!pu.includes('/location') && !pu.includes('/settings')) {
      const sidebar_elem = document.querySelector('#sidebar-v2 .hl_nav-header nav');
      const sidebar_elem_cl = document.querySelector('#sidebar-v2 .hl_nav-header nav a.custom-link');
      if (!document.body.contains(sidebar_elem)) {
        setTimeout(create_sidebar_cp, 250);
      } else {
        let cp_sidebar_link = false;
        if (typeof sidebar_elem != 'undefined' && sidebar_elem) {
          if (!cp_sidebar_link) {
            let cp_sidebar = 'true';
            let ark_att = document.getElementById(data_ark_id);
            if (document.body.contains(ark_att)) {
              if (ark_att.hasAttribute('data-cp')) {
                cp_sidebar = ark_att.getAttribute('data-cp');
              }
            }
            if (cp_sidebar == 'true') {
              let tokenKey = window.tokenKey
              let linkId = 'sb_controlpanel';
              let link_obj = document.querySelector('#' + linkId);
              let cp_class = 'sb-controlpanel';
              let linkIcon = `<svg class="cp-icon" fill="currentColor" viewBox="0 0 512 512"><path d="M128 0V32 64h48v48 64 48H128V480v32H64V480 224H16V176 112 64H64V32 0h64zM288 0V32 288h48v48 64 48H288v32 32H224V480 448H176V400 336 288h48V32 0h64zM448 32V96h48v48 64 48H448V480v32H384V480 256H336V208 144 96h48V32 0h64V32zM64 112v64h64V112H64zM288 336H224v64h64V336zm96-192v64h64V144H384z"/></svg>`;
              /// live version
              let linkURL = `https://cp.modalsupport.com/?k=${window.cp_ark}&sc=${is_saas_config_active()}&gt=${window.is_attribs_guided_tour_enabled}&token_key=${encodeURIComponent(tokenKey)}`; 
            
              let linkName = 'Control Panel';
              let div = document.getElementById(linkId);
              let iframe = document.getElementById('sb_cp_iframe');
              if (!div) {
                let nh = `<a id="${linkId}" href="javascript:void(0);" class="${cp_class} w-full group px-3 flex items-center justify-left md:justify-left lg:justify-left xl:justify-start text-sm rounded-md cursor-pointer custom-link font-medium opacity-70 hover:opacity-100 py-2 md:py-2"><span class="h-5 w-5 mr-2 pt-0 d-flex items-center justify-start  cpanel">${linkIcon}</span><span class="items-center justify-left md:justify-left lg:justify-left text-sm">${linkName}</span><span class="hl_new_badge sm:hidden md:hidden lg:block xl:block controlpanel"> New </span></a>`;
                if (!sidebar_elem_cl) {
                  sidebar_elem.insertAdjacentHTML('beforeend', nh);
                } else {
                  sidebar_elem_cl.insertAdjacentHTML('beforebegin', nh);
                }
                let iframe_CP = document.getElementById('sb_cp_iframe');
                if (iframe_CP && iframe_CP.style.display === 'block') {
                  iframe_CP.style.setProperty('display', 'none', 'important');
                }
              }
              if (!iframe) {
                createIframe(linkURL);
                cp_sidebar_link = true;
              }
              document.getElementById(linkId).addEventListener('click', function () {
                window.history.pushState({}, '', '?cp');
                toggleIframe();
              });
            }
            function createIframe(url) {
              let iframe = document.createElement('iframe');
              iframe.src = url;
              iframe.id = 'sb_cp_iframe';
              iframe.style.display = 'none';
              iframe.style.position = 'fixed';
              iframe.style.width = 'calc(100vw - 223px)';
              iframe.style.height = 'calc(100vh - 55px)';
              iframe.style.border = 'solid red 0px';
              iframe.style.width = 'calc(100vw - 220px)';
              iframe.style.height = 'calc(100vh - -2px)';
              iframe.style.bottom = '0px';
              iframe.style.left = '223px';
              iframe.style.zIndex = '98';
              iframe.style.boxShadow = '0px 56px 1px 0px rgba(0, 0, 0, 0.25)';
              if (document.body.classList.contains('v2-collapse')) {
                iframe.style.width = 'calc(100vw - 50px)';
                iframe.style.left = '55px';
              } else {
                iframe.style.width = 'calc(100vw - 223px)';
                iframe.style.left = '223px';
              }
              document.body.appendChild(iframe);
            }
            function toggleIframe() {
              const linkid = document.querySelector('#sb_controlpanel');
              const iframe = document.querySelector('#sb_cp_iframe');
              if (iframe.style.display === 'none') {
                if (typeof linkid !== 'undefined' && linkid) linkid.classList.add('active');
                if (typeof iframe != 'undefined' && iframe) {
                  iframe.style.display = 'block';
                }
              }
            }
          }
        }
      }
    }
  }

  function cp_iframe_sidebar_collapsed() {
    let pu = document.location.href;
    const iframe = document.querySelector('#sb_cp_iframe');
    const collapsed = document.querySelector('.v2-collapse');
    const open = document.querySelector('.v2-open');
    if (!pu.includes('/location') && !pu.includes('/settings') && pu.includes('?cp')) {
      if (!document.body.classList.contains('v2-open') && iframe && collapsed && !open) {
        iframe.style.width = 'calc(-58px + 100vw)';
        iframe.style.left = '58px';
      }
      if (iframe && !collapsed && open) {
        iframe.style.width = 'calc(-223px + 100vw)';
        iframe.style.left = '223px';
      }
    }
  }

  const mo_sidebar_collapsed = function () {
    var widget_app = document.querySelector('#app');
    if (!document.body.contains(widget_app)) {
      setTimeout(hlpt_help_widget_setup, 250);
    } else {
      let pu = document.location.href;
      if (!pu.includes('/location') && !pu.includes('/settings') && pu.includes('?cp')) {
        const targetNode = document.querySelector('.sidebar-v2-agency');
        if (targetNode) {
        const config = { attributes: true, attributeFilter: ['class'], childList: false, subtree: false };
        const observer = new MutationObserver(function (mutations) {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              cp_iframe_sidebar_collapsed();
            }
          });
        });
        observer.observe(targetNode, config);
        } else {
          console.warn('.sidebar-v2-agency not found');
        }
      }
    }
  };

  function hide_cp_iframe() {
    let pu = document.location.href;
    const iframe = document.querySelector('#sb_cp_iframe');
    const linkid = document.querySelector('#sb_controlpanel');
    if (!pu.includes('/location') && !pu.includes('/settings') && pu.includes('?cp')) {
      if (iframe && iframe.style.display === 'none') {
        iframe.style.display = 'block';
      }
    } else {
      if (iframe && iframe.style.display === 'block' && !pu.includes('?cp')) {
        iframe.style.display = 'none';
        if (linkid) sb_controlpanel.classList.remove('active');
      }
    }
    if (iframe && !pu.includes('?cp')) {
      iframe.style.display = 'none';
    }
    if (pu.includes('/location') || pu.includes('/settings')) {
      if (iframe) {
        iframe.style.display = 'none';
        iframe.style.zIndex = '-100';
        iframe.style.opacity = '0';
        iframe.remove();
      }
    }  
  }

  function toggleCpLink() {
    let pu = document.location.href;
    const linkid = document.querySelector('#sb_controlpanel');
    const sidebar_elem = document.querySelector('#sidebar-v2 .hl_nav-header nav');
    const iframe = document.querySelector('#sb_cp_iframe');
    if (!pu.includes('/location') && !pu.includes('/settings')) {
      if (typeof linkid != 'undefined' && linkid) {
        linkid.addEventListener('click', function () {
          linkid.classList.add('active');
          sidebar_elem.querySelectorAll('a').forEach(function (link) {
            link.classList.remove('active');
          });
          if (iframe) iframe.style.opacity = '1';
          if (iframe) iframe.style.zIndex = '98';
        });
      }

      if (typeof iframe !== 'undefined' && iframe && iframe.style.display === 'none') {
        if (typeof sidebar_elem !== 'undefined' && sidebar_elem) {
          const sidebar_links = sidebar_elem.querySelectorAll('a');
          sidebar_links.forEach(function (link) {
            link.addEventListener('click', function (event) {
              event.preventDefault();
              sidebar_links.forEach(function (otherLink) {
                if (otherLink !== link) {
                  otherLink.classList.remove('active');
                }
              });
              link.classList.add('active');
              if (iframe && iframe.style.display === 'block') {
                iframe.style.display = 'none';
              }
            });
          });
        }
      }
    }
    if (!pu.includes('?cp')) {
      if (typeof iframe !== 'undefined' && iframe) {
        iframe.style.display = 'none';
      }
    }
  }

  const locklist_iframe_hide = function () {
    const parent_swtich = document.querySelector('#location-switcher-sidbar-v2');
    const l_swtich = parent_swtich.querySelector('#hl_v2-location_switcher');
    let pu = document.location.href;
    if (!pu.includes('/location') && !pu.includes('/settings') && !l_swtich) {
      const iframe = document.querySelector('#sb_cp_iframe');
      if (iframe && iframe.style.display === 'block') {
        iframe.style.display = 'none';
      }
    }
  };

  const mo_locklist_iframe_hide = function () {
    const checkSwitcher = function () {
      const l_switcher = document.querySelector('.hl_v2-location_switcher');
      if (!l_switcher) {
        setTimeout(checkSwitcher, 250);
      } else {
        const observer = new MutationObserver(function (mutationsList) {
          for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
              const newStyle = l_switcher.style.display;
              const oldStyle = mutation.oldValue;
              if (newStyle === 'none' && oldStyle !== 'none') {
                locklist_iframe_hide();
              }
            }
          }
        });
        observer.observe(l_switcher, { attributes: true, attributeOldValue: true });
      }
    };
    checkSwitcher();
  };

  window.addEventListener('message', async function (e) {
    if (e.data.event === 'open_themebuilder') {
      const panel_Reference = document.querySelector('#dashboard-customizer-panel');
      if (panel_Reference) {
        panel_Reference.style.display = 'block';
        window.current_location_id_cp = e.data.locationId;
        window.current_location_name_cp = e.data.locationName;
        window.current_published_theme_cp = e.data.publishedTheme;
      }
    }
  });

  function hide_cp_location() {
    let pu = document.location.href;
    const iframe = document.querySelector('#sb_cp_iframe');
    if (pu.includes('/location') || pu.includes('/settings')) {
      if (iframe) iframe.style.display = 'none';
      if (iframe) iframe.style.opacity = '0';
      if (iframe) iframe.style.zIndex = '-100';
    }
  }
  window.addEventListener("message", (event) => {
    if (event.data.action === "reloadParent") {
      location.reload();
    }
  });
  function handleRouteChange() {
    create_sidebar_cp();
    toggleCpLink();
    mo_locklist_iframe_hide();
    mo_sidebar_collapsed();
    hide_cp_iframe();
    hide_cp_location();
  }

  hlpt_loadEmbed('https://auth.locationapi.co/resources1?k=' + get_data_attribute_value('data-ark') + '&s=cp_styles' + '&v=' + Date.now(), async function (j) {
    let r = JSON.parse(j);
    if (r.e) {
      let tokenKey = await getTokenKey();
      tokenKey = tokenKey.replace(/^"|"$/g, ''); 
      window.tokenKey = tokenKey; 
      is_saas_config_active();
      create_sidebar_cp();
      hide_cp_iframe();
      toggleCpLink();
      hlpt_cp_css();
      mo_sidebar_collapsed();
      $(function () {
        handleRouteChange();
        setInterval(function () {
          if (window.location.href !== handleRouteChange.lastUrl) {
            handleRouteChange.lastUrl = window.location.href;
            handleRouteChange();
          }
        }, 100);
      });
    }
  });
  // console.log(`cp init... 1.03`);
  /// control panel auto siebar link
})();
//// ends here