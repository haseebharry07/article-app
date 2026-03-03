(function () {
  const main_lp = function () {
    window.current_location_id = '';
    window.is_use_default_hl_enabled = true;
    window.is_setting_title_color = '#000';
    window.is_title_text = "Let's get you on the path to success";
    window.is_setting_text_color = '#333';
    window.is_setting_button_color = '#38a169';
    window.is_setting_icon_color = '#2dce89';
    window.is_app_icon = 'fab fa-app-store-ios';
    window.is_google_icon = 'fab fa-google';
    window.is_facebook_icon = 'fab fa-facebook-square';
    window.is_chat_icon = 'fas fa-message-lines';
    window.is_stripe_icon = 'fab fa-cc-stripe';
    window.is_yext_icon = 'fas fa-address-card';
    window.is_wordpress_icon = 'fab fa-wordpress';
    window.is_teammates_icon = 'fas fa-user-plus';
    window.is_whatsapp_icon = 'fab fa-square-whatsapp';
    window.is_app_enabled = true;
    window.is_google_enabled = true;
    window.is_facebook_enabled = true;
    window.is_chat_enabled = true;
    window.is_stripe_enabled = true;
    window.is_yext_enabled = true;
    window.is_wordpress_enabled = true;
    window.is_teammates_enabled = true;
    window.is_whatsapp_enabled = true;

    const data_ark_id = 'hlpt-lp';
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

    //////// get location id
    const fetchData = (callback) => {
      const getLocationIdFromUrl = () => {
        let locationId = '';
        let url = document.location.href;
        if (url.includes('/location')) {
          let parts = url.split('/');
          let index = parts.indexOf('location');
          if (index !== -1 && index + 1 < parts.length) {
            locationId = parts[index + 1];
          }
        } else {
          locationId = '';
        }
        return locationId;
      };
      const checkLocationId = () => {
        const locationId = getLocationIdFromUrl();

        if (locationId) {
          callback(locationId);
        } else {
          callback('');
        }
      };
      checkLocationId();
    };
    fetchData((locationId) => {
      if (locationId !== '') {
        window.current_location_id = locationId;
      } else {
        // console.log(`Key not found`);
      }
    });

    const setup_launchpad_settings = function (cplp) {
      var pu = document.location.href;
      if (pu.includes('/location')) {
        if (typeof cplp === 'object' && cplp.hasOwnProperty('message') && cplp.message.hasOwnProperty('settings')) {
          const {
            use_default_hl,
            title_text,
            setting_title_color,
            setting_text_color,
            setting_button_color,
            setting_icon_color,
            app_icon,
            google_icon,
            facebook_icon,
            chat_icon,
            stripe_icon,
            yext_icon,
            wordpress_icon,
            teammates_icon,
            whatsapp_icon,
            app_enabled,
            google_enabled,
            facebook_enabled,
            chat_enabled,
            stripe_enabled,
            yext_enabled,
            wordpress_enabled,
            teammates_enabled,
            whatsapp_enabled,
          } = cplp.message.settings;

          const getProperty = (property) => {
            if (cplp.message.settings.hasOwnProperty(property) && cplp.message.settings[property] != null) {
              return cplp.message.settings[property];
            } else {
              return window[property];
            }
          };

          window.is_title_text = getProperty('title_text');
          window.is_setting_title_color = getProperty('setting_title_color');
          window.is_setting_text_color = getProperty('setting_text_color');
          window.is_setting_button_color = getProperty('setting_button_color');
          window.is_setting_icon_color = getProperty('setting_icon_color');
          window.is_app_icon = getProperty('app_icon');
          window.is_google_icon = getProperty('google_icon');
          window.is_facebook_icon = getProperty('facebook_icon');
          window.is_chat_icon = getProperty('chat_icon');
          window.is_stripe_icon = getProperty('stripe_icon');
          window.is_yext_icon = getProperty('yext_icon');
          window.is_wordpress_icon = getProperty('wordpress_icon');
          window.is_teammates_icon = getProperty('teammates_icon');
          window.is_whatsapp_icon = getProperty('whatsapp_icon');
          window.is_use_default_hl_enabled = getProperty('use_default_hl');
          window.is_app_enabled = getProperty('app_enabled');
          window.is_google_enabled = getProperty('google_enabled');
          window.is_facebook_enabled = getProperty('facebook_enabled');
          window.is_chat_enabled = getProperty('chat_enabled');
          window.is_stripe_enabled = getProperty('stripe_enabled');
          window.is_yext_enabled = getProperty('yext_enabled');
          window.is_wordpress_enabled = getProperty('wordpress_enabled');
          window.is_teammates_enabled = getProperty('teammates_enabled');
          window.is_whatsapp_enabled = getProperty('whatsapp_enabled');
        }
      }
    };

    const setup_launchpad_services = function (cplp) {
      var pu = document.location.href;
      if (pu.includes('/location') && pu.includes('/launchpad')) {
        const launchpadContainer = document.querySelector('.launchpad-item-container');
        if (!launchpadContainer) {
          setTimeout(function () {
            setup_launchpad_services(cplp);
          }, 250);
          return;
        }
        fetchData((locationId) => {
          if (locationId !== '') {
            window.current_location_id = locationId;
          }
        });
        if (document.body.contains(document.querySelector('.lp-custom-services'))) {
          document.querySelectorAll('.lp-custom-services').forEach(function (element) {
            element.remove();
          });
        }
        if (!document.body.contains(document.querySelector('.lp-custom-services'))) {
          if (typeof cplp === 'object' && cplp.hasOwnProperty('message') && cplp.message.hasOwnProperty('services')) {
            const services = cplp.message.services;
            services.forEach((service, index) => {
              if (service.is_enabled) {
                const linkTarget = service.button_url.startsWith('https:') || service.button_url.startsWith('http:') ? '_blank' : '_self';
                const btn_final_url =
                  !service.button_url.startsWith('https:') && !service.button_url.startsWith('http:') ? `/v2/location/${window.current_location_id}${service.button_url}` : service.button_url;

                const csboxHTML = `
              <div id="custom-service-${index + 1}" class="launchpad-item-sub-container launchpad-bottom-border bg-white my-1 lp-custom-services cs-chat-connect-${index + 1}" name="">
                  <div class="items-tiles mx-3 my-2">
                      <i class="integration-icon mx-4 p-1 my-2 fa-3x d-flex align-items-center justify-content-center ${service.button_icon}" aria-hidden="true"></i>
                      <div class="item-info">
                      <div class="font-normal text-sm text-gray-500 custom-box-name-fe d-none">${service.box_name}</div>
                      <div class="font-normal text-sm text-gray-500">${service.box_desc}</div>
                      </div>
                      <div class="flex flex-col justify-center item-end content-end w-40">
                          <div class="flex flex-row justify-end item-end content-end w-full pr-4 pl-4">
                          <button class="green-btn green-filled-button green-btn">
                              <a href="${btn_final_url}" target="${linkTarget}" class="mb-0 text-white" >
                                  <span class="text-white-cs-hover">${service.button_text}</span>
                                  <i class="fa fa-check d-none"></i>
                              </a>
                          </button>
                          </div>
                      </div>
                  </div>
              </div>
            `;
                try {
                  const parser = new DOMParser();
                  const csboxElement = parser.parseFromString(csboxHTML, 'text/html').body.firstChild;
                  const lastChild = launchpadContainer.lastElementChild;
                  const firstChild = launchpadContainer.firstElementChild;
                  if (service.service_position !== 'Bottom') {
                    firstChild.insertAdjacentElement('beforebegin', csboxElement);
                  } else {
                    lastChild.insertAdjacentElement('afterend', csboxElement);
                  }
                } catch (error) {
                  console.error('Error parsing HTML:', error);
                }
              }
            });
          } else {
            // console.log(`No services found in cplp object.`);
          }
        } else {
          // console.log(`Custom services already populated.`);
        }
      } else {
        // console.log(`Location or Launchpad not detected.`);
      }
    };

    function showhide_default_services() {
      var pu = document.location.href;
      if (pu.includes('/launchpad') && pu.includes('/location')) {
        const sh_elem_item = document.querySelector('.launchpad-item-sub-container');
        if (!document.body.contains(sh_elem_item)) {
          setTimeout(showhide_default_services, 250);
        } else {
          const services_wrap = document.querySelector('.launchpad-item-container');
          if (services_wrap) {
            let sh_elem_app = document.querySelector('.is_app_icon');
            let sh_elem_gmb = document.querySelector('#gmb-connect');
            let sh_elem_fb = document.querySelector('#fb-connect');
            let sh_elem_chat = document.querySelector('.is_chat_icon');
            let sh_elem_stripe = document.querySelector('.is_stripe_icon');
            let sh_elem_yext = document.querySelector('.is_yext_icon');
            let sh_elem_wp = document.querySelector('.is_wordpress_icon');
            let sh_elem_team = document.querySelector('#invite-user');
            let sh_elem_whatsapp = document.querySelector('#whatsapp-connect');
            if (sh_elem_app && !window.is_app_enabled) sh_elem_app.classList.add(`hide`);
            if (sh_elem_gmb && !window.is_google_enabled) sh_elem_gmb.classList.add(`hide`);
            if (sh_elem_fb && !window.is_facebook_enabled) sh_elem_fb.classList.add(`hide`);
            if (sh_elem_chat && !window.is_chat_enabled) sh_elem_chat.classList.add(`hide`);
            if (sh_elem_stripe && !window.is_stripe_enabled) sh_elem_stripe.classList.add(`hide`);
            if (sh_elem_yext && !window.is_yext_enabled) sh_elem_yext.classList.add(`hide`);
            if (sh_elem_wp && !window.is_wordpress_enabled) sh_elem_wp.classList.add(`hide`);
            if (sh_elem_team && !window.is_teammates_enabled) sh_elem_team.classList.add(`hide`);
            if (sh_elem_whatsapp && !window.is_whatsapp_enabled) sh_elem_whatsapp.classList.add(`hide`);
          }
        }
        const sh_elem_team_wa = document.querySelector('#whatsapp-connect.launchpad-item-sub-container');
        if (!document.body.contains(sh_elem_team_wa)) {
          setTimeout(showhide_default_services, 250);
        } else {
          const services_wrap = document.querySelector('.launchpad-item-container');
          if (services_wrap) {
            let sh_elem_whatsapp = document.querySelector('#whatsapp-connect');
            if (sh_elem_whatsapp && !window.is_whatsapp_enabled) sh_elem_whatsapp.classList.add(`hide`);
          }
        }
      }
    }

    function apply_default_icons_lp() {
      // showLoader();
      var pu = document.location.href;
      if (pu.includes('/launchpad') && pu.includes('/location')) {
        const sh_elem_team = document.querySelector('.launchpad-item-sub-container');
        const sh_elem_team_wa = document.querySelector('#whatsapp-connect.launchpad-item-sub-container');
        if (!document.body.contains(sh_elem_team)) {
          setTimeout(apply_default_icons_lp, 250);
        } else {
          const service_wrap = document.querySelector('.launchpad-item-container');
          if (service_wrap) {
            if (!window.is_use_default_hl_enabled) {
              const integrationIcons = document.querySelectorAll('.integration-icon');
              integrationIcons.forEach((icon) => {
                const chatConnectElement = icon.closest('#chat-connect');
                let iconClass = '';
                const src = icon.getAttribute('src');
                if (sh_elem_team_wa && sh_elem_team_wa.contains(icon)) {
                  iconClass = window.is_whatsapp_icon;
                }
                if (src && src.includes('data:image/png')) {
                  iconClass = window.is_app_icon;
                  iconParentClass = 'is_app_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('icon-android-ios')) {
                  iconClass = window.is_app_icon;
                  iconParentClass = 'is_app_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('gmb')) {
                  iconClass = window.is_google_icon;
                  iconParentClass = 'is_google_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('icon-facebook')) {
                  iconClass = window.is_facebook_icon;
                  iconParentClass = 'is_facebook_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('icon-chat-widget-integration')) {
                  iconClass = window.is_chat_icon;
                  iconParentClass = 'is_chat_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('stripe_logo')) {
                  iconClass = window.is_stripe_icon;
                  iconParentClass = 'is_stripe_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('Listing_Icon.svg')) {
                  iconClass = window.is_yext_icon;
                  iconParentClass = 'is_yext_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('icon-wordpress-logo')) {
                  iconClass = window.is_wordpress_icon;
                  iconParentClass = 'is_wordpress_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                    // console.log(`${iconParentClass}`);
                  }
                } else if (src && src.includes('icon-add-member')) {
                  iconClass = window.is_teammates_icon;
                  iconParentClass = 'is_teammates_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                }
                if (iconClass) {
                  const newIcon = document.createElement('i');
                  newIcon.className = `integration-icon mx-4 p-1 my-2 fa-3x d-flex align-items-center justify-content-center ${iconClass}`;
                  newIcon.setAttribute('aria-hidden', 'true');
                  icon.parentNode.replaceChild(newIcon, icon);
                }
              });
            }
          }
        }
      }
    }

    function apply_default_icons_lp_wp_yext() {
      var pu = document.location.href;
      if (pu.includes('/launchpad') && pu.includes('/location')) {
        const sh_elem_team = document.querySelector('.launchpad-item-sub-container');
        if (document.body.contains(sh_elem_team)) {
          const service_wrap = document.querySelector('.launchpad-item-container');
          if (service_wrap) {
            if (!window.is_use_default_hl_enabled) {
              const integrationIcons = document.querySelectorAll('.integration-icon');
              integrationIcons.forEach((icon) => {
                const chatConnectElement = icon.closest('#chat-connect');
                let iconClass = '';
                const src = icon.getAttribute('src');
                if (src && src.includes('Listing_Icon.svg')) {
                  iconClass = window.is_yext_icon;
                  iconParentClass = 'is_yext_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                  }
                } else if (src && src.includes('icon-wordpress-logo.jpg')) {
                  iconClass = window.is_wordpress_icon;
                  iconParentClass = 'is_wordpress_icon';
                  if (chatConnectElement && iconParentClass) {
                    chatConnectElement.classList.add(iconParentClass);
                    // console.log(`iconParentClass:::: ${iconParentClass}`);
                  }
                } 
                if (iconClass) {
                  const newIcon = document.createElement('i');
                  newIcon.className = `integration-icon integration-icon--1 mx-4 p-1 my-2 fa-3x d-flex align-items-center justify-content-center ${iconClass}`;
                  newIcon.setAttribute('aria-hidden', 'true');
                  icon.parentNode.replaceChild(newIcon, icon);
                }
              });
            }
          }
        }
      }
    }
    const mo_lp_extra = function () {
      const targetNode = document.querySelector('#app');
      const config = {attributes: true, childList: true, subtree: true };  
      const observer = new MutationObserver(function (mutations) {
        apply_default_icons_lp_wp_yext();
      });
      observer.observe(targetNode, config);
    };


    function apply_whatsapp_icons_lp(elemId) {
      const startTime = Date.now();
      const duration = 12000;
      function checkAndApply() {
        const sh_elem_team_wa = document.querySelector(elemId);
        if (!document.body.contains(sh_elem_team_wa)) {
          if (Date.now() - startTime < duration) {
            setTimeout(checkAndApply, 250);
          }
        } else {
          apply_default_icons_lp();
          // setTimeout(() => {
          //   hideLoader();
          // }, 250);
        }
      }
      checkAndApply();
    }

    function apply_id_common_elems() {
      var pu = document.location.href;
      if (pu.includes('/launchpad') && pu.includes('/location')) {
        const service_wrap = document.querySelector('.launchpad-item-container');
        if (!document.body.contains(service_wrap)) {
          setTimeout(apply_id_common_elems, 250);
        } else {
          const elem_indexes = document.querySelectorAll('#chat-connect');
          elem_indexes.forEach((elem, index) => {
            elem.classList.add(`chat-connect-${index + 1}`);
          });
          if (!document.body.classList.contains('cplp') && !window.is_use_default_hl_enabled) {
            document.body.classList.add('cplp');
          }
        }
      }
    }

    function hlpt_lp_css() {
      var pu = document.location.href;
      if (pu.includes('/location')) {
        let t = document.createElement('style');
        let s = '';
        t.id = 'hlpt_lp_css';
        if (!window.is_use_default_hl_enabled) {
          s = `
          @import url('https://cdn.hlprotools.com/resources/widgets/1/lp.css');
          :root{
            --cp-lp-title-text: "${window.is_title_text}";
            --cp-lp-title-col: ${window.is_setting_title_color};
            --cp-lp-txt-col: ${window.is_setting_text_color};
            --cp-lp-btn-col: ${window.is_setting_button_color};
            --cp-lp-icon-col: ${window.is_setting_icon_color};
            --cp-lp-title-size: 25px;
            --hlpt-left-nav-color: #fff;
          }

          body[data-theme="default-dark-v1"] #launchpad a:not(.btn) {
            color: #fff !important;
          }
          body.cplp #app section#launchpad div#launchpadHome .launchpad-center-containter .launchpad-item-container .launchpad-item-sub-container .items-tiles img.integration-icon {
            filter: brightness(100) !important;
          }
        
          section#launchpad div#launchpadHome .launchpad-center-containter .launchpad-item-container #invite-user.launchpad-item-sub-container .items-tiles .item-info .custom-box-name-fe.d-none {
            display: none;
          }

          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p {
            color: var(--cp-lp-title-col) !important;
            font-size: 0 !important; 
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p::after,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p::after {
            content: var(--cp-lp-title-text) !important;
            position: relative !important;
            top: 8px !important;
            color: var(--cp-lp-title-col) !important;
            font-size: var(--cp-lp-title-size);
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container .items-tiles .item-info div.font-normal.text-sm.text-gray-500,
          body[data-hlpt-tsg="hlpt-advanced-settings"]  #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container .items-tiles .item-info div.font-normal.text-sm.text-gray-500,
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container .items-tiles .item-info div.font-normal.text-sm.text-gray-500 span,
          body[data-hlpt-tsg="hlpt-advanced-settings"]  #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container .items-tiles .item-info div.font-normal.text-sm.text-gray-500 span {
            color: var(--cp-lp-txt-col) !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container button.green-btn.green-filled-button,
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container button.green-btn.success-green-btn,
          body[data-hlpt-tsg="hlpt-advanced-settings"]  #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container button.green-btn.green-filled-button,
          body[data-hlpt-tsg="hlpt-advanced-settings"]  #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container button.green-btn.success-green-btn {
            background-color: var(--cp-lp-btn-col) !important;
            border-color: var(--cp-lp-btn-col) !important;
            color: var(--hlpt-left-nav-color) !important;
          }
            body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container button.green-btn.green-filled-button.green-btn,
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container button.green-btn.btn.btn-circle.success-green-btn {
            color: #fff !important;
          } 
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container {
            margin-bottom: 20px !important;
            border: 1px solid #e9ecef !important;
            box-shadow: 0 5px 8px rgba(0,0,0,.04) !important;
            box-shadow: 0 7px 12px rgba(0,0,0,.06) !important;
            border-radius: 8px !important;
            font-family: Poppins,Arial,Helvetica,sans-serif !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container.border-light,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container.border-light {
            border-color: #e9ecef !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container:hover,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container:hover {
            border: 1px solid var(--cp-lp-btn-col) !important;
            box-shadow: 0 10px 15px rgba(0,0,0,.08) !important;
            background-color: #ffffff !important;
            // transform: scale(1.02) !important;
            // transition: all ease-in 0.25s !important;
          }
          body #app #launchpad #launchpadHome .launchpad-item-container,
          body[data-hlpt-tsg="hlpt-advanced-settings"]  #app #launchpad #launchpadHome .launchpad-item-container {
            border: 0px !important;
            box-shadow: none !important; 
            background: none !important; 
          }
          body #app #launchpad #launchpadHome .launchpad-item-container .items-tiles.mx-3.my-2,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-item-container .items-tiles.mx-3.my-2 {
            margin: 20px 0px !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container img.integration-icon,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container img.integration-icon{
            // display: none !important;
            opacity: 1 !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container i.integration-icon.fa-3x,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container i.integration-icon.fa-3x {
            font-size: 3.5em;
            color: var(--cp-lp-icon-col) !important;
            padding-left: 5px !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter  #chat-connect.launchpad-item-sub-container.chat-connect-1-temp.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #gmb-connect.launchpad-item-sub-container.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #fb-connect.launchpad-item-sub-container.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-2-temp.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-3-temp.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-4-temp.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-5-temp.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #invite-user.launchpad-item-sub-container.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #whatsapp-connect.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter  #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #gmb-connect.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #fb-connect.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-2.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-3.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-4.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-5.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #invite-user.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #whatsapp-connect.launchpad-item-sub-container.hide,
          body.cplp #launchpad #launchpadHome .hide,
          body #launchpad #launchpadHome .hide,
                
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter  #chat-connect.launchpad-item-sub-container.is_app_icon.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.is_chat_icon.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.is_stripe_icon.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.is_wordpress_icon.hide

          {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter  #custom-service-1.launchpad-item-sub-container:hover a,
          body #app #launchpad #launchpadHome .launchpad-center-containter  #custom-service-1.launchpad-item-sub-container a:hover,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter  #custom-service-1.launchpad-item-sub-container:hover a,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter  #custom-service-1.launchpad-item-sub-container a:hover {
            color: #fff !important;
          }
          .mb-0.text-white:hover,
          body.cplp #app .mb-0.text-white:hover {
          color: #FFFFFF !important;
          } 
          `;
        } else {
          s = `
@import url('https://cdn.hlprotools.com/resources/widgets/1/lp.css');
          :root{
            --cp-lp-title-text: "${window.is_title_text}";
          }
          body[data-theme="default-dark-v1"] #launchpad a:not(.btn) {
            color: #fff !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container.lp-custom-services .items-tiles::before,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-item-sub-container.lp-custom-services  .items-tiles::before {
            display:none !important;
          }

          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p {
            font-size: 0 !important; 
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p::after,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter .launchpad-title p::after {
            content: var(--cp-lp-title-text) !important;
            position: relative !important;
            top: 8px !important;
          }
          body #app #launchpad #launchpadHome .launchpad-center-containter  #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #gmb-connect.launchpad-item-sub-container.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #fb-connect.launchpad-item-sub-container.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #invite-user.launchpad-item-sub-container.hide,
          body #app #launchpad #launchpadHome .launchpad-center-containter #whatsapp-connect.launchpad-item-sub-container.hide,    
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter  #chat-connect.launchpad-item-sub-container.chat-connect-1.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #gmb-connect.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #fb-connect.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-2.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-3.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-4.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #chat-connect.launchpad-item-sub-container.chat-connect-5.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #invite-user.launchpad-item-sub-container.hide,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #whatsapp-connect.launchpad-item-sub-container.hide,
          body.cplp #launchpad #launchpadHome .hide,
          body #launchpad #launchpadHome .hide
          {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }

          body #app #launchpad #launchpadHome .launchpad-center-containter #whatsapp-connect.launchpad-item-sub-container,
          body[data-hlpt-tsg="hlpt-advanced-settings"] #app #launchpad #launchpadHome .launchpad-center-containter #whatsapp-connect.launchpad-item-sub-container {
            border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
          }
          .mb-0.text-white:hover,
          body #app .mb-0.text-white:hover,
          .mb-0.text-white:hover span.text-white-cs-hover,
          body #app .mb-0.text-white:hover span.text-white-cs-hover {
          color: #FFFFFF !important;
          } 
        `;
        }
        t.innerHTML = s;
        document.getElementsByTagName('head')[0].appendChild(t);
      }
    }

    const load_content_loader_global = function () {
      const is_app_ready = document.querySelector('.launchpad-center-containter');
      if (!document.body.contains(is_app_ready)) {
        setTimeout(load_content_loader_global, 250);
      } else {
        const spinner_elem = document.querySelector('#spinner');
        if (!spinner_elem) {
          const wrapperDiv = document.createElement('div');
          wrapperDiv.innerHTML = `
              <div id="spinner" style="display: none; padding-top: 100px;">
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <p class="text-center position-relative" style="top: 65px; width: 200px; left: -70px;">Loading Launchpad<p>
                </div>                         
              </div>
        `;
          wrapperDiv.style.setProperty('position', 'relative', '');
          wrapperDiv.style.setProperty('left', '-30px', '');
          is_app_ready.appendChild(wrapperDiv);
        }
      }
    };

    /* global loader NOT IN USE */
    function showLoader() {
      const islaunchpad_content = document.querySelector('.launchpad-item-container');
      const loader = document.getElementById('spinner');
      if (loader) {
        loader.style.setProperty('display', 'block', 'important');
        if (islaunchpad_content) {
          islaunchpad_content.style.setProperty('display', 'none', 'important');
        }
      }
    }

    function hideLoader() {
      const islaunchpad_content = document.querySelector('.launchpad-item-container');
      const loader = document.getElementById('spinner');
      if (loader) {
        loader.style.setProperty('display', 'none', 'important');
        if (islaunchpad_content) {
          islaunchpad_content.style.setProperty('display', 'block', 'important');
        }
      }
    }
    const mo_lp = function () {
      const targetNode = document.querySelector('#app');
      const config = { childList: true, subtree: true }; /// attributes: true,
      const observer = new MutationObserver(function (mutations) {
        showhide_default_services();
      });
      observer.observe(targetNode, config);
    };

    function lp_settings_services(cplp) {
      // load_content_loader_global();
      mo_lp_extra();
      setup_launchpad_settings(cplp);
      hlpt_lp_css();
      apply_id_common_elems();
      apply_default_icons_lp();
      setup_launchpad_services(cplp);
      apply_whatsapp_icons_lp();
      apply_whatsapp_icons_lp('#whatsapp-connect');
      apply_whatsapp_icons_lp('.is_yext_icon');
      showhide_default_services();
    }

    function handleRouteChange(cplp) {
      lp_settings_services(cplp);
      // console.log(`change`);
    }

    hlpt_loadEmbed('https://auth.locationapi.co/resources1?k=' + get_data_attribute_value('data-ark') + '&s=cp_styles' + '&v=' + Date.now(), function (j) {
      let r = JSON.parse(j);
      if (r.e) {
        ///live version
        const lp_url = 'https://customizerapi.locationapi.co/ext/launchpad?k=' + get_data_attribute_value('data-ark') + '&v=' + Date.now();
        /// dev
        // const lp_url = 'https://customizerapi.locationapi.co/dev/ext/launchpad?k=' + get_data_attribute_value('data-ark') + '&v=' + Date.now();
        $.getJSON(lp_url).done(function (cplp) {
          lp_settings_services(cplp);
          mo_lp();
          $(function () {
            handleRouteChange(cplp);
          });
          setInterval(
            function (cplp) {
              if (window.location.href !== handleRouteChange.lastUrl) {
                handleRouteChange.lastUrl = window.location.href;
                handleRouteChange(cplp);
              }
            },
            100,
            cplp
          );
          $(window).on('hashchange', function (e) {
            /// no code yet.
          });
        });
      }
    });
  };
  window.addEventListener('message', async function (e) {
    if (e.data.event === 'refreshCpLp') {
      location.reload();
      // main_lp();
    }
  });
  main_lp();
  // console.log(`lp Init.... v1.02`);
})();
//// ends here