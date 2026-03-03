(function () {
  window.current_location_id = '';
  window.themegen_settings = {};
  window.editor_enabled = 0;
  window.user_type = '';
  const themecptb = 'https://nu7ox7c3x6.execute-api.us-east-2.amazonaws.com/clientportalsetup';

  const data_ark_id = 'hlpt-cptb';
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

  //// User allowed to access Theme Builder
  const is_user_allowed = function () {
    let user_allowed = false;
    if (document.body.classList.contains('IsAdmin') || document.body.classList.contains('IsAdminTB')) {
      user_allowed = true;
    }
    return user_allowed;
  };

  function hlpt_cptb_css() {
    let t = document.createElement('style');
    t.id = 'hlpt_cptb_css';
    s = ` `;
    t.innerHTML = s;
    document.getElementsByTagName('head')[0].appendChild(t);
  }

  //////// get location id
  const fetchLocId = (callback) => {
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
  fetchLocId((locationId) => {
    if (locationId !== '') {
      window.current_location_id = locationId;
    } else {
      // console.log(`Key not found`);
    }
  });

  const loadSweetAlert = () => {
    return new Promise((resolve) => {
      if (!document.querySelector('#sweetalert2')) {
        const link = document.createElement('link');
        link.id = 'sweetalert2';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js';
        script.onload = resolve;
        document.body.appendChild(script);
      } else {
        resolve();
      }
    });
  };

  const get_user_data = function () {
    var targetScript_uname = document.querySelector('script[data-user-name]');
    var targetScript_email = document.querySelector('script[data-user-email]');
    var targetScript_role = document.querySelector('script[data-user-role]');
    var targetScript_id = document.querySelector('script[data-user-id]');
    var userEmail = targetScript_email ? targetScript_email.getAttribute('data-user-email') : null;
    var userName = targetScript_uname ? targetScript_uname.getAttribute('data-user-name') : null;
    var userRole = targetScript_role ? targetScript_role.getAttribute('data-user-role') : null;
    var userId = targetScript_id ? targetScript_id.getAttribute('data-user-id') : null;
    localStorage.setItem('themegen_user_email', userEmail || dashboard_themes.themegen_user_email);
    localStorage.setItem('themegen_user_name', userName || dashboard_themes.themegen_user_name);
    localStorage.setItem('themegen_user_role', userRole || dashboard_themes.themegen_user_role);
    localStorage.setItem('themegen_user_id', userId || dashboard_themes.themegen_user_id);
    window.user_type = userRole;
    // console.log(`userType: ${window.user_type}`);
  };

  function initial_setup_eeditorstatus_enabled() {
    const checkBoxDisable = document.querySelector('.editoronoff label');
    const targetDivs = document.querySelectorAll('.cm-line');
    let scriptFound = false;

    targetDivs.forEach((div) => {
      const content = div.textContent.trim();
      if (content.includes('clientPortalThemeBuilder')) {
        scriptFound = true;
      }
    });

    if (scriptFound) {
      if (checkBoxDisable && checkBoxDisable.classList.contains('disabled')) {
        checkBoxDisable.classList.remove('disabled');
      }
    } else {
      if (checkBoxDisable && !checkBoxDisable.classList.contains('disabled')) {
        checkBoxDisable.classList.add('disabled');
      }
    }

    return scriptFound;
  }

  function enable_cptb_access() {
    let selected_location_id = window.current_location_id;
    const editorAccess = `theme_clientportal_tb_${selected_location_id}`;
    const checkBox = document.querySelector('.editoronoff input');
    function handleCheckboxChange() {
      localStorage.setItem(editorAccess, checkBox.checked.toString());
      const scrollDiv = document.querySelector('#branding-form');
      if (scrollDiv) {
        setTimeout(() => {
          // scrollDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 400);
      }
    }
    checkBox.addEventListener('change', handleCheckboxChange);
  }

  const client_portal_inject_script = function (jsscript, targetdivClass, createBtn, targetSciptWindow) {
    const pu = document.location.href;
    if (pu.includes('/client-portal/branding')) {
      let userType = '';
      if (localStorage.getItem('themegen_user_role')) {
        userType = localStorage.getItem('themegen_user_role');
      }

      const targetDivs = document.querySelectorAll(targetdivClass);
      targetDivs.forEach((targetDiv) => {
        if (targetDiv && targetDiv.textContent.trim() === targetSciptWindow) {
          const newDiv = document.createElement('div');
          newDiv.innerHTML = createBtn;
          targetDiv.appendChild(newDiv);
          const button = newDiv.querySelector('button');
          enable_cptb_access();
          button.addEventListener('click', async () => {
            showLoader('Creating', 'Client Portal Script...');
            setTimeout(() => {
              hideLoader();
            }, 1800);
            await loadSweetAlert();
            const scriptToCopy = jsscript;

            navigator.clipboard
              .writeText(scriptToCopy)
              .then(() => {
                const swalTitle = `Client Portal Theme Builder<br />${targetSciptWindow} Script Copied to clipboard! <br />`;
                const swalText = `Click OK button & Paste in ${targetSciptWindow} box.`;
                Swal.fire({
                  title: 'Success',
                  html: `${swalTitle} <strong>${swalText}</strong>`,
                  icon: 'success',
                  customClass: {
                    confirmButton: 'btn btn-primary btn-sm mb-4',
                  },
                  showCancelButton: false,
                  showConfirmButton: true,
                  showLoaderOnConfirm: true,
                  allowOutsideClick: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    showLoader('Setting Up', 'Theme Builder for Client Portal...');
                    setTimeout(() => {
                      Swal.close();
                      hideLoader();
                    }, 2000);
                  }
                });
              })
              .catch((err) => {
                console.error('Failed to copy script: ', err);
              });
          });
        }
      });
    }
  };
  //// mo  client portal theme builder
  const mo_cptb = function () {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true, subtree: true }; // childList: true,
    const observer = new MutationObserver(function (mutations) {
      if (is_user_allowed()) {
        initial_setup_eeditorstatus_enabled();
        client_portal_inject_script(
          `function clientPortalThemeBuilder() {
              if (document.body.style.opacity === "1") {return;}
              document.body.style.opacity = "0";
              if (!document.getElementById('hlpt-dashboard-customizer')) {
                var s = document.createElement('script');
                (s.id = 'hlpt-dashboard-customizer'),
                  (s.type = "text/javascript");
                  (s.dataset.lid = '${window.current_location_id}'),
                 (s.dataset.domain = '${window.location.host}'),
                  (s.dataset.ark = "${get_data_attribute_value('data-ark')}"),
                  (s.src = 'https://cdn2.locationapi.co/clientportal/clientportal_v1.0.js?v=' + Date.now()),
                  document.head.appendChild(s);
              }
            }
            clientPortalThemeBuilder();`,
          'div.mb-2.mt-4.hl-text-sm-regular',
          `<div class="d-flex align-items-center justify-content-end clientportal-editorpanel" style="margin-left: auto;  position: relative;  margin-top: -30px;"><div class="editoronoff mx-1"><div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="editorToggle">
                    <label class="form-check-label p-1" for="editorToggle">Editor</label>
                </div></div><strong>Client Portal Theme Builder </strong> <button class="btn btn-primary btn-sm m-0 mx-2">Copy JS Script <i class="fa-solid fa-copy mx-2"></i></button></div>`,
          'Custom JS'
        );
        client_portal_inject_script(
          `@import url("https://cdn2.locationapi.co/clientportal/css/cptb-main-styles-d.css");`,
          // `@import url("https://cdn2.locationapi.co/clientportal/dynamic-css-disabled/?k=${get_data_attribute_value('data-ark')}");`,
          'div.mb-2.mt-4.hl-text-sm-regular',
          `<div class="d-flex align-items-center justify-content-end clientportal-editorpanel" style="margin-left: auto;  position: relative;  margin-top: -30px;"><strong>Client Portal Theme Builder </strong> <button class="btn btn-primary btn-sm m-0 mx-2">Copy CSS Script <i class="fa-solid fa-copy mx-2"></i></button></div>`,
          'Custom CSS'
        );
        let hasExecuted = false;
        fetchLocId((locationId) => {
          if (!hasExecuted) {
            if (locationId !== '') {
              window.current_location_id = locationId;
              hasExecuted = true;
            }
          }
        });
      }
    });
    observer.observe(targetNode, config);
  };

  const load_content_loader_global = function () {
    const is_app_ready = document.querySelector('#app');
    if (!document.body.contains(is_app_ready)) {
      setTimeout(load_content_loader_global, 250);
    } else {
      const wrapperDiv = document.createElement('div');
      wrapperDiv.innerHTML = `
            <div id="content-loader-global">
                <div id="loader-full-overlay">
                    <div class="loader-wrapper">
                        <div class="loader-pro transition">
                            <div class="spinner"></div>
                            <div class="spinner-msg spinner-msg-1 spinner-msg-2">
                                <span class="dynamic-rendering-text"></span>
                                <p class="spinner-error-msg"><span class="dynamic-error-text"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
      wrapperDiv.style.setProperty('position', 'relative', '');
      wrapperDiv.style.setProperty('display', 'none', '');
      is_app_ready.before(wrapperDiv);
    }
  };

  /* global loader NOT IN USE */
  function showLoader(renderingText, errorText) {
    const loader = document.getElementById('content-loader-global');
    if (loader) {
      const renderingSpan = loader.querySelector('.dynamic-rendering-text');
      const errorSpan = loader.querySelector('.dynamic-error-text');
      if (renderingSpan && errorSpan) {
        renderingSpan.textContent = renderingText;
        errorSpan.textContent = errorText;
      }
      loader.style.setProperty('display', 'block', 'important');
      const parent = loader.parentElement;
      parent.style.setProperty('display', 'block', '');
    }
  }

  function hideLoader() {
    const loader = document.getElementById('content-loader-global');
    if (loader) {
      loader.style.setProperty('display', 'none', 'important');
      const parent = loader.parentElement;
      parent.style.setProperty('display', 'none', '');
    }
  }

  function initializeEditorToggle() {
    const editorToggle = document.querySelector('#editorToggle');
    if (editorToggle) {
      if (window.editor_enabled === 1) {
        editorToggle.checked = true;
      } else {
        editorToggle.checked = false;
      }
    }
  }

  function setup_editorstatus_to_db(editorEnabled) {
    if (is_user_allowed()) {
      const url = `${themecptb}?d=${window.location.host}&k=${get_data_attribute_value('data-ark')}&l=${window.current_location_id}`;
      const data = {
        editor_enabled: editorEnabled,
      };
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Editor status updated successfully:', data);
        })
        .catch((error) => {
          console.error('Error updating editor status:', error);
        });
    }
  }

  const setup_toggle_savebtn = async function (elem) {
    const clickElem = elem;
    if (clickElem) {
      clickElem.addEventListener('click', function () {
        let scriptFound = initial_setup_eeditorstatus_enabled();
        const checkBoxDisable = document.querySelector('.editoronoff label');
        const checkBox = document.querySelector('#editorToggle');
        if (scriptFound) {
          if (checkBoxDisable && checkBoxDisable.classList.contains('disabled')) {
            checkBoxDisable.classList.remove('disabled');
          }
          // console.log(`savebtn editor status: ${window.editor_enabled}`);
          // if (checkBox && !checkBox.checked && window.editor_enabled === 1) {
          //   checkBox.checked = true;
          // }
        } else {
          if (checkBoxDisable && !checkBoxDisable.classList.contains('disabled')) {
            checkBoxDisable.classList.add('disabled');
          }
        }
      });
    }
  };

  function changeEditorToggle() {
    const checkInterval = 250;
    const timeout = 99000;
    let elapsedTime = 0;
    const intervalId = setInterval(() => {
      const editorToggle = document.querySelector('#editorToggle');
      if (editorToggle) {
        // initial_setup_eeditorstatus_enabled();
        initializeEditorToggle();
        clearInterval(intervalId);
        editorToggle.addEventListener('change', function () {
          const editorEnabled = editorToggle.checked ? 1 : 0;
          setup_editorstatus_to_db(editorEnabled);
        });
      } else {
        elapsedTime += checkInterval;
        if (elapsedTime >= timeout) {
          // console.error('Error: #editorToggle element not found after 30 seconds.');
          clearInterval(intervalId);
        }
      }
    }, checkInterval);
  }

  const get_editor_status = async function () {
    await cptb_data_loc();
    let cptb_data = window.theme_data_cptb;
    if (typeof cptb_data === 'object' && cptb_data.hasOwnProperty('clientportalsetup')) {
      let cptb_data_setup = cptb_data.clientportalsetup;
      window.editor_enabled = cptb_data_setup.editor_enabled;
    }
  };

  function cptb_data_loc() {
    return new Promise((resolve, reject) => {
      hlpt_loadEmbed(themecptb + '?k=' + get_data_attribute_value('data-ark') + '&l=' + window.current_location_id, function (k) {
        try {
          let cptb_data = JSON.parse(k);
          window.theme_data_cptb = cptb_data;
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  const execution_all = function () {
    get_user_data();
    hlpt_cptb_css();
    load_content_loader_global();
    mo_cptb();
    initial_setup_eeditorstatus_enabled();
  };
  const handleRouteChange = async function () {
    await get_editor_status();
    changeEditorToggle();
    initial_setup_eeditorstatus_enabled();
    setup_toggle_savebtn(document.querySelector('.n-collapse-item__header'));
    setup_toggle_savebtn(document.querySelector('#save-branding__btn'));
    // console.log(`change`);
  };

  hlpt_loadEmbed('https://auth.locationapi.co/resources1?k=' + get_data_attribute_value('data-ark') + '&s=cptb_styles' + '&v=' + Date.now(), function (j) {
    let r = JSON.parse(j);
    if (r.e) {
      hlpt_loadEmbed(themecptb + '?k=' + get_data_attribute_value('data-ark') + '&l=' + window.current_location_id, function (k) {
        let cptb_data = JSON.parse(k);
        window.theme_data_cptb = cptb_data;
        execution_all();
        $(function () {
          handleRouteChange();
          setInterval(function () {
            if (window.location.href !== handleRouteChange.lastUrl) {
              handleRouteChange.lastUrl = window.location.href;
              handleRouteChange();
            }
          }, 100);
        });
      });
    } else {
      console.error(`No Active Plan Found for this user.`);
    }
  });
  // console.log(`cptb init... v1.0`);
})();