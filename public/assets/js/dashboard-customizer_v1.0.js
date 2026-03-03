(function () {
  const default_theme = '';
  window.selected_theme = default_theme;
  window.selected_theme_loc = default_theme;
  window.current_location_id = '';
  window.themegen_settings = {};
  window.open_themebuilder = '';
  window.current_location_id_cp = '';
  window.current_location_name_cp = '';
  window.current_published_theme_cp = '';
  const script_url = 'https://cdn2.locationapi.co/themegenerator/';
  const data_ark_id = 'hlpt-dashboard-customizer';
  const themegen = 'https://quepl6539h.execute-api.us-east-2.amazonaws.com/themegensetup';
  const gfontslist = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDSDLLAKAmVmTlNVT8ie11UjjDvid8opz8';
  const default_label_bg_gradient_color = 'Choose BG Gradient Color:';
  const cleanwhite_label_bg_gradient_color = 'Left Sidebar BG Color:';
  const default_main_nav = 'Left';
  let login_contactinfo = '';
  let loading_icon = '';
  let login_coverimage = '';
  let login_logoimage = '';
  let google_spreadsheet_url = '';
  let google_webapp_deploy = '';
  let unlock_message = '';
  let userName = '';
  //// setup data.
  const dashboard_themes = {
    location_key: 'REFERENCE_KEY',
    themegen_user_email: '',
    themegen_user_name: '',
    themegen_user_role: '',
    themegen_user_id: '',
    theme_data: {
      theme_darkcherry: {
        theme_name: 'Dark Cherry',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#be1d00', '#111111', '#000000', '#FFFFFF', '#FFFFFF'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'darkcherry/dashboard-theme-darkcherry.css',
        theme_styles_dashboard_adv: 'darkcherry/dashboard-theme-darkcherry-adv.css',
        theme_styles_login: 'darkcherry/dashboard-login-client-dc.css',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#111111',
                btn_bg_hover_color: '#be1d00',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#111111',
                border_hover_color: '#be1d00',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#be1d00',
                btn_txt_color: '#be1d00',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#be1d00',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#111111',
                btn_bg_hover_color: '#be1d00',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#111111',
                border_hover_color: '#be1d00',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#efefef',
                btn_bg_hover_color: '#be1d00',
                btn_txt_color: '#111111',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#d7d7d7',
                border_hover_color: '#be1d00',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#111111',
              end_color: '#000000',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#969696',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#be1d00',
              icon_hover_color: '#be1d00',
              hover_active_bg_color: '#333333',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#be1d00',
              end_color: '#111111',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#3ab6da',
                icon_bg_hover_color: '#3ab6da',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#be1d00',
                icon_bg_hover_color: '#be1d00',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#be1d00',
                icon_bg_hover_color: '#be1d00',
              },
              translation_btn: {
                icon_color: '#e2e2e2',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#111111',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#be1d00',
                text_col: '#FFFFFF',
                overlay: '0.5',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },

      theme_darkcherry_bg: {
        theme_name: 'Green-o-Blue',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#1de24f', '#544acc', '#1a84db', '#FFFFFF', '#FFFFFF'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'darkcherry/dashboard-theme-darkcherry.css',
        theme_styles_dashboard_adv: 'darkcherry/dashboard-theme-darkcherry-adv.css',
        theme_styles_login: 'darkcherry/dashboard-login-client-dc.css',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#544acc',
                btn_bg_hover_color: '#1de24f',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#544acc',
                border_hover_color: '#1de24f',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#1de24f',
                btn_txt_color: '#1de24f',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#1de24f',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#544acc',
                btn_bg_hover_color: '#544acc',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#544acc',
                border_hover_color: '#544acc',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#eaeaff',
                btn_bg_hover_color: '#544acc',
                btn_txt_color: '#544acc',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#ccccff',
                border_hover_color: '#544acc',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#544acc',
              end_color: '#1a84db',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#000000',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#1de24f',
              icon_hover_color: '#1de24f',
              hover_active_bg_color: '#111111',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#1de24f',
              end_color: '#544acc',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#3ab6da',
                icon_bg_hover_color: '#3ab6da',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#0000ff',
                icon_bg_hover_color: '#0000ff',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#000000',
                icon_bg_color: '#1de24f',
                icon_bg_hover_color: '#1de24f',
              },
              translation_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#0a51db',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#1a84db',
                text_col: '#FFFFFF',
                overlay: '0.5',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },

      // theme_milkywhite: {
      //   theme_name: 'Milky White',
      // theme_font_family: 'Poppins',
      //   theme_font_family_h1: 'Poppins',
      //   theme_font_family_h2: 'Poppins',
      //   theme_font_family_h3: 'Poppins',
      //   theme_font_family_h4: 'Poppins',
      //   theme_font_family_sidemenu: 'Poppins',
      //   theme_font_family_topmenu: 'Poppins',
      //   theme_colors: ['#2942FF', '#F5F6F8', '#FFFFFF', '#9e9e9e', '#9e9e9e'],
      //   login_contactinfo: login_contactinfo,
      //   loading_icon: loading_icon,
      //   login_coverimage: login_coverimage,
      //   login_logoimage: login_logoimage,
      //   main_nav: default_main_nav,
      //   theme_styles_dashboard: 'milkywhite/dashboard-theme-milkywhite.css',
      //   theme_styles_dashboard_adv: 'milkywhite/dashboard-theme-milkywhite-adv.css',
      //   theme_styles_login: 'milkywhite/dashboard-login-client-mw.css',
      //   login_txt_color: '#e2e2e2',
      //   login_link_txt_color: '#e2e2e2',
      //   advanced_settings: {
      //     activate_advance_settings: 'false',
      //     activate_dashbanner_settings: 'false',
      //     activate_button_internal_links: 'false',
      //     activate_translations: 'false',
      //     allow_subaccount: '',
      //     display: {
      //       banner: {
      //         hide_yext_banner: 'false',
      //         hide_wordpress_banner: 'false',
      //       },
      //     },
      //     buttons: {
      //       primary_btn: {
      //         btn_color: {
      //           btn_bg_color: '#2942ff',
      //           btn_bg_hover_color: '#2942ff',
      //           btn_txt_color: '#FFFFFF',
      //           btn_txt_hover_color: '#FFFFFF',
      //         },
      //         btn_border: {
      //           border_thickness: '1px',
      //           border_style: 'solid',
      //           border_color: '#2942ff',
      //           border_hover_color: '#2942ff',
      //         },
      //         btn_radius: {
      //           radius_top: '5',
      //         },
      //       },
      //       secondary_btn: {
      //         btn_color: {
      //           btn_bg_color: '#FFFFFF',
      //           btn_bg_hover_color: '#2942ff',
      //           btn_txt_color: '#2942ff',
      //           btn_txt_hover_color: '#FFFFFF',
      //         },
      //         btn_border: {
      //           border_thickness: '1',
      //           border_style: 'solid',
      //           border_color: '#FFFFFF',
      //           border_hover_color: '#2942ff',
      //         },
      //         btn_radius: {
      //           radius_top: '5',
      //         },
      //       },

      //       default_btn: {
      //         btn_color: {
      //           btn_bg_color: '#FFFFFF',
      //           btn_bg_hover_color: '#FFFFFF',
      //           btn_txt_color: '#2942ff',
      //           btn_txt_hover_color: '#2942ff',
      //         },
      //         btn_border: {
      //           border_thickness: '1',
      //           border_style: 'solid',
      //           border_color: '#FFFFFF',
      //           border_hover_color: '#FFFFFF',
      //         },
      //         btn_radius: {
      //           radius_top: '5',
      //         },
      //       },
      //       default_light_btn: {
      //         btn_color: {
      //           btn_bg_color: '#ffffff',
      //           btn_bg_hover_color: '#FFFFFF',
      //           btn_txt_color: '#111111',
      //           btn_txt_hover_color: '#2942ff',
      //         },
      //         btn_border: {
      //           border_thickness: '1',
      //           border_style: 'solid',
      //           border_color: '#FFFFFF',
      //           border_hover_color: '#FFFFFF',
      //         },
      //         btn_radius: {
      //           radius_top: '5',
      //         },
      //       },
      //     },
      //     left_sidebar: {
      //       background_color: {
      //         start_color: '#FFFFFF',
      //         end_color: '#FFFFFF',
      //         color_stop_perc: '30',
      //         gradient_degree: '45',
      //         gradient_type: 'linear',
      //       },
      //       scrollbar: {
      //         thumb_color: '#ededed',
      //         thumb_color_opacity: '1A',
      //         track_color: '#000000',
      //         width_size: '6',
      //       },
      //       main_nav: {
      //         text_hover_color: '#2942ff',
      //         icon_hover_color: '#a7b1fb',
      //         hover_active_bg_color: '#e9eafb',
      //       },
      //       replacenavlinks: {
      //         location_tabs: {
      //           main_tabs: {
      // sb_mediastorage: {
      //   label: 'Media Storage',
      //   icon: 'f03e',
      // },
      //             sb_launchpad: {
      //               label: 'Launchpad',
      //               icon: 'e027',
      //             },
      //             sb_dashboard: {
      //               label: 'Dashboard',
      //               icon: 'f625',
      //             },
      //             sb_conversations: {
      //               label: 'Conversations',
      //               icon: 'e1e7',
      //             },
      //             sb_calendars: {
      //               label: 'Calendars',
      //               icon: 'f073',
      //             },
      //             sb_contacts: {
      //               label: 'Contacts',
      //               icon: 'f2bb',
      //             },
      //             sb_opportunities: {
      //               label: 'Opportunities',
      //               icon: 'f662',
      //             },
      //             sb_payments: {
      //               label: 'Payments',
      //               icon: 'e5d9',
      //             },
      //             sb_marketing: {
      //               label: 'Marketing',
      //               icon: 'e4e8',
      //             },
      //             sb_automation: {
      //               label: 'Automation',
      //               icon: 'e5d5',
      //             },
      //             sb_sites: {
      //               label: 'Sites',
      //               icon: 'f1ea',
      //             },
      //             sb_memberships: {
      //               label: 'Memberships',
      //               icon: 'f559',
      //             },
      //             sb_reputation: {
      //               label: 'Reputation',
      //               icon: 'f587',
      //             },
      //             sb_reporting: {
      //               label: 'Reporting',
      //               icon: 'e473',
      //             },
      //             sb_app_marketplace: {
      //               label: 'App Marketplace',
      //               icon: 'f0b1',
      //             },
      //             sb_mobileapp: {
      //               label: 'Mobile App',
      //               icon: 'f3cd',
      //             },
      //             sb_aiemployeepromo: {
      //               label: 'Season of AI',
      //               icon: 'f890',
      //             },
      //             sb_settings: {
      //               label: 'Settings',
      //               icon: 'e5e9',
      //             },
      //           },
      //           settings_tabs: {
      //             sb_businessinfo: {
      //               label: 'Business Info',
      //               icon: 'f0b1',
      //             },
      //             sb_companybilling: {
      //               label: 'Company Billing',
      //               icon: 'f09d',
      //             },
      //             sb_myprofile: {
      //               label: 'My Profile',
      //               icon: 'f007',
      //             },
      //             sb_mystaff: {
      //               label: 'My Staff',
      //               icon: 'f500',
      //             },
      //             sb_pipelines: {
      //               label: 'Pipelines',
      //               icon: 'f662',
      //             },
      //             sb_calendar: {
      //               label: 'Calendars',
      //               icon: 'f073',
      //             },
      //             sb_conversationaisettings: {
      //               label: 'Conversation AI',
      //               icon: 'f544',
      //             },
      // sb_conversationaisettingsv2: {
      //   label: 'Conversation AI V2',
      //   icon: 'e4a7',
      // },
      // sb_ai_agent_settings: {
      //   label: 'AI Agents',
      //   icon: 'f4fb',
      // },
      // sb_objects: {
      //   label: 'Objects',
      //   icon: 'e49e',
      // },
      //             sb_whatsapp: {
      //               label: 'WhatsApp',
      //               icon: 'f4b0',
      //             },
      //             sb_phonenumbers: {
      //               label: 'Phone Numbers',
      //               icon: 'f67d',
      //             },
      //             sb_reputationmanagement: {
      //               label: 'Reputation Management',
      //               icon: 'e036',
      //             },
      //             sb_customfields: {
      //               label: 'Custom Fields',
      //               icon: 'e531',
      //             },
      //             sb_customvalues: {
      //               label: 'Custom Values',
      //               icon: 'f7ea',
      //             },
      //             sb_managescoring: {
      //               label: 'Manage Scoring',
      //               icon: 'e41c',
      //             },
      //             sb_domains: {
      //               label: 'Domains',
      //               icon: 'f0ac',
      //             },
      //             sb_media: {
      //               label: 'Media',
      //               icon: 'f03d',
      //             },
      //             sb_urlredirects: {
      //               label: 'URL Redirects',
      //               icon: 'f5eb',
      //             },
      //             sb_integrations: {
      //               label: 'Integrations',
      //               icon: 'f126',
      //             },
      //             sb_pintegrations: {
      //             label: 'Private Integrations',
      //             icon: 'e4ad',
      //             },
      //             sb_emailservices: {
      //               label: 'Email Services',
      //               icon: 'e16f',
      //             },
      //             sb_conversationproviders: {
      //               label: 'Conversation Providers',
      //               icon: 'f328',
      //             },
      //             sb_tags: {
      //               label: 'Tags',
      //               icon: 'f02c',
      //             },
      //             sb_labs: {
      //               label: 'Labs',
      //               icon: 'e5f1',
      //             },
      //             sb_auditlogs: {
      //               label: 'Audit Logs',
      //               icon: 'e5d8',
      //             },
      // sb_brandboards: {
      //   label: 'Brand Boards',
      //   icon: 'f53f',
      // },
      //             sb_companies: {
      //               label: 'Companies',
      //               icon: 'e0cc',
      //             },
      //           },
      //         },
      //         agency_tabs: {
      //           main_tabs: {
      //             sb_agency_dashboard: {
      //               label: 'Agency Dashboard',
      //               icon: 'e4e2',
      //             },
      //           },
      //           settings_tabs: {
      //             sb_agency_profile_settings: {
      //               label: 'My Profile',
      //               icon: 'e4e2',
      //             },
      //           },
      //         },
      //       },
      //     },
      //     header_controls: {
      //       activate_hcontrols_settings: 'false',
      //       activate_hcontrols_sm_settings: 'false',
      //       header_color: {
      //         start_color: '#FFFFFF',
      //         end_color: '#FFFFFF',
      //         color_stop_perc: '55',
      //         gradient_degree: '-45',
      //         gradient_type: 'linear',
      //       },
      //       header_buttons: {
      //         profile_btn: {
      //           icon_color: '#FFFFFF',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#2942ff',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         help_btn: {
      //           icon_color: '#9e9e9e',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#FFFFFF',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         notification_btn: {
      //           icon_color: '#9e9e9e',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#FFFFFF',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         viewchangelogs_btn: {
      //           icon_color: '#9e9e9e',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#FFFFFF',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         phone_btn: {
      //           icon_color: '#9e9e9e',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#FFFFFF',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         zappychatbot_btn: {
      //           icon_color: '#9e9e9e',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#FFFFFF',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         guidetour_btn: {
      //           icon_color: '#FFFFFF',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#2942ff',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //         translation_btn: {
      //           icon_color: '#9e9e9e',
      //           icon_hover_color: '#FFFFFF',
      //           icon_bg_color: '#FFFFFF',
      //           icon_bg_hover_color: '#2942ff',
      //         },
      //       },
      //     },
      //     body_content: {
      //       background_color: {
      //         start_color: '#f2f7fc',
      //         end_color: '#f2f7fc',
      //         color_stop_perc: '40',
      //         gradient_degree: '-45',
      //         gradient_type: 'linear',
      //       },
      //       headings: {
      //         h1: {
      //           color: '#222222',
      //           size: '24',
      //         },
      //         h2: {
      //           color: '#0000FF',
      //           size: '18',
      //         },
      //       },
      //       body_text: {
      //         text_color: '#333333',
      //         text_size: '14',
      //       },
      //     },
      //     login_settings: {
      //       login_form: {
      //         clr_pos: 'center',
      //       },
      //       loadingicon: {
      //         loadingicon_size: '80',
      //       },
      //       loginlogo: {
      //         loginlogo_size: '320',
      //       },
      //     },
      //     dashboard: {
      //       location_dashboard: {
      //         opportunities: {
      //           lead_color: '#2942FF',
      //           won_color: '#30ca30',
      //           lost_color: '#df0303',
      // abandoned_color: '#ff0000',
      //         },
      //         headerbanner: {
      //           subhead: '',
      //           btn_1_text: '',
      //           btn_1_link: '',
      //           btn_2_text: '',
      //           btn_2_link: '',
      //           bg_url: '',
      //           bg_col: '#2942FF',
      //           text_col: '#bcc8fc',
      //           overlay: '0',
      //         },
      //       },
      //     },
      // memberships: {
      //   dashboard: {
      //     header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
      //      header_image_title: "LET'S GET STARTED",
      //   },
      // },
      //   },
      // },

      theme_technoblue: {
        theme_name: 'Techno Blue',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#8f98fa', '#6767f5', '#2936cf', '#FFFFFF', '#e6eeff'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'techno/dashboard-theme-technoblue.css',
        theme_styles_dashboard_adv: 'techno/dashboard-theme-technoblue-adv.css',
        theme_styles_login: 'techno/dashboard-login-client-tb.css',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#6767f5',
                btn_bg_hover_color: '#2936cf',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#6767f5',
                border_hover_color: '#2936cf',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#6767f5',
                btn_txt_color: '#6767f5',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#6767f5',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#6767f5',
                btn_bg_hover_color: '#2936cf',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#6767f5',
                border_hover_color: '#2936cf',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#ebebef',
                btn_bg_hover_color: '#2936cf',
                btn_txt_color: '#6767f5',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#c9c9fc',
                border_hover_color: '#2936cf',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#6767f5',
              end_color: '#2936cf',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#000000',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#f5f5f5',
              icon_hover_color: '#f5f5f5',
              hover_active_bg_color: '#899dfe',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#036146',
                icon_bg_hover_color: '#036146',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#0000ff',
                icon_bg_hover_color: '#0000ff',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#8f98fa',
                icon_bg_hover_color: '#8f98fa',
              },
              translation_btn: {
                icon_color: '#e2e2e2',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#8f98fa',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#8f98fa',
                text_col: '#FFFFFF',
                overlay: '0.5',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },
      theme_technoblue_p: {
        theme_name: 'Techno Purple',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#cc97fd', '#AD38E2', '#492cdd', '#FFFFFF', '#FFFFFF'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'techno/dashboard-theme-technoblue.css',
        theme_styles_dashboard_adv: 'techno/dashboard-theme-technoblue-adv.css',
        theme_styles_login: 'techno/dashboard-login-client-tb.css',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#ad38e2',
                btn_bg_hover_color: '#492cdd',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#ad38e2',
                border_hover_color: '#492cdd',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#ad38e2',
                btn_txt_color: '#ad38e2',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#ad38e2',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#ad38e2',
                btn_bg_hover_color: '#492cdd',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#ad38e2',
                border_hover_color: '#492cdd',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#f5ecff',
                btn_bg_hover_color: '#ad38e2',
                btn_txt_color: '#ad38e2',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#edd2f9',
                border_hover_color: '#FFFFFF',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#ad38e2',
              end_color: '#492cdd',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#000000',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#f5f5f5',
              icon_hover_color: '#f5f5f5',
              hover_active_bg_color: '#b56aff',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#036146',
                icon_bg_hover_color: '#036146',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#0000ff',
                icon_bg_hover_color: '#0000ff',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#cc97fd',
                icon_bg_hover_color: '#cc97fd',
              },
              translation_btn: {
                icon_color: '#e2e2e2',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#cc97fd',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#ad38e2',
                text_col: '#FFFFFF',
                overlay: '0.5',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },
      theme_dark: {
        theme_name: 'Dark Ocean',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#00c29b', '#363c79', '#22275f', '#FFFFFF', '#FFFFFF'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'darkocean/dashboard-theme-darkocean.css',
        theme_styles_dashboard_adv: 'darkocean/dashboard-theme-darkocean-adv.css',
        theme_styles_login: 'darkocean/dashboard-login-client-do.css',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#363c79',
                btn_bg_hover_color: '#22275f',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#363c79',
                border_hover_color: '#22275f',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#363c79',
                btn_txt_color: '#363c79',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#363c79',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#22275f',
                btn_bg_hover_color: '#363c79',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#22275f',
                border_hover_color: '#363c79',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#ececff',
                btn_bg_hover_color: '#22275f',
                btn_txt_color: '#363c79',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#d3d6eb',
                border_hover_color: '#d3d6eb',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#363c79',
              end_color: '#22275f',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#969696',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#f5f5f5',
              icon_hover_color: '#f5f5f5',
              hover_active_bg_color: '#00c29b',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#363c79',
              end_color: '#22275f',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#3ab6da',
                icon_bg_hover_color: '#3ab6da',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#cc97fd',
                icon_bg_hover_color: '#cc97fd',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#00c29b',
                icon_bg_hover_color: '#00c29b',
              },
              translation_btn: {
                icon_color: '#e2e2e2',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#00c29b',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#363c79',
                text_col: '#FFFFFF',
                overlay: '0.5',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },
      theme_silvermist: {
        theme_name: 'Silver Light',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#e17100', '#e1e1e1', '#e1e1e1', '#400040', '#400040'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'silvermist/dashboard-theme-silvermist.css',
        theme_styles_dashboard_adv: 'silvermist/dashboard-theme-silvermist-adv.css',
        theme_styles_login: 'silvermist/dashboard-login-client-light.css',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#e17100',
                btn_bg_hover_color: '#e17100',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#e17100',
                border_hover_color: '#e17100',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#e1e1e1',
                btn_txt_color: '#e1e1e1',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#e1e1e1',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#e17100',
                btn_bg_hover_color: '#400040',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#e17100',
                border_hover_color: '#400040',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#f0f0f0',
                btn_bg_hover_color: '#e17100',
                btn_txt_color: '#400040',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#e1e1e1',
                border_hover_color: '#e17100',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#e1e1e1',
              end_color: '#e1e1e1',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#ababab',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#e1e1e1',
              icon_hover_color: '#400040',
              hover_active_bg_color: '#e17100',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#e1e1e1',
              end_color: '#e1e1e1',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#036146',
                icon_bg_hover_color: '#036146',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#0000ff',
                icon_bg_hover_color: '#0000ff',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#e17100',
                icon_bg_hover_color: '#e17100',
              },
              translation_btn: {
                icon_color: '#e2e2e2',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#e17100',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#e1e1e1',
                text_col: '#FFFFFF',
                overlay: '0.5',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },
      theme_cleanwhite: {
        theme_name: 'Clean White',
        theme_font_family: 'Poppins',
        theme_font_family_h1: 'Poppins',
        theme_font_family_h2: 'Poppins',
        theme_font_family_h3: 'Poppins',
        theme_font_family_h4: 'Poppins',
        theme_font_family_sidemenu: 'Poppins',
        theme_font_family_topmenu: 'Poppins',
        theme_colors: ['#2942FF', '#F5F6F8', '#FFFFFF', '#d6d6d6', '#9e9e9e'],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: 'cleanwhite/dashboard-theme-client-cleanwhite.css',
        theme_styles_dashboard_adv: 'cleanwhite/dashboard-theme-client-cleanwhite-adv.css',
        theme_styles_hcontrols_bl: 'cleanwhite/dashboard-theme-client-cleanwhite-bl.css',
        theme_styles_hcontrols_bl_sm: 'cleanwhite/dashboard-theme-client-cleanwhite-bl-sm.css',
        theme_styles_login: 'cleanwhite/dashboard-login-client-cw.css',
        theme_styles_basefiles: 'cleanwhite/dashboard-theme-main-cleanwhite.css',
        theme_special_script: 'cleanwhite/dashboard-themegen-cleanwhite.js',
        login_txt_color: '#e2e2e2',
        login_link_txt_color: '#e2e2e2',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#2942ff',
                btn_bg_hover_color: '#2942ff',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#2942ff',
                border_hover_color: '#2942ff',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#2942ff',
                btn_txt_color: '#2942ff',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#2942ff',
              },
              btn_radius: {
                radius_top: '5',
              },
            },

            default_btn: {
              btn_color: {
                btn_bg_color: '#FFFFFF',
                btn_bg_hover_color: '#FFFFFF',
                btn_txt_color: '#2942ff',
                btn_txt_hover_color: '#2942ff',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#FFFFFF',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#ffffff',
                btn_bg_hover_color: '#FFFFFF',
                btn_txt_color: '#111111',
                btn_txt_hover_color: '#2942ff',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#FFFFFF',
                border_hover_color: '#FFFFFF',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#ededed',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#2942ff',
              icon_hover_color: '#a7b1fb',
              hover_active_bg_color: '#e9eafb',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'image',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'rocket-launch',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'grid-2',
                  },
                  sb_conversations: {
                    label: 'Inbox',
                    icon: 'inbox-in',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'calendar-days',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'user-large',
                  },
                  sb_opportunities: {
                    label: 'Pipelines',
                    icon: 'filter-circle-dollar',
                  },
                  sb_payments: {
                    label: 'Invoices',
                    icon: 'receipt',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'bullhorn',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'webhook',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'database',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'award',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'star-shooting',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'chart-pie-simple',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'briefcase',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'mobile-screen-button',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'sparkles',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'gear-complex',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'briefcase',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'wallet',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'user-large',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'user-group-simple',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'filter-circle-dollar',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'calendar-days',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'robot',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'user-robot-xmarks',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'user-astronaut',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'object-subtract',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'comment-lines',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'phone-arrow-down-left',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'star-shooting',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'route-interstate',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'brackets-curly',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'hundred-points',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'globe',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'video',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'diamond-turn-right',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'code-branch',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'anchor-lock',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'envelope-dot',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'clipboard',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'tags',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'flask-gear',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'chart-mixed-up-circle-currency',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'palette',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'building-circle-check',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#188bf6',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#45967f',
                icon_bg_hover_color: '#45967f',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#2942ff',
                icon_bg_hover_color: '#2942ff',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#9595ff',
                icon_bg_hover_color: '#2942ff',
              },
              translation_btn: {
                icon_color: '#9e9e9e',
                icon_hover_color: '#d6d6d6',
                icon_bg_color: '#eeeeee',
                icon_bg_hover_color: '#eaeaff',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#f0fdfe',
              end_color: '#f0fdfe',
              color_stop_perc: '40',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#222222',
                size: '24',
              },
              h2: {
                color: '#0000FF',
                size: '18',
              },
            },
            body_text: {
              text_color: '#333333',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#2942FF',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#f4f4ff',
                text_col: '#000000',
                overlay: '0',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },
      theme_custom: {
        theme_name: 'No Theme',
        theme_font_family: '',
        theme_font_family: '',
        theme_font_family_h1: '',
        theme_font_family_h2: '',
        theme_font_family_h3: '',
        theme_font_family_h4: '',
        theme_font_family_sidemenu: '',
        theme_font_family_topmenu: '',
        theme_colors: ['', '', '', '', ''],
        login_contactinfo: login_contactinfo,
        loading_icon: loading_icon,
        login_coverimage: login_coverimage,
        login_logoimage: login_logoimage,
        main_nav: default_main_nav,
        theme_styles_dashboard: '',
        theme_styles_login: '',
        login_txt_color: '',
        login_link_txt_color: '',
        advanced_settings: {
          activate_advance_settings: 'false',
          activate_dashbanner_settings: 'false',
          activate_button_internal_links: 'false',
          activate_translations: 'false',
          allow_subaccount: '',
          display: {
            banner: {
              hide_yext_banner: 'false',
              hide_wordpress_banner: 'false',
            },
          },
          buttons: {
            primary_btn: {
              btn_color: {
                btn_bg_color: '#2942ff',
                btn_bg_hover_color: '#2942ff',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1px',
                border_style: 'solid',
                border_color: '#2942ff',
                border_hover_color: '#2942ff',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            secondary_btn: {
              btn_color: {
                btn_bg_color: '#2942ff',
                btn_bg_hover_color: '#2942ff',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#2942ff',
                border_hover_color: '#2942ff',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_btn: {
              btn_color: {
                btn_bg_color: '#2942ff',
                btn_bg_hover_color: '#2942ff',
                btn_txt_color: '#FFFFFF',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#2942ff',
                border_hover_color: '#2942ff',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
            default_light_btn: {
              btn_color: {
                btn_bg_color: '#ffffff',
                btn_bg_hover_color: '#2942ff',
                btn_txt_color: '#2942ff',
                btn_txt_hover_color: '#FFFFFF',
              },
              btn_border: {
                border_thickness: '1',
                border_style: 'solid',
                border_color: '#2942ff',
                border_hover_color: '#2942ff',
              },
              btn_radius: {
                radius_top: '5',
              },
            },
          },
          left_sidebar: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '30',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            scrollbar: {
              thumb_color: '#000000',
              thumb_color_opacity: '1A',
              track_color: '#000000',
              width_size: '6',
            },
            main_nav: {
              text_hover_color: '#2942ff',
              icon_hover_color: '#2942ff',
              hover_active_bg_color: '#f5f6f8',
            },
            replacenavlinks: {
              location_tabs: {
                main_tabs: {
                  sb_mediastorage: {
                    label: 'Media Storage',
                    icon: 'f03e',
                  },
                  sb_launchpad: {
                    label: 'Launchpad',
                    icon: 'e027',
                  },
                  sb_dashboard: {
                    label: 'Dashboard',
                    icon: 'f625',
                  },
                  sb_conversations: {
                    label: 'Conversations',
                    icon: 'e1e7',
                  },
                  sb_calendars: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_contacts: {
                    label: 'Contacts',
                    icon: 'f2bb',
                  },
                  sb_opportunities: {
                    label: 'Opportunities',
                    icon: 'f662',
                  },
                  sb_payments: {
                    label: 'Payments',
                    icon: 'e5d9',
                  },
                  sb_marketing: {
                    label: 'Marketing',
                    icon: 'e4e8',
                  },
                  sb_automation: {
                    label: 'Automation',
                    icon: 'e5d5',
                  },
                  sb_sites: {
                    label: 'Sites',
                    icon: 'f1ea',
                  },
                  sb_memberships: {
                    label: 'Memberships',
                    icon: 'f559',
                  },
                  sb_reputation: {
                    label: 'Reputation',
                    icon: 'f587',
                  },
                  sb_reporting: {
                    label: 'Reporting',
                    icon: 'e473',
                  },
                  sb_app_marketplace: {
                    label: 'App Marketplace',
                    icon: 'f0b1',
                  },
                  sb_mobileapp: {
                    label: 'Mobile App',
                    icon: 'f3cd',
                  },
                  sb_aiemployeepromo: {
                    label: 'Season of AI',
                    icon: 'f890',
                  },
                  sb_settings: {
                    label: 'Settings',
                    icon: 'e5e9',
                  },
                },
                settings_tabs: {
                  sb_businessinfo: {
                    label: 'Business Info',
                    icon: 'f0b1',
                  },
                  sb_companybilling: {
                    label: 'Company Billing',
                    icon: 'f09d',
                  },
                  sb_myprofile: {
                    label: 'My Profile',
                    icon: 'f007',
                  },
                  sb_mystaff: {
                    label: 'My Staff',
                    icon: 'f500',
                  },
                  sb_pipelines: {
                    label: 'Pipelines',
                    icon: 'f662',
                  },
                  sb_calendar: {
                    label: 'Calendars',
                    icon: 'f073',
                  },
                  sb_conversationaisettings: {
                    label: 'Conversation AI',
                    icon: 'f544',
                  },
                  sb_conversationaisettingsv2: {
                    label: 'Conversation AI V2',
                    icon: 'e4a7',
                  },
                  sb_ai_agent_settings: {
                    label: 'AI Agents',
                    icon: 'f4fb',
                  },
                  sb_objects: {
                    label: 'Objects',
                    icon: 'e49e',
                  },
                  sb_whatsapp: {
                    label: 'WhatsApp',
                    icon: 'f4b0',
                  },
                  sb_phonenumbers: {
                    label: 'Phone Numbers',
                    icon: 'f67d',
                  },
                  sb_reputationmanagement: {
                    label: 'Reputation Management',
                    icon: 'e036',
                  },
                  sb_customfields: {
                    label: 'Custom Fields',
                    icon: 'e531',
                  },
                  sb_customvalues: {
                    label: 'Custom Values',
                    icon: 'f7ea',
                  },
                  sb_managescoring: {
                    label: 'Manage Scoring',
                    icon: 'e41c',
                  },
                  sb_domains: {
                    label: 'Domains',
                    icon: 'f0ac',
                  },
                  sb_media: {
                    label: 'Media',
                    icon: 'f03d',
                  },
                  sb_urlredirects: {
                    label: 'URL Redirects',
                    icon: 'f5eb',
                  },
                  sb_integrations: {
                    label: 'Integrations',
                    icon: 'f126',
                  },
                  sb_pintegrations: {
                    label: 'Private Integrations',
                    icon: 'e4ad',
                  },
                  sb_emailservices: {
                    label: 'Email Services',
                    icon: 'e16f',
                  },
                  sb_conversationproviders: {
                    label: 'Conversation Providers',
                    icon: 'f328',
                  },
                  sb_tags: {
                    label: 'Tags',
                    icon: 'f02c',
                  },
                  sb_labs: {
                    label: 'Labs',
                    icon: 'e5f1',
                  },
                  sb_auditlogs: {
                    label: 'Audit Logs',
                    icon: 'e5d8',
                  },
                  sb_brandboards: {
                    label: 'Brand Boards',
                    icon: 'f53f',
                  },
                  sb_companies: {
                    label: 'Companies',
                    icon: 'e0cc',
                  },
                },
              },
              agency_tabs: {
                main_tabs: {
                  sb_agency_dashboard: {
                    label: 'Agency Dashboard',
                    icon: 'e4e2',
                  },
                },
                settings_tabs: {
                  sb_agency_profile_settings: {
                    label: 'My Profile',
                    icon: 'e4e2',
                  },
                },
              },
            },
          },
          header_controls: {
            activate_hcontrols_settings: 'false',
            activate_hcontrols_sm_settings: 'false',
            header_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '55',
              gradient_degree: '-45',
              gradient_type: 'linear',
            },
            header_buttons: {
              profile_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#bd9275',
                icon_bg_hover_color: '#bd9275',
              },
              help_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#188bf6',
                icon_bg_hover_color: '#188bf6',
              },
              notification_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#ff6600',
                icon_bg_hover_color: '#ff6600',
              },
              viewchangelogs_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#036146',
                icon_bg_hover_color: '#036146',
              },
              phone_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#30ca30',
                icon_bg_hover_color: '#30ca30',
              },
              zappychatbot_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#0F45F5',
                icon_bg_hover_color: '#0F45F5',
              },
              guidetour_btn: {
                icon_color: '#FFFFFF',
                icon_hover_color: '#FFFFFF',
                icon_bg_color: '#cc97fd',
                icon_bg_hover_color: '#cc97fd',
              },
              translation_btn: {
                icon_color: '#e2e2e2',
                icon_hover_color: '#e2e2e2',
                icon_bg_color: '#e2e2e2',
                icon_bg_hover_color: '#e2e2e2',
              },
            },
          },
          body_content: {
            background_color: {
              start_color: '#FFFFFF',
              end_color: '#FFFFFF',
              color_stop_perc: '40',
              gradient_degree: '45',
              gradient_type: 'linear',
            },
            headings: {
              h1: {
                color: '#111111',
                size: '22',
              },
              h2: {
                color: '#111111',
                size: '18',
              },
            },
            body_text: {
              text_color: '#222222',
              text_size: '14',
            },
          },
          login_settings: {
            login_form: {
              clr_pos: 'center',
            },
            loadingicon: {
              loadingicon_size: '80',
            },
            loginlogo: {
              loginlogo_size: '320',
            },
          },
          dashboard: {
            location_dashboard: {
              opportunities: {
                lead_color: '#2942FF',
                won_color: '#30ca30',
                lost_color: '#df0303',
                abandoned_color: '#ff0000',
              },
              headerbanner: {
                subhead: '',
                btn_1_text: '',
                btn_1_link: '',
                btn_2_text: '',
                btn_2_link: '',
                bg_url: '',
                bg_col: '#FFFFFF',
                text_col: '#FFFFFF',
                overlay: '0',
              },
            },
          },
          memberships: {
            dashboard: {
              header_image: "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')",
              header_image_title: "LET'S GET STARTED",
            },
          },
        },
      },
    },
    script_filename: {
      lockout_page_styles: 'lockout-styles.css',
      theme_generator_script: 'dashboard-customizer.js',
      theme_generator_style: 'dashboard-customizer.css',
      theme_generator_basefiles: {
        dashboard_theme_main: 'dashboard-theme-main.css',
        dashboard_theme_client: 'dashboard-theme-client.css',
        dashboard_login_main: 'dashboard-login-main.css',
        dashboard_login_client: 'dashboard-login-client.css',
        dashboard_theme_main_left: 'dashboard-login-main-left.css',
        dashboard_theme_main_center: 'dashboard-login-main-center.css',
        dashboard_theme_main_right: 'dashboard-login-main-right.css',
      },
      theme_leftsidebar: 'dashboard-theme-leftsidebar.css',
      theme_mainnav: 'mainnav/horizontal-menu.css',
      theme_darkmode: 'darkmode/darkmode.css',
      theme_tsg_panel: 'advancedsettings/customizer_panel.js',
      theme_tsg_svg: 'advancedsettings/customizer_svg.js',
      adv_settings_main_script: 'advancedsettings/dashboard-theme-advanced-settings.css',
      dashboard_theme_dynamic_css: 'dynamic-css/',
      menustructure_styles: 'mls.css',
      menustructure_script: 'mls.js',
      // menustructure_styles: 'mm_mls.css',
      // menustructure_script: 'mm_mls.js',
    },

    lockout: {
      data_spreadsheet: google_spreadsheet_url,
      data_locations: google_webapp_deploy,
      data_content: unlock_message,
    },
    display: {
      display_marketplace: '',
    },
    reorder: {
      activate_sidemenu_reorder: 'false',
      sidemenu_order: '',
      default_order: '',
      activate_sidemenu_reorder_settings: 'false',
      sidemenu_order_settings: '',
      default_order_settings: '',
    },
    hidesidemenu: {
      activate_sidemenu_hide: 'false',
      sidemenu_hidden: '[]',
      default_sidemenu: '',
    },
    sub_accounts: {
      enable_subaccount_settings: 'false',
    },
  };
  const hlpt_specify_agency_admin = () => {
    var page_header = document.querySelector('.hl_header');
    if (document.body.contains(page_header) && page_header.classList.contains('--agency') && (!document.body.classList.contains('IsAdminTB') || !document.body.classList.contains('IsAdmin'))) {
      document.body.classList.add('IsAdminTB');
    }
  };
  const mo_isAdmin = function () {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(function (mutations) {
      hlpt_specify_agency_admin();
    });
    observer.observe(targetNode, config);
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
      } else if (!url.includes('/location')) {
        locationId = window.current_location_id_cp;
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

  //// location class on body
  const lid = function () {
    var tlid = '';
    var purl = document.location.href;
    var pua = purl.split('/');
    var location_pos = pua.indexOf('location');
    if (location_pos) {
      var tlid_pos = location_pos + 1;
      tlid = pua[tlid_pos];
    }
    return tlid;
  };
  const slcls = () => {
    var clid = lid();
    var cls_init = 'hlpt_loc_';
    location_plan_class = cls_init + clid;
    var ebc = document.body.className.toString().split(/\s+/);
    for (var j = 0; j < ebc.length; j++) {
      var cls = ebc[j];
      if (cls && cls != location_plan_class && cls.startsWith(cls_init)) {
      }
    }
    document.body.classList.add(location_plan_class);
  };
  const mo = () => {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true };
    const observer = new MutationObserver(function (mutations) {
      slcls();
    });
    observer.observe(targetNode, config);
  };
  mo();

  ///// ls window obj general
  const get_ls_window_general = () => {
    let ls_window_general = {};
    const wts = window.themegen_settings;
    // general settings
    ls_window_general['themegen_user_email'] = wts.themegen_user_email;
    ls_window_general['themegen_user_name'] = wts.themegen_user_name;
    ls_window_general['themegen_user_role'] = wts.themegen_user_role;
    ls_window_general['themegen_user_id'] = wts.themegen_user_id;
    ls_window_general['selected_theme'] = wts.selected_theme;
    ls_window_general['selected_theme_name'] = wts.theme_name;
    ls_window_general['theme_name'] = wts.theme_name;
    ls_window_general['theme_name_primary_col'] = wts.theme_name_primary_col;
    ls_window_general['theme_name_primary_bgcol'] = wts.theme_name_primary_bgcol;
    ls_window_general['theme_name_gradient_bgcol'] = wts.theme_name_gradient_bgcol;
    ls_window_general['theme_name_leftsidebar_txtcol'] = wts.theme_name_leftsidebar_txtcol;
    ls_window_general['theme_name_leftsidebar_iconcol'] = wts.theme_name_leftsidebar_iconcol;
    ls_window_general['main_nav'] = wts.main_nav;
    ls_window_general['theme_login_contactinfo'] = wts.theme_login_contactinfo;
    ls_window_general['theme_loading_icon'] = wts.theme_loading_icon;
    ls_window_general['theme_adv_loginlogo_size'] = wts.theme_adv_loginlogo_size;
    ls_window_general['theme_login_coverimage'] = wts.theme_login_coverimage;
    ls_window_general['theme_login_logoimage'] = wts.theme_login_logoimage;
    ls_window_general['google_spreadsheet_url'] = wts.google_spreadsheet_url;
    ls_window_general['google_webapp_deploy'] = wts.google_webapp_deploy;
    ls_window_general['unlock_message'] = wts.unlock_message;
    ls_window_general['themegen_activate_sidemenu_reorder'] = wts.themegen_activate_sidemenu_reorder;
    ls_window_general['themegen_activate_sidemenu_reorder_settings'] = wts.themegen_activate_sidemenu_reorder_settings;
    ls_window_general['themegen_sidemenu_order'] = wts.themegen_sidemenu_order;
    ls_window_general['themegen_sidemenu_order_settings'] = wts.themegen_sidemenu_order_settings;
    ls_window_general['themegen_sidemenu_default_order'] = wts.themegen_sidemenu_default_order;
    ls_window_general['themegen_sidemenu_default_order_settings'] = wts.themegen_sidemenu_default_order_settings;
    ls_window_general['themegen_activate_subaccount_settings'] = wts.themegen_activate_subaccount_settings;
    ls_window_general['themegen_activate_sidemenu_hide'] = wts.themegen_activate_sidemenu_hide;
    ls_window_general['themegen_sidemenu_hidden'] = wts.themegen_sidemenu_hidden;
    ls_window_general['theme_font_family'] = wts.theme_font_family;
    ls_window_general['theme_font_family_h1'] = wts.theme_font_family_h1;
    ls_window_general['theme_font_family_h2'] = wts.theme_font_family_h2;
    ls_window_general['theme_font_family_h3'] = wts.theme_font_family_h3;
    ls_window_general['theme_font_family_h4'] = wts.theme_font_family_h4;
    ls_window_general['theme_font_family_sidemenu'] = wts.theme_font_family_sidemenu;
    ls_window_general['theme_font_family_topmenu'] = wts.theme_font_family_topmenu;

    return ls_window_general;
  };
  ///// ls window obj advanced
  const get_ls_window_advanced = () => {
    let ls_window_advanced = {};
    const wts = window.themegen_settings;
    ls_window_advanced['activate_advance_settings'] = wts.activate_advance_settings;
    ls_window_advanced['activate_dashboard_banner_settings'] = wts.activate_dashboard_banner_settings;
    ls_window_advanced['theme_adv_dashboard_headerbanner_btn_link_intrl'] = wts.theme_adv_dashboard_headerbanner_btn_link_intrl;
    ls_window_advanced['activate_translations'] = wts.activate_translations;
    ls_window_advanced['hide_yext_banner'] = wts.hide_yext_banner;
    ls_window_advanced['hide_wordpress_banner'] = wts.hide_wordpress_banner;
    ls_window_advanced['display_marketplace'] = wts.display_marketplace;
    ls_window_advanced['activate_hcontrols_settings'] = wts.activate_hcontrols_settings;
    ls_window_advanced['activate_hcontrols_sm_settings'] = wts.activate_hcontrols_sm_settings;
    /* primary adv buttons */
    ls_window_advanced['theme_adv_primary_btn_bgcol'] = wts.theme_adv_primary_btn_bgcol;
    ls_window_advanced['theme_adv_primary_btn_bg_h_col'] = wts.theme_adv_primary_btn_bg_h_col;
    ls_window_advanced['theme_adv_primary_btn_txtcol'] = wts.theme_adv_primary_btn_txtcol;
    ls_window_advanced['theme_adv_primary_btn_txt_h_col'] = wts.theme_adv_primary_btn_txt_h_col;
    ls_window_advanced['theme_adv_primary_btn_bdrcol'] = wts.theme_adv_primary_btn_bdrcol;
    ls_window_advanced['theme_adv_primary_btn_bdr_h_col'] = wts.theme_adv_primary_btn_bdr_h_col;
    ls_window_advanced['theme_adv_primary_btn_radius'] = wts.theme_adv_primary_btn_radius;
    /* secondary adv buttons */
    ls_window_advanced['theme_adv_secondary_btn_bgcol'] = wts.theme_adv_secondary_btn_bgcol;
    ls_window_advanced['theme_adv_secondary_btn_bg_h_col'] = wts.theme_adv_secondary_btn_bg_h_col;
    ls_window_advanced['theme_adv_secondary_btn_txtcol'] = wts.theme_adv_secondary_btn_txtcol;
    ls_window_advanced['theme_adv_secondary_btn_txt_h_col'] = wts.theme_adv_secondary_btn_txt_h_col;
    ls_window_advanced['theme_adv_secondary_btn_bdrcol'] = wts.theme_adv_secondary_btn_bdrcol;
    ls_window_advanced['theme_adv_secondary_btn_bdr_h_col'] = wts.theme_adv_secondary_btn_bdr_h_col;
    ls_window_advanced['theme_adv_secondary_btn_radius'] = wts.theme_adv_secondary_btn_radius;
    /* default adv button */
    ls_window_advanced['theme_adv_default_btn_bgcol'] = wts.theme_adv_default_btn_bgcol;
    ls_window_advanced['theme_adv_default_btn_bg_h_col'] = wts.theme_adv_default_btn_bg_h_col;
    ls_window_advanced['theme_adv_default_btn_txtcol'] = wts.theme_adv_default_btn_txtcol;
    ls_window_advanced['theme_adv_default_btn_txt_h_col'] = wts.theme_adv_default_btn_txt_h_col;
    ls_window_advanced['theme_adv_default_btn_bdrcol'] = wts.theme_adv_default_btn_bdrcol;
    ls_window_advanced['theme_adv_default_btn_bdr_h_col'] = wts.theme_adv_default_btn_bdr_h_col;
    ls_window_advanced['theme_adv_default_btn_radius'] = wts.theme_adv_default_btn_radius;
    /* default_light adv button */
    ls_window_advanced['theme_adv_default_light_btn_bgcol'] = wts.theme_adv_default_light_btn_bgcol;
    ls_window_advanced['theme_adv_default_light_btn_bg_h_col'] = wts.theme_adv_default_light_btn_bg_h_col;
    ls_window_advanced['theme_adv_default_light_btn_txtcol'] = wts.theme_adv_default_light_btn_txtcol;
    ls_window_advanced['theme_adv_default_light_btn_txt_h_col'] = wts.theme_adv_default_light_btn_txt_h_col;
    ls_window_advanced['theme_adv_default_light_btn_bdrcol'] = wts.theme_adv_default_light_btn_bdrcol;
    ls_window_advanced['theme_adv_default_light_btn_bdr_h_col'] = wts.theme_adv_default_light_btn_bdr_h_col;
    ls_window_advanced['theme_adv_default_light_btn_radius'] = wts.theme_adv_default_light_btn_radius;
    /* headercontrol button - profile  */
    ls_window_advanced['theme_adv_profile_btn_icon_col'] = wts.theme_adv_profile_btn_icon_col;
    ls_window_advanced['theme_adv_profile_btn_icon_hover_col'] = wts.theme_adv_profile_btn_icon_hover_col;
    ls_window_advanced['theme_adv_profile_btn_icon_bg_col'] = wts.theme_adv_profile_btn_icon_bg_col;
    ls_window_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = wts.theme_adv_profile_btn_icon_bg_hover_col;
    /* headercontrol button - help  */
    ls_window_advanced['theme_adv_help_btn_icon_col'] = wts.theme_adv_help_btn_icon_col;
    ls_window_advanced['theme_adv_help_btn_icon_hover_col'] = wts.theme_adv_help_btn_icon_hover_col;
    ls_window_advanced['theme_adv_help_btn_icon_bg_col'] = wts.theme_adv_help_btn_icon_bg_col;
    ls_window_advanced['theme_adv_help_btn_icon_bg_hover_col'] = wts.theme_adv_help_btn_icon_bg_hover_col;
    /* headercontrol button - notification  */
    ls_window_advanced['theme_adv_notification_btn_icon_col'] = wts.theme_adv_notification_btn_icon_col;
    ls_window_advanced['theme_adv_notification_btn_icon_hover_col'] = wts.theme_adv_notification_btn_icon_hover_col;
    ls_window_advanced['theme_adv_notification_btn_icon_bg_col'] = wts.theme_adv_notification_btn_icon_bg_col;
    ls_window_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = wts.theme_adv_notification_btn_icon_bg_hover_col;
    /* headercontrol button - viewchangelogs  */
    ls_window_advanced['theme_adv_viewchangelogs_btn_icon_col'] = wts.theme_adv_viewchangelogs_btn_icon_col;
    ls_window_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = wts.theme_adv_viewchangelogs_btn_icon_hover_col;
    ls_window_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = wts.theme_adv_viewchangelogs_btn_icon_bg_col;
    ls_window_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = wts.theme_adv_viewchangelogs_btn_icon_bg_hover_col;
    /* headercontrol button - phone  */
    ls_window_advanced['theme_adv_phone_btn_icon_col'] = wts.theme_adv_phone_btn_icon_col;
    ls_window_advanced['theme_adv_phone_btn_icon_hover_col'] = wts.theme_adv_phone_btn_icon_hover_col;
    ls_window_advanced['theme_adv_phone_btn_icon_bg_col'] = wts.theme_adv_phone_btn_icon_bg_col;
    ls_window_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = wts.theme_adv_phone_btn_icon_bg_hover_col;
    /* headercontrol button - zappychatbot  */
    ls_window_advanced['theme_adv_zappychatbot_btn_icon_col'] = wts.theme_adv_zappychatbot_btn_icon_col;
    ls_window_advanced['theme_adv_zappychatbot_btn_icon_hover_col'] = wts.theme_adv_zappychatbot_btn_icon_hover_col;
    ls_window_advanced['theme_adv_zappychatbot_btn_icon_bg_col'] = wts.theme_adv_zappychatbot_btn_icon_bg_col;
    ls_window_advanced['theme_adv_zappychatbot_btn_icon_bg_hover_col'] = wts.theme_adv_zappychatbot_btn_icon_bg_hover_col;
    /* headercontrol button - guidetour  */
    ls_window_advanced['theme_adv_guidetour_btn_icon_col'] = wts.theme_adv_guidetour_btn_icon_col;
    ls_window_advanced['theme_adv_guidetour_btn_icon_hover_col'] = wts.theme_adv_guidetour_btn_icon_hover_col;
    ls_window_advanced['theme_adv_guidetour_btn_icon_bg_col'] = wts.theme_adv_guidetour_btn_icon_bg_col;
    ls_window_advanced['theme_adv_guidetour_btn_icon_bg_hover_col'] = wts.theme_adv_guidetour_btn_icon_bg_hover_col;
    /* headerbgcolor - Header background color  */
    ls_window_advanced['theme_adv_headerbgcolor_start_col'] = wts.theme_adv_headerbgcolor_start_col;
    ls_window_advanced['theme_adv_headerbgcolor_end_col'] = wts.theme_adv_headerbgcolor_end_col;
    ls_window_advanced['theme_adv_headerbgcolor_stop_perc'] = wts.theme_adv_headerbgcolor_stop_perc;
    ls_window_advanced['theme_adv_headerbgcolor_gradient_deg'] = wts.theme_adv_headerbgcolor_gradient_deg;
    /* leftsidebarbgcolor - background color  */
    ls_window_advanced['theme_adv_leftsidebarbgcolor_start_col'] = wts.theme_adv_leftsidebarbgcolor_start_col;
    ls_window_advanced['theme_adv_leftsidebarbgcolor_end_col'] = wts.theme_adv_leftsidebarbgcolor_end_col;
    ls_window_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = wts.theme_adv_leftsidebarbgcolor_stop_perc;
    ls_window_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = wts.theme_adv_leftsidebarbgcolor_gradient_deg;
    /* leftsidebar - scrollbar color & width  */
    ls_window_advanced['theme_adv_scrollbarthumb_col'] = wts.theme_adv_scrollbarthumb_col;
    ls_window_advanced['theme_adv_scrollbarthumb_col_tint'] = wts.theme_adv_scrollbarthumb_col_tint;
    ls_window_advanced['theme_adv_scrollbartrack_col'] = wts.theme_adv_scrollbartrack_col;
    ls_window_advanced['theme_adv_scrollbar_width'] = wts.theme_adv_scrollbar_width;
    /* bodycontent - background color  */
    ls_window_advanced['theme_adv_bodycontent_start_col'] = wts.theme_adv_bodycontent_start_col;
    ls_window_advanced['theme_adv_bodycontent_end_col'] = wts.theme_adv_bodycontent_end_col;
    ls_window_advanced['theme_adv_bodycontent_stop_perc'] = wts.theme_adv_bodycontent_stop_perc;
    ls_window_advanced['theme_adv_bodycontent_gradient_deg'] = wts.theme_adv_bodycontent_gradient_deg;
    /* bodycontent - text color  */
    ls_window_advanced['theme_adv_bodycontent_text_col'] = wts.theme_adv_bodycontent_text_col;
    /* bodycontent - h1 h2 color & size   */
    ls_window_advanced['theme_adv_bodycontent_h1_text_col'] = wts.theme_adv_bodycontent_h1_text_col;
    ls_window_advanced['theme_adv_bodycontent_h2_text_col'] = wts.theme_adv_bodycontent_h2_text_col;
    ls_window_advanced['theme_adv_bodycontent_h1_text_size'] = wts.theme_adv_bodycontent_h1_text_size;
    ls_window_advanced['theme_adv_bodycontent_h2_text_size'] = wts.theme_adv_bodycontent_h2_text_size;
    /* mainnav - text hover = icon hover = hover-active background colors */
    ls_window_advanced['theme_adv_mainnav_text_hover_color'] = wts.theme_adv_mainnav_text_hover_color;
    ls_window_advanced['theme_adv_mainnav_icon_hover_color'] = wts.theme_adv_mainnav_icon_hover_color;
    ls_window_advanced['theme_adv_mainnav_hover_active_bg_color'] = wts.theme_adv_mainnav_hover_active_bg_color;
    /* replacenavlinks -  rename main nav lable and replace icon mediastorage  */
    ls_window_advanced['theme_adv_mainnav_replace_mediastorage_label'] = wts.theme_adv_mainnav_replace_mediastorage_label;
    ls_window_advanced['theme_adv_mainnav_replace_mediastorage_icon'] = wts.theme_adv_mainnav_replace_mediastorage_icon;
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    ls_window_advanced['theme_adv_mainnav_replace_launchpad_label'] = wts.theme_adv_mainnav_replace_launchpad_label;
    ls_window_advanced['theme_adv_mainnav_replace_launchpad_icon'] = wts.theme_adv_mainnav_replace_launchpad_icon;
    /* replacenavlinks -  rename main nav lable and replace icon dashboard  */
    ls_window_advanced['theme_adv_mainnav_replace_dashboard_label'] = wts.theme_adv_mainnav_replace_dashboard_label;
    ls_window_advanced['theme_adv_mainnav_replace_dashboard_icon'] = wts.theme_adv_mainnav_replace_dashboard_icon;
    /* replacenavlinks -  rename main nav lable and replace icon conversations  */
    ls_window_advanced['theme_adv_mainnav_replace_conversations_label'] = wts.theme_adv_mainnav_replace_conversations_label;
    ls_window_advanced['theme_adv_mainnav_replace_conversations_icon'] = wts.theme_adv_mainnav_replace_conversations_icon;
    /* replacenavlinks -  rename main nav lable and replace icon calendars  */
    ls_window_advanced['theme_adv_mainnav_replace_calendars_label'] = wts.theme_adv_mainnav_replace_calendars_label;
    ls_window_advanced['theme_adv_mainnav_replace_calendars_icon'] = wts.theme_adv_mainnav_replace_calendars_icon;
    /* replacenavlinks -  rename main nav lable and replace icon contacts  */
    ls_window_advanced['theme_adv_mainnav_replace_contacts_label'] = wts.theme_adv_mainnav_replace_contacts_label;
    ls_window_advanced['theme_adv_mainnav_replace_contacts_icon'] = wts.theme_adv_mainnav_replace_contacts_icon;
    /* replacenavlinks -  rename main nav lable and replace icon opportunities  */
    ls_window_advanced['theme_adv_mainnav_replace_opportunities_label'] = wts.theme_adv_mainnav_replace_opportunities_label;
    ls_window_advanced['theme_adv_mainnav_replace_opportunities_icon'] = wts.theme_adv_mainnav_replace_opportunities_icon;
    /* replacenavlinks -  rename main nav lable and replace icon payments  */
    ls_window_advanced['theme_adv_mainnav_replace_payments_label'] = wts.theme_adv_mainnav_replace_payments_label;
    ls_window_advanced['theme_adv_mainnav_replace_payments_icon'] = wts.theme_adv_mainnav_replace_payments_icon;
    /* replacenavlinks -  rename main nav lable and replace icon marketing  */
    ls_window_advanced['theme_adv_mainnav_replace_marketing_label'] = wts.theme_adv_mainnav_replace_marketing_label;
    ls_window_advanced['theme_adv_mainnav_replace_marketing_icon'] = wts.theme_adv_mainnav_replace_marketing_icon;
    /* replacenavlinks -  rename main nav lable and replace icon automation  */
    ls_window_advanced['theme_adv_mainnav_replace_automation_label'] = wts.theme_adv_mainnav_replace_automation_label;
    ls_window_advanced['theme_adv_mainnav_replace_automation_icon'] = wts.theme_adv_mainnav_replace_automation_icon;
    /* replacenavlinks -  rename main nav lable and replace icon sites  */
    ls_window_advanced['theme_adv_mainnav_replace_sites_label'] = wts.theme_adv_mainnav_replace_sites_label;
    ls_window_advanced['theme_adv_mainnav_replace_sites_icon'] = wts.theme_adv_mainnav_replace_sites_icon;
    /* replacenavlinks -  rename main nav lable and replace icon memberships  */
    ls_window_advanced['theme_adv_mainnav_replace_memberships_label'] = wts.theme_adv_mainnav_replace_memberships_label;
    ls_window_advanced['theme_adv_mainnav_replace_memberships_icon'] = wts.theme_adv_mainnav_replace_memberships_icon;
    /* replacenavlinks -  rename main nav lable and replace icon reputation  */
    ls_window_advanced['theme_adv_mainnav_replace_reputation_label'] = wts.theme_adv_mainnav_replace_reputation_label;
    ls_window_advanced['theme_adv_mainnav_replace_reputation_icon'] = wts.theme_adv_mainnav_replace_reputation_icon;
    /* replacenavlinks -  rename main nav lable and replace icon reporting  */
    ls_window_advanced['theme_adv_mainnav_replace_reporting_label'] = wts.theme_adv_mainnav_replace_reporting_label;
    ls_window_advanced['theme_adv_mainnav_replace_reporting_icon'] = wts.theme_adv_mainnav_replace_reporting_icon;
    /* replacenavlinks -  rename main nav lable and replace icon app_marketplace  */
    ls_window_advanced['theme_adv_mainnav_replace_app_marketplace_label'] = wts.theme_adv_mainnav_replace_app_marketplace_label;
    ls_window_advanced['theme_adv_mainnav_replace_app_marketplace_icon'] = wts.theme_adv_mainnav_replace_app_marketplace_icon;

    /* replacenavlinks -  rename main nav lable and replace icon mobileapp  */
    ls_window_advanced['theme_adv_mainnav_replace_mobileapp_label'] = wts.theme_adv_mainnav_replace_mobileapp_label;
    ls_window_advanced['theme_adv_mainnav_replace_mobileapp_icon'] = wts.theme_adv_mainnav_replace_mobileapp_icon;
    /* replacenavlinks -  rename main nav lable and replace icon aiemployeepromo  */
    ls_window_advanced['theme_adv_mainnav_replace_aiemployeepromo_label'] = wts.theme_adv_mainnav_replace_aiemployeepromo_label;
    ls_window_advanced['theme_adv_mainnav_replace_aiemployeepromo_icon'] = wts.theme_adv_mainnav_replace_aiemployeepromo_icon;
    /* replacenavlinks -  rename settings lable and replace icon businessinfo  */
    ls_window_advanced['theme_adv_mainnav_replace_businessinfo_label'] = wts.theme_adv_mainnav_replace_businessinfo_label;
    ls_window_advanced['theme_adv_mainnav_replace_businessinfo_icon'] = wts.theme_adv_mainnav_replace_businessinfo_icon;
    /* replacenavlinks -  rename settings lable and replace icon companybilling  */
    ls_window_advanced['theme_adv_mainnav_replace_companybilling_label'] = wts.theme_adv_mainnav_replace_companybilling_label;
    ls_window_advanced['theme_adv_mainnav_replace_companybilling_icon'] = wts.theme_adv_mainnav_replace_companybilling_icon;
    /* replacenavlinks -  rename settings lable and replace icon myprofile  */
    ls_window_advanced['theme_adv_mainnav_replace_myprofile_label'] = wts.theme_adv_mainnav_replace_myprofile_label;
    ls_window_advanced['theme_adv_mainnav_replace_myprofile_icon'] = wts.theme_adv_mainnav_replace_myprofile_icon;
    /* replacenavlinks -  rename settings lable and replace icon mystaff  */
    ls_window_advanced['theme_adv_mainnav_replace_mystaff_label'] = wts.theme_adv_mainnav_replace_mystaff_label;
    ls_window_advanced['theme_adv_mainnav_replace_mystaff_icon'] = wts.theme_adv_mainnav_replace_mystaff_icon;
    /* replacenavlinks -  rename settings lable and replace icon pipelines  */
    ls_window_advanced['theme_adv_mainnav_replace_pipelines_label'] = wts.theme_adv_mainnav_replace_pipelines_label;
    ls_window_advanced['theme_adv_mainnav_replace_pipelines_icon'] = wts.theme_adv_mainnav_replace_pipelines_icon;
    /* replacenavlinks -  rename settings lable and replace icon calendar  */
    ls_window_advanced['theme_adv_mainnav_replace_calendar_label'] = wts.theme_adv_mainnav_replace_calendar_label;
    ls_window_advanced['theme_adv_mainnav_replace_calendar_icon'] = wts.theme_adv_mainnav_replace_calendar_icon;
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettings  */
    ls_window_advanced['theme_adv_mainnav_replace_conversationaisettings_label'] = wts.theme_adv_mainnav_replace_conversationaisettings_label;
    ls_window_advanced['theme_adv_mainnav_replace_conversationaisettings_icon'] = wts.theme_adv_mainnav_replace_conversationaisettings_icon;
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettingsv2  */
    ls_window_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_label'] = wts.theme_adv_mainnav_replace_conversationaisettingsv2_label;
    ls_window_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_icon'] = wts.theme_adv_mainnav_replace_conversationaisettingsv2_icon;
    /* replacenavlinks -  rename settings nav lable and replace icon aiagents  */
    ls_window_advanced['theme_adv_mainnav_replace_aiagents_label'] = wts.theme_adv_mainnav_replace_aiagents_label;
    ls_window_advanced['theme_adv_mainnav_replace_aiagents_icon'] = wts.theme_adv_mainnav_replace_aiagents_icon;
    /* replacenavlinks -  rename settings nav lable and replace icon objects  */
    ls_window_advanced['theme_adv_mainnav_replace_objects_label'] = wts.theme_adv_mainnav_replace_objects_label;
    ls_window_advanced['theme_adv_mainnav_replace_objects_icon'] = wts.theme_adv_mainnav_replace_objects_icon;
    /* replacenavlinks -  rename settings lable and replace icon phonenumbers  */
    ls_window_advanced['theme_adv_mainnav_replace_phonenumbers_label'] = wts.theme_adv_mainnav_replace_phonenumbers_label;
    ls_window_advanced['theme_adv_mainnav_replace_phonenumbers_icon'] = wts.theme_adv_mainnav_replace_phonenumbers_icon;
    /* replacenavlinks -  rename settings nav lable and replace icon whatsapp  */
    ls_window_advanced['theme_adv_mainnav_replace_whatsapp_label'] = wts.theme_adv_mainnav_replace_whatsapp_label;
    ls_window_advanced['theme_adv_mainnav_replace_whatsapp_icon'] = wts.theme_adv_mainnav_replace_whatsapp_icon;
    /* replacenavlinks -  rename settings lable and replace icon reputationmanagement  */
    ls_window_advanced['theme_adv_mainnav_replace_reputationmanagement_label'] = wts.theme_adv_mainnav_replace_reputationmanagement_label;
    ls_window_advanced['theme_adv_mainnav_replace_reputationmanagement_icon'] = wts.theme_adv_mainnav_replace_reputationmanagement_icon;
    /* replacenavlinks -  rename settings lable and replace icon customfields  */
    ls_window_advanced['theme_adv_mainnav_replace_customfields_label'] = wts.theme_adv_mainnav_replace_customfields_label;
    ls_window_advanced['theme_adv_mainnav_replace_customfields_icon'] = wts.theme_adv_mainnav_replace_customfields_icon;
    /* replacenavlinks -  rename settings lable and replace icon customvalues  */
    ls_window_advanced['theme_adv_mainnav_replace_customvalues_label'] = wts.theme_adv_mainnav_replace_customvalues_label;
    ls_window_advanced['theme_adv_mainnav_replace_customvalues_icon'] = wts.theme_adv_mainnav_replace_customvalues_icon;
    /* replacenavlinks -  rename settings lable and replace icon managescoring  */
    ls_window_advanced['theme_adv_mainnav_replace_managescoring_label'] = wts.theme_adv_mainnav_replace_managescoring_label;
    ls_window_advanced['theme_adv_mainnav_replace_managescoring_icon'] = wts.theme_adv_mainnav_replace_managescoring_icon;
    /* replacenavlinks -  rename settings lable and replace icon managescoring  */
    ls_window_advanced['theme_adv_mainnav_replace_managescoring_label'] = wts.theme_adv_mainnav_replace_managescoring_label;
    ls_window_advanced['theme_adv_mainnav_replace_managescoring_icon'] = wts.theme_adv_mainnav_replace_managescoring_icon;
    /* replacenavlinks -  rename settings lable and replace icon domains  */
    ls_window_advanced['theme_adv_mainnav_replace_domains_label'] = wts.theme_adv_mainnav_replace_domains_label;
    ls_window_advanced['theme_adv_mainnav_replace_domains_icon'] = wts.theme_adv_mainnav_replace_domains_icon;
    /* replacenavlinks -  rename settings lable and replace icon media  */
    ls_window_advanced['theme_adv_mainnav_replace_media_label'] = wts.theme_adv_mainnav_replace_media_label;
    ls_window_advanced['theme_adv_mainnav_replace_media_icon'] = wts.theme_adv_mainnav_replace_media_icon;
    /* replacenavlinks -  rename settings lable and replace icon urlredirects  */
    ls_window_advanced['theme_adv_mainnav_replace_urlredirects_label'] = wts.theme_adv_mainnav_replace_urlredirects_label;
    ls_window_advanced['theme_adv_mainnav_replace_urlredirects_icon'] = wts.theme_adv_mainnav_replace_urlredirects_icon;
    /* replacenavlinks -  rename settings lable and replace icon integrations  */
    ls_window_advanced['theme_adv_mainnav_replace_integrations_label'] = wts.theme_adv_mainnav_replace_integrations_label;
    ls_window_advanced['theme_adv_mainnav_replace_integrations_icon'] = wts.theme_adv_mainnav_replace_integrations_icon;
    /* replacenavlinks -  rename settings lable and replace icon pintegrations  */
    ls_window_advanced['theme_adv_mainnav_replace_pintegrations_label'] = wts.theme_adv_mainnav_replace_pintegrations_label;
    ls_window_advanced['theme_adv_mainnav_replace_pintegrations_icon'] = wts.theme_adv_mainnav_replace_pintegrations_icon;
    /* replacenavlinks -  rename settings lable and replace icon brandboards  */
    ls_window_advanced['theme_adv_mainnav_replace_brandboards_label'] = wts.theme_adv_mainnav_replace_brandboards_label;
    ls_window_advanced['theme_adv_mainnav_replace_brandboards_icon'] = wts.theme_adv_mainnav_replace_brandboards_icon;
    /* replacenavlinks -  rename settings lable and replace icon emailservices  */
    ls_window_advanced['theme_adv_mainnav_replace_emailservices_label'] = wts.theme_adv_mainnav_replace_emailservices_label;
    ls_window_advanced['theme_adv_mainnav_replace_emailservices_icon'] = wts.theme_adv_mainnav_replace_emailservices_icon;
    /* replacenavlinks -  rename settings lable and replace icon conversationproviders  */
    ls_window_advanced['theme_adv_mainnav_replace_conversationproviders_label'] = wts.theme_adv_mainnav_replace_conversationproviders_label;
    ls_window_advanced['theme_adv_mainnav_replace_conversationproviders_icon'] = wts.theme_adv_mainnav_replace_conversationproviders_icon;
    /* replacenavlinks -  rename settings lable and replace icon tags  */
    ls_window_advanced['theme_adv_mainnav_replace_tags_label'] = wts.theme_adv_mainnav_replace_tags_label;
    ls_window_advanced['theme_adv_mainnav_replace_tags_icon'] = wts.theme_adv_mainnav_replace_tags_icon;
    /* replacenavlinks -  rename settings lable and replace icon labs  */
    ls_window_advanced['theme_adv_mainnav_replace_labs_label'] = wts.theme_adv_mainnav_replace_labs_label;
    ls_window_advanced['theme_adv_mainnav_replace_labs_icon'] = wts.theme_adv_mainnav_replace_labs_icon;
    /* replacenavlinks -  rename settings lable and replace icon auditlogs  */
    ls_window_advanced['theme_adv_mainnav_replace_auditlogs_label'] = wts.theme_adv_mainnav_replace_auditlogs_label;
    ls_window_advanced['theme_adv_mainnav_replace_auditlogs_icon'] = wts.theme_adv_mainnav_replace_auditlogs_icon;
    /* replacenavlinks -  rename settings lable and replace icon companies  */
    ls_window_advanced['theme_adv_mainnav_replace_companies_label'] = wts.theme_adv_mainnav_replace_companies_label;
    ls_window_advanced['theme_adv_mainnav_replace_companies_icon'] = wts.theme_adv_mainnav_replace_companies_icon;
    ls_window_advanced['theme_adv_loadingicon_size'] = wts.theme_adv_loadingicon_size;
    ls_window_advanced['theme_adv_loginlogo_size'] = wts.theme_adv_loginlogo_size;
    ls_window_advanced['allow_subaccount'] = wts.allow_subaccount;
    /* Login position for login and logout  */
    ls_window_advanced['theme_login_pos'] = wts.theme_login_pos;
    /* new dashboard  */
    ls_window_advanced['theme_adv_opportunities_lead_col'] = wts.theme_adv_opportunities_lead_col;
    ls_window_advanced['theme_adv_opportunities_won_col'] = wts.theme_adv_opportunities_won_col;
    ls_window_advanced['theme_adv_opportunities_lost_col'] = wts.theme_adv_opportunities_lost_col;
    ls_window_advanced['theme_adv_opportunities_abandoned_col'] = wts.theme_adv_opportunities_abandoned_col;
    /* dashboard header banner -  sub heading */
    ls_window_advanced['theme_adv_dashboard_headerbanner_subhead'] = wts.theme_adv_dashboard_headerbanner_subhead;
    /* dashboard header banner -  button 1 text */
    ls_window_advanced['theme_adv_dashboard_headerbanner_btn_1_text'] = wts.theme_adv_dashboard_headerbanner_btn_1_text;
    /* dashboard header banner -  button 2 text */
    ls_window_advanced['theme_adv_dashboard_headerbanner_btn_2_text'] = wts.theme_adv_dashboard_headerbanner_btn_2_text;
    /* dashboard header banner -  button 1 link */
    ls_window_advanced['theme_adv_dashboard_headerbanner_btn_1_link'] = wts.theme_adv_dashboard_headerbanner_btn_1_link;
    /* dashboard header banner -  button 2 link */
    ls_window_advanced['theme_adv_dashboard_headerbanner_btn_2_link'] = wts.theme_adv_dashboard_headerbanner_btn_2_link;
    ls_window_advanced['theme_adv_dashboard_headerbanner_bg_url'] = wts.theme_adv_dashboard_headerbanner_bg_url;
    ls_window_advanced['theme_adv_dashboard_headerbanner_bg_col'] = wts.theme_adv_dashboard_headerbanner_bg_col;
    ls_window_advanced['theme_adv_dashboard_headerbanner_text_col'] = wts.theme_adv_dashboard_headerbanner_text_col;
    ls_window_advanced['theme_adv_dashboard_headerbanner_overlay_opacity'] = wts.theme_adv_dashboard_headerbanner_overlay_opacity;
    ls_window_advanced['theme_membership_header_img'] = wts.theme_membership_header_img;
    ls_window_advanced['theme_membership_header_img_label'] = wts.theme_membership_header_img_label;
    return ls_window_advanced;
  };
  ///// ls obj general
  const get_ls_obj_general = () => {
    let ls_obj_general = {};
    let selectedtheme = 'theme_dark';
    if (window.selected_theme) selectedtheme = window.selected_theme;
    ls_obj_general['themegen_user_email'] = dashboard_themes.themegen_user_email;
    ls_obj_general['themegen_user_name'] = dashboard_themes.themegen_user_name;
    ls_obj_general['themegen_user_role'] = dashboard_themes.themegen_user_role;
    ls_obj_general['themegen_user_id'] = dashboard_themes.themegen_user_id;
    ls_obj_general['selected_theme'] = window.selected_theme;
    ls_obj_general['selected_theme_name'] = dashboard_themes.theme_data[selectedtheme].theme_name;
    ls_obj_general['theme_name'] = dashboard_themes.theme_data[selectedtheme].theme_name;
    ls_obj_general['theme_name_primary_col'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][0];
    ls_obj_general['theme_name_primary_bgcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][1];
    ls_obj_general['theme_name_gradient_bgcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][2];
    ls_obj_general['theme_name_leftsidebar_iconcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][3];
    ls_obj_general['theme_name_leftsidebar_txtcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][4];
    ls_obj_general['theme_login_contactinfo'] = dashboard_themes.theme_data[selectedtheme].login_contactinfo;
    ls_obj_general['theme_loading_icon'] = dashboard_themes.theme_data[selectedtheme].loading_icon;
    ls_obj_general['theme_adv_loginlogo_size'] = dashboard_themes.theme_data[selectedtheme].advanced_settings.login_settings.loginlogo.loginlogo_size;
    ls_obj_general['theme_login_coverimage'] = dashboard_themes.theme_data[selectedtheme].login_coverimage;
    ls_obj_general['theme_login_logoimage'] = dashboard_themes.theme_data[selectedtheme].login_logoimage;
    ls_obj_general['google_spreadsheet_url'] = dashboard_themes.lockout.data_spreadsheet;
    ls_obj_general['google_webapp_deploy'] = dashboard_themes.lockout.data_locations;
    ls_obj_general['unlock_message'] = dashboard_themes.lockout.data_content;
    ls_obj_general['display_marketplace'] = dashboard_themes.display.display_marketplace;
    ls_obj_general['main_nav'] = dashboard_themes.theme_data[selectedtheme].main_nav;
    ls_obj_general['themegen_activate_sidemenu_reorder'] = dashboard_themes.reorder.activate_sidemenu_reorder;
    ls_obj_general['themegen_activate_sidemenu_reorder_settings'] = dashboard_themes.reorder.activate_sidemenu_reorder_settings;
    ls_obj_general['themegen_sidemenu_order'] = dashboard_themes.reorder.sidemenu_order;
    ls_obj_general['themegen_sidemenu_order_settings'] = dashboard_themes.reorder.sidemenu_order_settings;
    ls_obj_general['themegen_sidemenu_default_order'] = dashboard_themes.reorder.default_order;
    ls_obj_general['themegen_sidemenu_default_order_settings'] = dashboard_themes.reorder.default_order_settings;
    ls_obj_general['themegen_activate_subaccount_settings'] = dashboard_themes.sub_accounts.enable_subaccount_settings;
    ls_obj_general['themegen_activate_sidemenu_hide'] = dashboard_themes.hidesidemenu.activate_sidemenu_hide;
    ls_obj_general['themegen_sidemenu_hidden'] = dashboard_themes.hidesidemenu.sidemenu_hidden;
    ls_obj_general['theme_font_family'] = dashboard_themes.theme_data[selectedtheme].theme_font_family;
    ls_obj_general['theme_font_family_h1'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h1;
    ls_obj_general['theme_font_family_h2'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h2;
    ls_obj_general['theme_font_family_h3'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h3;
    ls_obj_general['theme_font_family_h4'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h4;
    ls_obj_general['theme_font_family_sidemenu'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_sidemenu;
    ls_obj_general['theme_font_family_topmenu'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_topmenu;
    return ls_obj_general;
  };
  ///// ls obj advanced
  const get_ls_obj_advanced = () => {
    let ls_obj_advanced = {};
    let selectedtheme = 'theme_dark';
    if (window.selected_theme) selectedtheme = window.selected_theme;
    //// advanced settings
    let selected_theme_advs_obj = dashboard_themes.theme_data[selectedtheme].advanced_settings;
    ls_obj_advanced['hide_yext_banner'] = selected_theme_advs_obj.display.banner.hide_yext_banner;
    ls_obj_advanced['hide_wordpress_banner'] = selected_theme_advs_obj.display.banner.hide_wordpress_banner;
    ls_obj_advanced['display_marketplace'] = dashboard_themes.display.display_marketplace;
    /* primary adv button */
    ls_obj_advanced['theme_adv_primary_btn_bgcol'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_bg_color;
    ls_obj_advanced['theme_adv_primary_btn_bg_h_col'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_bg_hover_color;
    ls_obj_advanced['theme_adv_primary_btn_txtcol'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_txt_color;
    ls_obj_advanced['theme_adv_primary_btn_txt_h_col'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_txt_hover_color;
    ls_obj_advanced['theme_adv_primary_btn_bdrcol'] = selected_theme_advs_obj.buttons.primary_btn.btn_border.border_color;
    ls_obj_advanced['theme_adv_primary_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.primary_btn.btn_border.border_hover_color;
    ls_obj_advanced['theme_adv_primary_btn_radius'] = selected_theme_advs_obj.buttons.primary_btn.btn_radius.radius_top;
    /* secondary adv button */
    ls_obj_advanced['theme_adv_secondary_btn_bgcol'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_bg_color;
    ls_obj_advanced['theme_adv_secondary_btn_bg_h_col'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_bg_hover_color;
    ls_obj_advanced['theme_adv_secondary_btn_txtcol'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_txt_color;
    ls_obj_advanced['theme_adv_secondary_btn_txt_h_col'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_txt_hover_color;
    ls_obj_advanced['theme_adv_secondary_btn_bdrcol'] = selected_theme_advs_obj.buttons.secondary_btn.btn_border.border_color;
    ls_obj_advanced['theme_adv_secondary_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.secondary_btn.btn_border.border_hover_color;
    ls_obj_advanced['theme_adv_secondary_btn_radius'] = selected_theme_advs_obj.buttons.secondary_btn.btn_radius.radius_top;
    /* default adv button */
    ls_obj_advanced['theme_adv_default_btn_bgcol'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_bg_color;
    ls_obj_advanced['theme_adv_default_btn_bg_h_col'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_bg_hover_color;
    ls_obj_advanced['theme_adv_default_btn_txtcol'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_txt_color;
    ls_obj_advanced['theme_adv_default_btn_txt_h_col'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_txt_hover_color;
    ls_obj_advanced['theme_adv_default_btn_bdrcol'] = selected_theme_advs_obj.buttons.default_btn.btn_border.border_color;
    ls_obj_advanced['theme_adv_default_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.default_btn.btn_border.border_hover_color;
    ls_obj_advanced['theme_adv_default_btn_radius'] = selected_theme_advs_obj.buttons.default_btn.btn_radius.radius_top;
    /* default_light adv button */
    ls_obj_advanced['theme_adv_default_light_btn_bgcol'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_bg_color;
    ls_obj_advanced['theme_adv_default_light_btn_bg_h_col'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_bg_hover_color;
    ls_obj_advanced['theme_adv_default_light_btn_txtcol'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_txt_color;
    ls_obj_advanced['theme_adv_default_light_btn_txt_h_col'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_txt_hover_color;
    ls_obj_advanced['theme_adv_default_light_btn_bdrcol'] = selected_theme_advs_obj.buttons.default_light_btn.btn_border.border_color;
    ls_obj_advanced['theme_adv_default_light_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.default_light_btn.btn_border.border_hover_color;
    ls_obj_advanced['theme_adv_default_light_btn_radius'] = selected_theme_advs_obj.buttons.default_light_btn.btn_radius.radius_top;
    /* profile button - headercontrol    */
    ls_obj_advanced['theme_adv_profile_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_color;
    ls_obj_advanced['theme_adv_profile_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_profile_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_bg_hover_color;
    /* help button - headercontrol    */
    ls_obj_advanced['theme_adv_help_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_color;
    ls_obj_advanced['theme_adv_help_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_help_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_help_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_bg_hover_color;
    /* notification button - headercontrol    */
    ls_obj_advanced['theme_adv_notification_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_color;
    ls_obj_advanced['theme_adv_notification_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_notification_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_bg_hover_color;
    /* viewchangelogs button - headercontrol    */
    ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_color;
    ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_bg_hover_color;
    /* phone button - headercontrol    */
    ls_obj_advanced['theme_adv_phone_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_color;
    ls_obj_advanced['theme_adv_phone_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_phone_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_bg_hover_color;
    /* zappychatbot button - headercontrol    */
    ls_obj_advanced['theme_adv_zappychatbot_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.zappychatbot_btn.icon_color;
    ls_obj_advanced['theme_adv_zappychatbot_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.zappychatbot_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_zappychatbot_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.zappychatbot_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_zappychatbot_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.zappychatbot_btn.icon_bg_hover_color;
    /* guidetour button - headercontrol    */
    ls_obj_advanced['theme_adv_guidetour_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.guidetour_btn.icon_color;
    ls_obj_advanced['theme_adv_guidetour_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.guidetour_btn.icon_hover_color;
    ls_obj_advanced['theme_adv_guidetour_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.guidetour_btn.icon_bg_color;
    ls_obj_advanced['theme_adv_guidetour_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.guidetour_btn.icon_bg_hover_color;
    /* headerbgcolor - Header background color  */
    ls_obj_advanced['theme_adv_headerbgcolor_start_col'] = selected_theme_advs_obj.header_controls.header_color.start_color;
    ls_obj_advanced['theme_adv_headerbgcolor_end_col'] = selected_theme_advs_obj.header_controls.header_color.end_color;
    ls_obj_advanced['theme_adv_headerbgcolor_stop_perc'] = selected_theme_advs_obj.header_controls.header_color.color_stop_perc;
    ls_obj_advanced['theme_adv_headerbgcolor_gradient_deg'] = selected_theme_advs_obj.header_controls.header_color.gradient_degree;
    /* leftsidebarbgcolor - Left Sidebar background color  */
    ls_obj_advanced['theme_adv_leftsidebarbgcolor_start_col'] = selected_theme_advs_obj.left_sidebar.background_color.start_color;
    ls_obj_advanced['theme_adv_leftsidebarbgcolor_end_col'] = selected_theme_advs_obj.left_sidebar.background_color.end_color;
    ls_obj_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = selected_theme_advs_obj.left_sidebar.background_color.color_stop_perc;
    ls_obj_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = selected_theme_advs_obj.left_sidebar.background_color.gradient_degree;
    /* leftsidebar - scrollbar color & width  */
    ls_obj_advanced['theme_adv_scrollbarthumb_col'] = selected_theme_advs_obj.left_sidebar.scrollbar.thumb_color;
    ls_obj_advanced['theme_adv_scrollbarthumb_col_tint'] = selected_theme_advs_obj.left_sidebar.scrollbar.thumb_color_opacity;
    ls_obj_advanced['theme_adv_scrollbartrack_col'] = selected_theme_advs_obj.left_sidebar.scrollbar.track_color;
    ls_obj_advanced['theme_adv_scrollbar_width'] = selected_theme_advs_obj.left_sidebar.scrollbar.width_size;
    /* bodycontent - background color  */
    ls_obj_advanced['theme_adv_bodycontent_start_col'] = selected_theme_advs_obj.body_content.background_color.start_color;
    ls_obj_advanced['theme_adv_bodycontent_end_col'] = selected_theme_advs_obj.body_content.background_color.end_color;
    ls_obj_advanced['theme_adv_bodycontent_stop_perc'] = selected_theme_advs_obj.body_content.background_color.color_stop_perc;
    ls_obj_advanced['theme_adv_bodycontent_gradient_deg'] = selected_theme_advs_obj.body_content.background_color.gradient_degree;
    /* bodycontent - text color  */
    ls_obj_advanced['theme_adv_bodycontent_text_col'] = selected_theme_advs_obj.body_content.body_text.text_color;
    /* bodycontent - h1 h2 color & size   */
    ls_obj_advanced['theme_adv_bodycontent_h1_text_col'] = selected_theme_advs_obj.body_content.headings.h1.color;
    ls_obj_advanced['theme_adv_bodycontent_h2_text_col'] = selected_theme_advs_obj.body_content.headings.h2.color;
    ls_obj_advanced['theme_adv_bodycontent_h1_text_size'] = selected_theme_advs_obj.body_content.headings.h1.size;
    ls_obj_advanced['theme_adv_bodycontent_h2_text_size'] = selected_theme_advs_obj.body_content.headings.h2.size;
    /* mainnav - text hover, icon hover, hover-active background colors   */
    ls_obj_advanced['theme_adv_mainnav_text_hover_color'] = selected_theme_advs_obj.left_sidebar.main_nav.text_hover_color;
    ls_obj_advanced['theme_adv_mainnav_icon_hover_color'] = selected_theme_advs_obj.left_sidebar.main_nav.icon_hover_color;
    ls_obj_advanced['theme_adv_mainnav_hover_active_bg_color'] = selected_theme_advs_obj.left_sidebar.main_nav.hover_active_bg_color;
    /* replacenavlinks -  rename main nav lable and replace icon mediastorage  */
    ls_obj_advanced['theme_adv_mainnav_replace_mediastorage_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_mediastorage.label;
    ls_obj_advanced['theme_adv_mainnav_replace_mediastorage_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_mediastorage.icon;
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    ls_obj_advanced['theme_adv_mainnav_replace_launchpad_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_launchpad.label;
    ls_obj_advanced['theme_adv_mainnav_replace_launchpad_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_launchpad.icon;
    /* replacenavlinks -  rename main nav lable and replace icon dashboard  */
    ls_obj_advanced['theme_adv_mainnav_replace_dashboard_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_dashboard.label;
    ls_obj_advanced['theme_adv_mainnav_replace_dashboard_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_dashboard.icon;
    /* replacenavlinks -  rename main nav lable and replace icon conversations  */
    ls_obj_advanced['theme_adv_mainnav_replace_conversations_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_conversations.label;
    ls_obj_advanced['theme_adv_mainnav_replace_conversations_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_conversations.icon;
    /* replacenavlinks -  rename main nav lable and replace icon calendars  */
    ls_obj_advanced['theme_adv_mainnav_replace_calendars_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_calendars.label;
    ls_obj_advanced['theme_adv_mainnav_replace_calendars_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_calendars.icon;
    /* replacenavlinks -  rename main nav lable and replace icon contacts  */
    ls_obj_advanced['theme_adv_mainnav_replace_contacts_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_contacts.label;
    ls_obj_advanced['theme_adv_mainnav_replace_contacts_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_contacts.icon;
    /* replacenavlinks -  rename main nav lable and replace icon opportunities  */
    ls_obj_advanced['theme_adv_mainnav_replace_opportunities_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_opportunities.label;
    ls_obj_advanced['theme_adv_mainnav_replace_opportunities_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_opportunities.icon;
    /* replacenavlinks -  rename main nav lable and replace icon payments  */
    ls_obj_advanced['theme_adv_mainnav_replace_payments_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_payments.label;
    ls_obj_advanced['theme_adv_mainnav_replace_payments_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_payments.icon;
    /* replacenavlinks -  rename main nav lable and replace icon marketing  */
    ls_obj_advanced['theme_adv_mainnav_replace_marketing_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_marketing.label;
    ls_obj_advanced['theme_adv_mainnav_replace_marketing_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_marketing.icon;
    /* replacenavlinks -  rename main nav lable and replace icon automation  */
    ls_obj_advanced['theme_adv_mainnav_replace_automation_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_automation.label;
    ls_obj_advanced['theme_adv_mainnav_replace_automation_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_automation.icon;
    /* replacenavlinks -  rename main nav lable and replace icon sites  */
    ls_obj_advanced['theme_adv_mainnav_replace_sites_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_sites.label;
    ls_obj_advanced['theme_adv_mainnav_replace_sites_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_sites.icon;
    /* replacenavlinks -  rename main nav lable and replace icon memberships  */
    ls_obj_advanced['theme_adv_mainnav_replace_memberships_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_memberships.label;
    ls_obj_advanced['theme_adv_mainnav_replace_memberships_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_memberships.icon;
    /* replacenavlinks -  rename main nav lable and replace icon reputation  */
    ls_obj_advanced['theme_adv_mainnav_replace_reputation_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_reputation.label;
    ls_obj_advanced['theme_adv_mainnav_replace_reputation_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_reputation.icon;
    /* replacenavlinks -  rename main nav lable and replace icon reporting  */
    ls_obj_advanced['theme_adv_mainnav_replace_reporting_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_reporting.label;
    ls_obj_advanced['theme_adv_mainnav_replace_reporting_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_reporting.icon;
    /* replacenavlinks -  rename main nav lable and replace icon app_marketplace  */
    ls_obj_advanced['theme_adv_mainnav_replace_app_marketplace_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_app_marketplace.label;
    ls_obj_advanced['theme_adv_mainnav_replace_app_marketplace_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_app_marketplace.icon;
    /* replacenavlinks -  rename main nav lable and replace icon mobileapp  */
    ls_obj_advanced['theme_adv_mainnav_replace_mobileapp_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_mobileapp.label;
    ls_obj_advanced['theme_adv_mainnav_replace_mobileapp_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_mobileapp.icon;
    /* replacenavlinks -  rename main nav lable and replace icon aiemployeepromo  */
    ls_obj_advanced['theme_adv_mainnav_replace_aiemployeepromo_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_aiemployeepromo.label;
    ls_obj_advanced['theme_adv_mainnav_replace_aiemployeepromo_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.main_tabs.sb_aiemployeepromo.icon;

    /////////////// SETTINGS
    /* replacenavlinks -  rename settings nav lable and replace icon businessinfo  */
    ls_obj_advanced['theme_adv_mainnav_replace_businessinfo_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_businessinfo.label;
    ls_obj_advanced['theme_adv_mainnav_replace_businessinfo_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_businessinfo.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon companybilling  */
    ls_obj_advanced['theme_adv_mainnav_replace_companybilling_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_companybilling.label;
    ls_obj_advanced['theme_adv_mainnav_replace_companybilling_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_companybilling.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon myprofile  */
    ls_obj_advanced['theme_adv_mainnav_replace_myprofile_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_myprofile.label;
    ls_obj_advanced['theme_adv_mainnav_replace_myprofile_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_myprofile.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon mystaff  */
    ls_obj_advanced['theme_adv_mainnav_replace_mystaff_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_mystaff.label;
    ls_obj_advanced['theme_adv_mainnav_replace_mystaff_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_mystaff.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon pipelines  */
    ls_obj_advanced['theme_adv_mainnav_replace_pipelines_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_pipelines.label;
    ls_obj_advanced['theme_adv_mainnav_replace_pipelines_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_pipelines.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon calendar  */
    ls_obj_advanced['theme_adv_mainnav_replace_calendar_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_calendar.label;
    ls_obj_advanced['theme_adv_mainnav_replace_calendar_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_calendar.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettings  */
    ls_obj_advanced['theme_adv_mainnav_replace_conversationaisettings_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_conversationaisettings.label;
    ls_obj_advanced['theme_adv_mainnav_replace_conversationaisettings_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_conversationaisettings.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettingsv2  */
    ls_obj_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_conversationaisettingsv2.label;
    ls_obj_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_conversationaisettingsv2.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon aiagents  */
    ls_obj_advanced['theme_adv_mainnav_replace_aiagents_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_ai_agent_settings.label;
    ls_obj_advanced['theme_adv_mainnav_replace_aiagents_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_ai_agent_settings.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon objects  */
    ls_obj_advanced['theme_adv_mainnav_replace_objects_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_objects.label;
    ls_obj_advanced['theme_adv_mainnav_replace_objects_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_objects.icon;


    /* replacenavlinks -  rename settings nav lable and replace icon whatsapp  */
    ls_obj_advanced['theme_adv_mainnav_replace_whatsapp_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_whatsapp.label;
    ls_obj_advanced['theme_adv_mainnav_replace_whatsapp_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_whatsapp.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon phonenumbers  */
    ls_obj_advanced['theme_adv_mainnav_replace_phonenumbers_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_phonenumbers.label;
    ls_obj_advanced['theme_adv_mainnav_replace_phonenumbers_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_phonenumbers.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon reputationmanagement  */
    ls_obj_advanced['theme_adv_mainnav_replace_reputationmanagement_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_reputationmanagement.label;
    ls_obj_advanced['theme_adv_mainnav_replace_reputationmanagement_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_reputationmanagement.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon customfields  */
    ls_obj_advanced['theme_adv_mainnav_replace_customfields_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_customfields.label;
    ls_obj_advanced['theme_adv_mainnav_replace_customfields_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_customfields.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon customvalues  */
    ls_obj_advanced['theme_adv_mainnav_replace_customvalues_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_customvalues.label;
    ls_obj_advanced['theme_adv_mainnav_replace_customvalues_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_customvalues.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon managescoring  */
    ls_obj_advanced['theme_adv_mainnav_replace_managescoring_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_managescoring.label;
    ls_obj_advanced['theme_adv_mainnav_replace_managescoring_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_managescoring.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon domains  */
    ls_obj_advanced['theme_adv_mainnav_replace_domains_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_domains.label;
    ls_obj_advanced['theme_adv_mainnav_replace_domains_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_domains.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon media  */
    ls_obj_advanced['theme_adv_mainnav_replace_media_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_media.label;
    ls_obj_advanced['theme_adv_mainnav_replace_media_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_media.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon urlredirects  */
    ls_obj_advanced['theme_adv_mainnav_replace_urlredirects_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_urlredirects.label;
    ls_obj_advanced['theme_adv_mainnav_replace_urlredirects_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_urlredirects.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon integrations  */
    ls_obj_advanced['theme_adv_mainnav_replace_integrations_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_integrations.label;
    ls_obj_advanced['theme_adv_mainnav_replace_integrations_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_integrations.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon pintegrations  */
    ls_obj_advanced['theme_adv_mainnav_replace_pintegrations_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_pintegrations.label;
    ls_obj_advanced['theme_adv_mainnav_replace_pintegrations_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_pintegrations.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon brandboards  */
    ls_obj_advanced['theme_adv_mainnav_replace_brandboards_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_brandboards.label;
    ls_obj_advanced['theme_adv_mainnav_replace_brandboards_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_brandboards.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon emailservices  */
    ls_obj_advanced['theme_adv_mainnav_replace_emailservices_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_emailservices.label;
    ls_obj_advanced['theme_adv_mainnav_replace_emailservices_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_emailservices.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon conversationproviders  */
    ls_obj_advanced['theme_adv_mainnav_replace_conversationproviders_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_conversationproviders.label;
    ls_obj_advanced['theme_adv_mainnav_replace_conversationproviders_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_conversationproviders.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon tags  */
    ls_obj_advanced['theme_adv_mainnav_replace_tags_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_tags.label;
    ls_obj_advanced['theme_adv_mainnav_replace_tags_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_tags.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon labs  */
    ls_obj_advanced['theme_adv_mainnav_replace_labs_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_labs.label;
    ls_obj_advanced['theme_adv_mainnav_replace_labs_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_labs.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon auditlogs  */
    ls_obj_advanced['theme_adv_mainnav_replace_auditlogs_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_auditlogs.label;
    ls_obj_advanced['theme_adv_mainnav_replace_auditlogs_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_auditlogs.icon;
    /* replacenavlinks -  rename settings nav lable and replace icon companies  */
    ls_obj_advanced['theme_adv_mainnav_replace_companies_label'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_companies.label;
    ls_obj_advanced['theme_adv_mainnav_replace_companies_icon'] = selected_theme_advs_obj.left_sidebar.replacenavlinks.location_tabs.settings_tabs.sb_companies.icon;
    /* loadingicon - loading logo icon size  */
    ls_obj_advanced['theme_adv_loadingicon_size'] = selected_theme_advs_obj.login_settings.loadingicon.loadingicon_size;
    ls_obj_advanced['theme_adv_loginlogo_size'] = selected_theme_advs_obj.login_settings.loginlogo.loginlogo_size;
    ls_obj_advanced['activate_advance_settings'] = selected_theme_advs_obj.activate_advance_settings;
    ls_obj_advanced['activate_dashboard_banner_settings'] = selected_theme_advs_obj.activate_dashbanner_settings;
    ls_obj_advanced['theme_adv_dashboard_headerbanner_btn_link_intrl'] = selected_theme_advs_obj.activate_button_internal_links;
    ls_obj_advanced['activate_translations'] = selected_theme_advs_obj.activate_translations;
    ls_obj_advanced['activate_hcontrols_settings'] = selected_theme_advs_obj.header_controls.activate_hcontrols_settings;
    ls_obj_advanced['activate_hcontrols_sm_settings'] = selected_theme_advs_obj.header_controls.activate_hcontrols_sm_settings;
    ls_obj_advanced['allow_subaccount'] = selected_theme_advs_obj.allow_subaccount;
    /* Login position for login and logout  */
    ls_obj_advanced['theme_login_pos'] = selected_theme_advs_obj.login_settings.login_form.clr_pos;
    /* new dashboard */
    ls_obj_advanced['theme_adv_opportunities_lead_col'] = selected_theme_advs_obj.dashboard.location_dashboard.opportunities.lead_color;
    ls_obj_advanced['theme_adv_opportunities_won_col'] = selected_theme_advs_obj.dashboard.location_dashboard.opportunities.won_color;
    ls_obj_advanced['theme_adv_opportunities_lost_col'] = selected_theme_advs_obj.dashboard.location_dashboard.opportunities.lost_color;
    ls_obj_advanced['theme_adv_opportunities_abandoned_col'] = selected_theme_advs_obj.dashboard.location_dashboard.opportunities.abandoned_color;
    /* dashboard header banner -  sub heading */
    ls_obj_advanced['theme_adv_dashboard_headerbanner_subhead'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.subhead;
    /* dashboard header banner -  button 1 text */
    ls_obj_advanced['theme_adv_dashboard_headerbanner_btn_1_text'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.btn_1_text;
    /* dashboard header banner -  button 2 text */
    ls_obj_advanced['theme_adv_dashboard_headerbanner_btn_2_text'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.btn_2_text;
    /* dashboard header banner -  button 1 link */
    ls_obj_advanced['theme_adv_dashboard_headerbanner_btn_1_link'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.btn_1_link;
    /* dashboard header banner -  button 2 link */
    ls_obj_advanced['theme_adv_dashboard_headerbanner_btn_2_link'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.btn_2_link;
    ls_obj_advanced['theme_adv_dashboard_headerbanner_bg_url'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.bg_url;
    ls_obj_advanced['theme_adv_dashboard_headerbanner_bg_col'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.bg_col;
    ls_obj_advanced['theme_adv_dashboard_headerbanner_text_col'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.text_col;
    ls_obj_advanced['theme_adv_dashboard_headerbanner_overlay_opacity'] = selected_theme_advs_obj.dashboard.location_dashboard.headerbanner.overlay;
    ls_obj_advanced['theme_membership_header_img'] = selected_theme_advs_obj.memberships.dashboard.header_image;
    ls_obj_advanced['theme_membership_header_img_label'] = selected_theme_advs_obj.memberships.dashboard.header_image_title;
    return ls_obj_advanced;
  };
  ///// ls no cc elements obj general
  const get_ls_elem_id_no_cc_general = () => {
    let ls_elem_id_no_cc_general = {};
    //// General Settings elemets
    ls_elem_id_no_cc_general['theme_name_primary_col'] = 'dc-colorPicker-primary';
    ls_elem_id_no_cc_general['theme_name_primary_bgcol'] = 'dc-colorPicker-primarybg';
    ls_elem_id_no_cc_general['theme_name_gradient_bgcol'] = 'dc-colorPicker-bg-gradient';
    ls_elem_id_no_cc_general['theme_name_leftsidebar_txtcol'] = 'dc-colorPicker-leftsidebar-txtcol';
    ls_elem_id_no_cc_general['theme_name_leftsidebar_iconcol'] = 'dc-colorPicker-leftsidebar-iconcol';
    ls_elem_id_no_cc_general['theme_login_contactinfo'] = 'dc-footer-contactinfo';
    ls_elem_id_no_cc_general['theme_loading_icon'] = 'dc-loading-icon';
    ls_elem_id_no_cc_general['theme_adv_loginlogo_size'] = 'dc-loginlogo-size';
    ls_elem_id_no_cc_general['theme_login_coverimage'] = 'dc-login-page-cover-img';
    ls_elem_id_no_cc_general['theme_login_logoimage'] = 'dc-login-page-logo-img';
    ls_elem_id_no_cc_general['google_spreadsheet_url'] = 'dc-google-spreadsheet-url';
    ls_elem_id_no_cc_general['google_webapp_deploy'] = 'dc-google-webapp-deploy';
    ls_elem_id_no_cc_general['unlock_message'] = 'dc-unlock-message';
    ls_elem_id_no_cc_general['theme_font_family'] = 'dc-colorPicker-font-family';
    ls_elem_id_no_cc_general['theme_font_family_h1'] = 'dc-colorPicker-font-family-h1';
    ls_elem_id_no_cc_general['theme_font_family_h2'] = 'dc-colorPicker-font-family-h2';
    ls_elem_id_no_cc_general['theme_font_family_h3'] = 'dc-colorPicker-font-family-h3';
    ls_elem_id_no_cc_general['theme_font_family_h4'] = 'dc-colorPicker-font-family-h4';
    ls_elem_id_no_cc_general['theme_font_family_sidemenu'] = 'dc-colorPicker-font-family-sidemenu';
    ls_elem_id_no_cc_general['theme_font_family_topmenu'] = 'dc-colorPicker-font-family-topmenu';

    return ls_elem_id_no_cc_general;
  };
  ///// ls no cc elements obj advanced
  const get_ls_elem_id_no_cc_advanced = () => {
    let ls_elem_id_no_cc_advanced = {};
    /* adv primary button */
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bgcol'] = 'dc-colorPicker-adv-primary-btn-bgcol';
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bg_h_col'] = 'dc-colorPicker-adv-primary-btn-bg-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_txtcol'] = 'dc-colorPicker-adv-primary-btn-txtcol';
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_txt_h_col'] = 'dc-colorPicker-adv-primary-btn-txt-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bdrcol'] = 'dc-colorPicker-adv-primary-btn-bdrcol';
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bdr_h_col'] = 'dc-colorPicker-adv-primary-btn-bdr-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_primary_btn_radius'] = 'dc-colorPicker-adv-primary-btn-radius';
    /* secondary adv buttons */
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bgcol'] = 'dc-colorPicker-adv-secondary-btn-bgcol';
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bg_h_col'] = 'dc-colorPicker-adv-secondary-btn-bg-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_txtcol'] = 'dc-colorPicker-adv-secondary-btn-txtcol';
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_txt_h_col'] = 'dc-colorPicker-adv-secondary-btn-txt-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bdrcol'] = 'dc-colorPicker-adv-secondary-btn-bdrcol';
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bdr_h_col'] = 'dc-colorPicker-adv-secondary-btn-bdr-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_radius'] = 'dc-colorPicker-adv-secondary-btn-radius';
    /* default adv button */
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_bgcol'] = 'dc-colorPicker-adv-default-btn-bgcol';
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_bg_h_col'] = 'dc-colorPicker-adv-default-btn-bg-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_txtcol'] = 'dc-colorPicker-adv-default-btn-txtcol';
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_txt_h_col'] = 'dc-colorPicker-adv-default-btn-txt-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_bdrcol'] = 'dc-colorPicker-adv-default-btn-bdrcol';
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_bdr_h_col'] = 'dc-colorPicker-adv-default-btn-bdr-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_default_btn_radius'] = 'dc-colorPicker-adv-default-btn-radius';
    /* default_light adv button */
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bgcol'] = 'dc-colorPicker-adv-default_light-btn-bgcol';
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bg_h_col'] = 'dc-colorPicker-adv-default_light-btn-bg-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_txtcol'] = 'dc-colorPicker-adv-default_light-btn-txtcol';
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_txt_h_col'] = 'dc-colorPicker-adv-default_light-btn-txt-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bdrcol'] = 'dc-colorPicker-adv-default_light-btn-bdrcol';
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bdr_h_col'] = 'dc-colorPicker-adv-default_light-btn-bdr-h-col';
    ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_radius'] = 'dc-colorPicker-adv-default_light-btn-radius';
    /* headercontrol button - profile  */
    ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_col'] = 'dc-colorPicker-adv-profile-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_hover_col'] = 'dc-colorPicker-adv-profile-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_bg_col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-hover-col';
    /* headercontrol button - help  */
    ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_col'] = 'dc-colorPicker-adv-help-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_hover_col'] = 'dc-colorPicker-adv-help-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_bg_col'] = 'dc-colorPicker-adv-help-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-help-btn-icon-bg-hover-col';
    /* headercontrol button - notification  */
    ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_col'] = 'dc-colorPicker-adv-notification-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_hover_col'] = 'dc-colorPicker-adv-notification-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_bg_col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-hover-col';
    /* headercontrol button - viewchangelogs  */
    ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col';
    /* headercontrol button - phone  */
    ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_col'] = 'dc-colorPicker-adv-phone-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_hover_col'] = 'dc-colorPicker-adv-phone-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_bg_col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-hover-col';
    /* headercontrol button - zappychatbot  */
    ls_elem_id_no_cc_advanced['theme_adv_zappychatbot_btn_icon_col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_zappychatbot_btn_icon_hover_col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_zappychatbot_btn_icon_bg_col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_zappychatbot_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-bg-hover-col';
    /* headercontrol button - guidetour  */
    ls_elem_id_no_cc_advanced['theme_adv_guidetour_btn_icon_col'] = 'dc-colorPicker-adv-guidetour-btn-icon-col';
    ls_elem_id_no_cc_advanced['theme_adv_guidetour_btn_icon_hover_col'] = 'dc-colorPicker-adv-guidetour-btn-icon-hover-col';
    ls_elem_id_no_cc_advanced['theme_adv_guidetour_btn_icon_bg_col'] = 'dc-colorPicker-adv-guidetour-btn-icon-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_guidetour_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-guidetour-btn-icon-bg-hover-col';
    /* headerbgcolor - Header background color  */
    ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_start_col'] = 'dc-colorPicker-adv-headerbgcolor-start-col';
    ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_end_col'] = 'dc-colorPicker-adv-headerbgcolor-end-col';
    ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_stop_perc'] = 'dc-colorPicker-adv-headerbgcolor-stop-perc';
    ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_gradient_deg'] = 'dc-colorPicker-adv-headerbgcolor-gradient-deg';
    /* leftsidebarbgcolor - background color  */
    ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_start_col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-start-col';
    ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_end_col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-end-col';
    ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = 'dc-colorPicker-adv-leftsidebarbgcolor-stop-perc';
    ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = 'dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg';
    /* leftsidebar - scrollbar color & width  */
    ls_elem_id_no_cc_advanced['theme_adv_scrollbarthumb_col'] = 'dc-colorPicker-adv-scrollbarthumb-col';
    ls_elem_id_no_cc_advanced['theme_adv_scrollbarthumb_col_tint'] = 'dc-colorPicker-adv-scrollbarthumb-col-tint';
    ls_elem_id_no_cc_advanced['theme_adv_scrollbartrack_col'] = 'dc-colorPicker-adv-scrollbartrack-col';
    ls_elem_id_no_cc_advanced['theme_adv_scrollbar_width'] = 'dc-colorPicker-adv-scrollbar-width';
    /* bodycontent - background color  */
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_start_col'] = 'dc-colorPicker-adv-bodycontent-start-col';
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_end_col'] = 'dc-colorPicker-adv-bodycontent-end-col';
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_stop_perc'] = 'dc-colorPicker-adv-bodycontent-stop-perc';
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_gradient_deg'] = 'dc-colorPicker-adv-bodycontent-gradient-deg';
    /* bodycontent - background color  */
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_text_col'] = 'dc-colorPicker-adv-bodycontent-text-col';
    /* bodycontent - h1 h2 color & size   */
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h1_text_col'] = 'dc-colorPicker-adv-bodycontent-h1-text-col';
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h2_text_col'] = 'dc-colorPicker-adv-bodycontent-h2-text-col';
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h1_text_size'] = 'dc-colorPicker-adv-bodycontent-h1-text-size';
    ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h2_text_size'] = 'dc-colorPicker-adv-bodycontent-h2-text-size';
    /* mainnav - text hover, icon hover, hover-active background colors */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_text_hover_color'] = 'dc-colorPicker-adv-mainnav-text-hover-color';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_icon_hover_color'] = 'dc-colorPicker-adv-mainnav-icon-hover-color';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_hover_active_bg_color'] = 'dc-colorPicker-adv-mainnav-hover-active-bg-color';
    /* replacenavlinks -  rename main nav lable and replace icon mediastorage  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_mediastorage_label'] = 'dc-colorPicker-adv-mainnav-replace-mediastorage-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_mediastorage_icon'] = 'dc-colorPicker-adv-mainnav-replace-mediastorage-icon';
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_launchpad_label'] = 'dc-colorPicker-adv-mainnav-replace-launchpad-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_launchpad_icon'] = 'dc-colorPicker-adv-mainnav-replace-launchpad-icon';
    /* replacenavlinks -  rename main nav lable and replace icon dashboard  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_dashboard_label'] = 'dc-colorPicker-adv-mainnav-replace-dashboard-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_dashboard_icon'] = 'dc-colorPicker-adv-mainnav-replace-dashboard-icon';
    /* replacenavlinks -  rename main nav lable and replace icon conversations  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversations_label'] = 'dc-colorPicker-adv-mainnav-replace-conversations-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversations_icon'] = 'dc-colorPicker-adv-mainnav-replace-conversations-icon';
    /* replacenavlinks -  rename main nav lable and replace icon calendars  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_calendars_label'] = 'dc-colorPicker-adv-mainnav-replace-calendars-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_calendars_icon'] = 'dc-colorPicker-adv-mainnav-replace-calendars-icon';
    /* replacenavlinks -  rename main nav lable and replace icon contacts  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_contacts_label'] = 'dc-colorPicker-adv-mainnav-replace-contacts-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_contacts_icon'] = 'dc-colorPicker-adv-mainnav-replace-contacts-icon';
    /* replacenavlinks -  rename main nav lable and replace icon opportunities  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_opportunities_label'] = 'dc-colorPicker-adv-mainnav-replace-opportunities-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_opportunities_icon'] = 'dc-colorPicker-adv-mainnav-replace-opportunities-icon';
    /* replacenavlinks -  rename main nav lable and replace icon payments  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_payments_label'] = 'dc-colorPicker-adv-mainnav-replace-payments-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_payments_icon'] = 'dc-colorPicker-adv-mainnav-replace-payments-icon';
    /* replacenavlinks -  rename main nav lable and replace icon marketing  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_marketing_label'] = 'dc-colorPicker-adv-mainnav-replace-marketing-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_marketing_icon'] = 'dc-colorPicker-adv-mainnav-replace-marketing-icon';
    /* replacenavlinks -  rename main nav lable and replace icon automation  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_automation_label'] = 'dc-colorPicker-adv-mainnav-replace-automation-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_automation_icon'] = 'dc-colorPicker-adv-mainnav-replace-automation-icon';
    /* replacenavlinks -  rename main nav lable and replace icon sites  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_sites_label'] = 'dc-colorPicker-adv-mainnav-replace-sites-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_sites_icon'] = 'dc-colorPicker-adv-mainnav-replace-sites-icon';
    /* replacenavlinks -  rename main nav lable and replace icon memberships  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_memberships_label'] = 'dc-colorPicker-adv-mainnav-replace-memberships-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_memberships_icon'] = 'dc-colorPicker-adv-mainnav-replace-memberships-icon';
    /* replacenavlinks -  rename main nav lable and replace icon reputation  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_reputation_label'] = 'dc-colorPicker-adv-mainnav-replace-reputation-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_reputation_icon'] = 'dc-colorPicker-adv-mainnav-replace-reputation-icon';
    /* replacenavlinks -  rename main nav lable and replace icon reporting  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_reporting_label'] = 'dc-colorPicker-adv-mainnav-replace-reporting-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_reporting_icon'] = 'dc-colorPicker-adv-mainnav-replace-reporting-icon';
    /* replacenavlinks -  rename main nav lable and replace icon app_marketplace  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_app_marketplace_label'] = 'dc-colorPicker-adv-mainnav-replace-app-marketplace-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_app_marketplace_icon'] = 'dc-colorPicker-adv-mainnav-replace-app-marketplace-icon';

    /* replacenavlinks -  rename main nav lable and replace icon mobileapp  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_mobileapp_label'] = 'dc-colorPicker-adv-mainnav-replace-mobileapp-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_mobileapp_icon'] = 'dc-colorPicker-adv-mainnav-replace-mobileapp-icon';

    /* replacenavlinks -  rename main nav lable and replace icon aiemployeepromo  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_aiemployeepromo_label'] = 'dc-colorPicker-adv-mainnav-replace-aiemployeepromo-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_aiemployeepromo_icon'] = 'dc-colorPicker-adv-mainnav-replace-aiemployeepromo-icon';

    /* replacenavlinks -  rename settings lable and replace icon businessinfo  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_businessinfo_label'] = 'dc-colorPicker-adv-mainnav-replace-businessinfo-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_businessinfo_icon'] = 'dc-colorPicker-adv-mainnav-replace-businessinfo-icon';
    /* replacenavlinks -  rename settings lable and replace icon companybilling  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_companybilling_label'] = 'dc-colorPicker-adv-mainnav-replace-companybilling-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_companybilling_icon'] = 'dc-colorPicker-adv-mainnav-replace-companybilling-icon';
    /* replacenavlinks -  rename settings lable and replace icon myprofile  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_myprofile_label'] = 'dc-colorPicker-adv-mainnav-replace-myprofile-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_myprofile_icon'] = 'dc-colorPicker-adv-mainnav-replace-myprofile-icon';
    /* replacenavlinks -  rename settings lable and replace icon mystaff  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_mystaff_label'] = 'dc-colorPicker-adv-mainnav-replace-mystaff-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_mystaff_icon'] = 'dc-colorPicker-adv-mainnav-replace-mystaff-icon';
    /* replacenavlinks -  rename settings lable and replace icon pipelines  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_pipelines_label'] = 'dc-colorPicker-adv-mainnav-replace-pipelines-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_pipelines_icon'] = 'dc-colorPicker-adv-mainnav-replace-pipelines-icon';
    /* replacenavlinks -  rename settings lable and replace icon calendar  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_calendar_label'] = 'dc-colorPicker-adv-mainnav-replace-calendar-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_calendar_icon'] = 'dc-colorPicker-adv-mainnav-replace-calendar-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationaisettings  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversationaisettings_label'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettings-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversationaisettings_icon'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettings-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationaisettingsv2  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_label'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_icon'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-icon';
    /* replacenavlinks -  rename settings lable and replace icon aiagents  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_aiagents_label'] = 'dc-colorPicker-adv-mainnav-replace-aiagents-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_aiagents_icon'] = 'dc-colorPicker-adv-mainnav-replace-aiagents-icon';
    /* replacenavlinks -  rename settings lable and replace icon objects  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_objects_label'] = 'dc-colorPicker-adv-mainnav-replace-objects-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_objects_icon'] = 'dc-colorPicker-adv-mainnav-replace-objects-icon';
    /* replacenavlinks -  rename settings lable and replace icon whatsapp  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_whatsapp_label'] = 'dc-colorPicker-adv-mainnav-replace-whatsapp-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_whatsapp_icon'] = 'dc-colorPicker-adv-mainnav-replace-whatsapp-icon';
    /* replacenavlinks -  rename settings lable and replace icon phonenumbers  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_phonenumbers_label'] = 'dc-colorPicker-adv-mainnav-replace-phonenumbers-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_phonenumbers_icon'] = 'dc-colorPicker-adv-mainnav-replace-phonenumbers-icon';
    /* replacenavlinks -  rename settings lable and replace icon reputationmanagement  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_reputationmanagement_label'] = 'dc-colorPicker-adv-mainnav-replace-reputationmanagement-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_reputationmanagement_icon'] = 'dc-colorPicker-adv-mainnav-replace-reputationmanagement-icon';
    /* replacenavlinks -  rename settings lable and replace icon customfields  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_customfields_label'] = 'dc-colorPicker-adv-mainnav-replace-customfields-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_customfields_icon'] = 'dc-colorPicker-adv-mainnav-replace-customfields-icon';
    /* replacenavlinks -  rename settings lable and replace icon customvalues  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_customvalues_label'] = 'dc-colorPicker-adv-mainnav-replace-customvalues-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_customvalues_icon'] = 'dc-colorPicker-adv-mainnav-replace-customvalues-icon';
    /* replacenavlinks -  rename settings lable and replace icon managescoring  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_managescoring_label'] = 'dc-colorPicker-adv-mainnav-replace-managescoring-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_managescoring_icon'] = 'dc-colorPicker-adv-mainnav-replace-managescoring-icon';
    /* replacenavlinks -  rename settings lable and replace icon domains  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_domains_label'] = 'dc-colorPicker-adv-mainnav-replace-domains-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_domains_icon'] = 'dc-colorPicker-adv-mainnav-replace-domains-icon';
    /* replacenavlinks -  rename settings lable and replace icon media  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_media_label'] = 'dc-colorPicker-adv-mainnav-replace-media-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_media_icon'] = 'dc-colorPicker-adv-mainnav-replace-media-icon';
    /* replacenavlinks -  rename settings lable and replace icon urlredirects  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_urlredirects_label'] = 'dc-colorPicker-adv-mainnav-replace-urlredirects-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_urlredirects_icon'] = 'dc-colorPicker-adv-mainnav-replace-urlredirects-icon';
    /* replacenavlinks -  rename settings lable and replace icon integrations  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_integrations_label'] = 'dc-colorPicker-adv-mainnav-replace-integrations-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_integrations_icon'] = 'dc-colorPicker-adv-mainnav-replace-integrations-icon';
    /* replacenavlinks -  rename settings lable and replace icon pintegrations  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_pintegrations_label'] = 'dc-colorPicker-adv-mainnav-replace-pintegrations-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_pintegrations_icon'] = 'dc-colorPicker-adv-mainnav-replace-pintegrations-icon';
    /* replacenavlinks -  rename settings lable and replace icon brandboards  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_brandboards_label'] = 'dc-colorPicker-adv-mainnav-replace-brandboards-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_brandboards_icon'] = 'dc-colorPicker-adv-mainnav-replace-brandboards-icon';
    /* replacenavlinks -  rename settings lable and replace icon emailservices  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_emailservices_label'] = 'dc-colorPicker-adv-mainnav-replace-emailservices-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_emailservices_icon'] = 'dc-colorPicker-adv-mainnav-replace-emailservices-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationproviders  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversationproviders_label'] = 'dc-colorPicker-adv-mainnav-replace-conversationproviders-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_conversationproviders_icon'] = 'dc-colorPicker-adv-mainnav-replace-conversationproviders-icon';
    /* replacenavlinks -  rename settings lable and replace icon tags  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_tags_label'] = 'dc-colorPicker-adv-mainnav-replace-tags-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_tags_icon'] = 'dc-colorPicker-adv-mainnav-replace-tags-icon';
    /* replacenavlinks -  rename settings lable and replace icon labs  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_labs_label'] = 'dc-colorPicker-adv-mainnav-replace-labs-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_labs_icon'] = 'dc-colorPicker-adv-mainnav-replace-labs-icon';
    /* replacenavlinks -  rename settings lable and replace icon auditlogs  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_auditlogs_label'] = 'dc-colorPicker-adv-mainnav-replace-auditlogs-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_auditlogs_icon'] = 'dc-colorPicker-adv-mainnav-replace-auditlogs-icon';
    /* replacenavlinks -  rename settings lable and replace icon companies  */
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_companies_label'] = 'dc-colorPicker-adv-mainnav-replace-companies-label';
    ls_elem_id_no_cc_advanced['theme_adv_mainnav_replace_companies_icon'] = 'dc-colorPicker-adv-mainnav-replace-companies-icon';
    /* loadingicon - loading logo icon size    */
    ls_elem_id_no_cc_advanced['theme_adv_loadingicon_size'] = 'dc-colorpicker-adv-loadingicon-size';
    ls_elem_id_no_cc_advanced['theme_adv_loginlogo_size'] = 'dc-colorpicker-adv-loginlogo-size';
    ls_elem_id_no_cc_advanced['allow_subaccount'] = 'dc-colorpicker-adv-allow-subaccount';
    /* new dashboard */
    ls_elem_id_no_cc_advanced['theme_adv_opportunities_lead_col'] = 'dc-colorPicker-adv-opportunities-lead-col';
    ls_elem_id_no_cc_advanced['theme_adv_opportunities_won_col'] = 'dc-colorPicker-adv-opportunities-won-col';
    ls_elem_id_no_cc_advanced['theme_adv_opportunities_lost_col'] = 'dc-colorPicker-adv-opportunities-lost-col';
    ls_elem_id_no_cc_advanced['theme_adv_opportunities_abandoned_col'] = 'dc-colorPicker-adv-opportunities-abandoned-col';
    /* dashboard header banner -  sub heading */
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_subhead'] = 'dc-colorPicker-adv-dashboard-headerbanner-subhead';
    /* dashboard header banner -  button 1 text */
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_btn_1_text'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-1-text';
    /* dashboard header banner -  button 2 text */
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_btn_2_text'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-2-text';
    /* dashboard header banner -  button 1 link */
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_btn_1_link'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-1-link';
    /* dashboard header banner -  button 2 link */
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_btn_2_link'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-2-link';
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_bg_url'] = 'dc-colorPicker-adv-dashboard-headerbanner-bg-url';
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_bg_col'] = 'dc-colorPicker-adv-dashboard-headerbanner-bg-col';
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_text_col'] = 'dc-colorPicker-adv-dashboard-headerbanner-text-col';
    ls_elem_id_no_cc_advanced['theme_adv_dashboard_headerbanner_overlay_opacity'] = 'dc-colorPicker-adv-dashboard-headerbanner-overlay-opacity';
    ls_elem_id_no_cc_advanced['theme_membership_header_img'] = 'dc-membership-header-img';
    ls_elem_id_no_cc_advanced['theme_membership_header_img_label'] = 'dc-membership-header-img-label';
    return ls_elem_id_no_cc_advanced;
  };
  ///// ls cc elements obj general
  const get_ls_elem_id_cc_general = () => {
    let ls_elem_id_cc_general = {};
    //// general settings elements
    ls_elem_id_cc_general['theme_name_primary_col'] = 'dc-colorCode-primary';
    ls_elem_id_cc_general['theme_name_primary_bgcol'] = 'dc-colorCode-primarybg';
    ls_elem_id_cc_general['theme_name_gradient_bgcol'] = 'dc-colorCode-bg-gradient';
    ls_elem_id_cc_general['theme_name_leftsidebar_txtcol'] = 'dc-colorCode-leftsidebar-txtcol';
    ls_elem_id_cc_general['theme_name_leftsidebar_iconcol'] = 'dc-colorCode-leftsidebar-iconcol';
    return ls_elem_id_cc_general;
  };
  ///// ls cc elements obj advanced
  const get_ls_elem_id_cc_advanced = () => {
    let ls_elem_id_cc_advanced = {};
    /* primary adv button */
    ls_elem_id_cc_advanced['theme_adv_primary_btn_bgcol'] = 'dc-colorCode-adv-primary-btn-bgcol';
    ls_elem_id_cc_advanced['theme_adv_primary_btn_bg_h_col'] = 'dc-colorCode-adv-primary-btn-bg-h-col';
    ls_elem_id_cc_advanced['theme_adv_primary_btn_txtcol'] = 'dc-colorCode-adv-primary-btn-txtcol';
    ls_elem_id_cc_advanced['theme_adv_primary_btn_txt_h_col'] = 'dc-colorCode-adv-primary-btn-txt-h-col';
    ls_elem_id_cc_advanced['theme_adv_primary_btn_bdrcol'] = 'dc-colorCode-adv-primary-btn-bdrcol';
    ls_elem_id_cc_advanced['theme_adv_primary_btn_bdr_h_col'] = 'dc-colorCode-adv-primary-btn-bdr-h-col';
    /* secondary adv buttons */
    ls_elem_id_cc_advanced['theme_adv_secondary_btn_bgcol'] = 'dc-colorCode-adv-secondary-btn-bgcol';
    ls_elem_id_cc_advanced['theme_adv_secondary_btn_bg_h_col'] = 'dc-colorCode-adv-secondary-btn-bg-h-col';
    ls_elem_id_cc_advanced['theme_adv_secondary_btn_txtcol'] = 'dc-colorCode-adv-secondary-btn-txtcol';
    ls_elem_id_cc_advanced['theme_adv_secondary_btn_txt_h_col'] = 'dc-colorCode-adv-secondary-btn-txt-h-col';
    ls_elem_id_cc_advanced['theme_adv_secondary_btn_bdrcol'] = 'dc-colorCode-adv-secondary-btn-bdrcol';
    ls_elem_id_cc_advanced['theme_adv_secondary_btn_bdr_h_col'] = 'dc-colorCode-adv-secondary-btn-bdr-h-col';
    /* default adv button */
    ls_elem_id_cc_advanced['theme_adv_default_btn_bgcol'] = 'dc-colorCode-adv-default-btn-bgcol';
    ls_elem_id_cc_advanced['theme_adv_default_btn_bg_h_col'] = 'dc-colorCode-adv-default-btn-bg-h-col';
    ls_elem_id_cc_advanced['theme_adv_default_btn_txtcol'] = 'dc-colorCode-adv-default-btn-txtcol';
    ls_elem_id_cc_advanced['theme_adv_default_btn_txt_h_col'] = 'dc-colorCode-adv-default-btn-txt-h-col';
    ls_elem_id_cc_advanced['theme_adv_default_btn_bdrcol'] = 'dc-colorCode-adv-default-btn-bdrcol';
    ls_elem_id_cc_advanced['theme_adv_default_btn_bdr_h_col'] = 'dc-colorCode-adv-default-btn-bdr-h-col';
    /* default_light adv button */
    ls_elem_id_cc_advanced['theme_adv_default_light_btn_bgcol'] = 'dc-colorCode-adv-default_light-btn-bgcol';
    ls_elem_id_cc_advanced['theme_adv_default_light_btn_bg_h_col'] = 'dc-colorCode-adv-default_light-btn-bg-h-col';
    ls_elem_id_cc_advanced['theme_adv_default_light_btn_txtcol'] = 'dc-colorCode-adv-default_light-btn-txtcol';
    ls_elem_id_cc_advanced['theme_adv_default_light_btn_txt_h_col'] = 'dc-colorCode-adv-default_light-btn-txt-h-col';
    ls_elem_id_cc_advanced['theme_adv_default_light_btn_bdrcol'] = 'dc-colorCode-adv-default_light-btn-bdrcol';
    ls_elem_id_cc_advanced['theme_adv_default_light_btn_bdr_h_col'] = 'dc-colorCode-adv-default_light-btn-bdr-h-col';
    /* headercontrol button - profile  */
    ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_col'] = 'dc-colorCode-adv-profile-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_hover_col'] = 'dc-colorCode-adv-profile-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_bg_col'] = 'dc-colorCode-adv-profile-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-profile-btn-icon-bg-hover-col';
    /* headercontrol button - help  */
    ls_elem_id_cc_advanced['theme_adv_help_btn_icon_col'] = 'dc-colorCode-adv-help-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_help_btn_icon_hover_col'] = 'dc-colorCode-adv-help-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_help_btn_icon_bg_col'] = 'dc-colorCode-adv-help-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_help_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-help-btn-icon-bg-hover-col';
    /* headercontrol button - notification  */
    ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_col'] = 'dc-colorCode-adv-notification-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_hover_col'] = 'dc-colorCode-adv-notification-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_bg_col'] = 'dc-colorCode-adv-notification-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-notification-btn-icon-bg-hover-col';
    /* headercontrol button - viewchangelogs  */
    ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-bg-hover-col';
    /* headercontrol button - phone  */
    ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_col'] = 'dc-colorCode-one-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_hover_col'] = 'dc-colorCode-adv-phone-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_bg_col'] = 'dc-colorCode-adv-phone-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-phone-btn-icon-bg-hover-col';
    /* headercontrol button - zappychatbot  */
    ls_elem_id_cc_advanced['theme_adv_zappychatbot_btn_icon_col'] = 'dc-colorCode-adv-zappychatbot-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_zappychatbot_btn_icon_hover_col'] = 'dc-colorCode-adv-zappychatbot-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_zappychatbot_btn_icon_bg_col'] = 'dc-colorCode-adv-zappychatbot-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_zappychatbot_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-zappychatbot-btn-icon-bg-hover-col';
    /* headercontrol button - guidetour  */
    ls_elem_id_cc_advanced['theme_adv_guidetour_btn_icon_col'] = 'dc-colorCode-adv-guidetour-btn-icon-col';
    ls_elem_id_cc_advanced['theme_adv_guidetour_btn_icon_hover_col'] = 'dc-colorCode-adv-guidetour-btn-icon-hover-col';
    ls_elem_id_cc_advanced['theme_adv_guidetour_btn_icon_bg_col'] = 'dc-colorCode-adv-guidetour-btn-icon-bg-col';
    ls_elem_id_cc_advanced['theme_adv_guidetour_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-guidetour-btn-icon-bg-hover-col';
    /* headerbgcolor - Header background color  */
    ls_elem_id_cc_advanced['theme_adv_headerbgcolor_start_col'] = 'dc-colorCode-adv-headerbgcolor-start-col';
    ls_elem_id_cc_advanced['theme_adv_headerbgcolor_end_col'] = 'dc-colorCode-adv-headerbgcolor-end-col';
    /* leftsidebarbgcolor - background color  */
    ls_elem_id_cc_advanced['theme_adv_leftsidebarbgcolor_start_col'] = 'dc-colorCode-adv-leftsidebarbgcolor-start-col';
    ls_elem_id_cc_advanced['theme_adv_leftsidebarbgcolor_end_col'] = 'dc-colorCode-adv-leftsidebarbgcolor-end-col';
    /* leftsidebar - scrollbar color codes  */
    ls_elem_id_cc_advanced['theme_adv_scrollbarthumb_col'] = 'dc-colorCode-adv-scrollbarthumb-col';
    ls_elem_id_cc_advanced['theme_adv_scrollbartrack_col'] = 'dc-colorCode-adv-scrollbartrack-col';
    /* bodycontent - background color  */
    ls_elem_id_cc_advanced['theme_adv_bodycontent_start_col'] = 'dc-colorCode-adv-bodycontent-start-col';
    ls_elem_id_cc_advanced['theme_adv_bodycontent_end_col'] = 'dc-colorCode-adv-bodycontent-end-col';
    /* bodycontent - text color */
    ls_elem_id_cc_advanced['theme_adv_bodycontent_text_col'] = 'dc-colorCode-adv-bodycontent-text-col';
    /* bodycontent - h1 h2 color & size   */
    ls_elem_id_cc_advanced['theme_adv_bodycontent_h1_text_col'] = 'dc-colorCode-adv-bodycontent-h1-text-col';
    ls_elem_id_cc_advanced['theme_adv_bodycontent_h2_text_col'] = 'dc-colorCode-adv-bodycontent-h2-text-col';
    /* mainnav - text hover, icon hover, hover-active background colors */
    ls_elem_id_cc_advanced['theme_adv_mainnav_text_hover_color'] = 'dc-colorCode-adv-mainnav-text-hover-color';
    ls_elem_id_cc_advanced['theme_adv_mainnav_icon_hover_color'] = 'dc-colorCode-adv-mainnav-icon-hover-color';
    ls_elem_id_cc_advanced['theme_adv_mainnav_hover_active_bg_color'] = 'dc-colorCode-adv-mainnav-hover-active-bg-color';
    /* new dashboard */
    ls_elem_id_cc_advanced['theme_adv_opportunities_lead_col'] = 'dc-colorCode-adv-opportunities-lead-col';
    ls_elem_id_cc_advanced['theme_adv_opportunities_won_col'] = 'dc-colorCode-adv-opportunities-won-col';
    ls_elem_id_cc_advanced['theme_adv_opportunities_lost_col'] = 'dc-colorCode-adv-opportunities-lost-col';
    ls_elem_id_cc_advanced['theme_adv_opportunities_abandoned_col'] = 'dc-colorCode-adv-opportunities-abandoned-col';
    /* new dashboard banner */
    ls_elem_id_cc_advanced['theme_adv_dashboard_headerbanner_bg_col'] = 'dc-colorCode-adv-dashboard-headerbanner-bg-col';
    ls_elem_id_cc_advanced['theme_adv_dashboard_headerbanner_text_col'] = 'dc-colorCode-adv-dashboard-headerbanner-text-col';
    return ls_elem_id_cc_advanced;
  };
  ///// ls root vars obj general
  const get_ls_rvars_general = () => {
    let ls_rvars_general = {};
    /////General Settings
    ls_rvars_general['theme_name_primary_col'] = '--hlpt-primary-theme-color';
    ls_rvars_general['theme_name_primary_col_tint'] = '--hlpt-primary-theme-color-tint';
    ls_rvars_general['theme_name_primary_bgcol'] = '--hlpt-primary-theme-bg-color';
    ls_rvars_general['theme_name_primary_bgcol_tint'] = '--hlpt-primary-theme-bg-color-tint';
    ls_rvars_general['theme_name_gradient_bgcol'] = '--hlpt-secondary-theme-bg-color';
    ls_rvars_general['theme_name_gradient_bgcol_tint'] = '--hlpt-secondary-theme-bg-color-tint';
    ls_rvars_general['theme_name_leftsidebar_txtcol'] = '--hlpt-left-nav-color';
    ls_rvars_general['theme_name_leftsidebar_iconcol'] = '--hlpt-left-nav-icon-color';
    ls_rvars_general['theme_font_family'] = '--dynamic-font-family';
    ls_rvars_general['theme_font_family_h1'] = '--dynamic-font-family-h1';
    ls_rvars_general['theme_font_family_h2'] = '--dynamic-font-family-h2';
    ls_rvars_general['theme_font_family_h3'] = '--dynamic-font-family-h3';
    ls_rvars_general['theme_font_family_h4'] = '--dynamic-font-family-h4';
    ls_rvars_general['theme_font_family_sidemenu'] = '--dynamic-font-family-sidemenu';
    ls_rvars_general['theme_font_family_topmenu'] = '--dynamic-font-family-topmenu';
    /// tint color extracted from the same color value
    return ls_rvars_general;
  };
  ///// ls root vars obj advanced
  const get_ls_rvars_advanced = () => {
    let ls_rvars_advanced = {};
    /* primary adv button */
    ls_rvars_advanced['theme_adv_primary_btn_bgcol'] = '--hlpt-adv-primary-btn-bg-color';
    ls_rvars_advanced['theme_adv_primary_btn_bg_h_col'] = '--hlpt-adv-primary-btn-bg-hover-color';
    ls_rvars_advanced['theme_adv_primary_btn_txtcol'] = '--hlpt-adv-primary-btn-text-color';
    ls_rvars_advanced['theme_adv_primary_btn_txt_h_col'] = '--hlpt-adv-primary-btn-text-hover-color';
    ls_rvars_advanced['theme_adv_primary_btn_bdrcol'] = '--hlpt-adv-primary-btn-border-color';
    ls_rvars_advanced['theme_adv_primary_btn_bdr_h_col'] = '--hlpt-adv-primary-btn-border-hover-color';
    ls_rvars_advanced['theme_adv_primary_btn_radius'] = '--hlpt-adv-primary-btn-radius';
    /* secondary adv buttons */
    ls_rvars_advanced['theme_adv_secondary_btn_bgcol'] = '--hlpt-adv-secondary-btn-bg-color';
    ls_rvars_advanced['theme_adv_secondary_btn_bg_h_col'] = '--hlpt-adv-secondary-btn-bg-hover-color';
    ls_rvars_advanced['theme_adv_secondary_btn_txtcol'] = '--hlpt-adv-secondary-btn-text-color';
    ls_rvars_advanced['theme_adv_secondary_btn_txt_h_col'] = '--hlpt-adv-secondary-btn-text-hover-color';
    ls_rvars_advanced['theme_adv_secondary_btn_bdrcol'] = '--hlpt-adv-secondary-btn-border-color';
    ls_rvars_advanced['theme_adv_secondary_btn_bdr_h_col'] = '--hlpt-adv-secondary-btn-border-hover-color';
    ls_rvars_advanced['theme_adv_secondary_btn_radius'] = '--hlpt-adv-secondary-btn-radius';
    /* default adv button */
    ls_rvars_advanced['theme_adv_default_btn_bgcol'] = '--hlpt-adv-default-btn-bg-color';
    ls_rvars_advanced['theme_adv_default_btn_bg_h_col'] = '--hlpt-adv-default-btn-bg-hover-color';
    ls_rvars_advanced['theme_adv_default_btn_txtcol'] = '--hlpt-adv-default-btn-text-color';
    ls_rvars_advanced['theme_adv_default_btn_txt_h_col'] = '--hlpt-adv-default-btn-text-hover-color';
    ls_rvars_advanced['theme_adv_default_btn_bdrcol'] = '--hlpt-adv-default-btn-border-color';
    ls_rvars_advanced['theme_adv_default_btn_bdr_h_col'] = '--hlpt-adv-default-btn-border-hover-color';
    ls_rvars_advanced['theme_adv_default_btn_radius'] = '--hlpt-adv-default-btn-radius';
    /* default_light adv button */
    ls_rvars_advanced['theme_adv_default_light_btn_bgcol'] = '--hlpt-adv-default-light-btn-bg-color';
    ls_rvars_advanced['theme_adv_default_light_btn_bg_h_col'] = '--hlpt-adv-default-light-btn-bg-hover-color';
    ls_rvars_advanced['theme_adv_default_light_btn_txtcol'] = '--hlpt-adv-default-light-btn-text-color';
    ls_rvars_advanced['theme_adv_default_light_btn_txt_h_col'] = '--hlpt-adv-default-light-btn-text-hover-color';
    ls_rvars_advanced['theme_adv_default_light_btn_bdrcol'] = '--hlpt-adv-default-light-btn-border-color';
    ls_rvars_advanced['theme_adv_default_light_btn_bdr_h_col'] = '--hlpt-adv-default-light-btn-border-hover-color';
    ls_rvars_advanced['theme_adv_default_light_btn_radius'] = '--hlpt-adv-default-light-btn-radius';
    /* headercontrol button - profile  */
    ls_rvars_advanced['theme_adv_profile_btn_icon_col'] = '--hlpt-adv-profile-btn-icon-col';
    ls_rvars_advanced['theme_adv_profile_btn_icon_hover_col'] = '--hlpt-adv-profile-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_profile_btn_icon_bg_col'] = '--hlpt-adv-profile-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = '--hlpt-adv-profile-btn-icon-bg-hover-col';

    /* headercontrol button - help  */
    ls_rvars_advanced['theme_adv_help_btn_icon_col'] = '--hlpt-adv-help-btn-icon-col';
    ls_rvars_advanced['theme_adv_help_btn_icon_hover_col'] = '--hlpt-adv-help-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_help_btn_icon_bg_col'] = '--hlpt-adv-help-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_help_btn_icon_bg_hover_col'] = '--hlpt-adv-help-btn-icon-bg-hover-col';
    /* headercontrol button - notification  */
    ls_rvars_advanced['theme_adv_notification_btn_icon_col'] = '--hlpt-adv-notification-btn-icon-col';
    ls_rvars_advanced['theme_adv_notification_btn_icon_hover_col'] = '--hlpt-adv-notification-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_notification_btn_icon_bg_col'] = '--hlpt-adv-notification-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = '--hlpt-adv-notification-btn-icon-bg-hover-col';
    /* headercontrol button - viewchangelogs  */
    ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_col'] = '--hlpt-adv-viewchangelogs-btn-icon-col';
    ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = '--hlpt-adv-viewchangelogs-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = '--hlpt-adv-viewchangelogs-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = '--hlpt-adv-viewchangelogs-btn-icon-bg-hover-col';
    /* headercontrol button - phone  */
    ls_rvars_advanced['theme_adv_phone_btn_icon_col'] = '--hlpt-adv-phone-btn-icon-col';
    ls_rvars_advanced['theme_adv_phone_btn_icon_hover_col'] = '--hlpt-adv-phone-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_phone_btn_icon_bg_col'] = '--hlpt-adv-phone-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = '--hlpt-adv-phone-btn-icon-bg-hover-col';
    /* headercontrol button - zappychatbot  */
    ls_rvars_advanced['theme_adv_zappychatbot_btn_icon_col'] = '--hlpt-adv-zappychatbot-btn-icon-col';
    ls_rvars_advanced['theme_adv_zappychatbot_btn_icon_hover_col'] = '--hlpt-adv-zappychatbot-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_zappychatbot_btn_icon_bg_col'] = '--hlpt-adv-zappychatbot-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_zappychatbot_btn_icon_bg_hover_col'] = '--hlpt-adv-zappychatbot-btn-icon-bg-hover-col';
    /* headercontrol button - guidetour  */
    ls_rvars_advanced['theme_adv_guidetour_btn_icon_col'] = '--hlpt-adv-guidetour-btn-icon-col';
    ls_rvars_advanced['theme_adv_guidetour_btn_icon_hover_col'] = '--hlpt-adv-guidetour-btn-icon-hover-col';
    ls_rvars_advanced['theme_adv_guidetour_btn_icon_bg_col'] = '--hlpt-adv-guidetour-btn-icon-bg-col';
    ls_rvars_advanced['theme_adv_guidetour_btn_icon_bg_hover_col'] = '--hlpt-adv-guidetour-btn-icon-bg-hover-col';
    /* headerbgcolor - Header background color  */
    ls_rvars_advanced['theme_adv_headerbgcolor_start_col'] = '--hlpt-adv-headerbgcolor-start-col';
    ls_rvars_advanced['theme_adv_headerbgcolor_end_col'] = '--hlpt-adv-headerbgcolor-end-col';
    ls_rvars_advanced['theme_adv_headerbgcolor_stop_perc'] = '--hlpt-adv-headerbgcolor-stop-perc';
    ls_rvars_advanced['theme_adv_headerbgcolor_gradient_deg'] = '--hlpt-adv-headerbgcolor-gradient-deg';
    /* leftsidebarbgcolor - background color  */
    ls_rvars_advanced['theme_adv_leftsidebarbgcolor_start_col'] = '--hlpt-adv-leftsidebarbgcolor-start-col';
    ls_rvars_advanced['theme_adv_leftsidebarbgcolor_end_col'] = '--hlpt-adv-leftsidebarbgcolor-end-col';
    ls_rvars_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = '--hlpt-adv-leftsidebarbgcolor-stop-perc';
    ls_rvars_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = '--hlpt-adv-leftsidebarbgcolor-gradient-deg';
    /* leftsidebar - scrollbar color & width  */
    ls_rvars_advanced['theme_adv_scrollbarthumb_col'] = '--hlpt-adv-scrollbarthumb-col';
    ls_rvars_advanced['theme_adv_scrollbarthumb_col_tint'] = '--hlpt-adv-scrollbarthumb-col-tint';
    ls_rvars_advanced['theme_adv_scrollbartrack_col'] = '--hlpt-adv-scrollbartrack-col';
    ls_rvars_advanced['theme_adv_scrollbar_width'] = '--hlpt-adv-scrollbar-width';
    /* bodycontent - background color  */
    ls_rvars_advanced['theme_adv_bodycontent_start_col'] = '--hlpt-adv-bodycontent-start-col';
    ls_rvars_advanced['theme_adv_bodycontent_end_col'] = '--hlpt-adv-bodycontent-end-col';
    ls_rvars_advanced['theme_adv_bodycontent_stop_perc'] = '--hlpt-adv-bodycontent-stop-perc';
    ls_rvars_advanced['theme_adv_bodycontent_gradient_deg'] = '--hlpt-adv-bodycontent-gradient-deg';
    /* bodycontent - text color */
    ls_rvars_advanced['theme_adv_bodycontent_text_col'] = '--hlpt-adv-bodycontent-text-col';
    /* bodycontent - h1 h2 color & size   */
    ls_rvars_advanced['theme_adv_bodycontent_h1_text_col'] = '--hlpt-adv-bodycontent-h1-text-col';
    ls_rvars_advanced['theme_adv_bodycontent_h2_text_col'] = '--hlpt-adv-bodycontent-h2-text-col';
    ls_rvars_advanced['theme_adv_bodycontent_h1_text_size'] = '--hlpt-adv-bodycontent-h1-text-size';
    ls_rvars_advanced['theme_adv_bodycontent_h2_text_size'] = '--hlpt-adv-bodycontent-h2-text-size';
    /* mainnav - text hover, icon hover, hover-active background colors */
    ls_rvars_advanced['theme_adv_mainnav_text_hover_color'] = '--hlpt-adv-mainnav-text-hover-color';
    ls_rvars_advanced['theme_adv_mainnav_icon_hover_color'] = '--hlpt-adv-mainnav-icon-hover-color';
    ls_rvars_advanced['theme_adv_mainnav_hover_active_bg_color'] = '--hlpt-adv-mainnav-hover-active-bg-color';
    /* replacenavlinks -  rename main nav lable and replace icon mediastorage  */
    ls_rvars_advanced['theme_adv_mainnav_replace_mediastorage_label'] = '--hlpt-adv-mainnav-replace-mediastorage-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_mediastorage_icon'] = '--hlpt-adv-mainnav-replace-mediastorage-icon';
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    ls_rvars_advanced['theme_adv_mainnav_replace_launchpad_label'] = '--hlpt-adv-mainnav-replace-launchpad-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_launchpad_icon'] = '--hlpt-adv-mainnav-replace-launchpad-icon';
    /* replacenavlinks -  rename main nav lable and replace icon dashboard  */
    ls_rvars_advanced['theme_adv_mainnav_replace_dashboard_label'] = '--hlpt-adv-mainnav-replace-dashboard-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_dashboard_icon'] = '--hlpt-adv-mainnav-replace-dashboard-icon';
    /* replacenavlinks -  rename main nav lable and replace icon conversations  */
    ls_rvars_advanced['theme_adv_mainnav_replace_conversations_label'] = '--hlpt-adv-mainnav-replace-conversations-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_conversations_icon'] = '--hlpt-adv-mainnav-replace-conversations-icon';
    /* replacenavlinks -  rename main nav lable and replace icon calendars  */
    ls_rvars_advanced['theme_adv_mainnav_replace_calendars_label'] = '--hlpt-adv-mainnav-replace-calendars-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_calendars_icon'] = '--hlpt-adv-mainnav-replace-calendars-icon';
    /* replacenavlinks -  rename main nav lable and replace icon contacts  */
    ls_rvars_advanced['theme_adv_mainnav_replace_contacts_label'] = '--hlpt-adv-mainnav-replace-contacts-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_contacts_icon'] = '--hlpt-adv-mainnav-replace-contacts-icon';
    /* replacenavlinks -  rename main nav lable and replace icon opportunities  */
    ls_rvars_advanced['theme_adv_mainnav_replace_opportunities_label'] = '--hlpt-adv-mainnav-replace-opportunities-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_opportunities_icon'] = '--hlpt-adv-mainnav-replace-opportunities-icon';
    /* replacenavlinks -  rename main nav lable and replace icon payments  */
    ls_rvars_advanced['theme_adv_mainnav_replace_payments_label'] = '--hlpt-adv-mainnav-replace-payments-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_payments_icon'] = '--hlpt-adv-mainnav-replace-payments-icon';
    /* replacenavlinks -  rename main nav lable and replace icon marketing  */
    ls_rvars_advanced['theme_adv_mainnav_replace_marketing_label'] = '--hlpt-adv-mainnav-replace-marketing-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_marketing_icon'] = '--hlpt-adv-mainnav-replace-marketing-icon';
    /* replacenavlinks -  rename main nav lable and replace icon automation  */
    ls_rvars_advanced['theme_adv_mainnav_replace_automation_label'] = '--hlpt-adv-mainnav-replace-automation-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_automation_icon'] = '--hlpt-adv-mainnav-replace-automation-icon';
    /* replacenavlinks -  rename main nav lable and replace icon sites  */
    ls_rvars_advanced['theme_adv_mainnav_replace_sites_label'] = '--hlpt-adv-mainnav-replace-sites-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_sites_icon'] = '--hlpt-adv-mainnav-replace-sites-icon';
    /* replacenavlinks -  rename main nav lable and replace icon memberships  */
    ls_rvars_advanced['theme_adv_mainnav_replace_memberships_label'] = '--hlpt-adv-mainnav-replace-memberships-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_memberships_icon'] = '--hlpt-adv-mainnav-replace-memberships-icon';
    /* replacenavlinks -  rename main nav lable and replace icon reputation  */
    ls_rvars_advanced['theme_adv_mainnav_replace_reputation_label'] = '--hlpt-adv-mainnav-replace-reputation-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_reputation_icon'] = '--hlpt-adv-mainnav-replace-reputation-icon';
    /* replacenavlinks -  rename main nav lable and replace icon reporting  */
    ls_rvars_advanced['theme_adv_mainnav_replace_reporting_label'] = '--hlpt-adv-mainnav-replace-reporting-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_reporting_icon'] = '--hlpt-adv-mainnav-replace-reporting-icon';

    /* replacenavlinks -  rename main nav lable and replace icon app_marketplace  */
    ls_rvars_advanced['theme_adv_mainnav_replace_app_marketplace_label'] = '--hlpt-adv-mainnav-replace-app-marketplace-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_app_marketplace_icon'] = '--hlpt-adv-mainnav-replace-app-marketplace-icon';

    /* replacenavlinks -  rename main nav lable and replace icon mobileapp  */
    ls_rvars_advanced['theme_adv_mainnav_replace_mobileapp_label'] = '--hlpt-adv-mainnav-replace-mobileapp-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_mobileapp_icon'] = '--hlpt-adv-mainnav-replace-mobileapp-icon';

    /* replacenavlinks -  rename main nav lable and replace icon aiemployeepromo  */
    ls_rvars_advanced['theme_adv_mainnav_replace_aiemployeepromo_label'] = '--hlpt-adv-mainnav-replace-aiemployeepromo-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_aiemployeepromo_icon'] = '--hlpt-adv-mainnav-replace-aiemployeepromo-icon';

    /* replacenavlinks -  rename settings lable and replace icon businessinfo  */
    ls_rvars_advanced['theme_adv_mainnav_replace_businessinfo_label'] = '--hlpt-adv-mainnav-replace-businessinfo-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_businessinfo_icon'] = '--hlpt-adv-mainnav-replace-businessinfo-icon';
    /* replacenavlinks -  rename settings lable and replace icon companybilling  */
    ls_rvars_advanced['theme_adv_mainnav_replace_companybilling_label'] = '--hlpt-adv-mainnav-replace-companybilling-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_companybilling_icon'] = '--hlpt-adv-mainnav-replace-companybilling-icon';
    /* replacenavlinks -  rename settings lable and replace icon myprofile  */
    ls_rvars_advanced['theme_adv_mainnav_replace_myprofile_label'] = '--hlpt-adv-mainnav-replace-myprofile-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_myprofile_icon'] = '--hlpt-adv-mainnav-replace-myprofile-icon';
    /* replacenavlinks -  rename settings lable and replace icon mystaff  */
    ls_rvars_advanced['theme_adv_mainnav_replace_mystaff_label'] = '--hlpt-adv-mainnav-replace-mystaff-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_mystaff_icon'] = '--hlpt-adv-mainnav-replace-mystaff-icon';
    /* replacenavlinks -  rename settings lable and replace icon pipelines  */
    ls_rvars_advanced['theme_adv_mainnav_replace_pipelines_label'] = '--hlpt-adv-mainnav-replace-pipelines-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_pipelines_icon'] = '--hlpt-adv-mainnav-replace-pipelines-icon';
    /* replacenavlinks -  rename settings lable and replace icon calendar  */
    ls_rvars_advanced['theme_adv_mainnav_replace_calendar_label'] = '--hlpt-adv-mainnav-replace-calendar-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_calendar_icon'] = '--hlpt-adv-mainnav-replace-calendar-icon';
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettings  */
    ls_rvars_advanced['theme_adv_mainnav_replace_conversationaisettings_label'] = '--hlpt-adv-mainnav-replace-conversationaisettings-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_conversationaisettings_icon'] = '--hlpt-adv-mainnav-replace-conversationaisettings-icon';
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettingsv2  */
    ls_rvars_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_label'] = '--hlpt-adv-mainnav-replace-conversationaisettingsv2-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_conversationaisettingsv2_icon'] = '--hlpt-adv-mainnav-replace-conversationaisettingsv2-icon';
    /* replacenavlinks -  rename settings nav lable and replace icon aiagents  */
    ls_rvars_advanced['theme_adv_mainnav_replace_aiagents_label'] = '--hlpt-adv-mainnav-replace-aiagents-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_aiagents_icon'] = '--hlpt-adv-mainnav-replace-aiagents-icon';
    /* replacenavlinks -  rename settings nav lable and replace icon objects  */
    ls_rvars_advanced['theme_adv_mainnav_replace_objects_label'] = '--hlpt-adv-mainnav-replace-objects-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_objects_icon'] = '--hlpt-adv-mainnav-replace-objects-icon';
    /* replacenavlinks -  rename settings nav lable and replace icon whatsapp  */
    ls_rvars_advanced['theme_adv_mainnav_replace_whatsapp_label'] = '--hlpt-adv-mainnav-replace-whatsapp-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_whatsapp_icon'] = '--hlpt-adv-mainnav-replace-whatsapp-icon';
    /* replacenavlinks -  rename settings lable and replace icon phonenumbers  */
    ls_rvars_advanced['theme_adv_mainnav_replace_phonenumbers_label'] = '--hlpt-adv-mainnav-replace-phonenumbers-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_phonenumbers_icon'] = '--hlpt-adv-mainnav-replace-phonenumbers-icon';
    /* replacenavlinks -  rename settings lable and replace icon reputationmanagement  */
    ls_rvars_advanced['theme_adv_mainnav_replace_reputationmanagement_label'] = '--hlpt-adv-mainnav-replace-reputationmanagement-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_reputationmanagement_icon'] = '--hlpt-adv-mainnav-replace-reputationmanagement-icon';
    /* replacenavlinks -  rename settings lable and replace icon customfields  */
    ls_rvars_advanced['theme_adv_mainnav_replace_customfields_label'] = '--hlpt-adv-mainnav-replace-customfields-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_customfields_icon'] = '--hlpt-adv-mainnav-replace-customfields-icon';
    /* replacenavlinks -  rename settings lable and replace icon customvalues  */
    ls_rvars_advanced['theme_adv_mainnav_replace_customvalues_label'] = '--hlpt-adv-mainnav-replace-customvalues-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_customvalues_icon'] = '--hlpt-adv-mainnav-replace-customvalues-icon';
    /* replacenavlinks -  rename settings lable and replace icon managescoring  */
    ls_rvars_advanced['theme_adv_mainnav_replace_managescoring_label'] = '--hlpt-adv-mainnav-replace-managescoring-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_managescoring_icon'] = '--hlpt-adv-mainnav-replace-managescoring-icon';
    /* replacenavlinks -  rename settings lable and replace icon domains  */
    ls_rvars_advanced['theme_adv_mainnav_replace_domains_label'] = '--hlpt-adv-mainnav-replace-domains-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_domains_icon'] = '--hlpt-adv-mainnav-replace-domains-icon';
    /* replacenavlinks -  rename settings lable and replace icon media  */
    ls_rvars_advanced['theme_adv_mainnav_replace_media_label'] = '--hlpt-adv-mainnav-replace-media-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_media_icon'] = '--hlpt-adv-mainnav-replace-media-icon';
    /* replacenavlinks -  rename settings lable and replace icon urlredirects  */
    ls_rvars_advanced['theme_adv_mainnav_replace_urlredirects_label'] = '--hlpt-adv-mainnav-replace-urlredirects-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_urlredirects_icon'] = '--hlpt-adv-mainnav-replace-urlredirects-icon';
    /* replacenavlinks -  rename settings lable and replace icon integrations  */
    ls_rvars_advanced['theme_adv_mainnav_replace_integrations_label'] = '--hlpt-adv-mainnav-replace-integrations-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_integrations_icon'] = '--hlpt-adv-mainnav-replace-integrations-icon';
    /* replacenavlinks -  rename settings lable and replace icon pintegrations  */
    ls_rvars_advanced['theme_adv_mainnav_replace_pintegrations_label'] = '--hlpt-adv-mainnav-replace-pintegrations-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_pintegrations_icon'] = '--hlpt-adv-mainnav-replace-pintegrations-icon';
    /* replacenavlinks -  rename settings lable and replace icon brandboards  */
    ls_rvars_advanced['theme_adv_mainnav_replace_brandboards_label'] = '--hlpt-adv-mainnav-replace-brandboards-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_brandboards_icon'] = '--hlpt-adv-mainnav-replace-brandboards-icon';
    /* replacenavlinks -  rename settings lable and replace icon emailservices  */
    ls_rvars_advanced['theme_adv_mainnav_replace_emailservices_label'] = '--hlpt-adv-mainnav-replace-emailservices-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_emailservices_icon'] = '--hlpt-adv-mainnav-replace-emailservices-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationproviders  */
    ls_rvars_advanced['theme_adv_mainnav_replace_conversationproviders_label'] = '--hlpt-adv-mainnav-replace-conversationproviders-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_conversationproviders_icon'] = '--hlpt-adv-mainnav-replace-conversationproviders-icon';
    /* replacenavlinks -  rename settings lable and replace icon tags  */
    ls_rvars_advanced['theme_adv_mainnav_replace_tags_label'] = '--hlpt-adv-mainnav-replace-tags-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_tags_icon'] = '--hlpt-adv-mainnav-replace-tags-icon';
    /* replacenavlinks -  rename settings lable and replace icon labs  */
    ls_rvars_advanced['theme_adv_mainnav_replace_labs_label'] = '--hlpt-adv-mainnav-replace-labs-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_labs_icon'] = '--hlpt-adv-mainnav-replace-labs-icon';
    /* replacenavlinks -  rename settings lable and replace icon auditlogs  */
    ls_rvars_advanced['theme_adv_mainnav_replace_auditlogs_label'] = '--hlpt-adv-mainnav-replace-auditlogs-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_auditlogs_icon'] = '--hlpt-adv-mainnav-replace-auditlogs-icon';
    /* replacenavlinks -  rename settings lable and replace icon companies  */
    ls_rvars_advanced['theme_adv_mainnav_replace_companies_label'] = '--hlpt-adv-mainnav-replace-companies-label';
    ls_rvars_advanced['theme_adv_mainnav_replace_companies_icon'] = '--hlpt-adv-mainnav-replace-companies-icon';
    /* loadingicon - loading logo icon size  */
    ls_rvars_advanced['theme_adv_loadingicon_size'] = '--hlpt-adv-loadingicon-size';
    ls_rvars_advanced['theme_adv_loginlogo_size'] = '--hlpt-adv-loginlogo-size';
    ls_rvars_advanced['allow_subaccount'] = '--hlpt-adv-allow-subaccount';
    /* new dashboard */
    ls_rvars_advanced['theme_adv_opportunities_lead_col'] = '--hlpt-adv-chart-lead-color';
    ls_rvars_advanced['theme_adv_opportunities_won_col'] = '--hlpt-adv-chart-won-color';
    ls_rvars_advanced['theme_adv_opportunities_lost_col'] = '--hlpt-adv-chart-lost-color';
    ls_rvars_advanced['theme_adv_opportunities_abandoned_col'] = '--hlpt-adv-chart-abandoned-color';
    /* dashboard header banner -  sub heading */
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_subhead'] = '--hlpt-adv-dashboard-headerbanner-subhead';
    /* dashboard header banner -  button 1 text */
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_btn_1_text'] = '--hlpt-adv-dashboard-headerbanner-btn-1-text';
    /* dashboard header banner -  button 2 text */
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_btn_2_text'] = '--hlpt-adv-dashboard-headerbanner-btn-2-text';
    /* dashboard header banner -  button 1 link */
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_btn_1_link'] = '--hlpt-adv-dashboard-headerbanner-btn-1-link';
    /* dashboard header banner -  button 2 link */
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_btn_2_link'] = '--hlpt-adv-dashboard-headerbanner-btn-2-link';
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_bg_url'] = '--hlpt-adv-dashboard-headerbanner-bg-url';
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_bg_col'] = '--hlpt-adv-dashboard-headerbanner-bg-col';
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_text_col'] = '--hlpt-adv-dashboard-headerbanner-text-col';
    ls_rvars_advanced['theme_adv_dashboard_headerbanner_overlay_opacity'] = '--hlpt-adv-dashboard-headerbanner-overlay-opacity';
    ls_rvars_advanced['theme_membership_header_img'] = '--hlpt-membership-header-img';
    ls_rvars_advanced['theme_membership_header_img_label'] = '--hlpt-membership-header-img-label';
    return ls_rvars_advanced;
  };
  // assigncolor another combined rvar elements rvar elemets with ID
  const get_rvar_elements = () => {
    var rvar_elements = {};
    rvar_elements['--hlpt-primary-theme-color'] = 'dc-colorPicker-primary, dc-colorCode-primary';
    rvar_elements['--hlpt-primary-theme-color-tint'] = 'dc-colorPicker-primary';
    rvar_elements['--hlpt-primary-theme-bg-color'] = 'dc-colorPicker-primarybg, dc-colorCode-primarybg';
    rvar_elements['--hlpt-primary-theme-bg-color-tint'] = 'dc-colorPicker-primarybg';
    rvar_elements['--hlpt-secondary-theme-bg-color'] = 'dc-colorPicker-bg-gradient, dc-colorCode-bg-gradient';
    rvar_elements['--hlpt-secondary-theme-bg-color-tint'] = 'dc-colorPicker-bg-gradient';
    rvar_elements['--hlpt-primary-theme-color-lightmode'] = 'dc-colorPicker-primary';
    rvar_elements['--hlpt-left-nav-color'] = 'dc-colorPicker-leftsidebar-txtcol, dc-colorCode-leftsidebar-txtcol';
    rvar_elements['--hlpt-left-nav-icon-color'] = 'dc-colorPicker-leftsidebar-iconcol, dc-colorCode-leftsidebar-iconcol';
    /* primary adv button */
    rvar_elements['--hlpt-adv-primary-btn-bg-color'] = 'dc-colorPicker-adv-primary-btn-bgcol, dc-colorCode-adv-primary-btn-bgcol';
    rvar_elements['--hlpt-adv-primary-btn-bg-hover-color'] = 'dc-colorPicker-adv-primary-btn-bg-h-col, dc-colorCode-adv-primary-btn-bg-h-col';
    rvar_elements['--hlpt-adv-primary-btn-text-color'] = 'dc-colorPicker-adv-primary-btn-txtcol, dc-colorCode-adv-primary-btn-txtcol';
    rvar_elements['--hlpt-adv-primary-btn-text-hover-color'] = 'dc-colorPicker-adv-primary-btn-txt-h-col, dc-colorCode-adv-primary-btn-txt-h-col';
    rvar_elements['--hlpt-adv-primary-btn-border-color'] = 'dc-colorPicker-adv-primary-btn-bdrcol, dc-colorCode-adv-primary-btn-bdrcol';
    rvar_elements['--hlpt-adv-primary-btn-border-hover-color'] = 'dc-colorPicker-adv-primary-btn-bdr-h-col, dc-colorCode-adv-primary-btn-bdr-h-col';
    rvar_elements['--hlpt-adv-primary-btn-radius'] = 'dc-colorPicker-adv-primary-btn-radius';
    /* secondary adv buttons */
    rvar_elements['--hlpt-adv-secondary-btn-bg-color'] = 'dc-colorPicker-adv-secondary-btn-bgcol, dc-colorCode-adv-secondary-btn-bgcol';
    rvar_elements['--hlpt-adv-secondary-btn-bg-hover-color'] = 'dc-colorPicker-adv-secondary-btn-bg-h-col, dc-colorCode-adv-secondary-btn-bg-h-col';
    rvar_elements['--hlpt-adv-secondary-btn-text-color'] = 'dc-colorPicker-adv-secondary-btn-txtcol, dc-colorCode-adv-secondary-btn-txtcol';
    rvar_elements['--hlpt-adv-secondary-btn-text-hover-color'] = 'dc-colorPicker-adv-secondary-btn-txt-h-col, dc-colorCode-adv-secondary-btn-txt-h-col';
    rvar_elements['--hlpt-adv-secondary-btn-border-color'] = 'dc-colorPicker-adv-secondary-btn-bdrcol, dc-colorCode-adv-secondary-btn-bdrcol';
    rvar_elements['--hlpt-adv-secondary-btn-border-hover-color'] = 'dc-colorPicker-adv-secondary-btn-bdr-h-col, dc-colorCode-adv-secondary-btn-bdr-h-col';
    rvar_elements['--hlpt-adv-secondary-btn-radius'] = 'dc-colorPicker-adv-secondary-btn-radius';
    /* default adv button */
    rvar_elements['--hlpt-adv-default-btn-bg-color'] = 'dc-colorPicker-adv-default-btn-bgcol, dc-colorCode-adv-default-btn-bgcol';
    rvar_elements['--hlpt-adv-default-btn-bg-hover-color'] = 'dc-colorPicker-adv-default-btn-bg-h-col, dc-colorCode-adv-default-btn-bg-h-col';
    rvar_elements['--hlpt-adv-default-btn-text-color'] = 'dc-colorPicker-adv-default-btn-txtcol, dc-colorCode-adv-default-btn-txtcol';
    rvar_elements['--hlpt-adv-default-btn-text-hover-color'] = 'dc-colorPicker-adv-default-btn-txt-h-col, dc-colorCode-adv-default-btn-txt-h-col';
    rvar_elements['--hlpt-adv-default-btn-border-color'] = 'dc-colorPicker-adv-default-btn-bdrcol, dc-colorCode-adv-default-btn-bdrcol';
    rvar_elements['--hlpt-adv-default-btn-border-hover-color'] = 'dc-colorPicker-adv-default-btn-bdr-h-col, dc-colorCode-adv-default-btn-bdr-h-col';
    rvar_elements['--hlpt-adv-default-btn-radius'] = 'dc-colorPicker-adv-default-btn-radius';
    /* default_light adv button */
    rvar_elements['--hlpt-adv-default-light-btn-bg-color'] = 'dc-colorPicker-adv-default_light-btn-bgcol, dc-colorCode-adv-default_light-btn-bgcol';
    rvar_elements['--hlpt-adv-default-light-btn-bg-hover-color'] = 'dc-colorPicker-adv-default_light-btn-bg-h-col, dc-colorCode-adv-default_light-btn-bg-h-col';
    rvar_elements['--hlpt-adv-default-light-btn-text-color'] = 'dc-colorPicker-adv-default_light-btn-txtcol, dc-colorCode-adv-default_light-btn-txtcol';
    rvar_elements['--hlpt-adv-default-light-btn-text-hover-color'] = 'dc-colorPicker-adv-default_light-btn-txt-h-col, dc-colorCode-adv-default_light-btn-txt-h-col';
    rvar_elements['--hlpt-adv-default-light-btn-border-color'] = 'dc-colorPicker-adv-default_light-btn-bdrcol, dc-colorCode-adv-default_light-btn-bdrcol';
    rvar_elements['--hlpt-adv-default-light-btn-border-hover-color'] = 'dc-colorPicker-adv-default_light-btn-bdr-h-col, dc-colorCode-adv-default_light-btn-bdr-h-col';
    rvar_elements['--hlpt-adv-default-light-btn-radius'] = 'dc-colorPicker-adv-default_light-btn-radius';
    /* headercontrol button - profile  */
    rvar_elements['--hlpt-adv-profile-btn-icon-col'] = 'dc-colorPicker-adv-profile-btn-icon-col, dc-colorCode-adv-profile-btn-icon-col';
    rvar_elements['--hlpt-adv-profile-btn-icon-hover-col'] = 'dc-colorPicker-adv-profile-btn-icon-hover-col, dc-colorCode-adv-profile-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-profile-btn-icon-bg-col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-col, dc-colorCode-adv-profile-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-profile-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-hover-col, dc-colorCode-adv-profile-btn-icon-bg-hover-col';
    /* headercontrol button - help  */
    rvar_elements['--hlpt-adv-help-btn-icon-col'] = 'dc-colorPicker-adv-help-btn-icon-col, dc-colorCode-adv-help-btn-icon-col';
    rvar_elements['--hlpt-adv-help-btn-icon-hover-col'] = 'dc-colorPicker-adv-help-btn-icon-hover-col, dc-colorCode-adv-help-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-help-btn-icon-bg-col'] = 'dc-colorPicker-adv-help-btn-icon-bg-col, dc-colorCode-adv-help-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-help-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-help-btn-icon-bg-hover-col, dc-colorCode-adv-help-btn-icon-bg-hover-col';
    /* headercontrol button - notification  */
    rvar_elements['--hlpt-adv-notification-btn-icon-col'] = 'dc-colorPicker-adv-notification-btn-icon-col, dc-colorCode-adv-notification-btn-icon-col';
    rvar_elements['--hlpt-adv-notification-btn-icon-hover-col'] = 'dc-colorPicker-adv-notification-btn-icon-hover-col, dc-colorCode-adv-notification-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-notification-btn-icon-bg-col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-col, dc-colorCode-adv-notification-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-notification-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-hover-col, dc-colorCode-adv-notification-btn-icon-bg-hover-col';
    /* headercontrol button - viewchangelogs  */
    rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-col, dc-colorCode-adv-viewchangelogs-btn-icon-col';
    rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-hover-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col, dc-colorCode-adv-viewchangelogs-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-bg-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col, dc-colorCode-adv-viewchangelogs-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col, dc-colorCode-adv-viewchangelogs-btn-icon-bg-hover-col';
    /* headercontrol button - phone  */
    rvar_elements['--hlpt-adv-phone-btn-icon-col'] = 'dc-colorPicker-adv-phone-btn-icon-col, dc-colorCode-one-btn-icon-col';
    rvar_elements['--hlpt-adv-phone-btn-icon-hover-col'] = 'dc-colorPicker-adv-phone-btn-icon-hover-col, dc-colorCode-adv-phone-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-phone-btn-icon-bg-col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-col, dc-colorCode-adv-phone-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-phone-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-hover-col, dc-colorCode-adv-phone-btn-icon-bg-hover-col';
    /* headercontrol button - zappychatbot  */
    rvar_elements['--hlpt-adv-zappychatbot-btn-icon-col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-col, dc-colorCode-adv-zappychatbot-btn-icon-col';
    rvar_elements['--hlpt-adv-zappychatbot-btn-icon-hover-col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-hover-col, dc-colorCode-adv-zappychatbot-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-zappychatbot-btn-icon-bg-col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-bg-col, dc-colorCode-adv-zappychatbot-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-zappychatbot-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-zappychatbot-btn-icon-bg-hover-col, dc-colorCode-adv-zappychatbot-btn-icon-bg-hover-col';
    /* headercontrol button - guidetour  */
    rvar_elements['--hlpt-adv-guidetour-btn-icon-col'] = 'dc-colorPicker-adv-guidetour-btn-icon-col, dc-colorCode-adv-guidetour-btn-icon-col';
    rvar_elements['--hlpt-adv-guidetour-btn-icon-hover-col'] = 'dc-colorPicker-adv-guidetour-btn-icon-hover-col, dc-colorCode-adv-guidetour-btn-icon-hover-col';
    rvar_elements['--hlpt-adv-guidetour-btn-icon-bg-col'] = 'dc-colorPicker-adv-guidetour-btn-icon-bg-col, dc-colorCode-adv-guidetour-btn-icon-bg-col';
    rvar_elements['--hlpt-adv-guidetour-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-guidetour-btn-icon-bg-hover-col, dc-colorCode-adv-guidetour-btn-icon-bg-hover-col';
    /* headerbgcolor - Header background color  */
    rvar_elements['--hlpt-adv-headerbgcolor-start-col'] = 'dc-colorPicker-adv-headerbgcolor-start-col, dc-colorCode-adv-headerbgcolor-start-col';
    rvar_elements['--hlpt-adv-headerbgcolor-end-col'] = 'dc-colorPicker-adv-headerbgcolor-end-col, dc-colorCode-adv-headerbgcolor-end-col';
    rvar_elements['--hlpt-adv-headerbgcolor-stop-perc'] = 'dc-colorPicker-adv-headerbgcolor-stop-perc';
    rvar_elements['--hlpt-adv-headerbgcolor-gradient-deg'] = 'dc-colorPicker-adv-headerbgcolor-gradient-deg';
    /* leftsidebarbgcolor - background color  */
    rvar_elements['--hlpt-adv-leftsidebarbgcolor-start-col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-start-col, dc-colorCode-adv-leftsidebarbgcolor-start-col';
    rvar_elements['--hlpt-adv-leftsidebarbgcolor-end-col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-end-col, dc-colorCode-adv-leftsidebarbgcolor-end-col';
    rvar_elements['--hlpt-adv-leftsidebarbgcolor-stop-perc'] = 'dc-colorPicker-adv-leftsidebarbgcolor-stop-perc';
    rvar_elements['--hlpt-adv-leftsidebarbgcolor-gradient-deg'] = 'dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg';
    /* leftsidebar - scrollbar color   & width */
    rvar_elements['--hlpt-adv-scrollbarthumb-col'] = 'dc-colorPicker-adv-scrollbarthumb-col, dc-colorCode-adv-scrollbarthumb-col';
    rvar_elements['--hlpt-adv-scrollbarthumb-col-tint'] = 'dc-colorPicker-adv-scrollbarthumb-col-tint';
    rvar_elements['--hlpt-adv-scrollbartrack-col'] = 'dc-colorPicker-adv-scrollbartrack-col, dc-colorCode-adv-scrollbartrack-col';
    rvar_elements['--hlpt-adv-scrollbar-width'] = 'dc-colorPicker-adv-scrollbar-width';
    /* bodycontent - background color  */
    rvar_elements['--hlpt-adv-bodycontent-start-col'] = 'dc-colorPicker-adv-bodycontent-start-col, dc-colorCode-adv-bodycontent-start-col';
    rvar_elements['--hlpt-adv-bodycontent-end-col'] = 'dc-colorPicker-adv-bodycontent-end-col, dc-colorCode-adv-bodycontent-end-col';
    rvar_elements['--hlpt-adv-bodycontent-stop-perc'] = 'dc-colorPicker-adv-bodycontent-stop-perc';
    rvar_elements['--hlpt-adv-bodycontent-gradient-deg'] = 'dc-colorPicker-adv-bodycontent-gradient-deg';
    /* bodycontent - text color */
    rvar_elements['--hlpt-adv-bodycontent-text-col'] = 'dc-colorPicker-adv-bodycontent-text-col, dc-colorCode-adv-bodycontent-text-col';
    /* bodycontent - h1 h2 color & size   */
    rvar_elements['--hlpt-adv-bodycontent-h1-text-col'] = 'dc-colorPicker-adv-bodycontent-h1-text-col, dc-colorCode-adv-bodycontent-h1-text-col';
    rvar_elements['--hlpt-adv-bodycontent-h2-text-col'] = 'dc-colorPicker-adv-bodycontent-h2-text-col, dc-colorCode-adv-bodycontent-h2-text-col';
    rvar_elements['--hlpt-adv-bodycontent-h1-text-size'] = 'dc-colorPicker-adv-bodycontent-h1-text-size';
    rvar_elements['--hlpt-adv-bodycontent-h2-text-size'] = 'dc-colorPicker-adv-bodycontent-h2-text-size';
    /* mainnav - text hover, icon hover, hover-active background colors */
    rvar_elements['--hlpt-adv-mainnav-text-hover-color'] = 'dc-colorPicker-adv-mainnav-text-hover-color, dc-colorCode-adv-mainnav-text-hover-color';
    rvar_elements['--hlpt-adv-mainnav-icon-hover-color'] = 'dc-colorPicker-adv-mainnav-icon-hover-color, dc-colorCode-adv-mainnav-icon-hover-color';
    rvar_elements['--hlpt-adv-mainnav-hover-active-bg-color'] = 'dc-colorPicker-adv-mainnav-hover-active-bg-color, dc-colorCode-adv-mainnav-hover-active-bg-color';
    /* replacenavlinks -  rename main nav lable and replace icon mediastorage  */
    rvar_elements['--hlpt-adv-mainnav-replace-mediastorage-label'] = 'dc-colorPicker-adv-mainnav-replace-mediastorage-label';
    rvar_elements['--hlpt-adv-mainnav-replace-mediastorage-icon'] = 'dc-colorPicker-adv-mainnav-replace-mediastorage-icon';
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    rvar_elements['--hlpt-adv-mainnav-replace-launchpad-label'] = 'dc-colorPicker-adv-mainnav-replace-launchpad-label';
    rvar_elements['--hlpt-adv-mainnav-replace-launchpad-icon'] = 'dc-colorPicker-adv-mainnav-replace-launchpad-icon';
    /* replacenavlinks -  rename main nav lable and replace icon dashboard  */
    rvar_elements['--hlpt-adv-mainnav-replace-dashboard-label'] = 'dc-colorPicker-adv-mainnav-replace-dashboard-label';
    rvar_elements['--hlpt-adv-mainnav-replace-dashboard-icon'] = 'dc-colorPicker-adv-mainnav-replace-dashboard-icon';
    /* replacenavlinks -  rename main nav lable and replace icon conversations  */
    rvar_elements['--hlpt-adv-mainnav-replace-conversations-label'] = 'dc-colorPicker-adv-mainnav-replace-conversations-label';
    rvar_elements['--hlpt-adv-mainnav-replace-conversations-icon'] = 'dc-colorPicker-adv-mainnav-replace-conversations-icon';
    /* replacenavlinks -  rename main nav lable and replace icon calendars  */
    rvar_elements['--hlpt-adv-mainnav-replace-calendars-label'] = 'dc-colorPicker-adv-mainnav-replace-calendars-label';
    rvar_elements['--hlpt-adv-mainnav-replace-calendars-icon'] = 'dc-colorPicker-adv-mainnav-replace-calendars-icon';
    /* replacenavlinks -  rename main nav lable and replace icon contacts  */
    rvar_elements['--hlpt-adv-mainnav-replace-contacts-label'] = 'dc-colorPicker-adv-mainnav-replace-contacts-label';
    rvar_elements['--hlpt-adv-mainnav-replace-contacts-icon'] = 'dc-colorPicker-adv-mainnav-replace-contacts-icon';
    /* replacenavlinks -  rename main nav lable and replace icon opportunities  */
    rvar_elements['--hlpt-adv-mainnav-replace-opportunities-label'] = 'dc-colorPicker-adv-mainnav-replace-opportunities-label';
    rvar_elements['--hlpt-adv-mainnav-replace-opportunities-icon'] = 'dc-colorPicker-adv-mainnav-replace-opportunities-icon';
    /* replacenavlinks -  rename main nav lable and replace icon payments  */
    rvar_elements['--hlpt-adv-mainnav-replace-payments-label'] = 'dc-colorPicker-adv-mainnav-replace-payments-label';
    rvar_elements['--hlpt-adv-mainnav-replace-payments-icon'] = 'dc-colorPicker-adv-mainnav-replace-payments-icon';
    /* replacenavlinks -  rename main nav lable and replace icon marketing  */
    rvar_elements['--hlpt-adv-mainnav-replace-marketing-label'] = 'dc-colorPicker-adv-mainnav-replace-marketing-label';
    rvar_elements['--hlpt-adv-mainnav-replace-marketing-icon'] = 'dc-colorPicker-adv-mainnav-replace-marketing-icon';
    /* replacenavlinks -  rename main nav lable and replace icon automation  */
    rvar_elements['--hlpt-adv-mainnav-replace-automation-label'] = 'dc-colorPicker-adv-mainnav-replace-automation-label';
    rvar_elements['--hlpt-adv-mainnav-replace-automation-icon'] = 'dc-colorPicker-adv-mainnav-replace-automation-icon';
    /* replacenavlinks -  rename main nav lable and replace icon sites  */
    rvar_elements['--hlpt-adv-mainnav-replace-sites-label'] = 'dc-colorPicker-adv-mainnav-replace-sites-label';
    rvar_elements['--hlpt-adv-mainnav-replace-sites-icon'] = 'dc-colorPicker-adv-mainnav-replace-sites-icon';
    /* replacenavlinks -  rename main nav lable and replace icon memberships  */
    rvar_elements['--hlpt-adv-mainnav-replace-memberships-label'] = 'dc-colorPicker-adv-mainnav-replace-memberships-label';
    rvar_elements['--hlpt-adv-mainnav-replace-memberships-icon'] = 'dc-colorPicker-adv-mainnav-replace-memberships-icon';
    /* replacenavlinks -  rename main nav lable and replace icon reputation  */
    rvar_elements['--hlpt-adv-mainnav-replace-reputation-label'] = 'dc-colorPicker-adv-mainnav-replace-reputation-label';
    rvar_elements['--hlpt-adv-mainnav-replace-reputation-icon'] = 'dc-colorPicker-adv-mainnav-replace-reputation-icon';
    /* replacenavlinks -  rename main nav lable and replace icon reporting  */
    rvar_elements['--hlpt-adv-mainnav-replace-reporting-label'] = 'dc-colorPicker-adv-mainnav-replace-reporting-label';
    rvar_elements['--hlpt-adv-mainnav-replace-reporting-icon'] = 'dc-colorPicker-adv-mainnav-replace-reporting-icon';
    /* replacenavlinks -  rename main nav lable and replace icon app_marketplace  */
    rvar_elements['--hlpt-adv-mainnav-replace-app-marketplace-label'] = 'dc-colorPicker-adv-mainnav-replace-app-marketplace-label';
    rvar_elements['--hlpt-adv-mainnav-replace-app-marketplace-icon'] = 'dc-colorPicker-adv-mainnav-replace-app-marketplace-icon';
    /* replacenavlinks -  rename main nav lable and replace icon mobileapp  */
    rvar_elements['--hlpt-adv-mainnav-replace-mobileapp-label'] = 'dc-colorPicker-adv-mainnav-replace-mobileapp-label';
    rvar_elements['--hlpt-adv-mainnav-replace-mobileapp-icon'] = 'dc-colorPicker-adv-mainnav-replace-mobileapp-icon';

    /* replacenavlinks -  rename main nav lable and replace icon aiemployeepromo  */
    rvar_elements['--hlpt-adv-mainnav-replace-aiemployeepromo-label'] = 'dc-colorPicker-adv-mainnav-replace-aiemployeepromo-label';
    rvar_elements['--hlpt-adv-mainnav-replace-aiemployeepromo-icon'] = 'dc-colorPicker-adv-mainnav-replace-aiemployeepromo-icon';

    /* replacenavlinks -  rename settings lable and replace icon businessinfo  */
    rvar_elements['--hlpt-adv-mainnav-replace-businessinfo-label'] = 'dc-colorPicker-adv-mainnav-replace-businessinfo-label';
    rvar_elements['--hlpt-adv-mainnav-replace-businessinfo-icon'] = 'dc-colorPicker-adv-mainnav-replace-businessinfo-icon';
    /* replacenavlinks -  rename settings lable and replace icon companybilling  */
    rvar_elements['--hlpt-adv-mainnav-replace-companybilling-label'] = 'dc-colorPicker-adv-mainnav-replace-companybilling-label';
    rvar_elements['--hlpt-adv-mainnav-replace-companybilling-icon'] = 'dc-colorPicker-adv-mainnav-replace-companybilling-icon';
    /* replacenavlinks -  rename settings lable and replace icon myprofile  */
    rvar_elements['--hlpt-adv-mainnav-replace-myprofile-label'] = 'dc-colorPicker-adv-mainnav-replace-myprofile-label';
    rvar_elements['--hlpt-adv-mainnav-replace-myprofile-icon'] = 'dc-colorPicker-adv-mainnav-replace-myprofile-icon';
    /* replacenavlinks -  rename settings lable and replace icon mystaff  */
    rvar_elements['--hlpt-adv-mainnav-replace-mystaff-label'] = 'dc-colorPicker-adv-mainnav-replace-mystaff-label';
    rvar_elements['--hlpt-adv-mainnav-replace-mystaff-icon'] = 'dc-colorPicker-adv-mainnav-replace-mystaff-icon';
    /* replacenavlinks -  rename settings lable and replace icon pipelines  */
    rvar_elements['--hlpt-adv-mainnav-replace-pipelines-label'] = 'dc-colorPicker-adv-mainnav-replace-pipelines-label';
    rvar_elements['--hlpt-adv-mainnav-replace-pipelines-icon'] = 'dc-colorPicker-adv-mainnav-replace-pipelines-icon';
    /* replacenavlinks -  rename settings lable and replace icon calendar  */
    rvar_elements['--hlpt-adv-mainnav-replace-calendar-label'] = 'dc-colorPicker-adv-mainnav-replace-calendar-label';
    rvar_elements['--hlpt-adv-mainnav-replace-calendar-icon'] = 'dc-colorPicker-adv-mainnav-replace-calendar-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationaisettings  */
    rvar_elements['--hlpt-adv-mainnav-replace-conversationaisettings-label'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettings-label';
    rvar_elements['--hlpt-adv-mainnav-replace-conversationaisettings-icon'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettings-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationaisettingsv2  */
    rvar_elements['--hlpt-adv-mainnav-replace-conversationaisettingsv2-label'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-label';
    rvar_elements['--hlpt-adv-mainnav-replace-conversationaisettingsv2-icon'] = 'dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-icon';
    /* replacenavlinks -  rename settings lable and replace icon aiagents  */
    rvar_elements['--hlpt-adv-mainnav-replace-aiagents-label'] = 'dc-colorPicker-adv-mainnav-replace-aiagents-label';
    rvar_elements['--hlpt-adv-mainnav-replace-aiagents-icon'] = 'dc-colorPicker-adv-mainnav-replace-aiagents-icon';
    /* replacenavlinks -  rename settings lable and replace icon objects  */
    rvar_elements['--hlpt-adv-mainnav-replace-objects-label'] = 'dc-colorPicker-adv-mainnav-replace-objects-label';
    rvar_elements['--hlpt-adv-mainnav-replace-objects-icon'] = 'dc-colorPicker-adv-mainnav-replace-objects-icon';
    /* replacenavlinks -  rename settings lable and replace icon whatsapp  */
    rvar_elements['--hlpt-adv-mainnav-replace-whatsapp-label'] = 'dc-colorPicker-adv-mainnav-replace-whatsapp-label';
    rvar_elements['--hlpt-adv-mainnav-replace-whatsapp-icon'] = 'dc-colorPicker-adv-mainnav-replace-whatsapp-icon';
    /* replacenavlinks -  rename settings lable and replace icon phonenumbers  */
    rvar_elements['--hlpt-adv-mainnav-replace-phonenumbers-label'] = 'dc-colorPicker-adv-mainnav-replace-phonenumbers-label';
    rvar_elements['--hlpt-adv-mainnav-replace-phonenumbers-icon'] = 'dc-colorPicker-adv-mainnav-replace-phonenumbers-icon';
    /* replacenavlinks -  rename settings lable and replace icon reputationmanagement  */
    rvar_elements['--hlpt-adv-mainnav-replace-reputationmanagement-label'] = 'dc-colorPicker-adv-mainnav-replace-reputationmanagement-label';
    rvar_elements['--hlpt-adv-mainnav-replace-reputationmanagement-icon'] = 'dc-colorPicker-adv-mainnav-replace-reputationmanagement-icon';
    /* replacenavlinks -  rename settings lable and replace icon customfields  */
    rvar_elements['--hlpt-adv-mainnav-replace-customfields-label'] = 'dc-colorPicker-adv-mainnav-replace-customfields-label';
    rvar_elements['--hlpt-adv-mainnav-replace-customfields-icon'] = 'dc-colorPicker-adv-mainnav-replace-customfields-icon';
    /* replacenavlinks -  rename settings lable and replace icon customvalues  */
    rvar_elements['--hlpt-adv-mainnav-replace-customvalues-label'] = 'dc-colorPicker-adv-mainnav-replace-customvalues-label';
    rvar_elements['--hlpt-adv-mainnav-replace-customvalues-icon'] = 'dc-colorPicker-adv-mainnav-replace-customvalues-icon';
    /* replacenavlinks -  rename settings lable and replace icon managescoring  */
    rvar_elements['--hlpt-adv-mainnav-replace-managescoring-label'] = 'dc-colorPicker-adv-mainnav-replace-managescoring-label';
    rvar_elements['--hlpt-adv-mainnav-replace-managescoring-icon'] = 'dc-colorPicker-adv-mainnav-replace-managescoring-icon';
    /* replacenavlinks -  rename settings lable and replace icon domains  */
    rvar_elements['--hlpt-adv-mainnav-replace-domains-label'] = 'dc-colorPicker-adv-mainnav-replace-domains-label';
    rvar_elements['--hlpt-adv-mainnav-replace-domains-icon'] = 'dc-colorPicker-adv-mainnav-replace-domains-icon';
    /* replacenavlinks -  rename settings lable and replace icon media  */
    rvar_elements['--hlpt-adv-mainnav-replace-media-label'] = 'dc-colorPicker-adv-mainnav-replace-media-label';
    rvar_elements['--hlpt-adv-mainnav-replace-media-icon'] = 'dc-colorPicker-adv-mainnav-replace-media-icon';
    /* replacenavlinks -  rename settings lable and replace icon urlredirects  */
    rvar_elements['--hlpt-adv-mainnav-replace-urlredirects-label'] = 'dc-colorPicker-adv-mainnav-replace-urlredirects-label';
    rvar_elements['--hlpt-adv-mainnav-replace-urlredirects-icon'] = 'dc-colorPicker-adv-mainnav-replace-urlredirects-icon';
    /* replacenavlinks -  rename settings lable and replace icon integrations  */
    rvar_elements['--hlpt-adv-mainnav-replace-integrations-label'] = 'dc-colorPicker-adv-mainnav-replace-integrations-label';
    rvar_elements['--hlpt-adv-mainnav-replace-integrations-icon'] = 'dc-colorPicker-adv-mainnav-replace-integrations-icon';
    /* replacenavlinks -  rename settings lable and replace icon pintegrations  */
    rvar_elements['--hlpt-adv-mainnav-replace-pintegrations-label'] = 'dc-colorPicker-adv-mainnav-replace-pintegrations-label';
    rvar_elements['--hlpt-adv-mainnav-replace-pintegrations-icon'] = 'dc-colorPicker-adv-mainnav-replace-pintegrations-icon';
    /* replacenavlinks -  rename settings lable and replace icon brandboards  */
    rvar_elements['--hlpt-adv-mainnav-replace-brandboards-label'] = 'dc-colorPicker-adv-mainnav-replace-brandboards-label';
    rvar_elements['--hlpt-adv-mainnav-replace-brandboards-icon'] = 'dc-colorPicker-adv-mainnav-replace-brandboards-icon';
    /* replacenavlinks -  rename settings lable and replace icon emailservices  */
    rvar_elements['--hlpt-adv-mainnav-replace-emailservices-label'] = 'dc-colorPicker-adv-mainnav-replace-emailservices-label';
    rvar_elements['--hlpt-adv-mainnav-replace-emailservices-icon'] = 'dc-colorPicker-adv-mainnav-replace-emailservices-icon';
    /* replacenavlinks -  rename settings lable and replace icon conversationproviders  */
    rvar_elements['--hlpt-adv-mainnav-replace-conversationproviders-label'] = 'dc-colorPicker-adv-mainnav-replace-conversationproviders-label';
    rvar_elements['--hlpt-adv-mainnav-replace-conversationproviders-icon'] = 'dc-colorPicker-adv-mainnav-replace-conversationproviders-icon';
    /* replacenavlinks -  rename settings lable and replace icon tags  */
    rvar_elements['--hlpt-adv-mainnav-replace-tags-label'] = 'dc-colorPicker-adv-mainnav-replace-tags-label';
    rvar_elements['--hlpt-adv-mainnav-replace-tags-icon'] = 'dc-colorPicker-adv-mainnav-replace-tags-icon';
    /* replacenavlinks -  rename settings lable and replace icon labs  */
    rvar_elements['--hlpt-adv-mainnav-replace-labs-label'] = 'dc-colorPicker-adv-mainnav-replace-labs-label';
    rvar_elements['--hlpt-adv-mainnav-replace-labs-icon'] = 'dc-colorPicker-adv-mainnav-replace-labs-icon';
    /* replacenavlinks -  rename settings lable and replace icon auditlogs  */
    rvar_elements['--hlpt-adv-mainnav-replace-auditlogs-label'] = 'dc-colorPicker-adv-mainnav-replace-auditlogs-label';
    rvar_elements['--hlpt-adv-mainnav-replace-auditlogs-icon'] = 'dc-colorPicker-adv-mainnav-replace-auditlogs-icon';
    /* replacenavlinks -  rename settings lable and replace icon companies  */
    rvar_elements['--hlpt-adv-mainnav-replace-companies-label'] = 'dc-colorPicker-adv-mainnav-replace-companies-label';
    rvar_elements['--hlpt-adv-mainnav-replace-companies-icon'] = 'dc-colorPicker-adv-mainnav-replace-companies-icon';
    /* loadingicon - loading logo icon size  */
    rvar_elements['--hlpt-adv-loadingicon-size'] = 'dc-colorpicker-adv-loadingicon-size';
    rvar_elements['--hlpt-adv-loginlogo-size'] = 'dc-colorpicker-adv-loginlogo-size';
    rvar_elements['--hlpt-adv-allow-subaccount'] = 'dc-colorpicker-adv-allow-subaccount';
    /* new dashboard */
    rvar_elements['--hlpt-adv-chart-lead-color'] = 'dc-colorPicker-adv-opportunities-lead-col, dc-colorCode-adv-opportunities-lead-col';
    rvar_elements['--hlpt-adv-chart-won-color'] = 'dc-colorPicker-adv-opportunities-won-col, dc-colorCode-adv-opportunities-won-col';
    rvar_elements['--hlpt-adv-chart-lost-color'] = 'dc-colorPicker-adv-opportunities-lost-col, dc-colorCode-adv-opportunities-lost-col';
    rvar_elements['--hlpt-adv-chart-abandoned-color'] = 'dc-colorPicker-adv-opportunities-abandoned-col, dc-colorCode-adv-opportunities-abandoned-col';
    /* dashboard header banner -  sub heading */
    rvar_elements['--hlpt-adv-dashboard-headerbanner-subhead'] = 'dc-colorPicker-adv-dashboard-headerbanner-subhead';
    /* dashboard header banner -  button 1 text */
    rvar_elements['--hlpt-adv-dashboard-headerbanner-btn-1-text'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-1-text';
    /* dashboard header banner -  button 2 text */
    rvar_elements['--hlpt-adv-dashboard-headerbanner-btn-2-text'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-2-text';
    /* dashboard header banner -  button 1 link */
    rvar_elements['--hlpt-adv-dashboard-headerbanner-btn-1-link'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-1-link';
    /* dashboard header banner -  button 2 link */
    rvar_elements['--hlpt-adv-dashboard-headerbanner-btn-2-link'] = 'dc-colorPicker-adv-dashboard-headerbanner-btn-2-link';
    rvar_elements['--hlpt-adv-dashboard-headerbanner-bg-col'] = 'dc-colorPicker-adv-dashboard-headerbanner-bg-col, dc-colorCode-adv-dashboard-headerbanner-bg-col';
    rvar_elements['--hlpt-adv-dashboard-headerbanner-text-col'] = 'dc-colorPicker-adv-dashboard-headerbanner-text-col, dc-colorCode-adv-dashboard-headerbanner-text-col';
    rvar_elements['--hlpt-adv-dashboard-headerbanner-overlay-opacity'] = 'dc-colorPicker-adv-dashboard-headerbanner-overlay-opacity';
    rvar_elements['--dynamic-font-family'] = 'dc-colorPicker-font-family';
    rvar_elements['--dynamic-font-family-h1'] = 'dc-colorPicker-font-family-h1';
    rvar_elements['--dynamic-font-family-h2'] = 'dc-colorPicker-font-family-h2';
    rvar_elements['--dynamic-font-family-h3'] = 'dc-colorPicker-font-family-h3';
    rvar_elements['--dynamic-font-family-h4'] = 'dc-colorPicker-font-family-h4';
    rvar_elements['--dynamic-font-family-sidemenu'] = 'dc-colorPicker-font-family-sidemenu';
    rvar_elements['--dynamic-font-family-topmenu'] = 'dc-colorPicker-font-family-topmenu';
    rvar_elements['--hlpt-membership-header-img'] = 'dc-membership-header-img';
    rvar_elements['--hlpt-membership-header-img-label'] = 'dc-membership-header-img-label';
    return rvar_elements;
  };
  /// Rootvars Unit Values
  const get_rootvar_unit_values = () => {
    var unit_values = {};
    unit_values['--hlpt-primary-theme-color'] = 'FF';
    unit_values['--hlpt-primary-theme-color-tint'] = '1A';
    unit_values['--hlpt-primary-theme-bg-color'] = 'FF';
    unit_values['--hlpt-primary-theme-bg-color-tint'] = '1A';
    unit_values['--hlpt-secondary-theme-bg-color'] = 'FF';
    unit_values['--hlpt-secondary-theme-bg-color-tint'] = '1A';
    unit_values['--hlpt-left-nav-color'] = 'FF';
    unit_values['--hlpt-left-nav-icon-color'] = 'FF';
    /* primary adv button */
    unit_values['--hlpt-adv-primary-btn-bg-color'] = 'FF';
    unit_values['--hlpt-adv-primary-btn-bg-hover-color'] = 'FF';
    unit_values['--hlpt-adv-primary-btn-text-color'] = 'FF';
    unit_values['--hlpt-adv-primary-btn-text-hover-color'] = 'FF';
    unit_values['--hlpt-adv-primary-btn-border-color'] = 'FF';
    unit_values['--hlpt-adv-primary-btn-border-hover-color'] = 'FF';
    unit_values['--hlpt-adv-primary-btn-radius'] = 'px';
    /* secondary adv buttons */
    unit_values['--hlpt-adv-secondary-btn-bg-color'] = 'FF';
    unit_values['--hlpt-adv-secondary-btn-bg-hover-color'] = 'FF';
    unit_values['--hlpt-adv-secondary-btn-text-color'] = 'FF';
    unit_values['--hlpt-adv-secondary-btn-text-hover-color'] = 'FF';
    unit_values['--hlpt-adv-secondary-btn-border-color'] = 'FF';
    unit_values['--hlpt-adv-secondary-btn-border-hover-color'] = 'FF';
    unit_values['--hlpt-adv-secondary-btn-radius'] = 'px';
    /* default adv button */
    unit_values['--hlpt-adv-default-btn-bg-color'] = 'FF';
    unit_values['--hlpt-adv-default-btn-bg-hover-color'] = 'FF';
    unit_values['--hlpt-adv-default-btn-text-color'] = 'FF';
    unit_values['--hlpt-adv-default-btn-text-hover-color'] = 'FF';
    unit_values['--hlpt-adv-default-btn-border-color'] = 'FF';
    unit_values['--hlpt-adv-default-btn-border-hover-color'] = 'FF';
    unit_values['--hlpt-adv-default-btn-radius'] = 'px';
    /* default_light adv button */
    unit_values['--hlpt-adv-default-light-btn-bg-color'] = 'FF';
    unit_values['--hlpt-adv-default-light-btn-bg-hover-color'] = 'FF';
    unit_values['--hlpt-adv-default-light-btn-text-color'] = 'FF';
    unit_values['--hlpt-adv-default-light-btn-text-hover-color'] = 'FF';
    unit_values['--hlpt-adv-default-light-btn-border-color'] = 'FF';
    unit_values['--hlpt-adv-default-light-btn-border-hover-color'] = 'FF';
    unit_values['--hlpt-adv-default-light-btn-radius'] = 'px';
    /* headercontrol button - profile  */
    unit_values['--hlpt-adv-profile-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-profile-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-profile-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-profile-btn-icon-bg-hover-col'] = 'FF';
    /* headercontrol button - help  */
    unit_values['--hlpt-adv-help-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-help-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-help-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-help-btn-icon-bg-hover-col'] = 'FF';
    /* headercontrol button - notification  */
    unit_values['--hlpt-adv-notification-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-notification-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-notification-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-notification-btn-icon-bg-hover-col'] = 'FF';
    /* headercontrol button - viewchangelogs  */
    unit_values['--hlpt-adv-viewchangelogs-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-viewchangelogs-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-viewchangelogs-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-viewchangelogs-btn-icon-bg-hover-col'] = 'FF';
    /* headercontrol button - phone  */
    unit_values['--hlpt-adv-phone-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-phone-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-phone-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-phone-btn-icon-bg-hover-col'] = 'FF';
    /* headercontrol button - zappychatbot  */
    unit_values['--hlpt-adv-zappychatbot-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-zappychatbot-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-zappychatbot-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-zappychatbot-btn-icon-bg-hover-col'] = 'FF';
    /* headercontrol button - guidetour  */
    unit_values['--hlpt-adv-guidetour-btn-icon-col'] = 'FF';
    unit_values['--hlpt-adv-guidetour-btn-icon-hover-col'] = 'FF';
    unit_values['--hlpt-adv-guidetour-btn-icon-bg-col'] = 'FF';
    unit_values['--hlpt-adv-guidetour-btn-icon-bg-hover-col'] = 'FF';
    /* headerbgcolor - Header background color  */
    unit_values['--hlpt-adv-headerbgcolor-start-col'] = 'FF';
    unit_values['--hlpt-adv-headerbgcolor-end-col'] = 'FF';
    unit_values['--hlpt-adv-headerbgcolor-stop-perc'] = '%';
    unit_values['--hlpt-adv-headerbgcolor-gradient-deg'] = 'deg';
    /* leftsidebarbgcolor - background color  */
    unit_values['--hlpt-adv-leftsidebarbgcolor-start-col'] = 'FF';
    unit_values['--hlpt-adv-leftsidebarbgcolor-end-col'] = 'FF';
    unit_values['--hlpt-adv-leftsidebarbgcolor-stop-perc'] = '%';
    unit_values['--hlpt-adv-leftsidebarbgcolor-gradient-deg'] = 'deg';
    /* leftsidebar - scrollbar color & width  */
    unit_values['--hlpt-adv-scrollbarthumb-col'] = '7D';
    unit_values['--hlpt-adv-scrollbartrack-col'] = '1A';
    unit_values['--hlpt-adv-scrollbar-width'] = 'px';
    /* bodycontent - background color  */
    unit_values['--hlpt-adv-bodycontent-start-col'] = 'FF';
    unit_values['--hlpt-adv-bodycontent-end-col'] = 'FF';
    unit_values['--hlpt-adv-bodycontent-stop-perc'] = '%';
    unit_values['--hlpt-adv-bodycontent-gradient-deg'] = 'deg';
    /* bodycontent - text color */
    unit_values['--hlpt-adv-bodycontent-text-col'] = 'FF';
    /* bodycontent - h1 h2 color & size   */
    unit_values['--hlpt-adv-bodycontent-h1-text-col'] = 'FF';
    unit_values['--hlpt-adv-bodycontent-h2-text-col'] = 'FF';
    unit_values['--hlpt-adv-bodycontent-h1-text-size'] = 'px';
    unit_values['--hlpt-adv-bodycontent-h2-text-size'] = 'px';
    /* mainnav - text hover, icon hover, hover-active background colors */
    unit_values['--hlpt-adv-mainnav-text-hover-color'] = 'FF';
    unit_values['--hlpt-adv-mainnav-icon-hover-color'] = 'FF';
    unit_values['--hlpt-adv-mainnav-hover-active-bg-color'] = 'FF';
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    unit_values['--hlpt-adv-loadingicon-size'] = 'px';
    unit_values['--hlpt-adv-loginlogo-size'] = 'px';
    /* new dashboard */
    unit_values['--hlpt-adv-chart-lead-color'] = 'FF';
    unit_values['--hlpt-adv-chart-won-color'] = 'FF';
    unit_values['--hlpt-adv-chart-lost-color'] = 'FF';
    unit_values['--hlpt-adv-chart-abandoned-color'] = 'FF';
    unit_values['--hlpt-adv-dashboard-headerbanner-bg-col'] = 'FF';
    unit_values['--hlpt-adv-dashboard-headerbanner-text-col'] = 'FF';
    unit_values['--hlpt-adv-dashboard-headerbanner-overlay-opacity'] = '';
    unit_values['--dynamic-font-family'] = '';
    unit_values['--dynamic-font-family-h1'] = '';
    unit_values['--dynamic-font-family-h2'] = '';
    unit_values['--dynamic-font-family-h3'] = '';
    unit_values['--dynamic-font-family-h4'] = '';
    unit_values['--dynamic-font-family-sidemenu'] = '';
    unit_values['--dynamic-font-family-topmenu'] = '';

    return unit_values;
  };
  /// Draggable Element IDs
  const get_draggable_elems = () => {
    var draggable_elems = {};
    draggable_elems['generate_script_js'] = 'generate-script-js';
    draggable_elems['generate_script_varcss'] = 'generate-script-varcss';
    draggable_elems['copytoclipboard_btn'] = 'copytoclipboard-btn';
    draggable_elems['dc_login_page-cover_img'] = 'dc-login-page-cover-img';
    draggable_elems['dc_login_page-logo_img'] = 'dc-login-page-logo-img';
    draggable_elems['dc_footer_contactinfo'] = 'dc-footer-contactinfo';
    draggable_elems['dc_loading_icon'] = 'dc-loading-icon';
    draggable_elems['unsaved_theme_notifier'] = 'unsaved-theme-notifier';
    draggable_elems['right'] = 'right';
    draggable_elems['left'] = 'left';
    draggable_elems['center'] = 'center';
    return get_draggable_elems;
  };
  ///// ls cleanwhite icon values obj
  const get_cw_icons_values = () => {
    var cw_icons_values = {};
    cw_icons_values['e027'] = 'rocket-launch';
    cw_icons_values['f625'] = 'grid-2';
    cw_icons_values['e1e7'] = 'inbox-in';
    cw_icons_values['f073'] = 'calendar-days';
    cw_icons_values['f2bb'] = 'user-large';
    cw_icons_values['f662'] = 'filter-circle-dollar';
    cw_icons_values['e5d9'] = 'receipt';
    cw_icons_values['e4e8'] = 'bullhorn';
    cw_icons_values['e5d5'] = 'webhook';
    cw_icons_values['f1ea'] = 'database';
    cw_icons_values['f559'] = 'award';
    cw_icons_values['f587'] = 'star-shooting';
    cw_icons_values['e473'] = 'chart-pie-simple';
    cw_icons_values['f3cd'] = 'mobile-screen-button';
    cw_icons_values['f0b1'] = 'briefcase';
    cw_icons_values['f555'] = 'wallet';
    cw_icons_values['f406'] = 'user-large';
    cw_icons_values['e603'] = 'user-group-simple';
    cw_icons_values['f662'] = 'filter-circle-dollar';
    cw_icons_values['f073'] = 'calendar-days';
    cw_icons_values['e1ec'] = 'microchip-ai';
    cw_icons_values['e223'] = 'phone-arrow-down-left';
    cw_icons_values['e036'] = 'star-shooting';
    cw_icons_values['f61b'] = 'route-interstate';
    cw_icons_values['f7ea'] = 'brackets-curly';
    cw_icons_values['e41c'] = 'hundred-points';
    cw_icons_values['f0ac'] = 'globe';
    cw_icons_values['f03d'] = 'video';
    cw_icons_values['f5eb'] = 'diamond-turn-right';
    cw_icons_values['f126'] = 'code-branch';
    cw_icons_values['e16f'] = 'envelope-dot';
    cw_icons_values['f328'] = 'clipboard';
    cw_icons_values['f02c'] = 'tags';
    cw_icons_values['e5f1'] = 'flask-gear';
    cw_icons_values['e5d8'] = 'chart-mixed-up-circle-currency';
    cw_icons_values['e0cc'] = 'building-circle-check';
    return cw_icons_values;
  };
  ///// ls reset obj advanced
  const get_reset_btn_obj_advanced = () => {
    var reset_btn_obj = {};
    /* primary adv button */
    reset_btn_obj['resetbtn-button-settings'] = [];
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bgcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bg_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_txtcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_txt_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bdrcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bdr_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_radius');
    /* secondary adv button */
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bgcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bg_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_txtcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_txt_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bdrcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bdr_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_radius');
    /* default adv button */
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bgcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bg_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_txtcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_txt_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bdrcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bdr_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_radius');
    /* default_light adv button */
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bgcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bg_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_txtcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_txt_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bdrcol');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bdr_h_col');
    reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_radius');
    /* profile button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'] = [];
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_bg_hover_col');
    /* help button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_bg_hover_col');
    /* notification button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_bg_hover_col');
    /* viewchangelogs button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_bg_hover_col');
    /* phone button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_bg_hover_col');
    /* zappychatbot button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_zappychatbot_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_zappychatbot_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_zappychatbot_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_zappychatbot_btn_icon_bg_hover_col');
    /* guidetour button - headercontrol    */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_guidetour_btn_icon_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_guidetour_btn_icon_hover_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_guidetour_btn_icon_bg_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_guidetour_btn_icon_bg_hover_col');
    /* headerbgcolor - Header background color  */
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_start_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_end_col');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_stop_perc');
    reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_gradient_deg');

    /* bodycontent - background color  */
    reset_btn_obj['resetbtn-body-settings'] = [];
    reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_start_col');
    reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_end_col');
    reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_stop_perc');
    reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_gradient_deg');
    /* bodycontent - text color  */
    reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_text_col');
    /* bodycontent - h1 h2 color & size   */
    reset_btn_obj['resetbtn-heading-settings'] = [];
    reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h1_text_col');
    reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h2_text_col');
    reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h1_text_size');
    reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h2_text_size');
    /* leftsidebarbgcolor - Left Sidebar background color  */
    reset_btn_obj['resetbtn-leftsidebar-settings'] = [];
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_start_col');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_end_col');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_stop_perc');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_gradient_deg');
    /* leftsidebarbgcolor - scrollbra color  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_scrollbarthumb_col');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_scrollbarthumb_col_tint');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_scrollbartrack_col');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_scrollbar_width');
    /* mainnav - text hover, icon hover, hover-active background colors   */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_text_hover_color');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_icon_hover_color');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_hover_active_bg_color');
    /* replacenavlinks -  rename main nav lable and replace icon mediastorage  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_mediastorage_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_mediastorage_icon');
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_launchpad_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_launchpad_icon');
    /* replacenavlinks -  rename main nav lable and replace icon dashboard  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_dashboard_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_dashboard_icon');
    /* replacenavlinks -  rename main nav lable and replace icon conversations  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversations_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversations_icon');
    /* replacenavlinks -  rename main nav lable and replace icon calendars  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_calendars_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_calendars_icon');
    /* replacenavlinks -  rename main nav lable and replace icon contacts  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_contacts_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_contacts_icon');
    /* replacenavlinks -  rename main nav lable and replace icon opportunities  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_opportunities_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_opportunities_icon');
    /* replacenavlinks -  rename main nav lable and replace icon payments  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_payments_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_payments_icon');
    /* replacenavlinks -  rename main nav lable and replace icon marketing  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_marketing_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_marketing_icon');
    /* replacenavlinks -  rename main nav lable and replace icon automation  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_automation_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_automation_icon');
    /* replacenavlinks -  rename main nav lable and replace icon sites  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_sites_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_sites_icon');
    /* replacenavlinks -  rename main nav lable and replace icon memberships  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_memberships_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_memberships_icon');
    /* replacenavlinks -  rename main nav lable and replace icon reputation  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_reputation_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_reputation_icon');
    /* replacenavlinks -  rename main nav lable and replace icon reporting  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_reporting_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_reporting_icon');
    /* replacenavlinks -  rename main nav lable and replace icon app_marketplace  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_app_marketplace_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_app_marketplace_icon');
    /* replacenavlinks -  rename main nav lable and replace icon mobileapp  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_mobileapp_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_mobileapp_icon');
    /* replacenavlinks -  rename main nav lable and replace icon aiemployeepromo  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_aiemployeepromo_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_aiemployeepromo_icon');
    /////////////// SETTINGS
    /* replacenavlinks -  rename settings nav lable and replace icon businessinfo  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_businessinfo_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_businessinfo_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon companybilling  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_companybilling_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_companybilling_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon myprofile  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_myprofile_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_myprofile_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon mystaff  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_mystaff_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_mystaff_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon pipelines  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_pipelines_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_pipelines_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon calendar  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_calendar_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_calendar_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettings  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversationaisettings_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversationaisettings_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon conversationaisettingsv2  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversationaisettingsv2_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversationaisettingsv2_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon aiagents  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_aiagents_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_aiagents_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon objects  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_objects_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_objects_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon whatsapp  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_whatsapp_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_whatsapp_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon phonenumbers  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_phonenumbers_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_phonenumbers_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon reputationmanagement  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_reputationmanagement_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_reputationmanagement_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon customfields  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_customfields_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_customfields_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon customvalues  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_customvalues_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_customvalues_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon managescoring  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_managescoring_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_managescoring_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon domains  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_domains_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_domains_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon media  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_media_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_media_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon urlredirects  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_urlredirects_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_urlredirects_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon integrations  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_integrations_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_integrations_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon pintegrations  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_pintegrations_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_pintegrations_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon brandboards  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_brandboards_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_brandboards_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon emailservices  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_emailservices_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_emailservices_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon conversationproviders  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversationproviders_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_conversationproviders_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon tags  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_tags_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_tags_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon labs  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_labs_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_labs_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon auditlogs  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_auditlogs_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_auditlogs_icon');
    /* replacenavlinks -  rename settings nav lable and replace icon companies  */
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_companies_label');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_replace_companies_icon');
    reset_btn_obj['resetbtn-leftsidebar-settings'].push('allow_subaccount');
    /* new dashboard */
    reset_btn_obj['resetbtn-newdashboard-settings'] = [];
    reset_btn_obj['resetbtn-newdashboard-settings'].push('theme_adv_opportunities_lead_col');
    reset_btn_obj['resetbtn-newdashboard-settings'].push('theme_adv_opportunities_won_col');
    reset_btn_obj['resetbtn-newdashboard-settings'].push('theme_adv_opportunities_lost_col');
    reset_btn_obj['resetbtn-newdashboard-settings'].push('theme_adv_opportunities_abandoned_col');
    /* replacenavlinks -  rename main nav lable and replace icon LAUNCHPAD  */
    reset_btn_obj['resetbtn-newdashboard-banner-settings'] = [];
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_subhead');
    /* dashboard header banner -  button 1 text */
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_btn_1_text');
    /* dashboard header banner -  button 2 text */
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_btn_2_text');
    /* dashboard header banner -  button 1 link */
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_btn_1_link');
    /* dashboard header banner -  button 2 link */
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_btn_2_link');
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_bg_url');
    reset_btn_obj['resetbtn-newdashboard-banner-settings'].push('theme_adv_dashboard_headerbanner_overlay_opacity');
    return reset_btn_obj;
  };
  // *********** DATA TO SEND  *********** */
  const theme_data_to_send = (ls_key, obj_item) => {
    let return_val = '';
    if (typeof obj_item !== 'undefned' && obj_item) return_val = obj_item;
    if (ls_key && localStorage.getItem(ls_key)) {
      return_val = localStorage.getItem(ls_key);
    }
    return return_val;
  };
  const formatted_theme_data_to_send = function () {
    var ls_obj_general = get_ls_obj_general();
    var ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };
    const theme_data_post_db = {};
    for (const [key, value] of Object.entries(ls_obj)) {
      theme_data_post_db[key] = theme_data_to_send(key, value);
    }
    return theme_data_post_db;
  };
  //// setup data attributes***.
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
  };

  //// setup PUT - POST data.
  const theme_data_to_db = function () {
    const themegen_settings = {};
    themegen_settings['settings'] = {};
    themegen_settings['settings'] = formatted_theme_data_to_send();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify(themegen_settings);
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    const loader = document.querySelector('.loader');
    const generate_css_message = document.querySelector('.generate-css-message');
    const error_message = document.querySelector('.error-message');
    const success_message = document.querySelector('.success-message');
    const script_cutom_window_wrapper = document.querySelector('.hiddenbynature');
    let cl = location.host;
    var api_url = themegen + '?d=' + cl + '&k=' + get_data_attribute_value('data-ark');
    let location_id = '';
    if (localStorage.getItem('themegen_publish_selected_location')) location_id = localStorage.getItem('themegen_publish_selected_location');
    if (location_id) {
      api_url += '&l=' + location_id;
    }

    fetch(api_url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })

      .then((data) => {
        console.log('Success:', data);
        if (typeof loader !== 'undefined' && loader) {
          loader.style.setProperty('display', 'none', 'important');
          loader.style.opacity = '0';
        }
        if (typeof generate_css_message !== 'undefined' && generate_css_message) {
          generate_css_message.style.setProperty('display', 'block', 'important');
          generate_css_message.style.opacity = '1';
        }
        if (typeof error_message !== 'undefined' && error_message) {
          error_message.style.setProperty('display', 'none', 'important');
          error_message.style.opacity = '0';
        }
        if (typeof success_message !== 'undefined' && success_message) {
          success_message.style.setProperty('display', 'block', 'important');
          success_message.style.opacity = '1';
        }
        if (typeof script_cutom_window_wrapper !== 'undefined' && script_cutom_window_wrapper) {
          script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
          script_cutom_window_wrapper.style.opacity = '0';
        }
      })

      .catch((error) => {
        console.error('Error:', error);
        if (typeof loader !== 'undefined' && loader) {
          loader.style.setProperty('display', 'none', 'important');
          loader.style.opacity = '0';
        }
        if (typeof error_message !== 'undefined' && error_message) {
          error_message.style.setProperty('display', 'block', 'important');
          error_message.style.opacity = '1';
        }
        if (typeof generate_css_message !== 'undefined' && generate_css_message) {
          generate_css_message.style.setProperty('display', 'block', 'important');
          generate_css_message.style.opacity = '1';
        }
        if (typeof success_message !== 'undefined' && success_message) {
          success_message.style.setProperty('display', 'none', 'important');
          success_message.style.opacity = '0';
        }
        if (typeof script_cutom_window_wrapper !== 'undefined' && script_cutom_window_wrapper) {
          script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
          script_cutom_window_wrapper.style.opacity = '0';
        }
      });
  };

  //// setup PUT - POST data.
  const delete_selected_locaton_theme_data = function (location_id) {
    var themegen_data = window.org_theme_data;
    var location_details = __get_location_settings(themegen_data, location_id);
    if (typeof location_details === 'object' && location_details.hasOwnProperty('location_settings_exist') && location_details.location_settings_exist) {
      const themegen_settings = {};
      themegen_settings['settings'] = {};
      themegen_settings['settings'] = formatted_theme_data_to_send();
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };
      const loader = document.querySelector('.loader');
      const generate_css_message = document.querySelector('.generate-css-message');
      const error_message = document.querySelector('.error-message');
      const success_message = document.querySelector('.success-message');
      const script_cutom_window_wrapper = document.querySelector('.hiddenbynature');

      var api_url = themegen + '?d=' + location.host + '&k=' + get_data_attribute_value('data-ark');
      let location_id = '';
      if (localStorage.getItem('themegen_publish_selected_location')) location_id = localStorage.getItem('themegen_publish_selected_location');
      if (location_id) {
        api_url += '&l=' + location_id;
      }
      fetch(api_url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })

        .then((data) => {
          console.log('Success:', data);
          if (typeof loader !== 'undefined' && loader) {
            loader.style.setProperty('display', 'none', 'important');
            loader.style.opacity = '0';
          }
          if (typeof generate_css_message !== 'undefined' && generate_css_message) {
            generate_css_message.style.setProperty('display', 'block', 'important');
            generate_css_message.style.opacity = '1';
          }
          if (typeof error_message !== 'undefined' && error_message) {
            error_message.style.setProperty('display', 'none', 'important');
            error_message.style.opacity = '0';
          }
          if (typeof success_message !== 'undefined' && success_message) {
            success_message.style.setProperty('display', 'block', 'important');
            success_message.style.opacity = '1';
          }
          if (typeof script_cutom_window_wrapper !== 'undefined' && script_cutom_window_wrapper) {
            script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
            script_cutom_window_wrapper.style.opacity = '0';
          }
        })

        .catch((error) => {
          console.error('Error:', error);
          if (typeof loader !== 'undefined' && loader) {
            loader.style.setProperty('display', 'none', 'important');
            loader.style.opacity = '0';
          }
          if (typeof error_message !== 'undefined' && error_message) {
            error_message.style.setProperty('display', 'block', 'important');
            error_message.style.opacity = '1';
          }
          if (typeof generate_css_message !== 'undefined' && generate_css_message) {
            generate_css_message.style.setProperty('display', 'block', 'important');
            generate_css_message.style.opacity = '1';
          }
          if (typeof success_message !== 'undefined' && success_message) {
            success_message.style.setProperty('display', 'none', 'important');
            success_message.style.opacity = '0';
          }
          if (typeof script_cutom_window_wrapper !== 'undefined' && script_cutom_window_wrapper) {
            script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
            script_cutom_window_wrapper.style.opacity = '0';
          }
        });
      // }
    }
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
    return user_allowed = true;
  };

  const is_user_panel_allowed = function () {
    const isUser = document.body.classList.contains('IsUser');
    const isUser_panel = document.querySelector('#dashboard-customizer-panel');
    const isUser_panel_selectTheme = document.querySelector('.card.tsg-panel');
    if (isUser) {
      if (isUser_panel && !isUser_panel.classList.contains('panel-hidden')) isUser_panel.classList.add('panel-hidden');
      if (isUser_panel_selectTheme && !isUser_panel_selectTheme.classList.contains('panel-hidden')) isUser_panel_selectTheme.classList.add('panel-hidden');
    }
  };

  const is_location_settings_active = function () {
    let location_settings_active = false;
    if (localStorage.getItem('themegen_activate_subaccount_settings')) {
      if (localStorage.getItem('themegen_activate_subaccount_settings') === 'true') {
        location_settings_active = true;
      } else {
        location_settings_active = false;
      }
    }
    return location_settings_active;
  };
  const is_theme_builder_allowed = function () {
    const tb_btn = document.querySelector('#custom-themegen-header-btn');
    let themegen_data = window.org_theme_data;
    let tb_allowed = false;
    let page_url = document.location.href;
    let selected_theme = 'theme_dark';
    if (window.selected_theme) selected_theme = window.selected_theme;
    let allowed_location_id = dashboard_themes.theme_data[selected_theme].advanced_settings.allow_subaccount;
    if (window.themegen_settings) allowed_location_id = window.themegen_settings.allow_subaccount;
    if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup_settings')) {
      allowed_location_id = themegen_data.themegensetup_settings.allow_subaccount;
    }
    if (!page_url.includes('/location/')) {
      tb_allowed = true;
      if (typeof tb_btn !== 'undefined' && tb_btn) {
        tb_btn.style.display = 'block';
      }
    } else if (page_url.includes(`/location/${allowed_location_id}/`)) {
      tb_allowed = true;
      if (typeof tb_btn !== 'undefined' && tb_btn) {
        tb_btn.style.display = 'block';
      }
    } else {
      tb_allowed = false;
      if (typeof tb_btn !== 'undefined' && tb_btn) {
        tb_btn.style.display = 'none';
      }
    }
    return tb_allowed = true;
  };

  const tb_init_btn = () => {
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.target.nodeName === 'BODY' && mutation.type === 'attributes') {
          if (is_theme_builder_allowed()) {
            create_theme_gen_userinfo_btn();
          }
        }
      }
    });
    const observerConfig = {
      attributes: true,
      attributeFilter: ['class', 'style', 'id'],
    };
    observer.observe(document.body, observerConfig);
  };
  //// setup to add dynamic stylesheets
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
  //// setup conditional display of clean white theme sections, navigation and leftsidear icons.
  const display_cw_elements = function () {
    const main_navigation = document.querySelector('#main-navigation-switch');
    const leftsidebar_icon = document.querySelector('#leftsidebar-icon-col-elem');
    if (window.themegen_settings.theme_name === 'Clean White' || window.selected_theme === 'theme_cleanwhite') {
      if (typeof main_navigation !== 'undefined' && main_navigation) {
        if (typeof leftsidebar_icon !== 'undefined' && leftsidebar_icon) {
          main_navigation.classList.add('disable-topnavigation');
        } else {
          main_navigation.classList.remove('disable-topnavigation');
        }
      }
    }
  };
  // setup gateway button for Theme Builder in user profile settings and button listner
  const create_theme_gen_userinfo_btn = function () {
    const hl_userinfo_card = document.querySelector('.user-info-card');
    if (!document.body.contains(document.querySelector('#custom-themegen-header-btn')) && is_user_allowed() && is_theme_builder_allowed()) {
      if (typeof hl_userinfo_card !== 'undefined' && hl_userinfo_card) {
        const themeGenHeaderBtn = document.createElement('div');
        themeGenHeaderBtn.innerHTML = `<div class="btn custom-theme-generator-header-btn"><span>Theme Builder</span></div>`;
        themeGenHeaderBtn.setAttribute('id', 'custom-themegen-header-btn');
        themeGenHeaderBtn.classList.add('hl-header--themegen-header-btn');
        document.querySelector('.user-info-card').before(themeGenHeaderBtn);
      }
    }
    const header_gen_btn = document.querySelector('#custom-themegen-header-btn');
    const panel_Reference = document.querySelector('#dashboard-customizer-panel');
    if (typeof header_gen_btn !== 'undefined' && header_gen_btn && typeof panel_Reference !== 'undefined' && panel_Reference) {
      header_gen_btn.addEventListener('click', function () {
        panel_Reference.style.display = 'block';
      });
    }
  };
  //// setup selected theme display in theme selection dropdown
  const dropdown_selected_theme_display = function () {
    const theme_published_vs_disabled =
      window.selected_theme !== 'theme_custom' ? `<span class="modify-theme-btn"> \u2190 Published (â˜…)</span>` : '<span class="modify-theme-btn"> \u2190 Theme Disabled</span>';
    const dropdown_options = document.querySelector('#dc-themeName');
    if (typeof dropdown_options !== 'undefined' && dropdown_options) {
      for (let i = 0; i < dropdown_options.options.length; i++) {
        if (dropdown_options.options[i].getAttribute('selected1') !== null) {
          dropdown_options.options[i].innerHTML += `${theme_published_vs_disabled}`;
          break;
        }
      }
    }
  };
  //// activate / deactivate advanced settings
  const setup_advanced_settings = function () {
    const activate_advanced_toggle = document.querySelector('#activate-advanced-settings');
    let activate_advance_settings = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_advance_settings = window.themegen_settings.activate_advance_settings;
    if (activate_advance_settings === 'true') {
      document.body.setAttribute('data-hlpt-tsg', 'hlpt-advanced-settings');
      if (typeof activate_advanced_toggle !== 'undefined' && activate_advanced_toggle) {
        activate_advanced_toggle.checked = true;
        localStorage.setItem('activate_advance_settings', 'true');
      }
    } else {
      document.body.removeAttribute('data-hlpt-tsg');
      if (typeof activate_advanced_toggle !== 'undefined' && activate_advanced_toggle) {
        activate_advanced_toggle.checked = false;
        localStorage.setItem('activate_advance_settings', 'false');
      }
    }
    if (typeof activate_advanced_toggle !== 'undefined' && activate_advanced_toggle) {
      activate_advanced_toggle.addEventListener('change', function () {
        if (this.checked) {
          if (!document.body.hasAttribute('data-hlpt-tsg')) {
            document.body.setAttribute('data-hlpt-tsg', 'hlpt-advanced-settings');
          }
          activate_advanced_toggle.checked = true;
          localStorage.setItem('activate_advance_settings', 'true');
        } else {
          if (document.body.hasAttribute('data-hlpt-tsg')) document.body.removeAttribute('data-hlpt-tsg');
          activate_advanced_toggle.checked = false;
          localStorage.setItem('activate_advance_settings', 'false');
        }
      });
    }
  };

  //// activate / deactivate advanced settings
  const setup_dashboard_banner_settings = function () {
    const activate_dashbanner_toggle = document.querySelector('#activate-dashboard-banner-settings');
    const dashbanner_options_display = document.querySelector('.enable-dashboard-banner-options');
    const dashbanner = document.querySelector('.dashboard-header-banner');
    let activate_dashboard_banner_settings = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_dashboard_banner_settings = window.themegen_settings.activate_dashboard_banner_settings;
    if (activate_dashboard_banner_settings === 'true') {
      if (typeof activate_dashbanner_toggle !== 'undefined' && activate_dashbanner_toggle) {
        activate_dashbanner_toggle.checked = true;
        localStorage.setItem('activate_dashboard_banner_settings', 'true');
        if (dashbanner_options_display) dashbanner_options_display.classList.add('active');
        if (dashbanner) dashbanner.classList.remove('hide');
      }
    } else {
      if (typeof activate_dashbanner_toggle !== 'undefined' && activate_dashbanner_toggle) {
        activate_dashbanner_toggle.checked = false;
        localStorage.setItem('activate_dashboard_banner_settings', 'false');
        if (dashbanner_options_display) dashbanner_options_display.classList.remove('active');
        if (dashbanner) dashbanner.classList.add('hide');
      }
    }
    if (typeof activate_dashbanner_toggle !== 'undefined' && activate_dashbanner_toggle) {
      activate_dashbanner_toggle.addEventListener('change', function () {
        if (this.checked) {
          activate_dashbanner_toggle.checked = true;
          scrollToId('dashboard-banner');
          localStorage.setItem('activate_dashboard_banner_settings', 'true');
          if (dashbanner_options_display) dashbanner_options_display.classList.add('active');
          if (document.querySelector('.dashboard-header-banner-bg')) {
            document.querySelector('.dashboard-header-banner-bg').classList.remove('hide');
          }
        } else {
          activate_dashbanner_toggle.checked = false;
          if (document.querySelector('.dashboard-header-banner-bg')) {
            document.querySelector('.dashboard-header-banner-bg').classList.add('hide');
          }
          localStorage.setItem('activate_dashboard_banner_settings', 'false');
          if (dashbanner_options_display) dashbanner_options_display.classList.remove('active');
        }
        createDashboardBanner();
      });
    }
  };
  const d_banner_btn_internal_links = function () {
    const internal_link_toggle = document.querySelector('#activate-dashboard-banner-btn-internal-links');
    const internal_link_note = document.querySelector('.internal-links-note');
    let activate_d_banner_btn_internal_links = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_d_banner_btn_internal_links = window.themegen_settings.theme_adv_dashboard_headerbanner_btn_link_intrl;
    if (activate_d_banner_btn_internal_links === 'true') {
      if (typeof internal_link_toggle !== 'undefined' && internal_link_toggle) {
        internal_link_toggle.checked = true;
        localStorage.setItem('theme_adv_dashboard_headerbanner_btn_link_intrl', 'true');
        if (internal_link_note) internal_link_note.classList.add('show');
      }
    } else {
      if (typeof internal_link_toggle !== 'undefined' && internal_link_toggle) {
        internal_link_toggle.checked = false;
        localStorage.setItem('theme_adv_dashboard_headerbanner_btn_link_intrl', 'false');
        if (internal_link_note) internal_link_note.classList.remove('show');
      }
    }
    if (typeof internal_link_toggle !== 'undefined' && internal_link_toggle) {
      internal_link_toggle.addEventListener('change', function () {
        if (this.checked) {
          internal_link_toggle.checked = true;
          localStorage.setItem('theme_adv_dashboard_headerbanner_btn_link_intrl', 'true');
          if (internal_link_note) internal_link_note.classList.add('show');
        } else {
          internal_link_toggle.checked = false;
          localStorage.setItem('theme_adv_dashboard_headerbanner_btn_link_intrl', 'false');
          if (internal_link_note) internal_link_note.classList.remove('show');
        }
      });
    }
  };
  //// activate / deactivate advanced settings
  const setup_activate_translations = function () {
    const activate_translations_toggle = document.querySelector('#activate-translations');
    let activate_translations = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_translations = window.themegen_settings.activate_translations;
    if (activate_translations === 'true') {
      document.body.setAttribute('data-hlpt-tsgl', 'hlpt-e-lang');
      if (typeof activate_translations_toggle !== 'undefined' && activate_translations_toggle) {
        activate_translations_toggle.checked = true;
        localStorage.setItem('activate_translations', 'true');
      }
    } else {
      document.body.removeAttribute('data-hlpt-tsgl');
      if (typeof activate_translations_toggle !== 'undefined' && activate_translations_toggle) {
        activate_translations_toggle.checked = false;
        localStorage.setItem('activate_translations', 'false');
      }
    }
    if (typeof activate_translations_toggle !== 'undefined' && activate_translations_toggle) {
      activate_translations_toggle.addEventListener('change', function () {
        if (this.checked) {
          if (!document.body.hasAttribute('data-hlpt-tsgl')) {
            document.body.setAttribute('data-hlpt-tsgl', 'hlpt-e-lang');
          }
          activate_translations_toggle.checked = true;
          scrollToId('lss');
          localStorage.setItem('activate_translations', 'true');
        } else {
          if (document.body.hasAttribute('data-hlpt-tsgl')) document.body.removeAttribute('data-hlpt-tsgl');
          activate_translations_toggle.checked = false;
          localStorage.setItem('activate_translations', 'false');
        }
      });
    }
  };

  /// allow banner display
  const is_display_hide_banner_allowed = function () {
    let url = document.location.href;
    let display_allowed = false;
    if (location.href.endsWith('/dashboard')) {
      display_allowed = true;
    }
    return display_allowed;
  };

  const render_dashboard_banner = function () {
    var dashboard_alerts_yext = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) dashboard_alerts_yext = window.themegen_settings.hide_yext_banner;
    var dashboard_alerts_wordpress = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) dashboard_alerts_wordpress = window.themegen_settings.hide_wordpress_banner;
    const display_yext_alert = document.querySelector('#display-yext-banner');
    const display_wordpress_alert = document.querySelector('#display-wordpress-banner');
    if (is_display_hide_banner_allowed()) {
      const banners_yext = document.querySelector('#location-dashboard_banner--yext-promo-container');
      const banners_wordpress = document.querySelector('#location-dashboard_banner--wordpress-promo-container');
      if (dashboard_alerts_yext === 'true') {
        if (typeof banners_yext != 'undefined' && banners_yext) {
          banners_yext.style.setProperty('display', 'none');
        }
        // if (display_yext_alert) display_yext_alert.checked = true;
      }
      if (dashboard_alerts_wordpress === 'true') {
        if (typeof banners_wordpress != 'undefined' && banners_wordpress) {
          banners_wordpress.style.setProperty('display', 'none');
        }
      }
    }
  };
  const dashbard_alerts_on_reload = function () {
    if (is_display_hide_banner_allowed()) {
      const banners_yext = document.querySelector('#location-dashboard_banner--yext-promo-container');
      const banners_wordpress = document.querySelector('#location-dashboard_banner--wordpress-promo-container');
      if (!document.body.contains(banners_yext || banners_wordpress)) {
        setTimeout(dashbard_alerts_on_reload, 250);
      } else {
        render_dashboard_banner();
      }
    }
  };
  ///////////////////////////////////////////
  const setup_hcontrols_settings = () => {
    const hcontrols_toggle = document.querySelector('#hcontrols-bl');
    const hcontrols_toggle_sm = document.querySelector('#hcontrols-bl-sm');
    const display_bl_sm_elems = document.querySelector('.nodisplay-blsm');
    let selected_theme = '';
    if (window.selected_theme) selected_theme = window.selected_theme;
    let publishedTheme = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) publishedTheme = window.themegen_settings.theme_name;
    let activate_hcontrols_settings = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_hcontrols_settings = window.themegen_settings.activate_hcontrols_settings;
    let activate_hcontrols_sm_settings = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_hcontrols_sm_settings = window.themegen_settings.activate_hcontrols_sm_settings;
    if (selected_theme === 'theme_cleanwhite' || publishedTheme === 'Clean White') {
      //// Header controls in top left as menu items
      if (activate_hcontrols_settings === 'true') {
        localStorage.setItem('activate_hcontrols_settings', 'true');
        if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
          document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
        }
        add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl);
        if (typeof hcontrols_toggle !== 'undefined' && hcontrols_toggle) {
          hcontrols_toggle.checked = true;
        }
      } else {
        localStorage.setItem('activate_hcontrols_settings', 'false');
        if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
          document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
        }
        if (typeof hcontrols_toggle !== 'undefined' && hcontrols_toggle) {
          hcontrols_toggle.checked = false;
        }
      }
      //// advanced header controls settings toggle - top left and headers as small icons
      if (activate_hcontrols_sm_settings === 'true') {
        localStorage.setItem('activate_hcontrols_sm_settings', 'true');
        if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm'))) {
          document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm').remove();
        }
        add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl-sm', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl_sm);
        if (typeof hcontrols_toggle_sm !== 'undefined' && hcontrols_toggle_sm) {
          hcontrols_toggle_sm.checked = true;
        }
        if (typeof display_bl_sm_elems !== 'undefined' && display_bl_sm_elems) {
          display_bl_sm_elems.style.display = 'none';
        }
      } else {
        localStorage.setItem('activate_hcontrols_sm_settings', 'false');
        if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm'))) {
          document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm').remove();
        }
        if (typeof hcontrols_toggle_sm !== 'undefined' && hcontrols_toggle_sm) {
          hcontrols_toggle_sm.checked = false;
        }
      }
      //// Header controls Listners in top left as menu items
      if (typeof hcontrols_toggle !== 'undefined' && hcontrols_toggle) {
        hcontrols_toggle.addEventListener('change', function () {
          if (this.checked) {
            localStorage.setItem('activate_hcontrols_settings', 'true');
            hcontrols_toggle.checked = true;
            hcontrols_toggle_sm.checked = false;
            localStorage.setItem('activate_hcontrols_sm_settings', 'false');
            if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm'))) {
              document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm').remove();
            }
            add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl);
            if (typeof display_bl_sm_elems !== 'undefined' && display_bl_sm_elems) {
              display_bl_sm_elems.style.display = 'block';
            }
          } else {
            hcontrols_toggle.checked = false;
            localStorage.setItem('activate_hcontrols_settings', 'false');
            if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
              document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
            }
          }
        });
      }
      ////// advanced header controls  Listners top left - header controls as smaller icons
      if (typeof hcontrols_toggle_sm !== 'undefined' && hcontrols_toggle_sm) {
        hcontrols_toggle_sm.addEventListener('change', function () {
          if (this.checked) {
            localStorage.setItem('activate_hcontrols_sm_settings', 'true');
            hcontrols_toggle_sm.checked = true;
            hcontrols_toggle.checked = false;
            localStorage.setItem('activate_hcontrols_settings', 'false');
            if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
              document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
            }
            add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl-sm', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl_sm);
            if (typeof display_bl_sm_elems !== 'undefined' && display_bl_sm_elems) {
              display_bl_sm_elems.style.display = 'none';
            }
          } else {
            hcontrols_toggle_sm.checked = false;
            localStorage.setItem('activate_hcontrols_sm_settings', 'false');
            if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm'))) {
              document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm').remove();
            }
            if (typeof display_bl_sm_elems !== 'undefined' && display_bl_sm_elems) {
              display_bl_sm_elems.style.display = 'block';
            }
          }
        });
      }
    }
  };
  const cw_bl_sm_active = () => {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true };
    const observer = new MutationObserver(function (mutations) {
      setup_hcontrols_settings();
    });
    observer.observe(targetNode, config);
  };
  ///// swap code to class for cw
  const iconcode_class_value = (iconcode, iconobj) => {
    let icon_value = '';
    if (window.selected_theme && window.selected_theme === 'theme_cleanwhite') {
      let obj_item = '';
      if (typeof iconobj === 'object' && iconobj.hasOwnProperty(iconcode)) obj_item = iconobj[iconcode];
      icon_value = obj_item;
    }
    return icon_value;
  };
  //// setup init LS from Db or from object
  const initial_theme_value = (cw_icons_value, ls_key, obj_item, window_item) => {
    var selectedtheme = '';
    if (window.selected_theme) selectedtheme = window.selected_theme;

    var publishedTheme = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) publishedTheme = window.themegen_settings.selected_theme;

    if (window.selected_theme === '') {
      if (typeof obj_item !== 'undefined' && obj_item) localStorage.setItem(ls_key, obj_item);
    } else {
      if (typeof window_item !== 'undefined' && window_item) {
        if (window.selected_theme && window.selected_theme === 'theme_cleanwhite') {
          var iconcode_value = iconcode_class_value(window_item, cw_icons_value);
          if (iconcode_value) {
            window_item = iconcode_value;
          }
        }
        localStorage.setItem(ls_key, window_item);
      } else if (typeof obj_item !== 'undefined' && obj_item) {
        localStorage.setItem(ls_key, obj_item);
      }
    }
  };
  const setup_initial_theme_values = function () {
    var ls_obj_general = get_ls_obj_general();
    var ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };

    var ls_window_general = get_ls_window_general();
    var ls_window_advanced = get_ls_window_advanced();
    let ls_window = {
      ...ls_window_general,
      ...ls_window_advanced,
    };

    let cw_icons_value = get_cw_icons_values();

    if (window.selected_theme === '') {
      localStorage.setItem('selected_theme', 'theme_dark');

      if (typeof dashboard_themes.theme_data.theme_dark.login_contactinfo !== 'undefined') localStorage.setItem('theme_login_contactinfo', dashboard_themes.theme_data.theme_dark.login_contactinfo);

      if (typeof dashboard_themes.theme_data.theme_dark.loading_icon !== 'undefined') localStorage.setItem('theme_loading_icon', dashboard_themes.theme_data.theme_dark.loading_icon);

      if (typeof dashboard_themes.theme_data.theme_dark.advanced_settings.login_settings.loginlogo.loginlogo_size !== 'undefined')
        localStorage.setItem('theme_adv_loginlogo_size', dashboard_themes.theme_data.theme_dark.advanced_settings.login_settings.loginlogo.loginlogo_size);

      if (typeof dashboard_themes.theme_data.theme_dark.login_coverimage !== 'undefined') localStorage.setItem('theme_login_coverimage', dashboard_themes.theme_data.theme_dark.login_coverimage);

      if (typeof dashboard_themes.theme_data.theme_dark.login_logoimage !== 'undefined') localStorage.setItem('theme_login_logoimage', dashboard_themes.theme_data.theme_dark.login_logoimage);

      if (typeof dashboard_themes.theme_data.theme_dark.advanced_settings.login_settings.login_form.clr_pos !== 'undefined')
        localStorage.setItem('theme_login_pos', dashboard_themes.theme_data.theme_dark.advanced_settings.login_settings.login_form.clr_pos);

      if (typeof dashboard_themes.theme_data.theme_dark.advanced_settings.login_settings.loadingicon.loadingicon_size !== 'undefined')
        localStorage.setItem('theme_adv_loadingicon_size', dashboard_themes.theme_data.theme_dark.advanced_settings.login_settings.loadingicon.loadingicon_size);

      if (typeof dashboard_themes.lockout.data_spreadsheet !== 'undefined') localStorage.setItem('google_spreadsheet_url', dashboard_themes.lockout.data_spreadsheet);

      if (typeof dashboard_themes.lockout.data_locations !== 'undefined') localStorage.setItem('google_webapp_deploy', dashboard_themes.lockout.data_locations);

      if (typeof dashboard_themes.lockout.data_content !== 'undefined') localStorage.setItem('unlock_message', dashboard_themes.lockout.data_content);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family !== 'undefined') localStorage.setItem('theme_font_family', dashboard_themes.theme_data.theme_dark.theme_font_family);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family_h1 !== 'undefined') localStorage.setItem('theme_font_family_h1', dashboard_themes.theme_data.theme_dark.theme_font_family_h1);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family_h2 !== 'undefined') localStorage.setItem('theme_font_family_h2', dashboard_themes.theme_data.theme_dark.theme_font_family_h2);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family_h3 !== 'undefined') localStorage.setItem('theme_font_family_h3', dashboard_themes.theme_data.theme_dark.theme_font_family_h3);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family_h4 !== 'undefined') localStorage.setItem('theme_font_family_h4', dashboard_themes.theme_data.theme_dark.theme_font_family_h4);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family_sidemenu !== 'undefined')
        localStorage.setItem('theme_font_family_sidemenu', dashboard_themes.theme_data.theme_dark.theme_font_family_sidemenu);

      if (typeof dashboard_themes.theme_data.theme_dark.theme_font_family_topmenu !== 'undefined')
        localStorage.setItem('theme_font_family_topmenu', dashboard_themes.theme_data.theme_dark.theme_font_family_topmenu);
    }
    var ls_obj_keys = Object.keys(ls_obj);
    for (var i = 0; i < ls_obj_keys.length; i++) {
      var ls_key = ls_obj_keys[i];
      var obj_item = '';
      if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(ls_key)) obj_item = ls_obj[ls_key];
      var window_item = '';
      if (typeof ls_window === 'object' && ls_window.hasOwnProperty(ls_key)) window_item = ls_window[ls_key];

      initial_theme_value(cw_icons_value, ls_key, obj_item, window_item);
    }
    var init_message = window.selected_theme === '' ? 'Hey, Welcome to Theme Builder' : 'Hey Welcome Back';
  };
  //// setup multiple sections DOM i.e. general settings, login settings, advanced settings.
  const setup_multiple_sections_panel_access = function () {
    const multi_section_advanced = document.querySelector('#show-hide-sections');
    if (typeof multi_section_advanced !== 'undefined' && multi_section_advanced) {
      let currentSection = null;
      const links = document.querySelectorAll('.link');
      if (links.length > 0) {
        links[0].classList.add('open');
        const firstSection = links[0].nextElementSibling;
        firstSection.classList.add('open');
        firstSection.style.maxHeight = '430px';
        currentSection = firstSection;

        links.forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();
            links[0].classList.remove('open');
            const next = link.nextElementSibling;
            if (currentSection !== next) {
              if (currentSection) {
                currentSection.classList.remove('open');
                currentSection.parentNode.classList.remove('open');
                currentSection.style.maxHeight = '0';
              }
              next.classList.add('open');
              link.parentNode.classList.add('open');
              next.style.maxHeight = next.scrollHeight + 'px';
              currentSection = next;
            }
          });
        });
      }
    }
  };
  /// apply styles on select drowpdown theme builder panel
  const update_styles_dropdown_themes = function () {
    const theme_select_dropdown = document.querySelector('#dc-themeName');
    if (typeof theme_select_dropdown !== 'undefined' && theme_select_dropdown) {
      theme_select_dropdown.addEventListener('mousemove', function (event) {
        const hoveredOption = document.elementFromPoint(event.clientX, event.clientY);
        const options = document.getElementsByTagName('option');
        if (typeof options !== 'undefined' && options) {
          for (let i = 0; i < options.length; i++) {
            options[i].style.setProperty('background-color', 'rgba(255, 255, 255, 0.1)', 'important');
          }
        }
        if (hoveredOption.tagName === 'OPTION') {
          hoveredOption.style.setProperty('background-color', '#rgba(255, 255, 255, 0.1)', 'important');
        }
        const hoverElement = document.querySelector('.themeoptions');
        if (typeof hoverElement !== 'undefined' && hoverElement) {
          hoverElement.addEventListener('mouseover', function () {
            hoverElement.style.backgroundColor = 'blue';
          });
          hoverElement.addEventListener('mouseout', function () {
            hoverElement.style.backgroundColor = '#f0f0f0';
          });
        }
      });
    }
  };
  ///// setup customizer panel input values
  const get_panel_input_value = (panel_vars, var_name) => {
    var panel_input_value = '';
    if (typeof panel_vars === 'object' && panel_vars.hasOwnProperty(var_name) && panel_vars[var_name]) {
      panel_input_value = panel_vars[var_name];
    }
    return panel_input_value;
  };
  const cleanwhite_disabled = () => {
    const disable_bl_hcontrols = document.querySelector('#activate-hcontrols-bl');
    if (window.selected_theme === 'theme_cleanwhite') {
      if (typeof disable_bl_hcontrols !== 'undefined' && disable_bl_hcontrols) {
        disable_bl_hcontrols.style.display = 'block';
      }
    } else if (typeof disable_bl_hcontrols !== 'undefined' && disable_bl_hcontrols) {
      disable_bl_hcontrols.style.display = 'none';
      if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
        document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
      }
    }
  };
  //// setup horizontal navigation to top and left positions
  const is_horizontal_nav_active = function () {
    var selectedtheme = '';
    if (window.selected_theme) selectedtheme = window.selected_theme;
    var publishedTheme = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) publishedTheme = window.themegen_settings.selected_theme;
    const h_nav_active_header = document.querySelector('#sidebar-v2');
    const horizontal_nav_toggle = document.querySelector('#horizontal-nav-toggle');
    if (typeof horizontal_nav_toggle !== 'undefined' && horizontal_nav_toggle && typeof h_nav_active_header !== 'undefined' && h_nav_active_header) {
      if (window.themegen_settings.main_nav == 'top' && selectedtheme === publishedTheme) {
        horizontal_nav_toggle.checked = true;
        localStorage.setItem('main_nav', 'top');
        h_nav_active_header.classList.add('horizontal-nav--active');
        add_styles('dashboard-horizontal-nav', script_url + dashboard_themes.script_filename.theme_mainnav);
      } else {
        horizontal_nav_toggle.checked = false;
        localStorage.setItem('main_nav', 'left');
        h_nav_active_header.classList.remove('horizontal-nav--active');
        remove_dynamic_stylesheets_mainnav();
      }
    }
  };
  //// script file for Login FORM pos
  const setup_login_form_pos = () => {
    const centerPos = document.querySelector('#center');
    const leftPos = document.querySelector('#left');
    const rightPos = document.querySelector('#right');
    let login_form_position = 'center';
    if (typeof centerPos !== 'undefined' && centerPos && typeof leftPos !== 'undefined' && leftPos && typeof rightPos !== 'undefined' && rightPos) {
      if (typeof window.themegen_settings === 'object' && window.themegen_settings) login_form_position = window.themegen_settings.theme_login_pos;
      if (login_form_position) {
        if (login_form_position === 'center') {
          centerPos.checked = true;
          leftPos.checked = false;
          rightPos.checked = false;
        } else if (login_form_position === 'left') {
          centerPos.checked = false;
          leftPos.checked = true;
          rightPos.checked = false;
        } else if (login_form_position === 'right') {
          centerPos.checked = false;
          leftPos.checked = false;
          rightPos.checked = true;
        }
      }
    }
  };
  //// greetings */
  function getGreeting() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    if (hours < 12) {
      return 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  const getGoogleFontsList = (function () {
    let fontsArray = [];
    const includedFonts = [
      'Abril Fatface',
      'Amatic SC',
      'American Typewriter',
      'Andale Mono',
      'Apple Chancery',
      'Barlow',
      'Bitter',
      'Bookman',
      'Bradley Hand',
      'Brush Script MT',
      'Cabin',
      'Cabin Condensed',
      'Catamaran',
      'Chalkduster',
      'Cinzel',
      'Comic Sans MS',
      'Comfortaa',
      'Cormorant',
      'Courier New',
      'Dancing Script',
      'Didot',
      'Exo',
      'Flamenco',
      'Georgia',
      'Gill Sans',
      'Germania One',
      'Helvetica',
      'IBM Plex Sans',
      'Impact',
      'Inter',
      'Josefin Sans',
      'Karla',
      'Lato',
      'Lobster',
      'Lucida',
      'Luminari',
      'Manrope',
      'Marker Felt',
      'Merienda',
      'Merriweather',
      'Montserrat',
      'Neuton',
      'Noto Sans Arabic',
      'Noto Sans SC',
      'Noto Sans TC',
      'Noto Serif',
      'Nunito',
      'OCR A Std',
      'Old Standard TT',
      'Open Sans',
      'Orbitron',
      'Oswald',
      'Oxygen',
      'Pacifico',
      'Palatino',
      'Parisienne',
      'Playfair Display',
      'Playwrite HR',
      'PT Sans',
      'Raleway',
      'Raleway Dots',
      'Roboto',
      'Roboto Condensed',
      'Roboto Mono',
      'Roboto Slab',
      'Rubik',
      'Snell Roundhand',
      'Titillium Web',
      'Trattatello',
      'Trebuchet MS',
      'Ubuntu',
      'URW Chancery L',
      'Vollkorn',
      'Work Sans',
    ];

    const desiredWeights = ['200', '300', '400', '500', '600', '700', '800', '900'];

    function createStaticFontsList() {
      includedFonts.forEach(function (font) {
        desiredWeights.forEach(function (weight) {
          const fontDisplayName = `${font} ${weight}`;
          const option = `<option value="${font}:${weight}" style="font-family: ${font}; font-weight: ${weight}; font-style: normal;">${fontDisplayName}</option>`;
          fontsArray.push(option);
        });
      });
      return fontsArray;
    }

    return function () {
      if (fontsArray.length > 0) {
        return fontsArray;
      }

      const xhr = new XMLHttpRequest();
      xhr.open('GET', gfontslist, false);
      xhr.send();
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const fonts = data.items;
        fonts.forEach(function (font) {
          if (includedFonts.includes(font.family)) {
            font.variants.forEach(function (variant) {
              const weightMatch = variant.match(/\d+/);
              if (weightMatch && desiredWeights.includes(weightMatch[0]) && !variant.includes('italic')) {
                const weight = weightMatch[0] ? ` ${weightMatch[0]}` : '';
                const fontDisplayName = `${font.family}${weight}`;
                const option = `<option value="${font.family}:${variant}" style="font-family: ${font.family}; font-weight: ${weight.trim()}; font-style: normal;">${fontDisplayName}</option>`;
                fontsArray.push(option);
              }
            });
          }
        });
        return fontsArray;
      } else {
        // console.error('Error fetching Google Fonts list.');
        return createStaticFontsList();
      }
    };
  })();
  ////// start of per location theme name as published
  const getPublishedLocTheme = function (loc_theme_name) {
    const selectElement = document.getElementById('dc-themeName');
    if (selectElement) {
      const options = selectElement.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].textContent.includes('Published (â˜…)')) {
          if (!options[i].textContent.includes(loc_theme_name)) {
            options[i].textContent = `${loc_theme_name} \u2190 Published (â˜…)`;
          }
          return;
        }
      }
    }
  };
  const handleSelectClickLocTheme = function (loc_theme_name) {
    const selectElement = document.getElementById('dc-themeName');
    if (selectElement) {
      selectElement.addEventListener('click', function () {
        const options = selectElement.options;
        for (let i = 0; i < options.length; i++) {
          const spanElement = options[i].querySelector('.modify-theme-btn');
          if (options[i].textContent.includes('Published (â˜…)')) {
            if (spanElement) {
              spanElement.remove();
            }
          }
          if (!options[i].textContent.includes(loc_theme_name)) {
            if (options[i].textContent.includes('Published (â˜…)')) {
              options[i].textContent = options[i].textContent.replace('â† Published (â˜…)', '').trim();
            }
          }
        }
        for (let i = 0; i < options.length; i++) {
          if (selectElement.options[i].textContent.includes(loc_theme_name)) {
            selectElement.options[i].textContent = `${loc_theme_name} \u2190 Published (â˜…)`;
          }
        }
      });
    }
  };
  ////// end of  per location theme name as published
  /////////// Theme Builder Panel
  const hlpt_display_dashboard_customizer_panel = () => {
    let selectedtheme = 'theme_dark';
    if (window.selected_theme) selectedtheme = window.selected_theme;
    let selected_theme_advs_obj = dashboard_themes.theme_data[selectedtheme].advanced_settings;

    let ls_obj_general = get_ls_obj_general();
    let ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };

    let ls_window_general = get_ls_window_general();
    let ls_window_advanced = get_ls_window_advanced();
    let ls_window = {
      ...ls_window_general,
      ...ls_window_advanced,
    };

    let cw_icons_value = get_cw_icons_values();

    const add_elem_dc_panel = document.createElement('div');
    const panel_Reference = document.querySelector('#dashboard-customizer-panel');

    const panel_vars = {};

    var ls_obj_keys = Object.keys(ls_obj);
    if (Array.isArray(ls_obj_keys) && ls_obj_keys.length) {
      for (var i = 0; i < ls_obj_keys.length; i++) {
        var ls_key = ls_obj_keys[i];
        if (ls_key) {
          if (typeof ls_window === 'object' && ls_window.hasOwnProperty(ls_key) && ls_window[ls_key]) {
            var ls_window_ls_key = ls_window[ls_key];
            if (window.selected_theme && window.selected_theme === 'theme_cleanwhite') {
              var iconcode_value = iconcode_class_value(ls_window_ls_key, cw_icons_value);
              if (iconcode_value) {
                ls_window_ls_key = iconcode_value;
              }
            }
            panel_vars[ls_key] = ls_window_ls_key;
          } else {
            panel_vars[ls_key] = ls_obj[ls_key];
          }
        }
      }
    }
    ////////////////
    let selected_theme_name = window.themegen_settings.theme_name;
    if (window.current_published_theme_cp !== '') selected_theme_name = window.current_published_theme_cp;
    let published_theme_option = '';
    let modifytheme_message = '';
    let bg_gradient_color = default_label_bg_gradient_color;

    if (selected_theme_name === 'Clean White') bg_gradient_color = cleanwhite_label_bg_gradient_color;

    const copylocationid = (window.current_location_id = '' ? 'Agency View' : window.current_location_id);
    const selected_theme_message = window.selected_theme !== 'theme_custom' ? 'Selected Theme' : 'Select Theme To Enable';
    const selected_theme_save_btn_message = window.selected_theme === 'theme_custom' ? 'SAVE AND APPLY NO THEME' : 'SAVE AND APPLY THEME';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('theme_name')) {
      const theme_published_vs_disabled =
        window.selected_theme !== 'theme_custom' ? `<span class="modify-theme-btn"> \u2190 Published (â˜…)</span>` : '<span class="modify-theme-btn"> \u2190 Theme Disabled</span>';
      published_theme_option = `${selected_theme_name} ${theme_published_vs_disabled}`;
      modifytheme_message = selected_theme_message;
    } else {
      published_theme_option = '---Select Theme---';
      modifytheme_message = 'Select The Theme';
    }
    const inputElement_membersip_img = document.getElementById('dc-membership-header-img');
    if (inputElement_membersip_img) {
      inputElement_membersip_img.addEventListener('change', function () {
        let inputValue = inputElement_membersip_img.value;
        if (!inputValue.startsWith("url('")) {
          let modifiedValue = `url('${inputValue}')`;
          inputElement_membersip_img.value = modifiedValue;
          document.documentElement.style.setProperty('--hlpt-membership-header-img', modifiedValue);
        }
        if (inputValue === "url('')") {
          inputElement_membersip_img.value = '';
          localStorage.setItem('theme_membership_header_img', "url('https://staging.cdn.apisystem.tech/assets/membership/dashboard-banner.jpeg')");
        }
      });
    }
    const inputElement_membersip_title = document.getElementById('dc-membership-header-img-label');
    if (inputElement_membersip_title) {
      inputElement_membersip_title.addEventListener('change', function () {
        document.documentElement.style.setProperty('--hlpt-membership-header-img-label', '"' + inputElement_membersip_title.value + '"');
      });
    }
    if (localStorage.getItem('themegen_user_name')) userName = localStorage.getItem('themegen_user_name');
    /// && is_user_allowed()
    if (!document.body.contains(panel_Reference)) {
      let theme_font_families = getGoogleFontsList();
      let theme_gen_overlay_html = ``;
      theme_gen_overlay_html += `
<div class="card tsg-panel">
  <div class="card-header dc-card-header">
    <a class="close-theme-customizer"><i class="fa-solid fa-xmark-large" style="color: #ffffff"></i></a>
    <div class="close-theme-customizer-wrapper">
      <div id="unsaved-theme-notifier" class="unsaved-theme-notifier">
        <div class="tooltip">You have unsaved theme changes. The unsaved changes will be discarded and revert as soon as you refresh or reload the page.</div>
      </div>
    </div>
    <h3 style="width: 100%" class="card-header-h3">Theme Builder</h3>
  </div>
  <div class="card-body dashboard-customizer-card-body">
    <div class="hl-oe__item-wrap dc-wrap">
      <div class="hl-oe__item-info dc-info">
        <p class="greetings" style="padding-top: 30px; display: block"><strong>Welcome Back</strong><br />${getGreeting()} <span id="user-tag">${userName.split(' ')[0]}</span></p>
        <div class="hl-oe__item-title dc-title">Style your Dashboard to look as per your brand <i class="fa-solid fa-circle-check"></i></div>
        <div class="hl-oe__item-descriptio dc-item-description">
          <p>This allows you to choose the color of your choice to match to the brand and apply to the dashboard and login page.</p>
          <div class="license-themename">
            <div class="dc-colorpicker-group">
              <label for="dc-themeName" id="mainlabel">Choose a theme & start customization</label>
              <div class="dc-colorpicker-group" style="display: none !important">
                <p class="notice-text">Reload Page required to update settings</p>
                <div class="refresh-active text-center">
                  <button id="refreshButton" class="btn btn-success refresh-col">Click to Reload Page</button>
                </div>
              </div>
              <div class="toggle-arrow-dc">
                <div id="notifier" class="notifier">
                  <ul class="callouts">
                    <li class="callouts--bottom">${modifytheme_message}</li>
                  </ul>
                </div>
              </div>
              <div class="dc-themeName-wrap select-theme-elem">
                <select name="themename" id="dc-themeName">
                  `;
      theme_gen_overlay_html += `
                                          <option class="themeoptions" id="pub-opt" value="">${published_theme_option}</option>
                                          `;
      let themeName = '';
      let htmlOptions = '';
      let selected_theme_attrib = '';
      for (const key in dashboard_themes.theme_data) {
        themeName = key;
        if (selected_theme_name === dashboard_themes.theme_data[themeName].theme_name) selected_theme_attrib = 'selected1';
        htmlOptions = `
                                          <option class="themeoptions" value="${themeName}" ${selected_theme_attrib}>${dashboard_themes.theme_data[themeName].theme_name}</option>

                                          `;
        theme_gen_overlay_html += `${htmlOptions}`;
      }
      theme_gen_overlay_html += `
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="showmore-step2">
          <div id="show-hide-sections" class="show-hide-sections">
            <ul id="accordion" class="accordion">
              <li>
                <div id="section-global-settings" class="link section-global-settings"><i class="fa fa-cog"></i>General Settings <i class="fa fa-chevron-down"></i></div>
                <ul id="section-global-content" class="submenu">
                  <li>
                    <div class="tsg-disabled overflow-frame scrollable">
                      <div class="hl-card">
                        <div class="hl-card-header"><strong>Quick & Simple Setup</strong></div>
                        <div class="hl-card-content">
                          <div class="tsg-disabled">
                            <div class="dc-colorpicker-group">
                              <label for="dc-colorPicker-primary">Choose Primary Color:</label>
                              <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_col')}" id="dc-colorPicker-primary" class="themeselectoptions" />
                              <input type="text" id="dc-colorCode-primary" class="colorcode-input" placeholder="#000000" maxlength="7" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-colorPicker-primarybg">Choose Primary BG Color:</label>
                              <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_bg_col')}" id="dc-colorPicker-primarybg" class="themeselectoptions" />
                              <input type="text" id="dc-colorCode-primarybg" class="colorcode-input" placeholder="#000000" maxlength="7" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-colorPicker-bg-gradient" class="dc-colorPicker-bg-gradient">${bg_gradient_color} </label>
                              <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_gradient_col')}" id="dc-colorPicker-bg-gradient" class="themeselectoptions" />
                              <input type="text" id="dc-colorCode-bg-gradient" class="colorcode-input" placeholder="#000000" maxlength="7" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-colorPicker-leftsidebar-txtcol">Choose Left Sidebar Color:</label>
                              <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_sidebartxt_col')}" id="dc-colorPicker-leftsidebar-txtcol" class="themeselectoptions" />
                              <input type="text" id="dc-colorCode-leftsidebar-txtcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                            </div>
                            <div id="leftsidebar-icon-col-elem">
                              <div class="dc-colorpicker-group">
                                <label for="dc-colorPicker-leftsidebar-iconcol">Left Sidebar Icon Color:</label>
                                <input
                                  type="color"
                                  value="${get_panel_input_value(panel_vars, 'theme_name_primary_sidebaricon_col')}"
                                  id="dc-colorPicker-leftsidebar-iconcol"
                                  class="themeselectoptions" />
                                <input type="text" id="dc-colorCode-leftsidebar-iconcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                              </div>
                            </div>
                            <div id="main-navigation-switch">
                              <div class="hl-oe__item-title dc-title-items">
                                <div class="radio-group">
                                  <label for="navigation-menu">Main Navigation</label>
                                  <div class="check-box-horizontal-nav">
                                    <i class="horizontal-nav-left-label">Left</i>
                                    <input type="checkbox" id="horizontal-nav-toggle" />
                                    <i class="horizontal-nav-right-label">Top</i>
                                  </div>
                                </div>
                              </div>
                              <div class="topnav-notes">Top navigation only works for 18 menu items or less</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- New dashboard settings -->
                      <div id="dashboard-banner" class="hl-card buttons-settings dashboard-banner-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>Dashboard Banner âŸ¶ Settings</strong></div>
                            <button id="resetbtn-newdashboard-banner-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <div class="w-full button-primary-settings">
                                <div id="activate-dashboardbanner-settings-1">
                                  <div class="hl-card">
                                    <div class="hl-card-header"></div>
                                    <div class="hl-card-content pt-2 dashbanner">
                                      <div class="dc-colorpicker-group">
                                        <label for="activate-dashboard-banner-settings"><strong>Enable Dashboard Banner</strong></label>
                                        <div class="activate-dashboard-banner-settings">
                                          <input type="checkbox" id="activate-dashboard-banner-settings" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="pl-0 pr-0 mt-1 rename-mainnav enable-dashboard-banner-options">
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-text-col">Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_text_col')}"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-text-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-dashboard-headerbanner-text-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-bg-col">Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_bg_col')}"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-dashboard-headerbanner-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-subhead">Sub Heading:</label>
                                    <input
                                      type="text"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-subhead"
                                      name="launchpad"
                                      placeholder="banner sub heading text here..."
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_subhead')}" />
                                  </div>

                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-btn-1-text">Button 1 Text:</label>
                                    <input
                                      type="text"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-btn-1-text"
                                      name="launchpad"
                                      placeholder="text for button 1 here..."
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_btn_1_text')}" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-btn-2-text">Button 2 Text:</label>
                                    <input
                                      type="text"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-btn-2-text"
                                      name="launchpad"
                                      placeholder="text for button 2 here..."
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_btn_2_text')}" />
                                  </div>
                                  <div id="enable-internal-links" class="dc-colorpicker-group">
                                    <label for="activate-dashboard-banner-btn-internal-links">Enable Internal Links</label>
                                    <div class="activate-dashboard-banner-btn-internal-links">
                                      <input type="checkbox" id="activate-dashboard-banner-btn-internal-links" />
                                    </div>
                                  </div>
                                  <div class="topnav-notes internal-links-note">For internal links, ONLY include path after the location id</div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-btn-1-link">Button 1 Link:</label>
                                    <input
                                      type="text"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-btn-1-link"
                                      name="launchpad"
                                      placeholder="link url for button 1 here..."
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_btn_1_link')}" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-btn-2-link">Button 2 Link:</label>
                                    <input
                                      type="text"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-btn-2-link"
                                      name="launchpad"
                                      placeholder="link url for button 2 here..."
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_btn_2_link')}" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-bg-url">Background Url:</label>
                                    <input
                                      type="text"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-bg-url"
                                      name="launchpad"
                                      placeholder="background image url here..."
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_bg_url')}" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-dashboard-headerbanner-overlay-opacity">Overlay Opacity:</label>
                                    <input
                                      class="small-input-px rounded-2"
                                      type="number"
                                      id="dc-colorPicker-adv-dashboard-headerbanner-overlay-opacity"
                                      name="dc-colorPicker-adv-dashboard-headerbanner-overlay-opacity"
                                      placeholder="0.1"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_dashboard_headerbanner_overlay_opacity')}"
                                      min="0"
                                      max="1"
                                      step="0.1" />
                                    <i class="input-unit input-unit-wxl">0 to 1</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
                      <!-- select application font family -->
                      <div id="app-font-style" class="p-0">
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>App Font Style</strong></div>
                          <div class="hl-card-content">
                            <div class="tsg-disabled font-family-group">
                              <div class="dc-colorpicker-group mb-2">
                                <label for="dc-colorPicker-font-family">Body Text:</label>`;
      theme_gen_overlay_html += `
                                <select id="dc-colorPicker-font-family" class="themeselectoptions" name="combobox">
                                  <option value="${get_panel_input_value(panel_vars, 'theme_font_family')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family')}</option>
                                  `;
      theme_font_families.forEach(function (option) {
        theme_gen_overlay_html += option;
      });
      theme_gen_overlay_html += `
                                </select>
                              </div>
                              <div class="d-none-temp-active">
                                <div class="dc-colorpicker-group mt-1 mb-2">
                                  <label for="dc-colorPicker-font-family-h1">Heading 1 Text:</label>
                                  <select id="dc-colorPicker-font-family-h1" class="themeselectoptions">
                                    <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h1')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h1')}</option>
                                    `;
      theme_gen_overlay_html += `${theme_font_families}`;
      theme_gen_overlay_html += `
                                  </select>
                                </div>
                                <div class="dc-colorpicker-group mt-1 mb-2">
                                  <label for="dc-colorPicker-font-family-h2">Heading 2 Text:</label>
                                  <select id="dc-colorPicker-font-family-h2" class="themeselectoptions">
                                    <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h2')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h2')}</option>
                                    `;
      theme_gen_overlay_html += `${theme_font_families}`;
      theme_gen_overlay_html += `
                                  </select>
                                </div>
                                <div class="dc-colorpicker-group mt-1 mb-2">
                                  <label for="dc-colorPicker-font-family-h3">Heading 3 Text:</label>
                                  <select id="dc-colorPicker-font-family-h3" class="themeselectoptions">
                                    <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h3')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h3')}</option>
                                    `;
      theme_gen_overlay_html += `${theme_font_families}`;
      theme_gen_overlay_html += `
                                  </select>
                                </div>
                                <div class="dc-colorpicker-group mt-1 mb-2">
                                  <label for="dc-colorPicker-font-family-h4">Heading 4 Text:</label>
                                  <select id="dc-colorPicker-font-family-h4" class="themeselectoptions">
                                    <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h4')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h4')}</option>
                                    `;
      theme_gen_overlay_html += `${theme_font_families}`;
      theme_gen_overlay_html += `
                                  </select>
                                </div>
                                <div class="dc-colorpicker-group mt-1 mb-2">
                                  <label for="dc-colorPicker-font-family-sidemenu">Side Menu Text:</label>
                                  <select id="dc-colorPicker-font-family-sidemenu" class="themeselectoptions">
                                    <option value="${get_panel_input_value(panel_vars, 'theme_font_family_sidemenu')}" selected>
                                      ${get_panel_input_value(panel_vars, 'theme_font_family_sidemenu')}
                                    </option>
                                    `;
      theme_gen_overlay_html += `${theme_font_families}`;
      theme_gen_overlay_html += `
                                  </select>
                                </div>
                                <div class="dc-colorpicker-group mt-1 mb-2">
                                  <label for="dc-colorPicker-font-family-topmenu">Top Menu Text:</label>
                                  <select id="dc-colorPicker-font-family-topmenu" class="themeselectoptions">
                                    <option value="${get_panel_input_value(panel_vars, 'theme_font_family_topmenu')}" selected>
                                      ${get_panel_input_value(panel_vars, 'theme_font_family_topmenu')}
                                    </option>
                                    `;
      theme_gen_overlay_html += `${theme_font_families}`;
      theme_gen_overlay_html += `
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div id="section-global-settings" class="link section-global-settings"><i class="fa-solid fa-right-to-bracket"></i>Login Page Settings <i class="fa fa-chevron-down"></i></div>
                <ul class="submenu">
                  <li>
                    <div class="tsg-disabled overflow-frame scrollable">
                      <div id="login-section">
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>Login Form </strong></div>
                          <div class="hl-card-content">
                            <div id="login-form-position" class="dc-colorpicker-group flex">
                              <div class="radio-container flex">
                                <div class="radio-label-all flex align-items-center"><label for="dc-login-form-position">Form Position:</label></div>
                                <div class="slider">
                                  <input type="radio" name="login-form-position-toggle" value="left" id="left" />
                                  <label for="left">Left</label>
                                  <input type="radio" name="login-form-position-toggle" value="center" id="center" checked="" />
                                  <label for="center">Center</label>
                                  <input type="radio" name="login-form-position-toggle" value="right" id="right" />
                                  <label for="right">Right</label>
                                  <span class="slider-thumb"></span>
                                </div>
                              </div>
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-footer-note-text">Login Contact Info:</label>
                              <input
                                type="text"
                                id="dc-footer-contactinfo"
                                name="footer-note"
                                placeholder="Footer note here..."
                                value="${get_panel_input_value(panel_vars, 'theme_login_contactinfo')}" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-login-page-cover-img">Cover Image URL:</label>
                              <input
                                type="text"
                                id="dc-login-page-cover-img"
                                name="login-page-cover-img"
                                placeholder="www.yourimageurl/img.png"
                                value="${get_panel_input_value(panel_vars, 'theme_login_coverimage')}" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-colorpicker-adv-loginlogo-size">Login Logo Width: </label>
                              <input
                                type="number"
                                id="dc-colorpicker-adv-loginlogo-size"
                                name="loginlogo-size"
                                placeholder="Maximum 320"
                                value="${get_panel_input_value(panel_vars, 'theme_adv_loginlogo_size')}"
                                min="50"
                                max="320" />
                              <i class="input-unit">px</i>
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-login-page-logo-img">Login Logo URL:</label>
                              <input
                                type="text"
                                id="dc-login-page-logo-img"
                                name="login-page-logo-img"
                                placeholder="www.yourlogoimageurl/img.png"
                                value="${get_panel_input_value(panel_vars, 'theme_login_logoimage')}" />
                            </div>
                          </div>
                        </div>
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>Loading Icon</strong></div>
                          <div class="hl-card-content">
                            <div class="dc-colorpicker-group">
                              <label for="dc-loading-icon">Loading Icon URL:</label>
                              <input type="text" id="dc-loading-icon" name="loading-icon" placeholder="imageurl.io/img.png" value="${get_panel_input_value(panel_vars, 'theme_loading_icon')}" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-colorpicker-adv-loadingicon-size">Loading Icon Size: </label>
                              <input
                                type="text"
                                id="dc-colorpicker-adv-loadingicon-size"
                                name="loading-icon-size"
                                placeholder="50"
                                value="${get_panel_input_value(panel_vars, 'theme_adv_loadingicon_size')}" />
                              <i class="input-unit">px</i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <!--- THIS IS WRONG -->
              <li>
                <div id="section-advance-settings" class="link section-basic-settings"><i class="fa fa-database"></i>Advanced Settings <i class="fa fa-chevron-down"></i></div>
                <div class="submenu">
                  <div id="section-advance-settings-wrap" class="tsg-disabled overflow-frame scrollable">
                    <div id="activate-advanced-settings-1">
                      <div class="hl-card">
                        <div class="hl-card-header"></div>
                        <div class="hl-card-content">
                          <div class="dc-colorpicker-group">
                            <label for="activate-advanced-settings"><strong>Activate Advanced Options</strong></label>
                            <div class="activate-advanced-settings">
                              <input type="checkbox" id="activate-advanced-settings" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="hl-card gradient-color-settings">
                      <div class="hl-card-header">
                        <div class="flex reset-wrap">
                          <div class="hl-text-md-normal"><strong>Header Controls âŸ¶ Settings</strong></div>
                          <button id="resetbtn-header-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                          </button>
                        </div>
                      </div>
                      <div class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full">
                            <!-- header gradient color -->
                            <div class="w-full gradient-color-settings">
                              <div class="pl-0 pr-0 pt-0">
                                <div id="activate-hcontrols-bl">
                                  <div class="hl-card">
                                    <div class="hl-card-content">
                                      <div class="dc-colorpicker-group">
                                        <label for="hcontrols-bl">Bottom Left Header Controls</label>
                                        <div class="hcontrols-bl">
                                          <input type="checkbox" id="hcontrols-bl" />
                                        </div>
                                      </div>
                                      <div class="dc-colorpicker-group">
                                        <label class="hcontrols-bl-sm" for="hcontrols-bl-sm">Header Controls as Small Icons </label>
                                        <div class="hcontrols-bl-sm">
                                          <input type="checkbox" id="hcontrols-bl-sm" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Header Background Color</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-headerbgcolor-start-col">Color Start:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_start_col')}"
                                    id="dc-colorPicker-adv-headerbgcolor-start-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-headerbgcolor-start-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-headerbgcolor-end-col">Color End:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_end_col')}"
                                    id="dc-colorPicker-adv-headerbgcolor-end-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-headerbgcolor-end-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-headerbgcolor-stop-perc">Color Stop Percentage:</label>
                                  <input
                                    class="small-input-px"
                                    type="number"
                                    id="dc-colorPicker-adv-headerbgcolor-stop-perc"
                                    name="dc-colorPicker-adv-headerbgcolor-stop-perc"
                                    placeholder="50"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_stop_perc')}"
                                    min="0"
                                    max="100"
                                    step="5" />
                                  <i class="input-unit">%</i>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-headerbgcolor-gradient-deg">Gradient Angle:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-headerbgcolor-gradient-deg"
                                    name="dc-colorPicker-adv-headerbgcolor-gradient-deg"
                                    placeholder="45"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_gradient_deg')}" />
                                  <i class="input-unit">Â°deg</i>
                                </div>
                                <div class="topnav-notes">For flat color in header: Choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>
                              </div>
                            </div>
                            <!--ends here -->
                            <!-- Profile Button -->
                            <div class="w-full gradient-color-settings pt-3">
                              <div class="pl-0 pr-0 pt-0">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Profile Button</div>
                                </div>

                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-profile-btn-icon-col">Icon Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_col')}"
                                    id="dc-colorPicker-adv-profile-btn-icon-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-profile-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-profile-btn-icon-hover-col">Icon Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_hover_col')}"
                                    id="dc-colorPicker-adv-profile-btn-icon-hover-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-profile-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-profile-btn-icon-bg-col">Icon Background Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_bg_col')}"
                                    id="dc-colorPicker-adv-profile-btn-icon-bg-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-profile-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-profile-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_bg_hover_col')}"
                                    id="dc-colorPicker-adv-profile-btn-icon-bg-hover-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-profile-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                              </div>
                            </div>
                            <!-- ends here -->
                            <!-- Need Help Button -->
                            <div class="nodisplay-blsm">
                              <div class="w-full gradient-color-settings pt-3">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Help Button</div>
                                  </div>

                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-help-btn-icon-col">Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_col')}"
                                      id="dc-colorPicker-adv-help-btn-icon-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-help-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-help-btn-icon-hover-col">Icon Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-help-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-help-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-help-btn-icon-bg-col">Icon Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-help-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-help-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-help-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_bg_hover_col')}"
                                      id="dc-colorPicker-adv-help-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-help-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <!--ends here -->
                              <!-- Notification Button -->
                              <div class="w-full gradient-color-settings pt-3">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Notification Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-notification-btn-icon-col">Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_col')}"
                                      id="dc-colorPicker-adv-notification-btn-icon-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-notification-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-notification-btn-icon-hover-col">Icon Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-notification-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-notification-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-notification-btn-icon-bg-col">Icon Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-notification-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-notification-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-notification-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_bg_hover_col ')}"
                                      id="dc-colorPicker-adv-notification-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-notification-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <!--ends here -->
                              <!-- View Change Logs Button -->
                              <div class="w-full gradient-color-settings pt-3">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">View Changelogs Button</div>
                                  </div>

                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-col">Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_col')}"
                                      id="dc-colorPicker-adv-viewchangelogs-btn-icon-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-viewchangelogs-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col">Icon Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-viewchangelogs-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col">Icon Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-viewchangelogs-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_bg_hover_col')}"
                                      id="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-viewchangelogs-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <!--ends here -->
                              <!-- Phone Button -->
                              <div class="w-full gradient-color-settings pt-3">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Phone Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-phone-btn-icon-col">Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_col')}"
                                      id="dc-colorPicker-adv-phone-btn-icon-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-phone-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-phone-btn-icon-hover-col">Icon Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-phone-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-phone-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-phone-btn-icon-bg-col">Icon Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-phone-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-phone-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-phone-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_bg_hover_col')}"
                                      id="dc-colorPicker-adv-phone-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-phone-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <!--ends here -->
                              <!-- Zappy Chat BOT Button -->
                              <div class="w-full gradient-color-settings pt-3">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">AI Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-zappychatbot-btn-icon-col">Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_zappychatbot_btn_icon_col')}"
                                      id="dc-colorPicker-adv-zappychatbot-btn-icon-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-zappychatbot-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-zappychatbot-btn-icon-hover-col">Icon Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_zappychatbot_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-zappychatbot-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-zappychatbot-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-zappychatbot-btn-icon-bg-col">Icon Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_zappychatbot_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-zappychatbot-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-zappychatbot-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-zappychatbot-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_zappychatbot_btn_icon_bg_hover_col')}"
                                      id="dc-colorPicker-adv-zappychatbot-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-zappychatbot-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <!--ends here -->
                              <!-- Guide Tour  Button -->
                              <div class="w-full gradient-color-settings pt-3">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Guided Tour Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-guidetour-btn-icon-col">Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_guidetour_btn_icon_col')}"
                                      id="dc-colorPicker-adv-guidetour-btn-icon-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-guidetour-btn-icon-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-guidetour-btn-icon-hover-col">Text Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_guidetour_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-guidetour-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-guidetour-btn-icon-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-guidetour-btn-icon-bg-col">Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_guidetour_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-guidetour-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-guidetour-btn-icon-bg-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-guidetour-btn-icon-bg-hover-col">Background Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_guidetour_btn_icon_bg_hover_col')}"
                                      id="dc-colorPicker-adv-guidetour-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-guidetour-btn-icon-bg-hover-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <!-- ends here -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Left Sidebar settings  here -->
                    <div id="lss" class="hl-card gradient-color-settings">
                      <div class="hl-card-header">
                        <div class="flex reset-wrap">
                          <div class="hl-text-md-normal"><strong>Left Sidebar âŸ¶ Settings</strong></div>
                          <button id="resetbtn-leftsidebar-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                          </button>
                        </div>
                      </div>
                      <div class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full">
                            <div id="activate-translations-1" class="mb-2">
                              <div class="hl-card">
                                <div class="hl-card-content">
                                  <div class="dc-colorpicker-group">
                                    <label for="activate-translations">Enable Multilangual Nav Links</label>
                                    <div class="activate-translations">
                                      <input type="checkbox" id="activate-translations" />
                                    </div>
                                  </div>
                                  <div class="topnav-notes border-top border-1 mt-2 mb-2">
                                    Enabling multilingual option will activate the native navigation tab text and platform language. It will deactivate the rename / replace feature for left navigation
                                    links.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- leftsidebar  gradient color -->
                            <div class="w-full gradient-color-settings">
                              <div class="pl-0 pr-0 pt-2">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Background Gradient Color</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-leftsidebarbgcolor-start-col">Color Start:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_start_col')}"
                                    id="dc-colorPicker-adv-leftsidebarbgcolor-start-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-leftsidebarbgcolor-start-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-leftsidebarbgcolor-end-col">Color End:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_end_col')}"
                                    id="dc-colorPicker-adv-leftsidebarbgcolor-end-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-leftsidebarbgcolor-end-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-leftsidebarbgcolor-stop-perc">Color Stop Percentage:</label>
                                  <input
                                    class="small-input-px"
                                    type="number"
                                    id="dc-colorPicker-adv-leftsidebarbgcolor-stop-perc"
                                    name="dc-colorPicker-adv-leftsidebarbgcolor-stop-perc"
                                    placeholder="50"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_stop_perc')}"
                                    min="0"
                                    max="100"
                                    step="5" />
                                  <i class="input-unit">%</i>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg">Gradient Angle:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg"
                                    name="dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg"
                                    placeholder="45"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_gradient_deg')}" />
                                  <i class="input-unit">Â°deg</i>
                                </div>
                                <div class="topnav-notes">For flat color in Left Sidebar: Choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>
                              </div>
                            </div>
                            <!--ends here -->
                            <!-- scroll bar left sidemenu -->
                            <div class="w-full gradient-color-settings">
                              <div class="pl-0 pr-0 pt-2">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Scrollbar Settings</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-scrollbarthumb-col">Scrollbar Thumb Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_scrollbarthumb_col')}"
                                    id="dc-colorPicker-adv-scrollbarthumb-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-scrollbarthumb-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group" style="display: none !important">
                                  <label for="dc-colorPicker-adv-scrollbarthumb-col-tint">Scrollbar Thumb Opacity:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-scrollbarthumb-col-tint"
                                    name="dc-colorPicker-adv-scrollbarthumb-col-tint"
                                    placeholder="1A"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_scrollbarthumb_col_tint')}" />
                                  <i class="input-unit input-unit-code">% or code</i>
                                </div>
                                <div class="dc-colorpicker-group" style="display: none !important">
                                  <label for="dc-colorPicker-adv-scrollbartrack-col">Scrollbar Track Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_scrollbartrack_col')}"
                                    id="dc-colorPicker-adv-scrollbartrack-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-scrollbartrack-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-scrollbar-width">Scrollbar Width:</label>
                                  <input
                                    class="small-input-px"
                                    type="number"
                                    id="dc-colorPicker-adv-scrollbar-width"
                                    name="dc-colorPicker-adv-scrollbar-width"
                                    placeholder="10"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_scrollbar_width')}"
                                    min="0"
                                    max="50"
                                    step="1" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                              <!--end of scroll bar left sidemenu-->
                              <div class="w-full pt-3 gradient-color-settings left-nav-text-icon-hover">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Navigation Tabs (Text & Icons hover color)</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-mainnav-text-hover-color">Text Hover & Active Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_text_hover_color')}"
                                      id="dc-colorPicker-adv-mainnav-text-hover-color"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-mainnav-text-hover-color" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-mainnav-icon-hover-color">Icon Hover & Active Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_icon_hover_color')}"
                                      id="dc-colorPicker-adv-mainnav-icon-hover-color"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-mainnav-icon-hover-color" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-mainnav-hover-active-bg-color">Hover & Active BG Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_hover_active_bg_color')}"
                                      id="dc-colorPicker-adv-mainnav-hover-active-bg-color"
                                      class="themeselectoptions" />
                                    <input type="text" id="dc-colorCode-adv-mainnav-hover-active-bg-color" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                  </div>
                                </div>
                              </div>
                              <div class="flex w-full rename-mainnav replace-ico rename-deactivate">
                                <div class="w-full">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2 pt-3">
                                      <div class="hl-text-sm-regular">Replace Tabs (Text & Icon) âŸ¶ Location</div>
                                    </div>
                                    <!-- launchpad location -->
                                    <div class="dc-colorpicker-group">
                                      <div class="topnav-notes">
                                        To change left sidebar navigation link icon, visit https://fontawesome.com/search and select the Unicode from top right (i.e. f002) of your chosen icon and
                                        paste it in the code box of respective menu item. NOTE: This is working for all the themes except "Clean White". For the "Clean white" theme, copy the icon name
                                        instead of icon unicode from fontawesome which is in the top left of selection popup.
                                      </div>
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-launchpad-label">Launchpad:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-launchpad-label"
                                        name="launchpad"
                                        placeholder="launchpad text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_launchpad_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-launchpad-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e027"
                                        data-linked-icon="sb_launchpad"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_launchpad_icon')}" />
                                    </div>
                                    <!-- dashboard location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-dashboard-label">Dashboard:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-dashboard-label"
                                        name="dashboard"
                                        placeholder="dashboard text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_dashboard_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-dashboard-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f625"
                                        data-linked-icon="sb_dashboard"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_dashboard_icon')}" />
                                    </div>
                                    <!-- conversations location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-conversations-label">Conversations:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversations-label"
                                        name="conversations"
                                        placeholder="conversations text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversations_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversations-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e1e7"
                                        data-linked-icon="sb_conversations"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversations_icon')}" />
                                    </div>
                                    <!-- calendars location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-calendars-label">Calendars:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-calendars-label"
                                        name="calendars"
                                        placeholder="calendars text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_calendars_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-calendars-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f073"
                                        data-linked-icon="sb_calendars"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_calendars_icon')}" />
                                    </div>
                                    <!-- contacts location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-contacts-label">Contacts:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-contacts-label"
                                        name="contacts"
                                        placeholder="contacts text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_contacts_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-contacts-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f2bb"
                                        data-linked-icon="sb_contacts"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_contacts_icon')}" />
                                    </div>
                                    <!-- opportunities location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-opportunities-label">Opportunities:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-opportunities-label"
                                        name="opportunities"
                                        placeholder="opportunities text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_opportunities_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-opportunities-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f652"
                                        data-linked-icon="sb_opportunities"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_opportunities_icon')}" />
                                    </div>
                                    <!-- payments location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-payments-label">Payments:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-payments-label"
                                        name="payments"
                                        placeholder="payments text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_payments_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-payments-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e5d9"
                                        data-linked-icon="sb_payments"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_payments_icon')}" />
                                    </div>
                                    <!-- aiagents location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-aiagents-label">AI Agents:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-aiagents-label"
                                        name="aiagents"
                                        placeholder="aiagents text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_aiagents_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-aiagents-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0d6"
                                        data-linked-icon="sb_ai_agent_settings"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_aiagents_icon')}" />
                                    </div>
                                    <!-- marketing location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-marketing-label">Marketing:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-marketing-label"
                                        name="marketing"
                                        placeholder="marketing text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_marketing_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-marketing-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e4e8"
                                        data-linked-icon="sb_email-marketing"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_marketing_icon')}" />
                                    </div>
                                    <!-- automation location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-automation-label">Automation:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-automation-label"
                                        name="automation"
                                        placeholder="automation text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_automation_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-automation-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e5d5"
                                        data-linked-icon="sb_automation"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_automation_icon')}" />
                                    </div>
                                    <!-- sites location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-sites-label">Sites:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-sites-label"
                                        name="sites"
                                        placeholder="sites text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_sites_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-sites-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f1ea"
                                        data-linked-icon="sb_sites"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_sites_icon')}" />
                                    </div>
                                    <!-- memberships location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-memberships-label">Memberships:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-memberships-label"
                                        name="memberships"
                                        placeholder="memberships text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_memberships_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-memberships-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f559"
                                        data-linked-icon="sb_memberships"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_memberships_icon')}" />
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-mediastorage-label">Media Storage:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-mediastorage-label"
                                        name="mediastorage"
                                        placeholder="mediastorage text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_mediastorage_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-mediastorage-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e027"
                                        data-linked-icon="sb_app-media"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_mediastorage_icon')}" />
                                    </div>
                                    <!-- reputation location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-reputation-label">Reputation:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-reputation-label"
                                        name="reputation"
                                        placeholder="reputation text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_reputation_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-reputation-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f587"
                                        data-linked-icon="sb_reputation"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_reputation_icon')}" />
                                    </div>
                                    <!-- reporting location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-reporting-label">Reporting:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-reporting-label"
                                        name="reporting"
                                        placeholder="reporting text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_reporting_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-reporting-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e473"
                                        data-linked-icon="sb_reporting"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_reporting_icon')}" />
                                    </div>
                                    <!-- app_marketplace location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-app-marketplace-label">App Marketplace:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-app-marketplace-label"
                                        name="app-marketplace"
                                        placeholder="app marketplace text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_app_marketplace_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-app-marketplace-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e473"
                                        data-linked-icon="sb_app-marketplace"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_app_marketplace_icon')}" />
                                    </div>
                                    <!-- mobileapp location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-mobileapp-label">Mobile App:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-mobileapp-label"
                                        name="mobileapp"
                                        placeholder="mobileapp text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_mobileapp_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-mobileapp-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f3cd"
                                        data-linked-icon="sb_location-mobile-app"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_mobileapp_icon')}" />
                                    </div>
                                    <!-- aiemployeepromo location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-aiemployeepromo-label">Season of AI:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-aiemployeepromo-label"
                                        name="aiemployeepromo"
                                        placeholder="aiemployeepromo text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_aiemployeepromo_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-aiemployeepromo-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f890"
                                        data-linked-icon="sb_ai-employee-promo"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_aiemployeepromo_icon')}" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="flex w-full rename-mainnav replace-ico rename-deactivate">
                                <div class="w-full">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2 pt-3">
                                      <div class="hl-text-sm-regular">Replace Tabs âŸ¶ Location Settings</div>
                                    </div>
                                    <!-- businessinfo location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-businessinfo-label">Business Info:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-businessinfo-label"
                                        name="businessinfo"
                                        placeholder="businessinfo text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_businessinfo_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-businessinfo-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f0b1"
                                        data-linked-icon="sb_business_info"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_businessinfo_icon')}" />
                                    </div>
                                    <!-- companybilling location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-companybilling-label">Company Billing:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-companybilling-label"
                                        name="companybilling"
                                        placeholder="companybilling text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_companybilling_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-companybilling-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f555"
                                        data-linked-icon="sb_saas-billing"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_companybilling_icon')}" />
                                    </div>
                                    <!-- myprofile location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-myprofile-label">My Profile:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-myprofile-label"
                                        name="myprofile"
                                        placeholder="myprofile text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_myprofile_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-myprofile-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f007"
                                        data-linked-icon="sb_myprofile"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_myprofile_icon')}" />
                                    </div>
                                    <!-- mystaff location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-mystaff-label">My Staff:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-mystaff-label"
                                        name="mystaff"
                                        placeholder="mystaff text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_mystaff_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-mystaff-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f007"
                                        data-linked-icon="sb_my-staff"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_mystaff_icon')}" />
                                    </div>
                                    <!-- pipelines location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-pipelines-label">Pipelines:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-pipelines-label"
                                        name="pipelines"
                                        placeholder="pipelines text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_pipelines_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-pipelines-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f662"
                                        data-linked-icon="sb_Opportunities-Pipelines"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_pipelines_icon')}" />
                                    </div>
                                    <!-- calendar location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-calendar-label">Calendars:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-calendar-label"
                                        name="calendar"
                                        placeholder="calendar text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_calendar_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-calendar-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0d6"
                                        data-linked-icon="sb_calendars"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_calendar_icon')}" />
                                    </div>
                                    <!-- conversationaisettings location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-conversationaisettings-label">Conversation AI:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversationaisettings-label"
                                        name="conversationaisettings"
                                        placeholder="conversationaisettings text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversationaisettings_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversationaisettings-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0d6"
                                        data-linked-icon="sb_conversation_ai_settings"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversationaisettings_icon')}" />
                                    </div>
                                    <!-- conversationaisettingsv2 location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-label">Conversation AI V2:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-label"
                                        name="conversationaisettingsv2"
                                        placeholder="conversationaisettingsv2 text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversationaisettingsv2_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversationaisettingsv2-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0d6"
                                        data-linked-icon="sb_conversation_ai_settings_v2"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversationaisettingsv2_icon')}" />
                                    </div>

                                    <!-- objects location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-objects-label">Objects:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-objects-label"
                                        name="objects"
                                        placeholder="objects text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_objects_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-objects-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0d6"
                                        data-linked-icon="sb_objects"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_objects_icon')}" />
                                    </div>
                                    <!-- emailservices location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-emailservices-label">Email Services:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-emailservices-label"
                                        name="emailservices"
                                        placeholder="emailservices text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_emailservices_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-emailservices-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e16f"
                                        data-linked-icon="sb_location-email-services"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_emailservices_icon')}" />
                                    </div>

                                    <!-- phonenumbers location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-phonenumbers-label">Phone Numbers:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-phonenumbers-label"
                                        name="phonenumbers"
                                        placeholder="phonenumbers text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_phonenumbers_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-phonenumbers-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f67d"
                                        data-linked-icon="sb_phone-system"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_phonenumbers_icon')}" />
                                    </div>
                                    <!-- whatsapp location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-whatsapp-label">WhatsApp:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-whatsapp-label"
                                        name="whatsapp"
                                        placeholder="whatsapp text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_whatsapp_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-whatsapp-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0d6"
                                        data-linked-icon="sb_whatsapp"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_whatsapp_icon')}" />
                                    </div>
                                    <!-- reputationmanagement location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-reputationmanagement-label">Reputation Mngt:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-reputationmanagement-label"
                                        name="reputationmanagement"
                                        placeholder="reputationmanagement text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_reputationmanagement_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-reputationmanagement-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e036"
                                        data-linked-icon="sb_reputation-management"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_reputationmanagement_icon')}" />
                                    </div>
                                    <!-- customfields location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-customfields-label">Custom Fields:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-customfields-label"
                                        name="customfields"
                                        placeholder="customfields text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_customfields_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-customfields-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e531"
                                        data-linked-icon="sb_custom-fields-settings"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_customfields_icon')}" />
                                    </div>
                                    <!-- customvalues location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-customvalues-label">Custom Values:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-customvalues-label"
                                        name="customvalues"
                                        placeholder="customvalues text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_customvalues_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-customvalues-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f7ea"
                                        data-linked-icon="sb_custom-values"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_customvalues_icon')}" />
                                    </div>
                                    <!-- managescoring location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-managescoring-label">Custom Values:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-managescoring-label"
                                        name="managescoring"
                                        placeholder="managescoring text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_managescoring_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-managescoring-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e41c"
                                        data-linked-icon="sb_manage-scoring"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_managescoring_icon')}" />
                                    </div>
                                    <!-- domains location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-domains-label">Domains:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-domains-label"
                                        name="domains"
                                        placeholder="domains text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_domains_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-domains-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f0ac"
                                        data-linked-icon="sb_domains"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_domains_icon')}" />
                                    </div>
                                    <!-- media location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-media-label">Media:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-media-label"
                                        name="media"
                                        placeholder="media text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_media_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-media-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f03d"
                                        data-linked-icon="sb_media"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_media_icon')}" />
                                    </div>
                                    <!-- urlredirects location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-urlredirects-label">URL Redirects:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-urlredirects-label"
                                        name="urlredirects"
                                        placeholder="urlredirects text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_urlredirects_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-urlredirects-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f5eb"
                                        data-linked-icon="sb_url-redirects"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_urlredirects_icon')}" />
                                    </div>
                                    <!-- integrations location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-integrations-label">Integrations:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-integrations-label"
                                        name="integrations"
                                        placeholder="integrations text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_integrations_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-integrations-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f126"
                                        data-linked-icon="sb_common.sidebar.lcIntegrations"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_integrations_icon')}" />
                                    </div>
                                    <!-- pintegrations location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-pintegrations-label">Pvt Integrations:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-pintegrations-label"
                                        name="pintegrations"
                                        placeholder="pintegrations text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_pintegrations_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-pintegrations-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f126"
                                        data-linked-icon="sb_common.sidebar.privateIntegrations"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_pintegrations_icon')}" />
                                    </div>

                                    <!-- conversationproviders location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-conversationproviders-label">Conv. Providers::</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversationproviders-label"
                                        name="conversationproviders"
                                        placeholder="conversationproviders text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversationproviders_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-conversationproviders-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f328"
                                        data-linked-icon="sb_conversations_providers"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_conversationproviders_icon')}" />
                                    </div>
                                    <!-- tags location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-tags-label">Tags:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-tags-label"
                                        name="tags"
                                        placeholder="tags text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_tags_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-tags-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f02c"
                                        data-linked-icon="sb_tags"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_tags_icon')}" />
                                    </div>
                                    <!-- labs location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-labs-label">labs:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-labs-label"
                                        name="labs"
                                        placeholder="labs text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_labs_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-labs-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f02c"
                                        data-linked-icon="sb_labs"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_labs_icon')}" />
                                    </div>
                                    <!-- auditlogs location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-auditlogs-label">Audit Logs:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-auditlogs-label"
                                        name="auditlogs"
                                        placeholder="auditlogs text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_auditlogs_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-auditlogs-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e5d8"
                                        data-linked-icon="sb_audit-logs-location"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_auditlogs_icon')}" />
                                    </div>
                                    <!-- brandboards location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-brandboards-label">Brand Boards:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-brandboards-label"
                                        name="brandboards"
                                        placeholder="brandboards text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_brandboards_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-brandboards-icon"
                                        class="leftnav-icon"
                                        placeholder="\\f126"
                                        data-linked-icon="sb_brand-boards"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_brandboards_icon')}" />
                                    </div>
                                    <!-- companies location -->
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-replace-companies-label">Companies:</label>
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-companies-label"
                                        name="companies"
                                        placeholder="companies text here..."
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_companies_label')}" />
                                      <input
                                        type="text"
                                        id="dc-colorPicker-adv-mainnav-replace-companies-icon"
                                        class="leftnav-icon"
                                        placeholder="\\e0cc"
                                        data-linked-icon="sb_business-settings-v2"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_replace_companies_icon')}" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ends here -->
                    <!-- Body Content -->
                    <div class="hl-card gradient-color-settings">
                      <div class="hl-card-header">
                        <div class="flex reset-wrap">
                          <div class="hl-text-md-normal"><strong> Content Body âŸ¶ Settings</strong></div>
                          <button id="resetbtn-body-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                          </button>
                        </div>
                      </div>
                      <div class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full">
                            <!-- contentbody  gradient color -->
                            <div class="w-full gradient-color-settings">
                              <div class="pl-0 pr-0 pt-2">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Background Color</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-start-col">Color Start:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_start_col')}"
                                    id="dc-colorPicker-adv-bodycontent-start-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-bodycontent-start-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-end-col">Color End:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_end_col')}"
                                    id="dc-colorPicker-adv-bodycontent-end-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-bodycontent-end-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-stop-perc">Color Stop Percentage:</label>
                                  <input
                                    class="small-input-px"
                                    type="number"
                                    id="dc-colorPicker-adv-bodycontent-stop-perc"
                                    name="dc-colorPicker-adv-bodycontent-stop-perc"
                                    placeholder="50"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_stop_perc')}"
                                    min="0"
                                    max="100"
                                    step="5" />
                                  <i class="input-unit">%</i>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-gradient-deg">Gradient Angle:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-bodycontent-gradient-deg"
                                    name="dc-colorPicker-adv-bodycontent-gradient-deg"
                                    placeholder="45"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_gradient_deg')}" />
                                  <i class="input-unit">Â°deg</i>
                                </div>
                                <div class="topnav-notes">For flat color in Content Body, choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>

                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-text-col">Content Text Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_text_col')}"
                                    id="dc-colorPicker-adv-bodycontent-text-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-bodycontent-text-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                              </div>
                            </div>
                            <!--ends here -->
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ends here -->
                    <!-- Global button settins -->
                    <div class="hl-card buttons-settings">
                      <div class="hl-card-header">
                        <div class="flex reset-wrap">
                          <div class="hl-text-md-normal"><strong>Button âŸ¶ Settings</strong></div>
                          <button id="resetbtn-button-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                          </button>
                        </div>
                      </div>
                      <div class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full">
                            <div class="w-full button-primary-settings">
                              <div class="pl-0 pr-0 pt-2">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Primary Button</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-bgcol">Background Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bgcol')}"
                                    id="dc-colorPicker-adv-primary-btn-bgcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-primary-btn-bgcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-bg-h-col">Background Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bg_h_col')}"
                                    id="dc-colorPicker-adv-primary-btn-bg-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-primary-btn-bg-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-txtcol">Text Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_txtcol')}"
                                    id="dc-colorPicker-adv-primary-btn-txtcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-primary-btn-txtcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-txt-h-col">Text Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_txt_h_col')}"
                                    id="dc-colorPicker-adv-primary-btn-txt-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-primary-btn-txt-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-bdrcol">Border Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bdrcol')}"
                                    id="dc-colorPicker-adv-primary-btn-bdrcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-primary-btn-bdrcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-bdr-h-col">Border Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bdr_h_col')}"
                                    id="dc-colorPicker-adv-primary-btn-bdr-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-primary-btn-bdr-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-primary-btn-radius">Border Radius:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-primary-btn-radius"
                                    name="dc-colorPicker-adv-primary-btn-radius"
                                    placeholder="0px"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_radius')}" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                            </div>
                            <div class="w-full button-secondary-settings">
                              <div class="pl-0 pr-0">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Secondary Button</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-bgcol">Background Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bgcol')}"
                                    id="dc-colorPicker-adv-secondary-btn-bgcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-secondary-btn-bgcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-bg-h-col">Background Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bg_h_col')}"
                                    id="dc-colorPicker-adv-secondary-btn-bg-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-secondary-btn-bg-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-txtcol">Text Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_txtcol')}"
                                    id="dc-colorPicker-adv-secondary-btn-txtcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-secondary-btn-txtcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-txt-h-col">Text Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_txt_h_col')}"
                                    id="dc-colorPicker-adv-secondary-btn-txt-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-secondary-btn-txt-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-bdrcol">Border Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bdrcol')}"
                                    id="dc-colorPicker-adv-secondary-btn-bdrcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-secondary-btn-bdrcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-bdr-h-col">Border Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bdr_h_col')}"
                                    id="dc-colorPicker-adv-secondary-btn-bdr-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-secondary-btn-bdr-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-secondary-btn-radius">Border Radius:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-secondary-btn-radius"
                                    name="dc-colorPicker-adv-secondary-btn-radius"
                                    placeholder="0px"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_radius')}" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                            </div>
                            <div class="w-full button-default-settings">
                              <div class="pl-0 pr-0">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Default Button</div>
                                </div>

                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-bgcol">Background Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bgcol')}"
                                    id="dc-colorPicker-adv-default-btn-bgcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default-btn-bgcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-bg-h-col">Background Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bg_h_col')}"
                                    id="dc-colorPicker-adv-default-btn-bg-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default-btn-bg-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-txtcol">Text Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_txtcol')}"
                                    id="dc-colorPicker-adv-default-btn-txtcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default-btn-txtcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-txt-h-col">Text Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_txt_h_col')}"
                                    id="dc-colorPicker-adv-default-btn-txt-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default-btn-txt-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-bdrcol">Border Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bdrcol')}"
                                    id="dc-colorPicker-adv-default-btn-bdrcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default-btn-bdrcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-bdr-h-col">Border Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bdr_h_col')}"
                                    id="dc-colorPicker-adv-default-btn-bdr-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default-btn-bdr-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default-btn-radius">Border Radius:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-default-btn-radius"
                                    name="dc-colorPicker-adv-default-btn-radius"
                                    placeholder="0px"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_radius')}" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                            </div>
                            <div class="w-full button-default_light-settings">
                              <div class="pl-0 pr-0">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Default Light Button</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-bgcol">Background Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bgcol')}"
                                    id="dc-colorPicker-adv-default_light-btn-bgcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default_light-btn-bgcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-bg-h-col">Background Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bg_h_col')}"
                                    id="dc-colorPicker-adv-default_light-btn-bg-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default_light-btn-bg-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-txtcol">Text Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_txtcol')}"
                                    id="dc-colorPicker-adv-default_light-btn-txtcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default_light-btn-txtcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-txt-h-col">Text Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_txt_h_col')}"
                                    id="dc-colorPicker-adv-default_light-btn-txt-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default_light-btn-txt-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-bdrcol">Border Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bdrcol')}"
                                    id="dc-colorPicker-adv-default_light-btn-bdrcol"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default_light-btn-bdrcol" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-bdr-h-col">Border Hover Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bdr_h_col')}"
                                    id="dc-colorPicker-adv-default_light-btn-bdr-h-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-default_light-btn-bdr-h-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-default_light-btn-radius">Border Radius:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-default_light-btn-radius"
                                    name="dc-colorPicker-adv-default_light-btn-radius"
                                    placeholder="0px"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_radius')}" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ends here -->
                    <!-- Headings - color and size -->
                    <div class="hl-card headings-settings">
                      <div class="hl-card-header">
                        <div class="flex reset-wrap">
                          <div class="hl-text-md-normal"><strong>Heading âŸ¶ Settings </strong></div>
                          <button id="resetbtn-heading-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                          </button>
                        </div>
                      </div>
                      <div class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full flex">
                            <div class="w-full heading-h1-settings pr-1">
                              <div class="pl-0 pr-0 pt-2">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Heading (h1)</div>
                                </div>

                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-h1-text-col">Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h1_text_col')}"
                                    id="dc-colorPicker-adv-bodycontent-h1-text-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-bodycontent-h1-text-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-h1-text-size">Size:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-bodycontent-h1-text-size"
                                    name="dc-colorPicker-adv-bodycontent-h1-text-size"
                                    placeholder="20px"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h1_text_size')}" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                            </div>
                            <div class="w-full pt-0 pl-1 heading-h1-settings">
                              <div class="pl-0 pr-0 pt-2">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Heading (h2)</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-h2-text-col">Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h2_text_col')}"
                                    id="dc-colorPicker-adv-bodycontent-h2-text-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-bodycontent-h2-text-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-bodycontent-h2-text-size">Size:</label>
                                  <input
                                    class="small-input-px"
                                    type="text"
                                    id="dc-colorPicker-adv-bodycontent-h2-text-size"
                                    name="dc-colorPicker-adv-bodycontent-h2-text-size"
                                    placeholder="20px"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h2_text_size')}" />
                                  <i class="input-unit">px</i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ends here -->
                    <!-- New dashboard settings -->
                    <div class="hl-card buttons-settings">
                      <div class="hl-card-header">
                        <div class="flex reset-wrap">
                          <div class="hl-text-md-normal"><strong>New Dashboard âŸ¶ Settings</strong></div>
                          <button id="resetbtn-newdashboard-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                          </button>
                        </div>
                      </div>
                      <div class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full">
                            <div class="w-full button-primary-settings">
                              <div class="pl-0 pr-0 pt-2 mt-0">
                                <div class="items-center pb-2">
                                  <div class="hl-text-sm-regular">Opportunity Status & Values</div>
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-opportunities-lead-col">Open Opportunities</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_opportunities_lead_col')}"
                                    id="dc-colorPicker-adv-opportunities-lead-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-opportunities-lead-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-opportunities-won-col">Won Opportunities</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_opportunities_won_col')}"
                                    id="dc-colorPicker-adv-opportunities-won-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-opportunities-won-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-opportunities-lost-col">Lost Opportunities</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_opportunities_lost_col')}"
                                    id="dc-colorPicker-adv-opportunities-lost-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-opportunities-lost-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-adv-opportunities-abandoned-col">Abandoned Opportunities</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_adv_opportunities_abandoned_col')}"
                                    id="dc-colorPicker-adv-opportunities-abandoned-col"
                                    class="themeselectoptions" />
                                  <input type="text" id="dc-colorCode-adv-opportunities-abandoned-col" class="colorcode-input" placeholder="#000000" maxlength="7" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- membership -->
                    <div class="hl-card" style="display: none !important;">
                      <div class="hl-card-header"><strong>Membership âŸ¶ Settings</strong></div>
                      <div class="hl-card-content">
                        <div class="dc-colorpicker-group">
                          <label for="dc-membership-header-img">Header image:</label>
                          <input type="text" id="dc-membership-header-img" name="dc-membership-header-img" placeholder="imageurl.io/img.png" value="${get_panel_input_value(
        panel_vars,
        'theme_membership_header_img'
      )}" />
                        </div>
                        <div class="dc-colorpicker-group">
                          <label for="dc-membership-header-img-label">Image Title:</label>
                          <input type="text" id="dc-membership-header-img-label" name="dc-membership-header-img-label" placeholder="Title Text" value="${get_panel_input_value(
        panel_vars,
        'theme_membership_header_img_label'
      )}" />
                        </div>
                      </div>
                    </div>
                    <!-- end of membership -->
                    <!-- ends here -->
                    <div class="hl-card rename-bottom-margin">
                      <div class="hl-card-header">
                        <div class="">
                          <div class="hl-text-md-normal"><strong>What feature(s) you would like to add?</strong></div>
                        </div>
                      </div>
                      <div id="features-form" class="hl-card-content">
                        <div class="flex w-full">
                          <div class="w-full">
                            <div class="flex w-full">
                              <iframe
                                src="https://lclink.co/widget/form/CtSgkpk8f2xbVjv8OeEl"
                                style="width: 100%; height: 350px; border: none; border-radius: 0px"
                                id="inline-CtSgkpk8f2xbVjv8OeEl"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Theme Builder Advanced Settings Feedback Form"
                                data-height="566"
                                data-layout-iframe-id="inline-CtSgkpk8f2xbVjv8OeEl"
                                data-form-id="CtSgkpk8f2xbVjv8OeEl"
                                title="Theme Builder Advanced Settings Feedback Form">
                              </iframe>
                              <script src="https://lclink.co/js/form_embed.js"></script>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div id="section-lockout-settings" class="link section-global-settings"><i class="fa-solid fa-lock"></i>Feature Lock & Hide Settings <i class="fa fa-chevron-down"></i></div>
                <ul class="submenu">
                  <li>
                    <div class="overflow-frame scrollable">
                      <div id="lockout-section">
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>Setup Locations Data &amp; Unlock Message </strong></div>
                          <div class="hl-card-content">
                            <div class="dc-colorpicker-group">
                              <label for="dc-google-spreadsheet-url">Googlesheet url:</label>
                              <input
                                type="text"
                                id="dc-google-spreadsheet-url"
                                name="google-spreadsheet-url"
                                placeholder="Google Spreadsheet url"
                                value="${get_panel_input_value(panel_vars, 'google_spreadsheet_url')}" />
                            </div>
                            <div class="script-window-lockout">
                              <div class="custom-javascript-generated-lockout">
                                <div style="position: relative">
                                  <textarea
                                    placeholder="Google Webapp Script"
                                    name="generate-description"
                                    class="hl-text-area-input text-gray-800 shadow-sm block w-full focus:outline-none focus:ring-offset-curious-blue-500 focus:border-curious-blue-500 sm:text-sm border-gray-300 rounded-md disabled:opacity-50 js-cs-custom-window-textarea-lockout"
                                    label="Custom Javascript"
                                    type="text"
                                    rows="5"
                                    readonly
                                    style="resize: none"></textarea>
                                  <span id="copytoclipboard-btn-lockout" class="copytoclipboard-btn-lockout">Copy &nbsp;<i class="fa-regular fa-copy"></i></span>
                                </div>
                              </div>
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-google-webapp-deploy">Google WebApp URL:</label>
                              <input
                                type="text"
                                id="dc-google-webapp-deploy"
                                name="google-webapp-deploy"
                                placeholder="Google webApp URL"
                                value="${get_panel_input_value(panel_vars, 'google_webapp_deploy')}" />
                            </div>
                            <div class="dc-colorpicker-group">
                              <label for="dc-unlock-message">Unlock Message URL:</label>
                              <input type="text" id="dc-unlock-message" name="unlock-message" placeholder="Unlock message url" value="${get_panel_input_value(panel_vars, 'unlock_message')}" />
                            </div>
                            <div class="topnav-notes mt-4">
                              <strong>Setting Up Feature Lock & Hide Side Menu Links:</strong><br /><br />
                              Create a new Google Spreadsheet by following the provided instructions and sample spreadsheet <a
                                style="display: inline !important; text-decoration: underline; color: blue; padding: 0px"
                                href="https://docs.google.com/spreadsheets/d/1GENDLB7nuCYl5YJr-2a514DGT-usPbn0CXYd9dA9AaE/edit#gid=0"
                                target="_blank"
                                >Click to View Sample Spreadsheet <badge class="badge badge-success ms-1 fa-fade">New</badge></a
                              >. Ensure that all headings in the sample sheet are accurately replicated (exept the last four columns, these columns belongs to custom menu link), and the sheet name
                              must be "Sheet1". Copy the Google Sheet URL and paste into the first input, labeled "Googlesheet URL" and verify that the Google Sheet link URL is correct. Click outside
                              the input to generate the script. Copy the generated script. Go to your Google Sheet and navigate to the "Extensions" menu, then select "Apps Script". In the Code.gs
                              window, paste the generated script. <br /><br />
                              <strong>Deploying the Web App:</strong><br /><br />
                              Click "New Deployment" under the Deploy button located in the top-right corner. Select the gear icon for "New Development". Click "Web app", Choose "Anyone" for access
                              level. Click "Deploy" and after deployment, copy the Web app URL. Return to Theme Builder Feature Lock Settings and paste the Web app URL in the designated field labeled
                              "Google WebApp URL". Create a funnel or HTML page and insert the funnel or HTML page link for your unlock message in the "Unlock Message URL" field. Save the theme.
                              <br /><br />
                              <strong>Final Step:</strong><br /><br />
                              Finally update the Google Sheet with the location IDs of your agency in the first column and their respective page enable, disable or hide status in other columns to
                              handle the lock settings as per the locations. Save the Google Spreadsheet, go back to your Theme Builder and refresh or reload the page after updating the Google Sheet.
                              <br /><br />
                              <strong>Congratulations! </strong> <br /><br />
                              You've successfully applied the feature lock & hide menu links settings to your locations.
                              <br /><br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <!-- new li here -->
              <li>
                <div id="section-global-settings" class="link section-basic-settings"><i class="fa fa-globe"></i>Sub Account & Global Settings <i class="fa fa-chevron-down"></i></div>
                <div class="submenu">
                  <div id="section-global-settings-wrap" class="overflow-frame scrollable">
                    <!-- deactivated ends here  -->
                    <div id="activate-global-settings-1">
                      <div class="hl-card">
                        <div class="hl-card-header"></div>
                        <div class="hl-card-content">
                          <div class="dc-colorpicker-group">
                            <label class="highlight">All configurations within the global settings persist seamlessly, even in instances where the 'No Theme' option is chosen.</label>
                          </div>
                        </div>
                      </div>
                      <!--ends here -->
                      <div id="show-tb-button-subaccount" class="hl-card gradient-color-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal" style="font-size: 13.5px !important"><strong> Show Theme Builder Button for Sub-Account</strong></div>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <div class="w-full gradient-color-settings">
                                <div class="pl-0 pr-0 pt-0">
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-allow-subaccount" style="width: 60% !important">Location ID</label>
                                    <input
                                      style="display: block !important; width: 100% !important"
                                      type="text"
                                      id="dc-colorPicker-adv-allow-subaccount"
                                      name="allow-subaccount"
                                      placeholder="Sub Account URL Key (3ehfhlS5cFbj5Mns77eC)"
                                      value="${get_panel_input_value(panel_vars, 'allow_subaccount')}" />
                                  </div>
                                </div>
                                <div class="topnav-notes">
                                  Make sure you are in Agency dashboard to save this settings. Enter the location ID of sub account in above given input field and the Theme Builder button will be
                                  enabled and accessible for the entered sub account. This only applies for 1 sub account at a time.
                                </div>
                                <div class="topnav-notes d-none">
                                  Copy the unique location ID provided here <span class="copy-location-id">${copylocationid}</span> to show the Theme Builder Button for this location. Return to your
                                  Agency account and refresh the agency page. Navigate to the Theme Builder and access Sub-Account Settings. Paste the copied location ID into the designated "Location
                                  ID" input field. Upon saving the theme settings, the Theme Builder button will be activated exclusively for this particular sub-location. Please note that this
                                  process is applicable for one sub-account at a time.
                                </div>
                                <div class="topnav-notes d-none">
                                  To complete the customization for a specific sub-account, revisit the same sub-account page. Once the page has fully loaded, refresh or reload it. Then, access the
                                  Theme Builder to modify the sub-account-specific settings by enabling the sub-account settings. If you encounter any issues or have further questions, feel free to
                                  ask for assistance.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Activate Theme Builder Panel Ends here -->
                      <!-- wordpress and yext individual banners show hide -->
                      <div id="display-yext-wordpress-banners">
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>Yext and Wordpress Banner Display</strong></div>
                          <div class="hl-card-content">
                            <div class="word-yext-wrap">
                              <div class="dc-colorpicker-group">
                                <label for="display-yext-banner">Hide Yext Banner</label>
                                <div class="display-yext-banner">
                                  <input type="checkbox" id="display-yext-banner" />
                                </div>
                              </div>

                              <div class="dc-colorpicker-group">
                                <label for="display-wordpress-banner">Hide Wordpress Banner</label>
                                <div class="display-wordpress-banner">
                                  <input type="checkbox" id="display-wordpress-banner" />
                                </div>
                              </div>
                            </div>
                            <div class="topnav-notes">Its mandatory to be on location dashboard page to show hide the Yext and Wordpress banners.</div>
                          </div>
                        </div>
                      </div>
                      <!-- end of wordpress and yext individual -->
                      <!-- Activate Theme Builder Panel -->
                      <!-- side menu reorder -->
                      <div id="reorder-side-menu" class="">
                        <div class="hl-card">
                          <div class="hl-card-header">
                            <div class="flex reset-wrap">
                              <div class="hl-text-md-normal"><strong>Reorder Left Side Menu</strong></div>
                              <button id="resetbtn-menureorder-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                                <i class="fa-solid fa-arrow-rotate-left"></i>
                              </button>
                            </div>
                          </div>
                          <div class="hl-card-content">
                            <div class="dc-colorpicker-group">
                              <label class="reorder-side-menu-label" for="reorder-side-menu-label">Enable Re-order Menu Items</label>
                              <div class="reorder-side-menu">
                                <input type="checkbox" id="reorder-side-menu-check" />
                              </div>
                            </div>
                            <div class="topnav-notes instruction-highlights">You can easily rearrange the side menu links by using the drag-and-drop method.</div>
                            <div class="topnav-notes rednotes">
                            <strong>Important:</strong> Before rearranging the side menu links, ensure that you are working in the Sub-Account that contains the maximum number of custom side menu links. The menu reordering feature is available only for HighLevel's native main & settings menu links and does not apply to custom menu links.
                            </div>
                            <div class="topnav-notes">
                              To enable the reorder menu feature: You must be in a Sub-Account and perform a hard refresh before starting the setup or updating the menu order to prevent caching issues.
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- sidebar menu reorder ends here -->
                      <!-- hide menu item -->
                      <div id="hide-side-menu" class="">
                        <div class="hl-card">
                          <div class="hl-card-header">
                            <div class="flex reset-wrap">
                              <div class="hl-text-md-normal"><strong>Hide Side Menu Links</strong></div>
                              <button id="resetbtn-hidesidemenu-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                                <i class="fa-solid fa-arrow-rotate-left"></i>
                              </button>
                            </div>
                          </div>
                          <div class="hl-card-content">
                            <div class="dc-colorpicker-group">
                              <label class="hide-side-menu-label" for="hide-side-menu-label">Enable hide Menu Items</label>
                              <div class="hide-side-menu">
                                <input type="checkbox" id="hide-side-menu-check" />
                              </div>
                            </div>
                            <div class="topnav-notes instruction-highlights-hidemenu scroll-item">
                              Effortlessly hide side menu links by clicking the small 'X' icon beside each link, revealed on mouseover.
                            </div>
                            <div class="topnav-notes">
                              This applies on all sub accounts to hide the side menu link(s). If you swtiched from agency account to location or location vs. its settings, make sure you hard refresh
                              the page before applying the hide menu links.
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- sub account details enabled vs disabled -->
                      <div id="activate-subaccount-settings-wrap" class="">
                        <div class="hl-card">
                          <div class="hl-card-header">
                            <div class="flex reset-wrap">
                              <div class="hl-text-md-normal" style="font-size: 13.5px !important"><strong>Theme Styles per Sub-account âŸ¶ Settings </strong></div>
                            </div>
                          </div>
                          <div class="hl-card-content">
                            <div class="dc-colorpicker-group">
                              <label class="selected-subaccount" for="activate-subaccount-settings">Enable Theme Styles for Sub-accounts </label>
                              <div class="activate-subaccount-settings">
                                <input type="checkbox" id="activate-subaccount-settings" />
                              </div>
                            </div>
                            <div class="dc-colorpicker-group bdr-top">
                              <label class="highlight-t"
                                >Enabling Sub-account settings provides you with the ability to customize theme styles for each sub-account according to your preferences. It is important to load the
                                specific sub-account and pay attention to the following:
                              </label>
                            </div>
                            <div class="topnav-notes rednotes">
                              NOTE: If you have enabled the Theme Styles for specific Sub-accounts, it is mandatory to reload the page and use an incognito window before making any changes or updates
                              to the specific sub-account settings or global theme settings.
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here - sub account details enabled vs disabled -->
                      <!-- delete styles for this location -->
                      <div id="delete-location-data" class="delete-location-data">
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>Reset Theme Styles âŸ¶ Selected Sub-account</strong></div>
                          <div class="hl-card-content">
                            <div class="delete-data">
                              <div class="dc-colorpicker-group">
                                <label style="padding-bottom: 8px !important; padding-top: 8px !important"
                                  ><strong class="underline location-name">${get_location_info()}</strong>This Sub-account has its own custom theme styles. To reset the theme styles specific to this
                                  location and revert them to the standardized theme styles applicable across all Sub-account. <br />
                                  <strong
                                    >Ensure you reload the page or clear the cache before clicking the "Reset" button below or before making any modifications to the selected Sub-account.</strong
                                  ></label
                                >
                              </div>
                              <div class="dc-colorpicker-group">
                                <button id="selected-location-delete-btn" class="btn btn-danger mb-2 mt-2">Reset Sytles for Selected Sub-account</button>
                              </div>
                            </div>
                            <div class="dc-colorpicker-group selected-location-panel">
                              <label class="selected-location-labels greens padtop" style="color: #0b8d0b !important"
                                >Kindly allow a moment as the page is scheduled to reload in order to apply the necessary settings. We appreciate your patience.</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end of hide menu item -->
                    </div>
                  </div>
                  <!-- delete styles ends here  -->
                </div>
              </li>
              <!--new li here -->
            </ul>
          </div>
          <div id="processing-spinner">
            <div class="loader-wrap transition">
              <div class="confirmation-message transition">
                <h2>Are you sure?</h2>
                <p>You want to publish theme</p>
                <!-- Default Vs Selected Location -->
                <div id="publish-location-settings-wrap" class="">
                  <div id="publish-location-settings">
                    <div class="hl-card">
                      <div class="hl-card-content">
                        <div class="dc-colorpicker-group publish-location-group">
                          <label class="publish-locations-label-left" for="locations-check">For all <br />Sub-accounts</label>
                          <div class="publish-locations">
                            <input type="checkbox" id="locations-check" value="" />
                            <div class="card error-notice-tb">
                              <h3>Not a Valid Sub-Account</h3>
                              <p>Please swtich to sub-account to apply sub-account specific settings.</p>
                            </div>
                          </div>
                          <label class="publish-locations-label-right" for="locations-check">Selected <br />Sub-account</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dc-colorpicker-group-t apply-selected-sub-account">
                    <label style="padding-bottom: 30px !important; padding-top: 0px !important; font-size: 14px !important"
                      ><strong class="underline location-name">${get_location_info()}</strong></label
                    >
                  </div>
                  <div class="dc-colorpicker-group-t all-sub-account active">
                    <label style="padding-bottom: 30px !important; padding-top: 0px !important; font-size: 14px !important"><strong class="underline">All Sub-accounts</strong></label>
                  </div>
                </div>
                <!--  ends here -->
                <button id="confimbtn" class="btn confimbtn" type="button"><i class="fa-solid fa-circle-check"></i> YES, I CONFIRM</button>
                <button id="cancelbtn" class="btn cancelbtn" type="button"><i class="fa-solid fa-circle-xmark"></i> NO, CANCEL</button>
              </div>
              <div class="loader transition">
                <div class="spinner"></div>
                <div class="spinner-msg">
                  Saving & Rendering
                  <p>Your Awesome Theme</p>
                  <p class="spinner-error-msg">Setting up Layout & Applying Colors...</p>
                  <p class="spinner-error-msg-1">Generating Code...</p>
                  <p class="spinner-error-msg-2">Setup Finished</p>
                </div>
              </div>
              <div class="generate-css-message transition">
                <div class="success-message">
                  <h3>Theme Successfully Applied!</h3>
                  <p>
                    To apply the same theme styles and layout to the login screen, security code screen, logout screen, re-login and re-login security screen, click the below button to generate the
                    CSS script.
                  </p>
                  <div class="cjs-label almost-done">
                    <h4>You are almost done!</h4>
                    <p>Click the button below and go to final step.</p>
                  </div>
                  <div class="hlpt_dc_btn_wrapper generatecssbtn">
                    <button id="generate-script-varcss" class="dc-savebtn dc-savebtn-1" type="button"><i class="fa-solid fa-code"></i> GENERATE CSS SCRIPT</button>
                  </div>
                </div>
                <div class="error-message">
                  <h3>Theme setup Failed!</h3>
                  <h3>Error occured!</h3>
                  <p class="error-msg-p1">Reference Key or Domain Verification failed while fetching the initial data for rendering the theme layout and colors.</p>
                  <p class="error-msg-p">Click the button to go back and fix the reference key and domain name then try again.</p>
                  <div class="hlpt_dc_btn_wrapper error-message-btn">
                    <button id="backbtn-error" class="btn backbtn-error cancelbtn-error" type="button"><i class="fa-solid fa-arrow-left"></i> BACK</button>
                  </div>
                </div>
                <div class="script-window hiddenbynature">
                  <div class="custom-javascript-generated">
                    <div style="position: relative">
                      <div class="cjs-label"><h4>Login & Logout Screens Theme CSS Script</h4></div>
                      <div id="copy2clipboard"><i class="fa-solid fa-circle-check"></i>Copied</div>
                      <textarea
                        placeholder="Custom Script"
                        name="generate-description"
                        class="hl-text-area-input text-gray-800 shadow-sm block w-full focus:outline-none focus:ring-offset-curious-blue-500 focus:border-curious-blue-500 sm:text-sm border-gray-300 rounded-md disabled:opacity-50 js-cs-custom-window-textarea"
                        label="Custom Javascript"
                        type="text"
                        rows="6"></textarea>
                      <span id="copytoclipboard-btn" class="copytoclipboard-btn">Copy &nbsp;<i class="fa-regular fa-copy"></i></span>
                      <div class="done-refresh-wrap-1">
                        <p>
                          Copy the above script and paste it to the custom CSS Box of company settings. Make sure that this CSS code should be pasted only in CSS box, not in JS box and CSS code starts
                          at the very top of custom CSS Box. Once you complete this process, press the below green "DONE" button and enjoy!
                        </p>
                        <button id="backbtn" class="btn backbtn cancelbtn" type="button"><i class="fa-solid fa-arrow-left"></i> BACK</button>
                        <button id="done-refresh" class="btn donebtn" type="button"><i class="fa-regular fa-circle-check"></i>DONE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="showmore-step3">
          <div class="hlpt_dc_btn_wrapper">
            <button id="generate-script-js" class="dc-savebtn" type="button"><i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>${selected_theme_save_btn_message}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--ends here -->

 `;
      add_elem_dc_panel.innerHTML = theme_gen_overlay_html;
      add_elem_dc_panel.classList.add('dc-panel');
      add_elem_dc_panel.setAttribute('id', 'dashboard-customizer-panel');
      add_elem_dc_panel.style.display = 'none';

      const hl_header_controls = document.querySelector('#app');
      if (typeof hl_header_controls !== 'undefined' && hl_header_controls) {
        hl_header_controls.prepend(add_elem_dc_panel);
      }
      setup_multiple_sections_panel_access();
      handle_theme_change();
      update_input_fields_from_ls();
      generate_button_listners();
      update_styles_dropdown_themes();
      is_horizontal_nav_active();
      dropdown_selected_theme_display();
      select_theme_notifier();
      cleanwhite_disabled();
      theme_gen_dragable();
      init_icon_input_change();
      setup_login_form_pos();
      save_settings_confirmation('');
      setup_font_family();
    }
  };
  //// setup dynamic stylesheet
  const remove_dynamic_stylesheets = function () {
    //// base scripts
    if (document.head.contains(document.querySelector('#dashboard-main-styles'))) {
      document.querySelector('#dashboard-main-styles').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-client-styles'))) {
      document.querySelector('#dashboard-client-styles').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-theme-client-adv'))) {
      document.querySelector('#dashboard-theme-client-adv').remove();
    }
    //// darkcherry & green-o-blue
    if (document.head.contains(document.querySelector('#dashboard-darkcherry-client'))) {
      document.querySelector('#dashboard-darkcherry-client').remove();
    }
    //// milky white
    if (document.head.contains(document.querySelector('#dashboard-milkywhite-client'))) {
      document.querySelector('#dashboard-milkywhite-client').remove();
    }
    //// technoblue  & technopurple
    if (document.head.contains(document.querySelector('#dashboard-techno-client'))) {
      document.querySelector('#dashboard-techno-client').remove();
    }
    //// darkocean
    if (document.head.contains(document.querySelector('#dashboard-darkocean-client'))) {
      document.querySelector('#dashboard-darkocean-client').remove();
    }
    //// silverlight
    if (document.head.contains(document.querySelector('#dashboard-silverlight-client'))) {
      document.querySelector('#dashboard-silverlight-client').remove();
    }
    /// cleanwhite
    if (document.head.contains(document.querySelector('#dashboard-theme-main-cleanwhite'))) {
      document.querySelector('#dashboard-theme-main-cleanwhite').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite'))) {
      document.querySelector('#dashboard-theme-client-cleanwhite').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-adv'))) {
      document.querySelector('#dashboard-theme-client-cleanwhite-adv').remove();
    }
    /// cleanwhite header controls bottom left
    if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
      document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
    }
    /// cleanwhite header controls as smaller icon - bottom left
    if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm'))) {
      document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm').remove();
    }
    /// advanced settings
    if (document.head.contains(document.querySelector('#dashboard-activate-advance-settings'))) {
      document.querySelector('#dashboard-activate-advance-settings').remove();
    }
    //// login
    if (document.head.contains(document.querySelector('#dashboard-login-main'))) {
      document.querySelector('#dashboard-login-main').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-login-client'))) {
      document.querySelector('#dashboard-login-client').remove();
    }
    //// login position
    if (document.head.contains(document.querySelector('#dashboard-login-client-master-center'))) {
      document.querySelector('#dashboard-login-client-master-center').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-login-client-master-left'))) {
      document.querySelector('#dashboard-login-client-master-left').remove();
    }
    if (document.head.contains(document.querySelector('#dashboard-login-client-master-right'))) {
      document.querySelector('#dashboard-login-client-master-right').remove();
    }
    /// horizontal top navigation
    if (document.head.contains(document.querySelector('#dashboard-horizontal-nav'))) {
      document.querySelector('#dashboard-horizontal-nav').remove();
    }
    //// darkmode
    if (document.head.contains(document.querySelector('#dashboard-mode-settings'))) {
      document.querySelector('#dashboard-mode-settings').remove();
    }
  };
  const remove_dynamic_stylesheets_mode = function () {
    if (document.head.contains(document.querySelector('#dashboard-mode-settings'))) {
      document.querySelector('#dashboard-mode-settings').remove();
    }
  };
  //// setup remove main nav stylesheet
  const remove_dynamic_stylesheets_mainnav = function () {
    if (document.head.contains(document.querySelector('#dashboard-horizontal-nav'))) {
      document.querySelector('#dashboard-horizontal-nav').remove();
    }
  };
  //// setup input color change listners to LS
  //// process input color change to LC
  const color_change_listner = (ls_key, element_id) => {
    if (ls_key && typeof ls_key !== 'undefined' && element_id && typeof element_id !== 'undefined') {
      const textarea_input = document.querySelector('.js-cs-custom-window-textarea');
      const unsaved_changes = document.querySelector('.close-theme-customizer-wrapper');
      var selected_element = document.querySelector('#' + element_id);

      if (typeof selected_element !== 'undefined' && selected_element && typeof unsaved_changes !== 'undefined' && unsaved_changes) {
        selected_element.addEventListener('change', function handleChange(event) {
          localStorage.setItem(ls_key, event.target.value);
          unsaved_changes.classList.add('showunsaved-changes');
          textarea_input.value = '';
        });
      }
    }
  };
  //// get lckey and nput id for color change to LS
  const input_color_change_listners = function () {
    var ls_obj_general = get_ls_obj_general();
    var ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };

    var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
    var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
    let ls_elem_id = {
      ...ls_elem_id_no_cc_general,
      ...ls_elem_id_no_cc_advanced,
    };

    var ls_obj_keys = Object.keys(ls_obj);
    for (var i = 0; i < ls_obj_keys.length; i++) {
      if (ls_obj_keys[i] && typeof ls_elem_id !== 'undefined' && ls_elem_id.hasOwnProperty(ls_obj_keys[i]) && ls_elem_id[ls_obj_keys[i]]) {
        color_change_listner(ls_obj_keys[i], ls_elem_id[ls_obj_keys[i]]);
      }
    }
    color_change_listner('theme_login_contactinfo', 'dc-footer-contactinfo');
    color_change_listner('theme_loading_icon', 'dc-loading-icon');
    color_change_listner('theme_adv_loginlogo_size', 'dc-loginlogo-size');
    color_change_listner('theme_login_coverimage', 'dc-login-page-cover-img');
    color_change_listner('theme_login_logoimage', 'dc-login-page-logo-img');
    color_change_listner('google_spreadsheet_url', 'dc-google-spreadsheet-url');
    color_change_listner('google_webapp_deploy', 'dc-google-webapp-deploy');
    color_change_listner('unlock_message', 'dc-unlock-message');
    // color_change_listner('theme_font_family', 'dc-colorPicker-font-family');
  };
  //// setup tb panel close button
  const theme_gen_close_btn = function () {
    const panel_Reference = document.querySelector('#dashboard-customizer-panel');
    const close_theme_btn = document.querySelector('.close-theme-customizer');
    if (typeof close_theme_btn !== 'undefined' && close_theme_btn && typeof panel_Reference !== 'undefined' && panel_Reference) {
      close_theme_btn.addEventListener('click', function () {
        panel_Reference.style.display = 'none';
      });
    }
  };
  /* global loader NOT IN USE */
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
  /* global loader ends here */
  //// setup theme change
  const handle_theme_change = function () {
    let choosen_theme = window.selected_theme;
    if (typeof document.querySelector('#dc-themeName') !== 'undefined' && document.querySelector('#dc-themeName')) {
      document.querySelector('#dc-themeName').addEventListener('change', function handleChange(event) {
        showLoader('Rendering', 'Loading fresh data...');
        choosen_theme = event.target.value;
        update_theme_styles(choosen_theme);
        setTimeout(() => {
          hideLoader();
        }, 2500);
      });
    }
    return choosen_theme;
  };
  //// setup theme element notification
  const select_theme_notifier = function () {
    const select_blank = document.querySelector('#notifier');
    const select_blank_input = document.querySelector('#dc-themeName');
    if (typeof select_blank !== 'undefined' && select_blank) {
      if (select_blank_input.value === '') {
        select_blank.style.display = 'block';
        document.querySelector('#dc-colorPicker-primary').disabled = false;
        document.querySelector('#dc-colorPicker-primarybg').disabled = false;
        document.querySelector('#dc-colorPicker-bg-gradient').disabled = false;
        document.querySelector('#dc-colorPicker-leftsidebar-txtcol').disabled = false;
        document.querySelector('#dc-colorPicker-leftsidebar-iconcol').disabled = false;
        document.querySelector('#dc-footer-contactinfo').disabled = false;
        document.querySelector('#dc-loading-icon').disabled = false;
        document.querySelector('#dc-login-page-cover-img').disabled = false;
        document.querySelector('#dc-colorPicker-primary').style.cursor = 'pointer';
        document.querySelector('#dc-colorPicker-primarybg').style.cursor = 'pointer';
        document.querySelector('#dc-colorPicker-bg-gradient').style.cursor = 'pointer';
        document.querySelector('#dc-colorPicker-leftsidebar-txtcol').style.cursor = 'pointer';
        document.querySelector('#dc-colorPicker-leftsidebar-iconcol').style.cursor = 'pointer';
        if (typeof textarea_input !== 'undefined' && textarea_input) {
          textarea_input.value = '';
        }
      }
      if (typeof select_blank !== 'undefined' && select_blank) {
        select_blank_input.addEventListener('change', function handleChange(event) {
          select_blank.style.display = 'none';
          document.querySelector('#dc-colorPicker-primary').disabled = false;
          document.querySelector('#dc-colorPicker-primarybg').disabled = false;
          document.querySelector('#dc-colorPicker-bg-gradient').disabled = false;
          document.querySelector('#dc-colorPicker-leftsidebar-txtcol').disabled = false;
          document.querySelector('#dc-colorPicker-leftsidebar-iconcol').disabled = false;
          document.querySelector('#dc-footer-contactinfo').disabled = false;
          document.querySelector('#dc-loading-icon').disabled = false;
          document.querySelector('#dc-login-page-cover-img').disabled = false;
          document.querySelector('#dc-colorPicker-primary').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-primarybg').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-bg-gradient').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-leftsidebar-txtcol').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-leftsidebar-iconcol').style.cursor = 'pointer';
        });
      }
    }
  };
  //// setup theme interaction for pages conditionally swtich to other screen
  const tb_panel_interactive_styles = function () {
    const tsgpanel_card = document.querySelector('.tsg-panel');
    const select_blank_input = document.querySelector('#dc-themeName');
    const showmore_step2 = document.querySelector('.showmore-step2');
    const showmore_step3 = document.querySelector('.showmore-step3');
    const card_header = document.querySelector('.dc-card-header');
    const card_header_h3 = document.querySelector('.card-header-h3');
    const card_header_description_p = document.querySelector('.dc-item-description p');
    const card_header_title = document.querySelector('.dc-title');
    const card_header_mainlabel = document.querySelector('#mainlabel');
    const card_header_theme_label = document.querySelector('.hl-oe__item-wrap.dc-wrap');
    const card_header_selectBtn = document.querySelector('.dc-themeName-wrap #dc-themeName');
    const card_header_selectBtn_wrap = document.querySelector('.dc-themeName-wrap');
    const notifier_placement = document.querySelector('#notifier');
    const show_hide_sections = document.querySelector('.show-hide-sections');
    const show_hide_savebtn = document.querySelector('.dc-savebtn');
    const show_hide_greetings = document.querySelector('.greetings');

    if (
      typeof select_blank_input !== 'undefined' &&
      select_blank_input &&
      typeof showmore_step2 !== 'undefined' &&
      showmore_step2 &&
      !showmore_step2.classList.contains('showmore-step2--dina') &&
      typeof showmore_step3 !== 'undefined' &&
      showmore_step3 &&
      !showmore_step3.classList.contains('showmore-step3--dina') &&
      typeof card_header !== 'undefined' &&
      card_header &&
      !card_header.classList.contains('dc-card-header--dina') &&
      typeof card_header_h3 !== 'undefined' &&
      card_header_h3 &&
      !card_header_h3.classList.contains('card-header-h3--dina') &&
      typeof card_header_description_p !== 'undefined' &&
      card_header_description_p &&
      !card_header_description_p.classList.contains('hideme') &&
      typeof card_header_title !== 'undefined' &&
      card_header_title &&
      !card_header_title.classList.contains('hideme') &&
      typeof card_header_mainlabel !== 'undefined' &&
      card_header_mainlabel &&
      !card_header_mainlabel.classList.contains('hideme') &&
      typeof card_header_selectBtn !== 'undefined' &&
      card_header_selectBtn &&
      !card_header_selectBtn.classList.contains('dc-themeName--dina') &&
      typeof card_header_selectBtn_wrap !== 'undefined' &&
      card_header_selectBtn_wrap &&
      !card_header_selectBtn_wrap.classList.contains('dc-themeName-wrap--dina') &&
      typeof card_header_theme_label !== 'undefined' &&
      card_header_theme_label &&
      !card_header_theme_label.classList.contains('dc-wrap--dina') &&
      typeof notifier_placement !== 'undefined' &&
      notifier_placement &&
      !tsgpanel_card.classList.contains('tsg-panel--dina') &&
      typeof tsgpanel_card !== 'undefined' &&
      tsgpanel_card &&
      typeof show_hide_sections !== 'undefined' &&
      show_hide_sections &&
      !show_hide_sections.classList.contains('show_hide_sections--dina') &&
      typeof show_hide_greetings !== 'undefined' &&
      show_hide_greetings &&
      !show_hide_greetings.classList.contains('show_hide_greetings--dina')
    ) {
      select_blank_input.addEventListener('change', function handleChange(event) {
        showmore_step2.classList.add('showmore-step2--dina');
        showmore_step3.classList.add('showmore-step3--dina');
        card_header.classList.add('dc-card-header--dina');
        card_header_h3.classList.add('card-header-h3--dina');
        card_header_description_p.classList.add('hideme');
        card_header_title.classList.add('hideme');
        card_header_mainlabel.classList.add('hideme');
        card_header_selectBtn.classList.add('dc-themeName--dina');
        card_header_selectBtn_wrap.classList.add('dc-themeName-wrap--dina');
        card_header_theme_label.classList.add('dc-wrap--dina');
        tsgpanel_card.classList.add('tsg-panel--dina');
        show_hide_sections.classList.add('show_hide_sections--dina');
        show_hide_greetings.classList.add('show_hide_greetings--dina');
      });
    }
  };
  //// setup generate css script for selected theme options for login screens and other scripts.
  const generate_css_script = function (themeName) {
    let varcss_generated_imports = '';
    let selectedtheme = window.selected_theme;
    let selected_theme = window.selected_theme;
    let selected_theme_name = dashboard_themes.theme_data[selectedtheme].theme_name;
    let theme_name_primary_col = dashboard_themes.theme_data[selectedtheme]['theme_colors'][0];
    let theme_name_primary_bgcol = dashboard_themes.theme_data[selectedtheme]['theme_colors'][1];
    let theme_name_leftnav_col = dashboard_themes.theme_data[selectedtheme]['theme_colors'][3];
    let selected_theme_login_file = dashboard_themes.theme_data[selectedtheme].theme_styles_login;
    let login_contactinfo = dashboard_themes.theme_data[selectedtheme].login_contactinfo;
    let loading_icon = dashboard_themes.theme_data[selectedtheme].loading_icon;
    let loginlogo = dashboard_themes.theme_data[selectedtheme].advanced_settings.login_settings.loginlogo.loginlogo_size;
    let login_coverimage = dashboard_themes.theme_data[selectedtheme].login_coverimage;
    let login_logoimage = dashboard_themes.theme_data[selectedtheme].login_logoimage;
    let main_nav = dashboard_themes.theme_data[selectedtheme].main_nav;
    const urlprefix = "url('";
    const urlpostfix = "') !important";
    if (localStorage.getItem('selected_theme')) selected_theme = localStorage.getItem('selected_theme');
    if (localStorage.getItem('selected_theme_name')) selected_theme_name = localStorage.getItem('selected_theme_name');
    if (localStorage.getItem('theme_name_primary_col')) theme_name_primary_col = localStorage.getItem('theme_name_primary_col');
    if (localStorage.getItem('theme_name_primary_bgcol')) theme_name_primary_bgcol = localStorage.getItem('theme_name_primary_bgcol');
    if (localStorage.getItem('theme_login_contactinfo')) login_contactinfo = localStorage.getItem('theme_login_contactinfo');
    if (localStorage.getItem('theme_loading_icon')) loading_icon = localStorage.getItem('theme_loading_icon');
    if (localStorage.getItem('theme_adv_loginlogo_size')) loginlogo = localStorage.getItem('theme_adv_loginlogo_size');
    if (localStorage.getItem('theme_login_coverimage')) login_coverimage = localStorage.getItem('theme_login_coverimage');
    if (localStorage.getItem('theme_login_logoimage')) login_logoimage = localStorage.getItem('theme_login_logoimage');
    if (localStorage.getItem('google_spreadsheet_url')) google_spreadsheet_url = localStorage.getItem('google_spreadsheet_url');
    if (localStorage.getItem('google_webapp_deploy')) google_webapp_deploy = localStorage.getItem('google_webapp_deploy');
    if (localStorage.getItem('unlock_message')) unlock_message = localStorage.getItem('unlock_message');
    if (localStorage.getItem('main_nav')) main_nav = localStorage.getItem('main_nav');
    if (localStorage.getItem('theme_name_leftsidebar_txtcol')) theme_name_leftnav_col = localStorage.getItem('theme_name_leftsidebar_txtcol');
    var file_url = '';
    const selected_position_elem = document.querySelector('input[name="login-form-position-toggle"]:checked');
    if (typeof selected_position_elem !== 'undefined' && selected_position_elem) {
      var selected_position = selected_position_elem.value;
      if (selected_position == 'left') {
        file_url = `'${script_url}${dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main_left}'`;
      } else if (selected_position == 'center') {
        file_url = `'${script_url}${dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main_center}'`;
      } else if (selected_position == 'right') {
        file_url = `'${script_url}${dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main_right}'`;
      }
    }
    const dynamic_css_file = `'${script_url}${dashboard_themes.script_filename.dashboard_theme_dynamic_css}?k=${get_data_attribute_value('data-ark')}'`;
    const base_login_css_file = window.selected_theme !== 'theme_custom' ? `@import url(${dynamic_css_file});` : '';
    const client_login_css_file = window.selected_theme !== 'theme_custom' ? `@import url(${file_url});` : '';

    let login_img_display = '';
    let login_logoimage_url = '';
    if (login_logoimage !== '') {
      login_logoimage_url = `--hlpt-adv-loginlogo-img: ${urlprefix}${login_logoimage}${urlpostfix}`;
      login_img_display = `body #app .sidebar-v2-agency .hl_login .hl_login--header .container-fluid a img {opacity: 0 !important;}`;
    }
    // ${base_login_css_file}
    varcss_generated_imports = `${client_login_css_file} :root { --hlpt-primary-theme-color: ${theme_name_primary_col}; --hlpt-primary-theme-bg-color: ${theme_name_primary_bgcol}; --hlpt-left-nav-color: ${theme_name_leftnav_col}; --hlpt-footer-note: "${login_contactinfo
      .replace(/"/g, '\\"')
      .replace(
        /'/g,
        "\\'"
      )}";  --custom-loading-icon: ${urlprefix}${loading_icon}${urlpostfix}; --hlpt-adv-loginlogo-size: ${loginlogo}px; ${login_logoimage_url}; --hlpt-main-body-image: ${urlprefix}${login_coverimage}${urlpostfix};} ${login_img_display}`;
    return varcss_generated_imports;
  };
  function updateUserName_lc() {
    const userTag = document.querySelector('#user-tag');
    const storedUserName = localStorage.getItem('themegen_user_name');
    if (userTag) {
      if (storedUserName && storedUserName !== userTag.textContent) {
        userName = storedUserName;
        userTag.textContent = userName.split(' ')[0];
      }
    }
  }

  const wp_yext_toggle = function () {
    var dashboard_alerts_yext = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) dashboard_alerts_yext = window.themegen_settings.hide_yext_banner;
    var dashboard_alerts_wordpress = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) dashboard_alerts_wordpress = window.themegen_settings.hide_wordpress_banner;
    const display_yext_alert = document.querySelector('#display-yext-banner');
    const display_wordpress_alert = document.querySelector('#display-wordpress-banner');
    if (is_display_hide_banner_allowed()) {
      if (dashboard_alerts_yext === 'true') {
        if (display_yext_alert) display_yext_alert.checked = true;
      }
      if (dashboard_alerts_wordpress === 'true') {
        if (display_wordpress_alert) display_wordpress_alert.checked = true;
      }
    }
  };

  //// setup button listners
  const generate_button_listners = function () {
    const script_cutom_window_wrapper = document.querySelector('.hiddenbynature');
    const script_cutom_window_placehodler = document.querySelector('.js-cs-custom-window-textarea');
    const script_card_body_rightpad = document.querySelector('.dashboard-customizer-card-body');
    const confirmation_message = document.querySelector('.confirmation-message');
    const generate_css_message = document.querySelector('.generate-css-message');
    const generate_script_js_btn = document.querySelector('#generate-script-js');
    const loader_wrap = document.querySelector('.loader-wrap');
    const almost_done = document.querySelector('.almost-done');
    var selected_theme = '';
    if (window.selected_theme) selected_theme = window.selected_theme;
    var publishedTheme = '';
    if (window.themegen_settings) publishedTheme = window.themegen_settings.theme_name;
    ///// add sub account location id to LS
    const allow_subaccount = document.querySelector('#dc-colorPicker-adv-allow-subaccount');
    if (typeof allow_subaccount !== 'undefined' && allow_subaccount) {
      allow_subaccount.addEventListener('input', function () {
        localStorage.setItem('allow_subaccount', event.target.value);
      });
    }
    //// login form position ///
    const selected_position_elems = document.querySelectorAll('input[name="login-form-position-toggle"]');
    if (typeof selected_position_elems !== 'undefined' && selected_position_elems) {
      if (selected_position_elems.length > 0) {
        selected_position_elems.forEach((elem) => {
          elem.addEventListener('change', function () {
            const selected_position = this.value;
            localStorage.setItem('theme_login_pos', selected_position);
          });
        });
      }
    }
    ////// main navgiation toggle left to top
    const horizontal_nav_toggle = document.querySelector('#horizontal-nav-toggle');
    const h_nav_active_header = document.querySelector('#sidebar-v2');
    if (
      typeof horizontal_nav_toggle !== 'undefined' &&
      horizontal_nav_toggle &&
      typeof h_nav_active_header !== 'undefined' &&
      h_nav_active_header &&
      !h_nav_active_header.classList.contains('horizontal-nav--active')
    ) {
      horizontal_nav_toggle.addEventListener('change', function () {
        if (this.checked) {
          localStorage.setItem('main_nav', 'top');
          h_nav_active_header.classList.add('horizontal-nav--active');
          add_styles('dashboard-horizontal-nav', script_url + dashboard_themes.script_filename.theme_mainnav);
          horizontal_nav_toggle.checked = true;
        } else {
          localStorage.setItem('main_nav', 'left');
          h_nav_active_header.classList.remove('horizontal-nav--active');
          remove_dynamic_stylesheets_mainnav();
          horizontal_nav_toggle.checked = false;
        }
      });
    }
    ////// generate css btn
    if (typeof generate_script_js_btn !== 'undefined' && generate_script_js_btn && typeof loader_wrap !== 'undefined' && loader_wrap) {
      generate_script_js_btn.addEventListener('click', function () {
        get_location_info();
        loader_wrap.style.display = 'block';
        generate_script_js_btn.style.setProperty('display', 'none', 'important');
        generate_css_message.style.setProperty('display', 'none', 'important');
        generate_css_message.style.setProperty('transition', 'opacity 1s ease');
        generate_css_message.style.opacity = '0';
        setTimeout(function () {
          loader_wrap.style.opacity = '1';
        }, 50);
      });
    }
    ////// cancel process button
    const cancelbtn = document.querySelector('.cancelbtn');
    if (typeof cancelbtn !== 'undefined' && cancelbtn) {
      cancelbtn.addEventListener('click', function () {
        loader_wrap.style.display = 'none';
        loader_wrap.style.opacity = '0';
        generate_script_js_btn.style.setProperty('display', 'flex', 'important');
      });
    }
    ////// refresh sub location data button
    const refresh_btn = document.querySelector('#refresh-location-delete');
    const dashboard_customizer_panel = document.querySelector('#dashboard-customizer-panel');
    if (refresh_btn && dashboard_customizer_panel) {
      refresh_btn.addEventListener('click', function () {
        dashboard_customizer_panel.style.setProperty('display', 'none', 'important');
        location.reload();
      });
    }
    ////// tb step back button
    const backbtn = document.querySelector('.backbtn');
    if (typeof backbtn !== 'undefined' && backbtn) {
      backbtn.addEventListener('click', function () {
        loader_wrap.style.display = 'none';
        loader_wrap.style.opacity = '0';
        generate_css_message.style.setProperty('display', 'none', 'important');
        generate_css_message.style.opacity = '0';
        confirmation_message.style.setProperty('display', 'block', 'important');
        confirmation_message.style.opacity = '1';
        script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
        script_cutom_window_wrapper.style.opacity = '0';
        generate_css_message.style.maxHeight = '200px';
        generate_script_js_btn.style.setProperty('display', 'flex', 'important');
        if (typeof almost_done !== 'undefined' && almost_done) {
          almost_done.style.setProperty('display', 'block', 'important');
          almost_done.style.opacity = '1';
        }
      });
    }
    ////// back button error
    const backbtn_error = document.querySelector('.cancelbtn-error');
    if (typeof backbtn_error !== 'undefined' && backbtn_error) {
      backbtn_error.addEventListener('click', function () {
        loader_wrap.style.display = 'none';
        loader_wrap.style.opacity = '0';
        generate_css_message.style.setProperty('display', 'none', 'important');
        generate_css_message.style.opacity = '0';
        confirmation_message.style.setProperty('display', 'block', 'important');
        confirmation_message.style.opacity = '1';
        script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
        script_cutom_window_wrapper.style.opacity = '0';
        generate_css_message.style.maxHeight = '200px';
        generate_script_js_btn.style.setProperty('display', 'flex', 'important');
      });
    }
    ////// reload - refresh the browser
    const theme_update_donebtn = document.querySelector('.donebtn');
    if (typeof theme_update_donebtn !== 'undefined' && theme_update_donebtn) {
      theme_update_donebtn.addEventListener('click', function () {
        location.reload();
        // refresh_settings();
        if (typeof document.querySelector('#dashboard-customizer-panel') !== 'undefined' && document.querySelector('#dashboard-customizer-panel')) {
          document.querySelector('#dashboard-customizer-panel').style.setProperty('display', 'none', 'important');
        }
      });
    }
    ////// generate scripts scroll
    if (typeof document.querySelector('#generate-script-varcss') !== 'undefined' && document.querySelector('#generate-script-varcss')) {
      let selected_theme = window.selected_theme;
      const scrollableDiv = document.querySelector('.dashboard-customizer-card-body');
      const scrollableDiv_top = document.querySelector('.custom-javascript-generated');
      document.querySelector('#generate-script-varcss').addEventListener('click', function () {
        script_cutom_window_wrapper.style.setProperty('display', 'block', 'important');
        script_cutom_window_wrapper.style.opacity = '1';
        generate_css_message.style.maxHeight = '520px';
        generate_css_message.style.setProperty('transform', 'max-height 1s');
        generate_css_message.style.setProperty('transition', 'max-height 1s');
        script_cutom_window_placehodler.value = generate_css_script(selected_theme);
        script_cutom_window_placehodler.readOnly = true;
        script_card_body_rightpad.style.setProperty('padding-right', '20px', 'important');
        scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
        scrollableDiv_top.scrollTo({ top: scrollTo, behavior: 'smooth' });
        if (typeof almost_done !== 'undefined' && almost_done) {
          almost_done.style.setProperty('display', 'none', 'important');
          almost_done.style.opacity = '0';
        }
      });
    }
    ////// scroll to textarea script window
    const scroll_to_script_window = function (btn) {
      const generate_script_varcss = document.querySelector('#generate-script-varcss');
      if (
        typeof document.querySelector('.copytoclipboard-btn') !== 'undefined' &&
        document.querySelector('.copytoclipboard-btn') &&
        typeof generate_script_varcss !== 'undefined' &&
        generate_script_varcss
      ) {
        btn.addEventListener('click', function () {
          btn.scrollIntoView({ behavior: 'smooth' });
        });
      }
    };
    scroll_to_script_window(document.querySelector('#generate-script-js'));
    if (typeof generate_script_varcss !== 'undefined' && generate_script_varcss) {
      scroll_to_script_window(generate_script_varcss);
    }
    ////// copy to clipborad
    const copytoclipboard_btn = document.querySelector('.copytoclipboard-btn');
    if (typeof copytoclipboard_btn !== 'undefined' && copytoclipboard_btn) {
      copytoclipboard_btn.addEventListener('click', function () {
        let text = document.querySelector('.js-cs-custom-window-textarea');
        text.select();
        document.execCommand('copy');
        copytoclipboard_btn.textContent = '(âœ”) Copied!';
        copytoclipboard_btn.style.setProperty('background-color', '#1de24f', 'important');
        const copyclip = document.querySelector('#copy2clipboard');

        if (typeof copyclip !== 'undefined' && copyclip) {
          setTimeout(function () {
            copyclip.style.opacity = '0';
            copytoclipboard_btn.textContent = 'Copy';
            copytoclipboard_btn.style.setProperty('background-color', '#e2e2e2', 'important');
          }, 3500);
        }
      });
    }
    /* lockout script */
    const google_spreadsheet_input = document.querySelector('#dc-google-spreadsheet-url');
    const textarea_lockout = document.querySelector('.js-cs-custom-window-textarea-lockout');
    const textarea_lockout_wrap = document.querySelector('.script-window-lockout');

    let google_appscript = '';
    if (typeof google_spreadsheet_input !== 'undefined' && google_spreadsheet_input && google_spreadsheet_input !== null) {
      google_spreadsheet_input.addEventListener('input', function () {
        google_spreadsheet_url = this.value;
        google_appscript = `function doGet(e) {
        var ss = SpreadsheetApp.openByUrl('${this.value}'); 
        var sheet = ss.getSheetByName('Sheet1');
        return getMenuItems(sheet);
        }
        function getMenuItems(sheet) {
          var itemsArray = [];
          var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(function (header) {
            return header.toLowerCase().replace(/\\s+/g, '_');
          });
          var rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
          for (var i = 0, l = rows.length; i < l; i++) {
            var itemH = rows[i];
            var items_list = {};
            for (var j = 0; j < headers.length; j++) {
              items_list[headers[j]] = itemH[j];
            }
            itemsArray.push(items_list);
          }
          var items_string = JSON.stringify(itemsArray);
          return ContentService.createTextOutput(items_string).setMimeType(ContentService.MimeType.JSON);
        }
        `;
        if (typeof textarea_lockout !== 'undefined' && textarea_lockout) {
          textarea_lockout.value = google_appscript;
        }
      });
      if (typeof textarea_lockout !== 'undefined' && textarea_lockout && typeof textarea_lockout_wrap !== 'undefined' && textarea_lockout_wrap) {
        google_spreadsheet_input.addEventListener('blur', function () {
          if (this.value === '') {
            textarea_lockout.classList.remove('show-script');
            textarea_lockout_wrap.classList.remove('show-script');
          } else {
            textarea_lockout.classList.add('show-script');
            textarea_lockout_wrap.classList.add('show-script');
          }
        });
      }
    }
    ////// copy to clipborad lockout
    const copytoclipboard_btn_lockout = document.querySelector('.copytoclipboard-btn-lockout');
    if (typeof copytoclipboard_btn_lockout !== 'undefined' && copytoclipboard_btn_lockout) {
      copytoclipboard_btn_lockout.addEventListener('click', function () {
        let text_lockout = document.querySelector('.js-cs-custom-window-textarea-lockout');
        text_lockout.select();
        document.execCommand('copy');
        copytoclipboard_btn_lockout.textContent = '(âœ”) Copied!';
        copytoclipboard_btn_lockout.style.setProperty('background-color', '#1de24f', 'important');
        const copyclip_lockout = document.querySelector('#copy2clipboard-lockout');

        if (typeof copyclip_lockout !== 'undefined' && copyclip_lockout) {
          setTimeout(function () {
            copyclip_lockout.style.opacity = '0';
            copytoclipboard_btn_lockout.textContent = 'Copy';
            copytoclipboard_btn_lockout.style.setProperty('background-color', '#e2e2e2', 'important');
          }, 3500);
        }
      });
    }
    const init_tb_btn = document.querySelector('#custom-themegen-header-btn');
    if (init_tb_btn) {
      init_tb_btn.addEventListener('click', () => {
        updateUserName_lc();
      });
    }

    /////// banners wordpress and yext listner
    wp_yext_toggle();
    const display_yext_alert = document.querySelector('#display-yext-banner');
    const yext_alert_elem = document.querySelector('#location-dashboard_banner--yext-promo-container');
    const display_wordpress_alert = document.querySelector('#display-wordpress-banner');
    const wordpress_alert_elem = document.querySelector('#location-dashboard_banner--wordpress-promo-container');

    if (typeof display_yext_alert !== 'undefined' && display_yext_alert && typeof display_wordpress_alert !== 'undefined' && display_wordpress_alert) {
      /// yext
      display_yext_alert.addEventListener('change', function () {
        if (this.checked) {
          display_yext_alert.checked = true;
          scrollToId('display-yext-wordpress-banners');
          localStorage.setItem('hide_yext_banner', 'true');
          if (typeof yext_alert_elem !== 'undefined' && yext_alert_elem) {
            yext_alert_elem.style.display = 'none';
            yext_alert_elem.classList.add('hideme');
            yext_alert_elem.classList.remove('showme');
          }
        } else {
          display_yext_alert.checked = false;
          localStorage.setItem('hide_yext_banner', 'false');
          if (typeof yext_alert_elem !== 'undefined' && yext_alert_elem) {
            yext_alert_elem.style.display = 'block';
            yext_alert_elem.classList.remove('hideme');
            yext_alert_elem.classList.add('showme');
          }
        }
      });
      /// wordpress
      display_wordpress_alert.addEventListener('change', function () {
        if (this.checked) {
          display_wordpress_alert.checked = true;
          scrollToId('display-yext-wordpress-banners');
          localStorage.setItem('hide_wordpress_banner', 'true');
          if (typeof wordpress_alert_elem !== 'undefined' && wordpress_alert_elem) {
            wordpress_alert_elem.style.display = 'none';
            wordpress_alert_elem.classList.add('hideme');
            wordpress_alert_elem.classList.remove('showme');
          }
        } else {
          display_wordpress_alert.checked = false;
          localStorage.setItem('hide_wordpress_banner', 'false');
          if (typeof wordpress_alert_elem !== 'undefined' && wordpress_alert_elem) {
            wordpress_alert_elem.style.display = 'block';
            wordpress_alert_elem.classList.remove('hideme');
            wordpress_alert_elem.classList.add('showme');
          }
        }
      });
    }

    updateUserName_lc();
    setup_advanced_settings();
    setup_dashboard_banner_settings();
    setup_activate_translations();
    setup_hcontrols_settings();
    subaccount_settings_toggle();
  };
  //// setup theme save confirmation and swtich to next action
  const save_settings_confirmation = function (loc_id = '') {
    const confimbtn = document.querySelector('#confimbtn');
    const confirmation_message = document.querySelector('.confirmation-message');
    const loader = document.querySelector('.loader');
    const unsaved_changes = document.querySelector('.close-theme-customizer-wrapper');
    var selected_location_id = '';
    if (loc_id) {
      selected_location_id = loc_id;
    }
    if (localStorage.getItem('themegen_publish_selected_location')) selected_location_id = localStorage.getItem('themegen_publish_selected_location');

    if (
      typeof confimbtn !== 'undefined' &&
      confimbtn &&
      typeof confirmation_message !== 'undefined' &&
      confirmation_message &&
      typeof loader !== 'undefined' &&
      loader &&
      typeof unsaved_changes !== 'undefined' &&
      unsaved_changes
    ) {
      confimbtn.addEventListener('click', function () {
        loader.style.display = 'flex';
        loader.style.opacity = '1';
        confirmation_message.style.display = 'none';
        confirmation_message.style.opacity = '0';
        unsaved_changes.classList.remove('showunsaved-changes');
        theme_data_to_db();
      });
    }
  };
  //// setup theme save confirmation and swtich to next action
  const delete_selected_location_confirmation = function () {
    const selected_location_btn = document.querySelector('#selected-location-delete-btn');
    const selected_location_panel = document.querySelector('.selected-location-panel');
    const delete_data_elem = document.querySelector('.delete-data');
    var selected_location_id = '';
    if (window.current_location_id) {
      selected_location_id = window.current_location_id;
    }
    if (
      typeof selected_location_btn !== 'undefined' &&
      selected_location_btn &&
      typeof selected_location_panel !== 'undefined' &&
      selected_location_panel &&
      typeof delete_data_elem !== 'undefined' &&
      delete_data_elem
    ) {
      selected_location_btn.addEventListener('click', function () {
        delete_data_elem.style.setProperty('display', 'none', 'important');
        selected_location_panel.style.setProperty('display', 'block', 'important');
        delete_selected_locaton_theme_data(selected_location_id);
        setTimeout(function () {
          location.reload();
        }, 500);
      });
    }
  };
  //// setup Theme Builder draggable feature
  const theme_gen_dragable = function () {
    if (typeof document.querySelector('#dashboard-customizer-panel') !== 'undefined' && document.querySelector('#dashboard-customizer-panel')) {
      dragElement(document.querySelector('#dashboard-customizer-panel'));
      function dragElement(elmnt) {
        let pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        if (document.querySelector(elmnt.id + 'header ')) {
          document.querySelector(elmnt.id + 'header ').onmousedown = dragMouseDown;
        } else {
          elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
          const distance = Math.sqrt(Math.pow(e.clientX - pos3, 2) + Math.pow(e.clientY - pos4, 2));
          if (distance > 3) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
            elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
          }
        }
        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
        function remove_dragElement(elem) {
          if (document.body.contains(document.querySelector(elem))) {
            document.querySelector(elem).addEventListener(
              'mousedown',
              function (e) {
                e.stopPropagation();
              },
              false
            );
          }
        }
        //////// remove drag from the elements cc and no cc all.
        var ls_elem_id_cc_general = get_ls_elem_id_no_cc_general();
        var ls_elem_id_cc_advanced = get_ls_elem_id_no_cc_advanced();
        var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
        var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
        var ls_draggable_elems = get_draggable_elems();

        let ls_elem_id = {
          ...ls_elem_id_no_cc_general,
          ...ls_elem_id_no_cc_advanced,
          ...ls_elem_id_cc_general,
          ...ls_elem_id_cc_advanced,
          ...ls_draggable_elems,
        };
        var ls_elem_id_keys = Object.keys(ls_elem_id);
        for (var i = 0; i < ls_elem_id_keys.length; i++) {
          var selected_key = ls_elem_id[ls_elem_id_keys[i]];
          if (selected_key && typeof selected_key !== 'undefined') {
            selected_key = '#' + selected_key;
            remove_dragElement(selected_key);
          }
        }
        if (
          typeof document.querySelector('#dc-themeName') !== 'undefined' &&
          document.querySelector('#dc-themeName') &&
          typeof document.querySelector('.hl-oe__item-info') !== 'undefined' &&
          document.querySelector('.hl-oe__item-info')
        ) {
          remove_dragElement('#dc-themeName');
          remove_dragElement('.hl-oe__item-info');
        }
      }
    }
  };
  //// theme gen values setup
  const get_tg_setting_value = function (ls_obj, setting_var) {
    const skip_vars = [];
    var tg_setting_value = '';
    var themegen_settings = window.themegen_settings;
    if (typeof themegen_settings === 'object' && themegen_settings.hasOwnProperty(setting_var)) {
      tg_setting_value = themegen_settings[setting_var];
    }
    if (!tg_setting_value) {
      if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(setting_var)) {
        tg_setting_value = ls_obj[setting_var];
      }
    }
    if (!skip_vars.includes(setting_var) || !skip_vars.length) {
      if (setting_var.endsWith('_label') && tg_setting_value) {
        tg_setting_value = '"' + tg_setting_value + '"';
      } else if (setting_var.endsWith('_icon') && tg_setting_value) {
        tg_setting_value = "'\\" + tg_setting_value + "'";
      } else if (setting_var.endsWith('_bg_url') && tg_setting_value) {
        tg_setting_value = "url('\\" + tg_setting_value + "')";
      }
    }
    return tg_setting_value;
  };
  ///////// setting up the root variables values for selected root vars
  const update_selected_root_var = (ls_key, new_value) => {
    if (ls_key) {
      let r = document.querySelector(':root');
      var rootvar_unit_values = get_rootvar_unit_values();
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };

      var ls_rvars_general = get_ls_rvars_general();
      var ls_rvars_advanced = get_ls_rvars_advanced();
      let ls_rvars = {
        ...ls_rvars_general,
        ...ls_rvars_advanced,
      };
      var unit_value = '';
      if (typeof rootvar_unit_values === 'object' && rootvar_unit_values.hasOwnProperty(ls_rvars[ls_key]) && rootvar_unit_values[ls_rvars[ls_key]]) unit_value = rootvar_unit_values[ls_rvars[ls_key]];
      var tg_setting_value = new_value;
      if (ls_key.endsWith('_label') && tg_setting_value) {
        tg_setting_value = '"' + tg_setting_value + '"';
      } else if (ls_key.endsWith('_icon') && tg_setting_value) {
        tg_setting_value = "'\\" + tg_setting_value + "'";
      }
      if (tg_setting_value) {
        r.style.setProperty(ls_rvars[ls_key], tg_setting_value + unit_value);
      } else {
      }
    }
  };
  ////////// reset sections to default (window or obj)
  const reset_to_default = () => {
    let selectedtheme = 'theme_dark';
    if (window.selected_theme) selectedtheme = window.selected_theme;
    let selected_theme_name = dashboard_themes.theme_data[selectedtheme].theme_name;
    let published_theme_name = '';
    if (typeof window.themegen_settings === 'object') published_theme_name = window.themegen_settings.theme_name;

    var ls_window_general = get_ls_window_general();
    var ls_window_advanced = get_ls_window_advanced();
    let ls_window = {
      ...ls_window_general,
      ...ls_window_advanced,
    };

    var ls_obj_general = get_ls_obj_general();
    var ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };

    var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
    var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
    let ls_elem_id = {
      ...ls_elem_id_no_cc_general,
      ...ls_elem_id_no_cc_advanced,
    };

    var ls_elem_id_cc_general = get_ls_elem_id_cc_general();
    var ls_elem_id_cc_advanced = get_ls_elem_id_cc_advanced();
    let ls_elem_id_cc = {
      ...ls_elem_id_cc_general,
      ...ls_elem_id_cc_advanced,
    };

    var reset_btn_obj = get_reset_btn_obj_advanced();
    var reset_btn_obj_keys = Object.keys(reset_btn_obj);
    for (var i = 0; i < reset_btn_obj_keys.length; i++) {
      var resetbtnid = reset_btn_obj_keys[i];
      if (resetbtnid) {
        if (document.querySelector('#' + resetbtnid)) {
          document.querySelector('#' + resetbtnid).addEventListener('click', function (event) {
            event.preventDefault();
            var clicked_button_id = event.target.parentElement.id;
            var selected_key_array = reset_btn_obj[clicked_button_id];
            if (Array.isArray(selected_key_array) && selected_key_array.length) {
              for (var j = 0; j < selected_key_array.length; j++) {
                var selected_ls_key = selected_key_array[j];
                if (selected_ls_key) {
                  var elemid = '';
                  if (typeof ls_elem_id === 'object' && ls_elem_id.hasOwnProperty(selected_ls_key)) elemid = ls_elem_id[selected_ls_key];
                  var elemid_cc = '';
                  if (typeof ls_elem_id_cc === 'object' && ls_elem_id_cc.hasOwnProperty(selected_ls_key)) elemid_cc = ls_elem_id_cc[selected_ls_key];

                  var elemid_obj = {};
                  if (elemid || elemid_cc) {
                    if (selected_theme_name && published_theme_name && selected_theme_name === published_theme_name) {
                      var window_item = '';
                      if (typeof ls_window === 'object' && ls_window.hasOwnProperty(selected_ls_key)) window_item = ls_window[selected_ls_key];
                      if (typeof window_item === 'undefined') window_item = '';
                      if (window_item) {
                        if (elemid) {
                          elemid_obj = document.querySelector('#' + elemid);
                          if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                            elemid_obj.value = window_item;
                            localStorage.setItem(selected_ls_key, elemid_obj.value);
                            update_selected_root_var(selected_ls_key, elemid_obj.value);
                          }
                        }

                        if (elemid_cc) {
                          elemid_obj = document.querySelector('#' + elemid_cc);
                          if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                            elemid_obj.textContent = window_item;
                          }
                        }
                      } else {
                        var obj_item = '';
                        if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(selected_ls_key) && ls_obj[selected_ls_key]) obj_item = ls_obj[selected_ls_key];
                        if (typeof obj_item === 'undefined') obj_item = '';
                        if (obj_item) {
                          document.querySelector('#' + clicked_button_id).style.opacity = '0.5';
                          if (elemid) {
                            elemid_obj = document.querySelector('#' + elemid);
                            if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                              elemid_obj.value = obj_item;
                              localStorage.setItem(selected_ls_key, elemid_obj.value);
                              update_selected_root_var(selected_ls_key, elemid_obj.value);
                            }
                          }

                          if (elemid_cc) {
                            elemid_obj = document.querySelector('#' + elemid_cc);
                            if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                              elemid_obj.textContent = obj_item;
                            }
                          }
                        }
                      }
                    } else {
                      var obj_item = '';
                      if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(selected_ls_key) && ls_obj[selected_ls_key]) obj_item = ls_obj[selected_ls_key];
                      document.querySelector('#' + clicked_button_id).style.opacity = '0.5';
                      if (elemid) {
                        elemid_obj = document.querySelector('#' + elemid);
                        if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                          elemid_obj.value = obj_item;
                          localStorage.setItem(selected_ls_key, elemid_obj.value);
                          update_selected_root_var(selected_ls_key, elemid_obj.value);
                        }
                      }

                      if (elemid_cc) {
                        elemid_obj = document.querySelector('#' + elemid_cc);
                        if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                          elemid_obj.textContent = obj_item;
                        }
                      }
                    }
                  }
                }
              }
            }
          });
        }
      }
    }
  };
  //// icon swap from unicode to class of fortawesome
  const upate_iconcode_class_value = () => {
    let cw_icons_value = get_cw_icons_values();
    let cw_icon_keys = Object.keys(cw_icons_value);
    for (var i = 0; i < cw_icon_keys.length; i++) {
      iconcode_class_value(cw_icon_keys[i], cw_icons_value);
    }
  };
  /// setup update theme styles on change
  ////// process update theme styles
  const handle_uts = (cw_icons_value, ls_key, ls_obj, ls_window) => {
    var obj_item = '';
    if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(ls_key)) obj_item = ls_obj[ls_key];
    var window_item = '';
    if (typeof ls_window === 'object' && ls_window.hasOwnProperty(ls_key)) window_item = ls_window[ls_key];
    let selected_theme_name = '';
    if (window.selected_theme) {
      var selectedtheme = window.selected_theme;
      selected_theme_name = dashboard_themes.theme_data[selectedtheme].theme_name;
    }
    let published_theme_name = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings.theme_name) {
      var window_themegen_settings = window.themegen_settings;
      if (typeof window_themegen_settings === 'object' && window_themegen_settings.hasOwnProperty('theme_name')) {
        published_theme_name = window_themegen_settings.theme_name;
      }
    }
    if (selected_theme_name && published_theme_name && selected_theme_name === published_theme_name && ls_key && window_item) {
      if (window.selected_theme && window.selected_theme === 'theme_cleanwhite') {
        var iconcode_value = iconcode_class_value(window_item, cw_icons_value);
        if (iconcode_value) {
          window_item = iconcode_value;
        }
      }
      localStorage.setItem(ls_key, window_item);
    } else if (ls_key && obj_item) {
      localStorage.setItem(ls_key, obj_item);
    }
  };
  /// setup update theme styles on change obj
  const update_theme_styles = function (selectedtheme) {
    window.selected_theme = selectedtheme;

    var ls_window_general = get_ls_window_general();
    var ls_window_advanced = get_ls_window_advanced();
    let ls_window = {
      ...ls_window_general,
      ...ls_window_advanced,
    };

    var ls_obj_general = get_ls_obj_general();
    var ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };

    let cw_icons_value = get_cw_icons_values();
    localStorage.setItem('selected_theme', selectedtheme);

    var ls_obj_keys = Object.keys(ls_obj);
    for (var i = 0; i < ls_obj_keys.length; i++) {
      handle_uts(cw_icons_value, ls_obj_keys[i], ls_obj, ls_window);
    }
    const labelElement = document.querySelector('.dc-colorPicker-bg-gradient');
    if (window.selected_theme === 'theme_cleanwhite') {
      if (labelElement !== null) {
        labelElement.textContent = cleanwhite_label_bg_gradient_color;
      } else {
        labelElement.textContent = default_label_bg_gradient_color;
      }
    }
    /// other style upates conditionally while on change.
    const save_btn_theme = document.querySelector('#generate-script-js');
    const confirmation_message = document.querySelector('.confirmation-message p');
    const success_message = document.querySelector('.success-message h3');
    const success_message_instructions = document.querySelector('.success-message p');
    const css_remove_script = document.querySelector('.done-refresh-wrap-1 p');
    if (save_btn_theme) {
      if (
        window.selected_theme !== 'theme_custom' &&
        typeof save_btn_theme !== 'undefined' &&
        save_btn_theme &&
        typeof confirmation_message !== 'undefined' &&
        confirmation_message &&
        typeof success_message !== 'undefined' &&
        success_message &&
        typeof success_message_instructions !== 'undefined' &&
        success_message_instructions &&
        typeof css_remove_script !== 'undefined' &&
        css_remove_script
      ) {
        save_btn_theme.innerHTML = `<i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>SAVE AND APPLY THEME <span class="save-option-subaccount">Option to Apply Globally or to Selected Sub-account</span>`;
        save_btn_theme.classList.remove('dc-savebtn-disable');
        confirmation_message.textContent = 'You want to publish theme';
        success_message.textContent = 'Theme Successfully Applied!';
        success_message_instructions.textContent =
          'To apply the same theme styles and layout to the login screen, security code screen, logout screen, re-login and re-login security screen,  click the below button to generate the CSS script.';
        css_remove_script.innerHTML = `Copy the above script and paste it to the custom CSS Box of company settings. Make sure that this CSS code should be pasted only in CSS box and CSS code starts at the very top of custom CSS Box. <span><strong style="color: red !important;">IMPORTANT: </strong>Press the below green "DONE" button which will render all the theme settings to agency and its sub-accounts.</span>`;
      } else {
        save_btn_theme.innerHTML = `<i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>SAVE AND APPLY NO THEME <span class="save-option-subaccount">Option to Apply Globally or to Selected Sub-account</span>`;
        save_btn_theme.classList.add('dc-savebtn-disable');
        confirmation_message.textContent = 'You want to apply No Theme.';
        success_message.textContent = 'Theme Successfully Applied!';
        success_message_instructions.textContent = 'To disable the theme styles completely for the login screen as well, click the below button to generate the blank CSS script.';
        css_remove_script.textContent =
          'Remove all css script related to Theme Builder from the custom CSS Box of company settings. Once you complete this process, press the below green "DONE" button which will remove all the theme settings for agency and its sub-accounts except separately customized sub-accounts.';
      }
    }

    const parentElement = document.querySelector('.showmore-step2.showmore-step2--dina');
    if (typeof parentElement !== 'undefined' && parentElement) {
      var disabledDivs = parentElement.querySelectorAll('.tsg-disabled');
      if (window.selected_theme !== 'theme_custom' && typeof save_btn_theme !== 'undefined' && save_btn_theme) {
        disabledDivs.forEach(function (div) {
          div.style.opacity = '1';
          div.style.cursor = 'auto';
        });
      } else {
        disabledDivs.forEach(function (div) {
          div.style.opacity = '0.25';
          div.style.cursor = 'not-allowed';
        });
      }
    }
    /// on theme main navigation display
    const main_navigation_switch_display = document.querySelector('#main-navigation-switch');
    if (typeof main_navigation_switch_display !== 'undefined' && main_navigation_switch_display) {
      if (window.selected_theme !== 'theme_custom' && window.selected_theme !== 'theme_cleanwhite' && typeof main_navigation_switch_display !== 'undefined' && main_navigation_switch_display) {
        main_navigation_switch_display.style.display = 'block';
      } else {
        main_navigation_switch_display.style.display = 'none';
      }
    }
    /// delete all cleanwhite theme icons when switched to no theme.
    if (window.selected_theme === 'theme_custom' && window.selected_theme !== 'theme_cleanwhite') {
      let leftnav_elems = document.getElementsByClassName('left-nav-icon');
      while (leftnav_elems.length > 0) {
        leftnav_elems[0].parentNode.removeChild(leftnav_elems[0]);
      }
      /// refresh the all dom of the left id
      const sidebar = document.querySelector('#sidebar-v2 .hl_nav-header');
      if (typeof sidebar !== 'undefined' && sidebar) {
        // sidebar.innerHTML = sidebar.innerHTML;
      }
    }
    /// refresh the sidebar when cleanwhite theme dynamic load
    if (window.selected_theme === 'theme_cleanwhite') {
      const header_phelem = document.querySelector('a.dropdown-toggle');
      if (typeof header_phelem !== 'undefined' && header_phelem) {
        header_phelem.setAttribute('id', 'phone_dialer_access');
        iconElem_setup();
      }
    }
    /// reset helpicon colors when no theme is active.
    if (document.body.contains(document.querySelector('.helpiconstyles'))) {
      const elem = document.querySelector('#hl_header--help-icon');
      if (typeof elem !== 'undefined' && elem) {
        elem.classList.remove('helpiconstyles');
        elem.style.setProperty('background-color', '#188bf6');
      }
    }
    if (window.selected_theme === 'theme_custom') {
      localStorage.setItem('themegen_sidemenu_order', '');
      localStorage.setItem('themegen_sidemenu_order_settings', '');
    }

    const reorder_checkbox = document.querySelector('#reorder-side-menu-check');
    localStorage.setItem('themegen_activate_sidemenu_reorder', 'false');
    localStorage.setItem('themegen_activate_sidemenu_reorder_settings', 'false');
    if (typeof reorder_checkbox !== 'undefined' && reorder_checkbox) {
      reorder_checkbox.checked = false;
    }

    const hide_sidemenu_checkbox = document.querySelector('#hide-side-menu-check');
    localStorage.setItem('themegen_activate_sidemenu_hide', 'false');
    if (typeof hide_sidemenu_checkbox !== 'undefined' && hide_sidemenu_checkbox) {
      hide_sidemenu_checkbox.checked = false;
    }

    const dc_footer_contactinfo = document.querySelector('#dc-footer-contactinfo');
    const dc_loading_icon = document.querySelector('#dc-loading-icon');
    const dc_login_page_cover_img = document.querySelector('#dc-login-page-cover-img');

    if (
      typeof dc_footer_contactinfo !== 'undefined' &&
      dc_footer_contactinfo &&
      typeof dc_loading_icon !== 'undefined' &&
      dc_loading_icon &&
      typeof dc_login_page_cover_img !== 'undefined' &&
      dc_login_page_cover_img
    ) {
      dc_footer_contactinfo.value = '';
      dc_loading_icon.value = '';
      dc_login_page_cover_img.value = '';
    }

    display_cw_elements();
    remove_dynamic_stylesheets();
    remove_dynamic_stylesheets_mainnav();
    load_files();
    update_input_fields_from_ls();
    assign_colors();
    input_color_change_listners();
    render_dashboard_banner();
    generate_button_listners();
    reset_to_default();
    cleanwhite_disabled();
    is_horizontal_nav_active();
    expand_main_nav();
    hide_sidemenu_allowed();
    if (is_location_settings_active()) setup_location_theme();
    if (is_location_settings_enabled_load()) delete_selected_location_confirmation();
    if (is_location_settings_active()) allow_subaccount_disabled();
    mo_delete_location_data();
    setup_dashboard_banner_settings();
    createDashboardBanner();
    displayDashboardBanner();
    dbanner_inputupdates();
    d_banner_btn_internal_links();
    setup_font_family();
  };
  // Event listener for input field dashboard header banner
  const dbanner_inputupdates = function () {
    var inputFieldTargets = {
      'dc-colorPicker-adv-dashboard-headerbanner-subhead': '.sub-head',
      'dc-colorPicker-adv-dashboard-headerbanner-btn-1-text': '.dashboard-banner-btn-1',
      'dc-colorPicker-adv-dashboard-headerbanner-btn-2-text': '.dashboard-banner-btn-2',
      'dc-colorPicker-adv-dashboard-headerbanner-bg-url': '.dashboard-header-banner-bg',
    };
    // Adding event listeners dynamically
    for (var inputId in inputFieldTargets) {
      if (inputFieldTargets.hasOwnProperty(inputId)) {
        var inputField = document.getElementById(inputId);
        var targetElement = document.querySelector(inputFieldTargets[inputId]);
        if (inputField && targetElement) {
          (function (inputId, targetElement) {
            inputField.addEventListener('input', function (event) {
              var newValue = event.target.value;
              var key = 'theme_' + inputId.replace('dc-colorPicker-', '').replace(/-/g, '_');
              localStorage.setItem(key, newValue);
              updateBannerElems(newValue, targetElement);
            });
          })(inputId, targetElement);
        }
      }
    }
  };
  //// update input fileds from LS
  const handle_get_iffls = (ls_key, picker_element_id, code_element_id = '') => {
    if (ls_key && (picker_element_id || code_element_id)) {
      let color_value = '';
      if (localStorage.getItem(ls_key)) {
        color_value = localStorage.getItem(ls_key);
      }
      if (typeof color_value !== 'undefined' && color_value) {
        const colorPicker_primary = document.querySelector('#' + picker_element_id);
        if (typeof colorPicker_primary !== 'undefined' && document.body.contains(colorPicker_primary)) {
          colorPicker_primary.value = color_value;
        }
        if (code_element_id) {
          const colorCode_primary = document.querySelector('#' + code_element_id);
          if (typeof colorCode_primary !== 'undefined' && document.body.contains(colorCode_primary)) colorCode_primary.value = color_value;
        }
      }
    }
  };
  //// update input fileds from LS
  const update_input_fields_from_ls = function () {
    var ls_obj_general = get_ls_obj_general();
    var ls_obj_advanced = get_ls_obj_advanced();
    let ls_obj = {
      ...ls_obj_general,
      ...ls_obj_advanced,
    };

    var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
    var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
    let ls_elem_id_no_cc = {
      ...ls_elem_id_no_cc_general,
      ...ls_elem_id_no_cc_advanced,
    };

    var ls_elem_id_cc_general = get_ls_elem_id_cc_general();
    var ls_elem_id_cc_advanced = get_ls_elem_id_cc_advanced();
    let ls_elem_id_cc = {
      ...ls_elem_id_cc_general,
      ...ls_elem_id_cc_advanced,
    };

    var ls_obj_keys = Object.keys(ls_obj);
    for (var i = 0; i < ls_obj_keys.length; i++) {
      var ls_key = ls_obj_keys[i];
      var picker_element_id = '';
      if (typeof ls_elem_id_no_cc === 'object' && ls_elem_id_no_cc.hasOwnProperty(ls_key)) picker_element_id = ls_elem_id_no_cc[ls_key];
      var code_element_id = '';
      if (typeof ls_elem_id_cc === 'object' && ls_elem_id_cc.hasOwnProperty(ls_key)) code_element_id = ls_elem_id_cc[ls_key];
      handle_get_iffls(ls_key, picker_element_id, code_element_id);
    }
    handle_get_iffls('login_contactinfo', 'dc-footer-contactinfo');
    handle_get_iffls('loading_icon', 'dc-loading-icon');
    handle_get_iffls('login_coverimage', 'dc-login-page-cover-img');
    handle_get_iffls('login_logoimage', 'dc-login-page-logo-img');

    if (typeof main_nav !== 'undefined' && main_nav && typeof document.querySelector('#horizontal-nav-toggle') !== 'undefined' && document.querySelector('#horizontal-nav-toggle')) {
      if (document.body.contains(document.querySelector('#horizontal-nav-toggle'))) {
        if (main_nav === 'top') {
          document.querySelector('#horizontal-nav-toggle').checked = true;
          add_styles('dashboard-horizontal-nav', script_url + dashboard_themes.script_filename.theme_mainnav);
        } else {
          remove_dynamic_stylesheets_mainnav();
          document.querySelector('#horizontal-nav-toggle').checked = false;
        }
      }
    }
  };
  ///// Update Users Colors - on change/rendering.
  const update_user_colors = () => {
    if (!document.body.contains(document.querySelector('#app'))) {
    } else {
      let r = document.querySelector(':root');

      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };

      var ls_rvars_general = get_ls_rvars_general();
      var ls_rvars_advanced = get_ls_rvars_advanced();
      let ls_rvars = {
        ...ls_rvars_general,
        ...ls_rvars_advanced,
      };

      var rootvar_unit_values = get_rootvar_unit_values();

      var ls_rvars_keys = Object.keys(ls_rvars);
      for (var i = 0; i < ls_rvars_keys.length; i++) {
        var unit_value = '';
        if (typeof rootvar_unit_values === 'object' && rootvar_unit_values.hasOwnProperty(ls_rvars[ls_rvars_keys[i]]) && rootvar_unit_values[ls_rvars[ls_rvars_keys[i]]])
          unit_value = rootvar_unit_values[ls_rvars[ls_rvars_keys[i]]];
        var tg_setting_value = '';
        if (ls_rvars_keys[i]) tg_setting_value = get_tg_setting_value(ls_obj, ls_rvars_keys[i]);
        if (tg_setting_value) {
          r.style.setProperty(ls_rvars[ls_rvars_keys[i]], tg_setting_value + unit_value);
        }
      }
    }
  };
  //// values for few root vars that uses the tint from the color value.
  const vcss_opacity_mini = '1A';
  const get_tg_setting_value_tint = function (setting_var) {
    var tg_setting_value = '';
    var themegen_settings = window.themegen_settings;
    if (typeof themegen_settings === 'object' && themegen_settings.hasOwnProperty(setting_var)) {
      tg_setting_value = themegen_settings[setting_var];
    }
    return tg_setting_value;
  };
  //// values for few root vars that uses the tint from the color value.
  const update_user_colors_tint = () => {
    if (!document.body.contains(document.querySelector('#app'))) {
    } else {
      let r = document.querySelector(':root');
      r.style.setProperty('--hlpt-primary-theme-color-tint', get_tg_setting_value_tint('theme_name_primary_col') + vcss_opacity_mini);
      r.style.setProperty('--hlpt-primary-theme-bg-color-tint', get_tg_setting_value_tint('theme_name_primary_bgcol') + vcss_opacity_mini);
      r.style.setProperty('--hlpt-secondary-theme-bg-color-tint', get_tg_setting_value_tint('theme_name_gradient_bgcol') + vcss_opacity_mini);
    }
  };
  //// Load Login Form Position  script files load embedded.
  const get_login_form_position = () => {
    let login_form_position = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) login_form_position = window.themegen_settings.theme_login_pos;
    if (login_form_position) {
      if (login_form_position === 'center') {
        add_styles('dashboard-login-client-master-center', script_url + dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main_center);
      } else if (login_form_position === 'left') {
        add_styles('dashboard-login-client-master-left', script_url + dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main_left);
      } else if (login_form_position === 'right') {
        add_styles('dashboard-login-client-master-right', script_url + dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main_right);
      }
    }
    return login_form_position;
  };
  //// Load base script files of the tb.
  const load_base_files = function () {
    remove_dynamic_stylesheets_mode();
    let selected_theme = '';
    if (window.selected_theme) selected_theme = window.selected_theme;
    if (selected_theme !== 'theme_cleanwhite' && selected_theme !== 'theme_custom') {
      add_styles('dashboard-main-styles', script_url + dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_main);
      add_styles('dashboard-client-styles', script_url + dashboard_themes.script_filename.theme_generator_basefiles.dashboard_theme_client);
    }
    if (selected_theme === 'theme_cleanwhite') {
      add_styles('dashboard-theme-main-cleanwhite', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_basefiles);
      add_styles('dashboard-theme-client-cleanwhite', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
    }
    let main_nav = dashboard_themes.theme_data[selected_theme].main_nav;
    if (main_nav === 'top') {
      add_styles('dashboard-horizontal-nav', script_url + dashboard_themes.script_filename.theme_mainnav);
    }
    if (document.body.contains(document.querySelector('.darkMode'))) {
      add_styles('dashboard-mode-settings', script_url + dashboard_themes.script_filename.theme_darkmode);
    }
  };
  //// Load dynamic files script on change  of the tb rendering.
  const load_dynamic_files = function () {
    let selected_theme = '';
    if (window.selected_theme) selected_theme = window.selected_theme;
    let main_nav = dashboard_themes.theme_data[selected_theme].main_nav;
    if (main_nav === 'top') {
      add_styles('dashboard-horizontal-nav', script_url + dashboard_themes.script_filename.theme_mainnav);
    }
    if (selected_theme === 'theme_darkcherry' || selected_theme == 'theme_darkcherry_bg') {
      add_styles('dashboard-darkcherry-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_milkywhite') {
      add_styles('dashboard-milkywhite-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_technoblue' || selected_theme == 'theme_technoblue_p') {
      add_styles('dashboard-techno-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_dark') {
      add_styles('dashboard-darkocean-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_silvermist') {
      add_styles('dashboard-silverlight-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }

    if (selected_theme === 'theme_cleanwhite') {
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-cleanwhite-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_custom') {
      remove_dynamic_stylesheets_mainnav();
      remove_dynamic_stylesheets();
      remove_dynamic_stylesheets_mode();
    }
  };
  //// Load embedded script file while rendering for the user and admin
  const load_embedded_theme_styles = function () {
    let selected_theme = '';
    if (window.selected_theme) selected_theme = window.selected_theme;
    if (selected_theme === 'theme_darkcherry' || selected_theme === 'theme_darkcherry_bg') {
      get_login_form_position();
      add_styles('dashboard-darkcherry-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_milkywhite') {
      get_login_form_position();
      add_styles('dashboard-milkywhite-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_technoblue' || selected_theme === 'theme_technoblue_p') {
      get_login_form_position();
      add_styles('dashboard-techno-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_dark') {
      get_login_form_position();
      add_styles('dashboard-darkocean-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_silvermist') {
      get_login_form_position();
      add_styles('dashboard-silverlight-client', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard);
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);
    }
    if (selected_theme === 'theme_cleanwhite') {
      get_login_form_position();
      add_styles('dashboard-activate-advance-settings', script_url + dashboard_themes.script_filename.adv_settings_main_script);
      add_styles('dashboard-theme-client-cleanwhite-adv', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_dashboard_adv);

      let activate_hcontrols_settings = 'false';
      if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_hcontrols_settings = window.themegen_settings.activate_hcontrols_settings;
      let activate_hcontrols_sm_settings = 'false';
      if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_hcontrols_sm_settings = window.themegen_settings.activate_hcontrols_sm_settings;
      if (activate_hcontrols_settings === 'true') {
        add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl);
      }
      if (activate_hcontrols_sm_settings === 'true') {
        add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl-sm', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl_sm);
      }
    }
    if (selected_theme === 'theme_custom') {
      remove_dynamic_stylesheets_mainnav();
      remove_dynamic_stylesheets();
      remove_dynamic_stylesheets_mode();
    }
  };
  //// Load embedeed Main Navigation for users and admin
  const load_embedded_horizontal_mainnav_styles = function () {
    let main_nav = window.themegen_settings.main_nav;
    const horizontal_mainnav = document.querySelector('#sidebar-v2');
    if (!document.body.contains(horizontal_mainnav)) {
      setTimeout(load_embedded_horizontal_mainnav_styles, 250);
    } else {
      if (typeof horizontal_mainnav !== 'undefined' && horizontal_mainnav) {
        if (main_nav === 'top') {
          horizontal_mainnav.classList.add('horizontal-nav--active');
          add_styles('dashboard-horizontal-nav', script_url + dashboard_themes.script_filename.theme_mainnav);
        }
      }
    }
  };
  //// Load Theme Builder Gen Card for user allowed and theme build btn allowed.
  const load_theme_gen_card = function () {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(function (mutations) {
      if (is_user_allowed()) {
        hlpt_display_dashboard_customizer_panel();
        theme_gen_close_btn();
      }
      if (is_theme_builder_allowed()) {
        create_theme_gen_userinfo_btn();
        theme_gen_close_btn();
      }
    });
    observer.observe(targetNode, config);
  };
  const setup_tg_variables = function (themegen_settings) {
    var themegen_settings = window.themegen_settings;
    if (typeof themegen_settings === 'object' && themegen_settings.hasOwnProperty('selected_theme')) {
      window.selected_theme = themegen_settings.selected_theme;
    }
  };
  //// dark mode styls upgrade from old to overide.
  const update_dark_mode_styles = function () {
    if (document.body.contains(document.querySelector('.darkMode'))) {
      localStorage.setItem('mode_dark', 'true');
      add_styles('dashboard-mode-settings', script_url + dashboard_themes.script_filename.theme_darkmode);
    } else {
      localStorage.setItem('mode_dark', 'false');
      remove_dynamic_stylesheets_mode();
    }
  };
  const handle_dark_mode = function () {
    const targetNode = document.querySelector('body');
    const config = { attributes: true };
    const observer = new MutationObserver(function (mutations) {
      update_dark_mode_styles();
      0;
    });
    observer.observe(targetNode, config);
  };
  //// Load files
  const load_files = function () {
    if (window.selected_theme) {
      remove_dynamic_stylesheets_mainnav();
      load_base_files();
      load_dynamic_files();
      load_embedded_theme_styles();
    }
  };
  //// Help Icon bg color
  const update_styles_helpicon = function () {
    if (!document.body.contains(document.querySelector('.helpiconstyles'))) {
      const elem = document.querySelector('#hl_header--help-icon');
      if (typeof elem !== 'undefined' && elem) {
        elem.classList.add('helpiconstyles');
        elem.style.setProperty('background', 'unset');
      }
    }
  };
  //// mo to delte location data theme styles.
  const mo_delete_location_data = function () {
    const locationdata_elems = document.querySelector('.delete-location-data');
    if (typeof locationdata_elems !== 'undefined' && locationdata_elems) {
      var themegen_data = window.org_theme_data;
      var location_details = __get_location_settings(themegen_data, window.current_location_id);
      if (typeof location_details === 'object' && location_details.hasOwnProperty('location_settings_exist') && location_details.location_settings_exist) {
        locationdata_elems.style.setProperty('display', 'block');
      } else {
        locationdata_elems.style.setProperty('display', 'none');
      }
      // }
    } else if (locationdata_elems) {
      locationdata_elems.style.setProperty('display', 'none');
    }
  };

  const apply_headerimg_membership = function () {
    let url = document.location.href;
    const membershipBuilder = document.querySelector('#membershipBuilder');
    if (url.includes('/location') && url.includes('/memberships/courses/dashboard')) {
      if (membershipBuilder && !membershipBuilder.classList.contains('membershipheaderimg')) {
        membershipBuilder.classList.add('membershipheaderimg');
      }
    } else {
      if (membershipBuilder && membershipBuilder.classList.contains('membershipheaderimg')) {
        membershipBuilder.classList.remove('membershipheaderimg');
      }
    }
  };

  function assignOpportunityStatusColors() {
    var themegen_data = window.org_theme_data;
    if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup')) {
      var themegen_data_setup = themegen_data.themegensetup;
      if (window.selected_theme !== 'theme_custom') {
        let pu = document.location.href;
        if (pu.includes('/location') && pu.includes('/dashboard')) {
          const lDash = document.querySelector('#location-dashboard');
          const wrap_graph_op_status = document.querySelector('.crm-opportunities-status');
          if (lDash && wrap_graph_op_status) {
            const textElements_op_status = wrap_graph_op_status.querySelectorAll('svg g text[dominant-baseline="central"][text-anchor="start"]');
            textElements_op_status.forEach((textElement, index) => {
              if (!textElement.classList.contains(`legend-${index}`)) {
                const textContent = textElement.textContent.trim();
                textElement.classList.add(`legend-${index}`);
                let pathLegendElement = getSecondPreviousPath_Os(textElement);
                if (pathLegendElement) {
                  pathLegendElement.classList.add(`legend-${index}`);
                  pathLegendElement.setAttribute('fill', '');
                  let closestG = textElement.closest('g');
                  if (closestG) {
                    let pathElements = closestG.querySelectorAll('path:nth-child(-n+4)');
                    if (pathElements && pathElements.length > 0) {
                      if (pathElements.length > index) {
                        let pathGraphElement = pathElements[index];
                        if (textContent.includes('Won')) {
                          pathLegendElement.classList.add('graph-won-col');
                          pathGraphElement.classList.add('graph-won-col');
                          pathElements[index].classList.add('graph-won-col');
                        } else if (textContent.includes('Lost')) {
                          pathLegendElement.classList.add('graph-lost-col');
                          pathGraphElement.classList.add('graph-lost-col');
                          pathElements[index].classList.add('graph-lost-col');
                        } else if (textContent.includes('Open')) {
                          pathLegendElement.classList.add('graph-open-col');
                          pathGraphElement.classList.add('graph-open-col');
                          pathElements[index].classList.add('graph-open-col');
                        } else if (textContent.includes('Abandoned')) {
                          pathLegendElement.classList.add('graph-abandoned-col');
                          pathGraphElement.classList.add('graph-abandoned-col');
                          pathElements[index].classList.add('graph-abandoned-col');
                        }
                        setPathFill_Os(pathElements[index]);
                      }
                    }
                  }
                }
              }
            });
          }
        }
      }
    }
  }

  function setPathFill_Os(pathElement) {
    pathElement.setAttribute('fill', '');
  }

  function getSecondPreviousPath_Os(element) {
    let previousElement = element.previousElementSibling;
    if (previousElement) {
      previousElement = previousElement.previousElementSibling;
      while (previousElement && previousElement.tagName !== 'path') {
        previousElement = previousElement.previousElementSibling;
      }
      if (previousElement && previousElement.tagName === 'path') {
        return previousElement;
      }
    }
    return null;
  }

  function assignOpportunityValueColors() {
    var themegen_data = window.org_theme_data;
    if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup')) {
      if (window.selected_theme !== 'theme_custom') {
        let pu = document.location.href;
        if (pu.includes('/location') && pu.includes('/dashboard')) {
          const lDash = document.querySelector('#location-dashboard');
          const wrap_graph_op_value = document.querySelector('.crm-opportunities-value');
          if (lDash && wrap_graph_op_value) {
            const textElements = wrap_graph_op_value.querySelectorAll('svg g text[dominant-baseline="central"][text-anchor="end"]');
            const matchedElements = Array.from(textElements).filter((textElement) => {
              const textContent = textElement.textContent.trim();
              return textContent.includes('Won') || textContent.includes('Lost') || textContent.includes('Open') || textContent.includes('Abandoned');
            });
            matchedElements.forEach((textElement, index) => {
              if (!textElement.classList.contains(`legend-${index}`)) {
                const textContent = textElement.textContent.trim();
                textElement.classList.add(`legend-${index}`);
                let closestG = textElement.closest('g');
                if (closestG) {
                  let pathElements = closestG.querySelectorAll(`path:nth-last-child(-n+${matchedElements.length})`);
                  if (pathElements && pathElements.length >= 0) {
                    if (pathElements.length > index) {
                      let pathGraphElement = pathElements[index];
                      if (textContent.includes('Won')) {
                        pathGraphElement.classList.add('graph-won-col');
                        pathGraphElement.setAttribute('fill', '');
                      } else if (textContent.includes('Lost')) {
                        pathGraphElement.classList.add('graph-lost-col');
                        pathGraphElement.setAttribute('fill', '');
                      } else if (textContent.includes('Open')) {
                        pathGraphElement.classList.add('graph-open-col');
                        pathGraphElement.setAttribute('fill', '');
                      } else if (textContent.includes('Abandoned')) {
                        pathGraphElement.classList.add('graph-abandoned-col');
                        pathGraphElement.setAttribute('fill', '');
                      }
                    }
                  }
                }
              }
            });
          }
        }
      }
    }
  }

  function opValueColors_NoFill(elemWrap) {
    let pu = document.location.href;
    if (pu.includes('/location') && pu.includes('/dashboard')) {
      const lDash = document.querySelector('#location-dashboard');
      const wrap_graph_op_value = elemWrap;
      if (lDash && wrap_graph_op_value) {
        const textElements = wrap_graph_op_value.querySelectorAll('svg g');
        const classesElements = ['graph-won-col', 'graph-lost-col', 'graph-open-col', 'graph-abandoned-col'];
        textElements.forEach((g) => {
          const paths = g.querySelectorAll('path');
          paths.forEach((path) => {
            classesElements.forEach((className) => {
              if (path.classList.contains(className)) {
                if (path.getAttribute('fill') !== '') {
                  path.setAttribute('fill', '');
                }
              }
            });
          });
        });
      }
    }
  }
  //// Help Icon bg color mutation
  const update_helpicon_color = function () {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(function (mutations) {
      assignOpportunityStatusColors();
      assignOpportunityValueColors();
      opValueColors_NoFill(document.querySelector('.crm-opportunities-status'));
      opValueColors_NoFill(document.querySelector('.crm-opportunities-value'));
      if (window.selected_theme !== '' && window.selected_theme !== 'theme_custom') {
        update_styles_helpicon();
      }
      tb_panel_interactive_styles();
      get_user_data();
      dashbard_alerts_on_reload();
    });
    observer.observe(targetNode, config);
  };
  //// Phone icon and its color
  const find_phone_element = function () {
    var phElement = document.querySelector('a.dropdown-toggle');
    if (typeof phElement !== 'undefined' && phElement) {
      if (!(phElement.hasAttribute('id') && phElement.id == 'phone_dialer_access')) {
        var hasBeforePseudoElement = window.getComputedStyle(phElement, '::before').content !== 'none';
        if (hasBeforePseudoElement) {
          phElement.id = 'phone_dialer_access';
        }
      }
    }
  };
  function isHidden(el) {
    var style = window.getComputedStyle(el);
    return style.display === 'none';
  }
  //// Icon iput change for cw and other themes
  const handle_icon_input_change = (event) => {
    let event_target = event.target;
    let event_target_id = event.target.id;
    if (event_target_id) {
      let selected_icon_input = document.querySelector('#' + event_target_id);
      if (document.body.contains(selected_icon_input)) {
        if (selected_icon_input.hasAttribute('data-linked-icon')) {
          let selected_icon_input_value = selected_icon_input.value;
          if (selected_icon_input_value) {
            let icon_anchor_id = selected_icon_input.getAttribute('data-linked-icon');
            let icon_span_elem = document.querySelector('#' + icon_anchor_id);
            if (document.body.contains(icon_span_elem)) {
              let icon_span_elem_i = icon_span_elem.querySelector('i');
              if (typeof icon_span_elem_i !== 'undefined' && icon_span_elem_i && icon_span_elem_i !== null) {
                let new_class = 'fa-' + selected_icon_input_value;
                icon_span_elem_i.className = '';
                icon_span_elem_i.classList.add('fa-duotone');
                icon_span_elem_i.classList.add(new_class);
              }
            }
          }
        }
      }
    }
  };
  /// init input change icon
  const init_icon_input_change = () => {
    const inputValue = document.querySelectorAll('.leftnav-icon');
    if (inputValue.length) {
      for (let i = 0; i < inputValue.length; i++) {
        let selected_icon_input = inputValue[i];
        selected_icon_input.addEventListener('input', (event) => handle_icon_input_change(event));
      }
    }
  };
  //// CW custom icon dual color setup
  const iconElem_setup = function () {
    const sidebar = document.querySelector('#sidebar-v2');
    const hl_header = document.querySelector('.hl_header--controls');
    if (window.selected_theme === 'theme_cleanwhite') {
      find_phone_element();
      //// sidebar icon setup
      if (typeof sidebar !== 'undefined' && sidebar) {
        var anchors = sidebar.getElementsByTagName('a');
        for (var j = 0; j < anchors.length; j++) {
          var anchor = anchors[j];
          var anchor_left_nav = anchor.querySelector('.left-nav-icon');
          if (!isHidden(anchor) && !anchor.contains(anchor_left_nav) && anchor.id) {
            var span = document.createElement('span');
            span.classList.add('left-nav-icon', anchor.id.toLowerCase().replace(/\s+/g, '_'));
            var innerHTML = getSvgCodeForAnchorId(anchor.id);
            if (typeof innerHTML !== 'undefined' && innerHTML) {
              span.innerHTML = innerHTML;
            }
            if (anchor.firstChild) {
              anchor.insertBefore(span, anchor.firstChild);
            } else {
              anchor.appendChild(span);
            }
          }
        }
      }
      //// header icon setup
      if (typeof hl_header !== 'undefined' && hl_header) {
        var anchors_hl_header = hl_header.getElementsByTagName('a');
        for (var j = 0; j < anchors_hl_header.length; j++) {
          var anchor_hl_header = anchors_hl_header[j];
          var anchor_hl_header_left_nav = anchor_hl_header.querySelector('.left-nav-icon');
          if (!isHidden(anchor_hl_header) && !anchor_hl_header.contains(anchor_hl_header_left_nav) && anchor_hl_header.id) {
            var span = document.createElement('span');
            span.classList.add('left-nav-icon', anchor_hl_header.id.replace(/\s+/g, '_'));
            var innerHTML = getSvgCodeForAnchorId(anchor_hl_header.id);
            if (typeof innerHTML !== 'undefined' && innerHTML) {
              span.innerHTML = innerHTML;
            }
            if (anchor_hl_header.firstChild) {
              anchor_hl_header.insertBefore(span, anchor_hl_header.firstChild);
            } else {
              anchor_hl_header.appendChild(span);
            }
          }
        }
      }
    } else {
      var dynamicElements = document.getElementsByClassName('left-nav-icon');
      if (dynamicElements.length) {
        while (dynamicElements.length > 0) {
          dynamicElements[0].parentNode.removeChild(dynamicElements[0]);
        }
      }
    }
  };
  //// REMOVE LEFT NAV ICON SPANCE IN CUSTOM MENUS BUILT WITH NUMBER ID
  const remove_customlinks_dynamic_span = () => {
    const spanElements = document.querySelectorAll('span.left-nav-icon');
    spanElements.forEach((span) => {
      // Check if the span has no <i> tag child
      const iTagChild = span.querySelector('i');
      if (!iTagChild) {
        span.style.display = 'none';
      }
      const classNames = span.classList;
      const secondClass = Array.from(classNames)[1];
      if (/^\d/.test(secondClass)) {
        span.style.display = 'none';
      }
    });
  };
  // APPLY ICONS SVGs
  function getSvgCodeForAnchorId(id) {
    /// upto here  ///// AGENCY DASHBOARD
    let mediastorage_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_mediastorage_icon')) mediastorage_icon = localStorage.getItem('theme_adv_mainnav_replace_mediastorage_icon');
    let launchpad_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_launchpad_icon')) launchpad_icon = localStorage.getItem('theme_adv_mainnav_replace_launchpad_icon');
    let dashboard_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_dashboard_icon')) dashboard_icon = localStorage.getItem('theme_adv_mainnav_replace_dashboard_icon');
    let conversations_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_conversations_icon')) conversations_icon = localStorage.getItem('theme_adv_mainnav_replace_conversations_icon');
    let calendars_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_calendars_icon')) calendars_icon = localStorage.getItem('theme_adv_mainnav_replace_calendars_icon');
    let contacts_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_contacts_icon')) contacts_icon = localStorage.getItem('theme_adv_mainnav_replace_contacts_icon');
    let opportunities_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_opportunities_icon')) opportunities_icon = localStorage.getItem('theme_adv_mainnav_replace_opportunities_icon');
    let payments_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_payments_icon')) payments_icon = localStorage.getItem('theme_adv_mainnav_replace_payments_icon');
    let marketing_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_marketing_icon')) marketing_icon = localStorage.getItem('theme_adv_mainnav_replace_marketing_icon');
    let automation_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_automation_icon')) automation_icon = localStorage.getItem('theme_adv_mainnav_replace_automation_icon');
    let sites_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_sites_icon')) sites_icon = localStorage.getItem('theme_adv_mainnav_replace_sites_icon');
    let memberships_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_memberships_icon')) memberships_icon = localStorage.getItem('theme_adv_mainnav_replace_memberships_icon');
    let reputation_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_reputation_icon')) reputation_icon = localStorage.getItem('theme_adv_mainnav_replace_reputation_icon');
    let reporting_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_reporting_icon')) reporting_icon = localStorage.getItem('theme_adv_mainnav_replace_reporting_icon');
    let app_marketplace_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_app_marketplace_icon')) app_marketplace_icon = localStorage.getItem('theme_adv_mainnav_replace_app_marketplace_icon');
    let mobileapp_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_mobileapp_icon')) mobileapp_icon = localStorage.getItem('theme_adv_mainnav_replace_mobileapp_icon');
    let aiemployeepromo_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_aiemployeepromo_icon')) aiemployeepromo_icon = localStorage.getItem('theme_adv_mainnav_replace_aiemployeepromo_icon');
    let businessinfo_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_businessinfo_icon')) businessinfo_icon = localStorage.getItem('theme_adv_mainnav_replace_businessinfo_icon');
    let companybilling_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_companybilling_icon')) companybilling_icon = localStorage.getItem('theme_adv_mainnav_replace_companybilling_icon');
    let myprofile_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_myprofile_icon')) myprofile_icon = localStorage.getItem('theme_adv_mainnav_replace_myprofile_icon');
    let mystaff_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_mystaff_icon')) mystaff_icon = localStorage.getItem('theme_adv_mainnav_replace_mystaff_icon');
    let pipelines_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_pipelines_icon')) pipelines_icon = localStorage.getItem('theme_adv_mainnav_replace_pipelines_icon');
    let calendar_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_calendar_icon')) calendar_icon = localStorage.getItem('theme_adv_mainnav_replace_calendar_icon');
    let conversationaisettings_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_conversationaisettings_icon')) conversationaisettings_icon = localStorage.getItem('theme_adv_mainnav_replace_conversationaisettings_icon');
    let conversationaisettingsv2_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_conversationaisettingsv2_icon')) conversationaisettingsv2_icon = localStorage.getItem('theme_adv_mainnav_replace_conversationaisettingsv2_icon');
    let aiagents_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_aiagents_icon')) aiagents_icon = localStorage.getItem('theme_adv_mainnav_replace_aiagents_icon');
    let objects_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_objects_icon')) objects_icon = localStorage.getItem('theme_adv_mainnav_replace_objects_icon');
    let emailservices_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_emailservices_icon')) emailservices_icon = localStorage.getItem('theme_adv_mainnav_replace_emailservices_icon');
    let phonenumbers_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_phonenumbers_icon')) phonenumbers_icon = localStorage.getItem('theme_adv_mainnav_replace_phonenumbers_icon');
    let whatsapp_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_whatsapp_icon')) whatsapp_icon = localStorage.getItem('theme_adv_mainnav_replace_whatsapp_icon');
    let reputationmanagement_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_reputationmanagement_icon')) reputationmanagement_icon = localStorage.getItem('theme_adv_mainnav_replace_reputationmanagement_icon');
    let customfields_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_customfields_icon')) customfields_icon = localStorage.getItem('theme_adv_mainnav_replace_customfields_icon');
    let customvalues_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_customvalues_icon')) customvalues_icon = localStorage.getItem('theme_adv_mainnav_replace_customvalues_icon');
    let managescoring_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_managescoring_icon')) managescoring_icon = localStorage.getItem('theme_adv_mainnav_replace_managescoring_icon');
    let domains_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_domains_icon')) domains_icon = localStorage.getItem('theme_adv_mainnav_replace_domains_icon');
    let media_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_media_icon')) media_icon = localStorage.getItem('theme_adv_mainnav_replace_media_icon');
    let urlredirects_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_urlredirects_icon')) urlredirects_icon = localStorage.getItem('theme_adv_mainnav_replace_urlredirects_icon');
    let integrations_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_integrations_icon')) integrations_icon = localStorage.getItem('theme_adv_mainnav_replace_integrations_icon');
    let pintegrations_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_pintegrations_icon')) pintegrations_icon = localStorage.getItem('theme_adv_mainnav_replace_pintegrations_icon');
    let brandboards_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_brandboards_icon')) brandboards_icon = localStorage.getItem('theme_adv_mainnav_replace_brandboards_icon');
    let conversationproviders_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_conversationproviders_icon')) conversationproviders_icon = localStorage.getItem('theme_adv_mainnav_replace_conversationproviders_icon');
    let tags_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_tags_icon')) tags_icon = localStorage.getItem('theme_adv_mainnav_replace_tags_icon');
    let labs_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_labs_icon')) labs_icon = localStorage.getItem('theme_adv_mainnav_replace_labs_icon');
    let auditlogs_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_auditlogs_icon')) auditlogs_icon = localStorage.getItem('theme_adv_mainnav_replace_auditlogs_icon');
    let companies_icon = '';
    if (localStorage.getItem('theme_adv_mainnav_replace_companies_icon')) companies_icon = localStorage.getItem('theme_adv_mainnav_replace_companies_icon');

    const dual_col_icon = `style="--fa-primary-color: #5485d9; --fa-secondary-color: #5485d9;"`;
    if (id === 'sb_agency-dashboard') {
      return `<i class="fa-duotone fa-objects-column" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-saas-configurator') {
      return `<i class="fa-duotone fa-chart-bar" ${dual_col_icon}></i>`;
    } else if (id === 'sb_location-prospect') {
      return `<i class="fa-duotone fa-user-magnifying-glass" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-accounts') {
      return `<i class="fa-duotone fa-briefcase" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-account-snapshots') {
      return `<i class="fa-duotone fa-draw-square" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-account-reselling') {
      return `<i class="fa-duotone fa-display-chart-up-circle-dollar" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-marketplace') {
      return `<i class="fa-duotone fa-cart-shopping" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-affiliate-portal') {
      return `<i class="fa-duotone fa-users" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-partners') {
      return `<i class="fa-duotone fa-user-group" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-university') {
      return `<i class="fa-duotone fa-graduation-cap" ${dual_col_icon}></i>`;
    } else if (id === 'sb_saas-education') {
      return `<i class="fa-duotone fa-book-open" ${dual_col_icon}></i>`;
    } else if (id === 'sb_ghl-swag') {
      return `<i class="fa-duotone fa-shop" ${dual_col_icon}></i>`;
    } else if (id === 'sb_saas-fasttrack') {
      return `<i class="fa-duotone fa-forward-fast" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-ideas') {
      return `<i class="fa-duotone fa-lightbulb-exclamation-on" ${dual_col_icon}></i>`;
    } else if (id === 'sb_mobile-app-customiser') {
      return `<i class="fa-duotone fa-${mobileapp_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_ai-employee-promo') {
      return `<i class="fa-duotone fa-${aiemployeepromo_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'eade827b-ea11-4ec4-aa64-e308ef6a2694') {
      return `<i class="fa-duotone fa-message-captions" ${dual_col_icon}></i>`;
    } else if (id === '891d4586-6f57-4b6a-9d95-d49fc28fcd6f') {
      return `<i class="fa-duotone fa-message-bot" ${dual_col_icon}></i>`;
    } else if (id === 'e5bc4a65-58b4-4a19-9cfc-7597ce0ad02a') {
      return `<i class="fa-duotone fa-airplay" ${dual_col_icon}></i>`;
    } else if (id === '06e41eb4-a6f3-4b13-ab60-d9e4dcd58527') {
      return `<i class="fa-duotone fa-paper-plane" ${dual_col_icon}></i>`;
    } else if (id === 'sb_agency-settings') {
      return `<i class="fa-duotone fa-gear-complex" ${dual_col_icon}></i>`;
    }
    ///// AGENCY SETTINGS
    ///// LOCATION DASHBOARD
    else if (id === 'sb_app-media') {
      return `<i class="fa-duotone fa-${mediastorage_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_launchpad') {
      return `<i class="fa-duotone fa-${launchpad_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_dashboard') {
      return `<i class="fa-duotone fa-${dashboard_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_conversations') {
      return `<i class="fa-duotone fa-${conversations_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_calendars') {
      return `<i class="fa-duotone fa-${calendars_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_contacts') {
      return `<i class="fa-duotone fa-${contacts_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_opportunities') {
      return `<i class="fa-duotone fa-${opportunities_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_payments') {
      return `<i class="fa-duotone fa-${payments_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_divider-1') {
      return ``;
    } else if (id === 'sb_email-marketing') {
      return `<i class="fa-duotone fa-${marketing_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_AI Agents') {
      return `<i class="fa-duotone fa-${aiagents_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_automation') {
      return `<i class="fa-duotone fa-${automation_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_') {
      return `<i class="fa-duotone fa-${automation_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_sites') {
      return `<i class="fa-duotone fa-${sites_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_memberships') {
      return `<i class="fa-duotone fa-${memberships_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_reputation') {
      return `<i class="fa-duotone fa-${reputation_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_reporting') {
      return `<i class="fa-duotone fa-${reporting_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_app-marketplace') {
      return `<i class="fa-duotone fa-${app_marketplace_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_location-mobile-app') {
      return `<i class="fa-duotone fa-${mobileapp_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_ai-employee-promo') {
      return `<i class="fa-duotone fa-${aiemployeepromo_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_settings') {
      return `<i class="fa-duotone fa-gear-complex" ${dual_col_icon}></i>`;
    }
    ///////LOCATION SETTINGS
    else if (id === 'sb_business_info') {
      return `<i class="fa-duotone fa-${businessinfo_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_saas-billing') {
      return `<i class="fa-duotone fa-${companybilling_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_profile') {
      return `<i class="fa-duotone fa-${myprofile_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_my-staff') {
      return `<i class="fa-duotone fa-${mystaff_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_pipelines') {
      return `<i class="fa-duotone fa-${pipelines_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_Opportunities-Pipelines') {
      return `<i class="fa-duotone fa-${pipelines_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_calendars') {
      return `<i class="fa-duotone fa-${calendars_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_conversation_ai_settings') {
      return `<i class="fa-duotone fa-${conversationaisettings_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_conversation_ai_settings_v2') {
      return `<i class="fa-duotone fa-${conversationaisettingsv2_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_ai_agent_settings') {
      return `<i class="fa-duotone fa-${aiagents_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_objects') {
      return `<i class="fa-duotone fa-${objects_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_location-email-services') {
      return `<i class="fa-duotone fa-${emailservices_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_knowledge-base-settings') {
      return `<i class="fa-duotone fa-book-open-reader" ${dual_col_icon}></i>`;
    } else if (id === 'sb_phone-system') {
      return `<i class="fa-duotone fa-${phonenumbers_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_whatsapp') {
      return `<i class="fa-duotone fa-${whatsapp_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_reputation-management') {
      return `<i class="fa-duotone fa-${reputationmanagement_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_custom-fields-settings') {
      return `<i class="fa-duotone fa-${customfields_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_custom-values') {
      return `<i class="fa-duotone fa-${customvalues_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_manage-scoring') {
      return `<i class="fa-duotone fa-${managescoring_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_domains') {
      return `<i class="fa-duotone fa-${domains_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_domains-urlRedirects') {
      return `<i class="fa-duotone fa-${domains_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_media') {
      return `<i class="fa-duotone fa-${media_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_url-redirects') {
      return `<i class="fa-duotone fa-${urlredirects_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_integrations') {
      return `<i class="fa-duotone fa-${integrations_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_common.sidebar.privateIntegrations') {
      return `<i class="fa-duotone fa-${pintegrations_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_common.sidebar.lcIntegrations') {
      return `<i class="fa-duotone fa-${integrations_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_conversations_providers') {
      return `<i class="fa-duotone fa-${conversationproviders_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_tags') {
      return `<i class="fa-duotone fa-${tags_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_labs') {
      return `<i class="fa-duotone fa-${labs_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_audit-logs-location') {
      return `<i class="fa-duotone fa-${auditlogs_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_brand-boards') {
      return `<i class="fa-duotone fa-${brandboards_icon}" ${dual_col_icon}></i>`;
    } else if (id === 'sb_business-settings-v2') {
      return `<i class="fa-duotone fa-${companies_icon}" ${dual_col_icon}></i>`;
    }
    //// HEADER RIGHT ICONS
    else if (id === 'canny_logs-toggle') {
      return `<i class="fa-duotone fa-bullhorn" ${dual_col_icon}></i>`;
    } else if (id === 'recent_activities-toggle') {
      return `<i class="fa-duotone fa-bell-on" ${dual_col_icon}></i>`;
    } else if (id === 'hl_header--help-icon') {
      return `<i class="fa-duotone fa-message-question" ${dual_col_icon}></i>`;
    } else if (id === 'phone_dialer_access') {
      return `<i class="fa-duotone fa-phone-volume" ${dual_col_icon}></i>`;
    }
  }
  const add_attributes_to_body = function () {
    const is_ready = document.querySelector('#app');
    if (typeof is_ready !== 'undefined' && is_ready && window.location.href.includes('/settings/')) {
      document.body.setAttribute('data-name', 'company-settings-v2');
    } else if (!window.location.href.includes('/settings/')) {
      document.body.removeAttribute('data-name', 'company-settings-v2');
      document.body.setAttribute('data-generator', 'hlpt-themestyle-genenerator');
    }
  };
  const setup_sidbar_nav_icons = function () {
    const targetNode = document.querySelector('#app');
    if (typeof targetNode !== 'undefined' && targetNode) {
      const config = { attributes: true, subtree: true };
      const observer = new MutationObserver(function (mutations) {
        if (window.selected_theme === 'theme_cleanwhite') {
          iconElem_setup();
          remove_customlinks_dynamic_span();
        }
        add_attributes_to_body();
      });
      observer.observe(targetNode, config);
    }
  };
  /// valid location
  const is_location_id_allowed = () => {
    /////get location key from url
    let l = '';
    let jsonData = window.jsonData;
    let pu = document.location.href;
    if (pu.includes('/location')) {
      let pa = pu.split('/');
      let lpos = pa.indexOf('location');
      if (lpos) {
        let lipos = lpos + 1;
        l = pa[lipos];
      }
    }
    /////compare location key from url Vs. datasheet
    if (typeof jsonData === 'object' && typeof l !== 'undefined' && l) {
      for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].location_id === l) {
          location_key = jsonData[i].location_id;
          return location_key;
        }
      }
    }
  };
  //////////////////////////////
  window.jsonData = {};
  window.location_href = '';
  let location_key = false;
  const get_nav_url_ids = () => {
    const url_ids = {};
    /// top level nav links
    url_ids['launchpad'] = 'sb_launchpad';
    url_ids['dashboard'] = 'sb_dashboard';
    url_ids['conversations'] = 'sb_conversations';
    url_ids['calendars'] = 'sb_calendars';
    url_ids['contacts'] = 'sb_contacts';
    url_ids['opportunities'] = 'sb_opportunities';
    url_ids['payments'] = 'sb_payments';
    url_ids['marketing'] = 'sb_email-marketing';
    url_ids['automation'] = 'sb_automation';
    url_ids['sites'] = 'sb_sites';
    url_ids['memberships'] = 'sb_memberships';
    url_ids['reputation'] = 'sb_reputation';
    url_ids['reporting'] = 'sb_reporting';
    url_ids['app_marketplace'] = 'sb_app-marketplace';
    url_ids['mobile_app'] = 'sb_location-mobile-app';
    url_ids['media_storage'] = 'sb_app-media';
    /// top nav links
    url_ids['manual_actions'] = 'sb_conversations';
    url_ids['analyze'] = 'sb_conversations';
    url_ids['appointments'] = 'sb_calendars';
    url_ids['tasks'] = 'sb_contacts';
    url_ids['businesses'] = 'sb_contacts';
    url_ids['smart_list'] = 'sb_contacts';
    url_ids['opportunities'] = 'sb_opportunities';
    url_ids['affiliate_manager'] = 'sb_email-marketing';
    /// sites sub top nav
    url_ids['websites'] = 'sb_sites';
    url_ids['stores'] = 'sb_sites';
    url_ids['webinars'] = 'sb_sites';
    url_ids['analytics'] = 'sb_sites';
    url_ids['blogs'] = 'sb_sites';
    url_ids['wordpress'] = 'sb_sites';
    url_ids['client_portal'] = 'sb_sites';
    url_ids['form_builder'] = 'sb_sites';
    url_ids['survey_builder'] = 'sb_sites';
    url_ids['quiz_builder'] = 'sb_sites';
    url_ids['chat_widget'] = 'sb_sites';
    url_ids['qr_codes'] = 'sb_sites';
    // url_ids['content_ai'] = 'sb_automation';

    /// settings nav links
    url_ids['business_info'] = 'sb_business_info';
    url_ids['company_billing'] = 'sb_saas-billing';
    url_ids['my_staff'] = 'sb_my-staff';
    url_ids['settings_pipelines'] = 'sb_Opportunities-Pipelines';
    url_ids['settings_automation'] = 'sb_';
    url_ids['settings_ai_agents'] = 'sb_ai_agent_settings';
    url_ids['settings_conversation_ai'] = 'sb_conversation_ai_settings';
    url_ids['settings_conversation_ai_v2'] = 'sb_conversation_ai_settings_v2';
    url_ids['settings_knowledge_base'] = 'sb_knowledge-base-settings';
    url_ids['email_services'] = 'sb_location-email-services';
    url_ids['phone_numbers'] = 'sb_phone-system';
    url_ids['whats_app'] = 'sb_whatsapp';
    url_ids['reputation_management'] = 'sb_reputation-management';
    url_ids['objects'] = 'sb_objects';
    url_ids['custom_fields'] = 'sb_custom-fields-settings';
    url_ids['custom_values'] = 'sb_custom-values';
    url_ids['manage_scoring'] = 'sb_manage-scoring';
    url_ids['domains'] = 'sb_domains';
    url_ids['url_redirects'] = 'sb_url-redirects';
    url_ids['setting_integrations'] = 'sb_integrations';
    url_ids['private_integrations'] = 'sb_common.sidebar.privateIntegrations';
    url_ids['lc_integrations'] = 'sb_common.sidebar.lcIntegrations';
    url_ids['conversation_provider'] = 'sb_conversations_providers';
    url_ids['tags'] = 'sb_tags';
    url_ids['labs'] = 'sb_labs';
    url_ids['audit_logs'] = 'sb_audit-logs-location';
    url_ids['brand_boards'] = 'sb_brand-boards';
    url_ids['companies'] = 'sb_business-settings-v2';
    /// sub menu top links
    url_ids['ai_agents'] = 'sb_AI Agents'
    url_ids['agent_studio'] = 'sb_AI Agents';
    url_ids['voice_ai'] = 'sb_AI Agents';
    url_ids['conversation_ai'] = 'sb_AI Agents';
    url_ids['knowledge_base'] = 'sb_AI Agents';
    url_ids['agent_templates'] = 'sb_AI Agents';
    url_ids['content_ai'] = 'sb_AI Agents';

    let customLinks = document.querySelectorAll('a.custom-link');
    customLinks.forEach(function (link) {
      let linkId = link.id;
      if (linkId !== 'helpDeskCtrlNSW') {
        url_ids[link.id.substring(3)] = link.id;
      }
    });
    return url_ids;
  };
  /* apply lock setup starts here */
  const apply_lock = () => {
    let centerDivCreated = false;
    let pu = document.location.href;
    if (isThemeSettingsValid()) {
      const locvalid = is_location_id_allowed();
      if (locvalid && typeof jsonData === 'object') {
        // jsonData = updateIntegrationKeys(jsonData);
        const filteredData = jsonData.find((entry) => entry.location_id === locvalid);
        if (filteredData) {
          const { location_id, ...locationData } = filteredData;
          locationDataActions(location_id, locationData, pu, centerDivCreated);
        }
      }
    }
  };
  const isThemeSettingsValid = () => (
    typeof window.themegen_settings === 'object' &&
    window.themegen_settings &&
    window.themegen_settings.hasOwnProperty('google_spreadsheet_url') &&
    window.themegen_settings.hasOwnProperty('google_webapp_deploy') &&
    window.themegen_settings.hasOwnProperty('unlock_message')
  );

  const locationDataActions = (location_id, locationData, pu, centerDivCreated) => {
    Object.entries(locationData).forEach(([url, status]) => {
      if (status.toLowerCase() === 'hide') {
        const modified_url_string = getSpecificUrlString(url, location_id);
        if (Array.isArray(modified_url_string)) {
          modified_url_string.forEach(path => hideElementsWithCheck(path));
        } else {
          hideElementsWithCheck(modified_url_string);
        }
        const hasMatch = Array.isArray(modified_url_string)
          // ? modified_url_string.some(path => new RegExp(`(^|/)${path}($|/)`).test(pu))
          //   : new RegExp(`(^|/)${modified_url_string}($|/)`).test(pu);
          ? modified_url_string.some(path => new RegExp(`(^|/)${path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|/|\\?|&)`).test(pu))
          : new RegExp(`(^|/)${modified_url_string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|/|\\?|&)`).test(pu);
        if (hasMatch) {
          showProtectedOverlay(centerDivCreated);
        }
      }
      if (status.toLowerCase() === 'disable') {
        applyLockToNavItems(url);
        const modified_url_string = getSpecificUrlString(url, location_id);
        const hasMatch = Array.isArray(modified_url_string)
          // ? modified_url_string.some(path => new RegExp(`(^|/)${path}($|/)`).test(pu))
          //     : new RegExp(`(^|/)${modified_url_string}($|/)`).test(pu);
          ? modified_url_string.some(path => new RegExp(`(^|/)${path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|/|\\?|&)`).test(pu))
          : new RegExp(`(^|/)${modified_url_string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|/|\\?|&)`).test(pu);
        if (hasMatch) {
          showProtectedOverlay(centerDivCreated);
        }
      }
    });
  };
  const getSpecificUrlString = (url, locid) => {
    const modifiedUrl = url === 'dashboard' ? `${locid}/dashboard` :
      url === 'contacts' ? [`${locid}/contacts`,
      `${locid}/tasks`,
      `${locid}/businesses`,
      `${locid}/settings/smart_list/Settings`] :

        url === 'opportunities' ? [`${locid}/opportunities`,
        `${locid}/settings/bulk-actions`] :
          url === 'custom_menu_link' ? `${locid}/custom-menu-link` :
            url === 'custom_page_link' ? `${locid}/custom-page-link` :
              url === 'memberships' ? `${locid}/memberships` :
                url === 'app_marketplace' ? `${locid}/integration` :
                  url === 'sites' ? [`${locid}/funnels-websites/funnels`] :
                    url === 'websites' ? [`${locid}/funnels-websites/websites`] :
                      url === 'stores' ? [`${locid}/funnels-websites/stores`] :
                        url === 'webinars' ? [`${locid}/funnels-websites/webinars`] :
                          url === 'analytics' ? [`${locid}/analytics`] :
                            url === 'blogs' ? [`${locid}/blogs`] :
                              url === 'wordpress' ? [`${locid}/wordpress`] :
                                url === 'client_portal' ? [`${locid}/funnels-websites/client-portal`] :
                                  url === 'form_builder' ? [`${locid}/form-builder`,
                                  `${locid}/form-builder/analyze`,
                                  `${locid}/form-builder/submissions`
                                  ] :
                                    url === 'survey_builder' ? [`${locid}/survey-builder`,
                                    `${locid}/survey-builder/analyze`,
                                    `${locid}/survey-builder/submissions`
                                    ] :
                                      url === 'quiz_builder' ? [`${locid}/quiz-builder`,
                                      `${locid}/quiz-builder/submissions`
                                      ] :
                                        url === 'chat_widget' ? [`${locid}/funnels-websites/chat-widget`] :
                                          url === 'qr_codes' ? [`${locid}/qr-codes`] :
                                            // url === 'content_ai' ? [`${locid}/automation/content-ai`] :
                                            url === 'url_redirects' ? [`${locid}/settings/redirect`] :
                                              url === 'media_storage' ? `${locid}/media-storage` :
                                                url === 'business_info' ? `${locid}/settings/company` :
                                                  url === 'company_billing' ? `${locid}/settings/company-billing` :
                                                    url === 'my_staff' ? `${locid}/settings/staff/team` :
                                                      url === 'settings_pipelines' ? [`${locid}/crm-settings`, `${locid}/settings/pipeline` ] :
                                                        url === 'settings_automation' ? `${locid}/settings/automation` :
                                                          url === 'settings_conversation_ai' ? `${locid}/settings/conversation-ai` :
                                                            url === 'settings_knowledge_base' ? `${locid}/settings/knowledge-base-settings` :
                                                              url === 'settings_conversation_ai_v2' ? `${locid}/settings/conversation-ai-v2` :
                                                                url === 'settings_ai_agents' ? `${locid}/settings/ai-agents` :
                                                                  url === 'ai_agents' ? `${locid}/ai-agents/getting-started` :
                                                                    url === 'agent_studio' ? `${locid}/ai-agents/agent-studio` :
                                                                      url === 'voice_ai' ? `${locid}/ai-agents/voice-ai` :
                                                                        url === 'conversation_ai' ? `${locid}/ai-agents/conversation-ai` :
                                                                          url === 'knowledge_base' ? `${locid}/ai-agents/knowledge-base` :
                                                                            url === 'agent_templates' ? `${locid}/ai-agents/agent-templates` :
                                                                              url === 'content_ai' ? `${locid}/ai-agents/content-ai` :
                                                                                url === 'email_services' ? `${locid}/settings/smtp_service` :
                                                                                  url === 'phone_numbers' ? `${locid}/settings/phone_number` :
                                                                                    url === 'whats_app' ? `${locid}/settings/whatsapp` :
                                                                                      url === 'reputation_management' ? `${locid}/settings/reputation/settings` :
                                                                                        url === 'objects' ? `${locid}/settings/objects` :
                                                                                          url === 'custom_fields' ? `${locid}/settings/fields` :
                                                                                            url === 'custom_values' ? `${locid}/settings/custom_values` :
                                                                                              url === 'manage_scoring' ? `${locid}/settings/scoring` :
                                                                                                url === 'domains' ? `${locid}/settings/domain` :
                                                                                                  url === 'setting_integrations' ? `${locid}/settings/integrations` :
                                                                                                    url === 'private_integrations' ? `${locid}/settings/private-integrations` :
                                                                                                      url === 'conversation_provider' ? `${locid}/settings/conversation_providers` :
                                                                                                        url === 'tags' ? `${locid}/settings/tags` :
                                                                                                          url === 'labs' ? `${locid}/settings/labs` :
                                                                                                            url === 'audit_logs' ? `${locid}/settings/audit/logs` :
                                                                                                              url === 'brand_boards' ? `${locid}/marketing/brand-boards` :
                                                                                                                url === 'companies' ? `${locid}/settings/businesses` :
                                                                                                                  url;
    return modifiedUrl;
  };
  const checkTopMenuFunnel = () => {
    const checkTopMenu = document.querySelector('.topmenu-nav');
    if (checkTopMenu) {
      return Array.from(checkTopMenu.querySelectorAll('a')).some(a => a.id === 'tb_funnels');
    }
    return false;
  };

  const hideElementsWithCheck = (selector) => {
    const sidemenulinksToHide = document.querySelectorAll(`a[href*="${selector}"]`);
    sidemenulinksToHide.forEach((element) => {
      element.style.setProperty('display', 'none', 'important');
      if (!element.classList.contains('hidden-navitem')) {
        element.classList.add('hidden-navitem');
      }
      /// funnel top link is not present.
      const isTargetLink = element.getAttribute('href').endsWith('/funnels-websites/websites') && element.id === 'sb_sites';
      if (!checkTopMenuFunnel() && isTargetLink) {
        const checkSitesMenu = document.querySelector('#sb_sites');
        if (checkSitesMenu) {
          checkSitesMenu.style.setProperty('display', 'flex', 'important');
        }
      }
      const isTargetLink_wp = element.getAttribute('href').endsWith('/wordpress') && element.id === 'tb_wordpress-v2';
      if (!checkTopMenuFunnel() && isTargetLink_wp) {
        const checkSitesMenu = document.querySelector('#tb_wordpress-v2');
        if (checkSitesMenu) {
          checkSitesMenu.style.setProperty('display', 'none', 'important');
        }
      }
    });
    let elapsedTime = 0;
    const checkCustomLinks = setInterval(() => {
      const customMenuLinksToHide = document.querySelectorAll(`#sidebar-v2 nav a.custom-link[id="${selector}"]`);
      if (customMenuLinksToHide.length > 0) {
        customMenuLinksToHide.forEach((element) => {
          element.style.setProperty('display', 'none', 'important');
          if (!element.classList.contains('hidden-navitem')) {
            element.classList.add('hidden-navitem');
          }
        });
        clearInterval(checkCustomLinks);
      } else {
        elapsedTime += 250;
        if (elapsedTime >= 2000) {
          clearInterval(checkCustomLinks);
        }
      }
    }, 250);
  };
  const showProtectedOverlay = (centerDivCreated) => {
    const content_id_wrap = document.querySelector('#app');
    if (!centerDivCreated && content_id_wrap && !document.querySelector('#protected-page-overlay')) {
      content_id_wrap.className = 'blurrr-wrap';
      const centerDiv = document.createElement('iframe');
      centerDiv.id = 'protected-page-overlay';
      centerDiv.className = 'protected-prompt';
      centerDiv.src = window.themegen_settings.unlock_message;
      content_id_wrap.insertAdjacentElement('beforebegin', centerDiv);
      setTimeout(() => (centerDiv.style.opacity = '1'), 100);
      centerDivCreated = true;
    }
  }
  const applyLockToNavItems = (modified_url_string) => {
    const url_ids_list = get_nav_url_ids();
    if (url_ids_list && url_ids_list.hasOwnProperty(modified_url_string)) {
      const selected_url_id = url_ids_list[modified_url_string];
      // Use attribute selector to handle IDs with spaces (e.g., "sb_AI Agents")
      const selector = selected_url_id.includes(' ') ? `[id="${selected_url_id}"]` : `#${selected_url_id}`;
      document.querySelectorAll(selector).forEach((nav_item_id) => {
        setNavItemLockStyles(nav_item_id);
      });
    }
    let elapsedTime = 0;
    const intervalId_TB = setInterval(() => {
      const elemsCustomMenu = document.querySelectorAll(`#sidebar-v2 nav a.custom-link[id="${modified_url_string}"]`);
      if (elemsCustomMenu.length > 0) {
        elemsCustomMenu.forEach((nav_item_id) => {
          setNavItemLockStyles(nav_item_id);
        });
        clearInterval(intervalId_TB);
      } else {
        elapsedTime += 250;
        if (elapsedTime >= 2000) {
          clearInterval(intervalId_TB);
        }
      }
    }, 250);
  };
  const setNavItemLockStyles = (nav_item) => {
    if (nav_item) {
      nav_item.style.opacity = nav_item.style.opacity === '1' ? nav_item.style.opacity : '1';
      nav_item.style.position = nav_item.style.position === 'relative' ? nav_item.style.position : 'relative';
      if (!nav_item.classList.contains('protected-navlink-lock')) {
        nav_item.classList.add('protected-navlink-lock');
      }
      if (!nav_item.querySelector('.fa-solid.fa-lock.lockout')) {
        const lockIcon = document.createElement('i');
        lockIcon.className = 'fa-solid fa-lock lockout';
        nav_item.appendChild(lockIcon);
      }
    }
  };
  const remove_lock = () => {
    var existing_location_href = window.location_href;
    var new_location_href = document.location.href;
    if (existing_location_href !== null && existing_location_href !== new_location_href) {
      if (document.body.contains(document.querySelector('#protected-page-overlay'))) {
        document.querySelector('#protected-page-overlay').remove();
        const content_id_wrap = document.querySelector('#app');
        if (typeof content_id_wrap !== 'undefined' && content_id_wrap) {
          content_id_wrap.classList.remove('blurrr-wrap');
        }
      }
      const lockItems = document.querySelectorAll('a.protected-navlink-lock');
      if (lockItems && lockItems.length > 0) {
        lockItems.forEach((element) => {
          const lockIcon = element.querySelector('.fa-solid.fa-lock.lockout');
          if (lockIcon) {
            lockIcon.remove();
          }
        });
      }
      const hiddenNavItems = document.querySelectorAll('.hidden-navitem');
      if (hiddenNavItems.length > 0) {
        hiddenNavItems.forEach((element) => {
          element.style.removeProperty('display');
          element.classList.remove('hidden-navitem');
        });
      }
      if (is_location_id_allowed()) {
        apply_lock();
      }
      window.location_href = new_location_href;
    } else if (existing_location_href === null) {
      window.location_href = new_location_href;
    }
  };
  /* end of apply lock setup */
  ///////Tool tips class remove add  for the cw */
  const convertToSlug = (Text) => {
    return Text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };
  /* //// get loc name and city to hide tooltip */
  const getLocNameCityTooltips = function () {
    const pageUrl = document.location.href;
    const locNameElem = document.querySelector('.hl_switcher-loc-name');
    let locName = '';
    if (pageUrl.includes('/location')) {
      if (locNameElem) locName = locNameElem.textContent.trim();
    }
    let locNameCity = `${locName}`;
    locNameCity = convertToSlug(locNameCity);
    return locNameCity;
  };

  const add_class_to_tooltip_loc_switcher = function () {
    const pageUrl = document.location.href;
    const locSwitcherElem = document.querySelector('#location-switcher-sidbar-v2');
    let addClass = 'no-tooltips-loc';
    if (pageUrl.includes('/location') && locSwitcherElem) {
      let locNameCity_slug = getLocNameCityTooltips();
      let el = document.body;
      if (locNameCity_slug && [...el.classList].some((cls) => cls.startsWith(`hlpt_tt_${locNameCity_slug}`))) {
        el.classList.add(addClass);
      } else if (el.classList.contains(addClass)) {
        el.classList.remove(addClass);
      }
    }
  };
  const add_class_to_tooltip = () => {
    var tooltip_node = document.querySelector('div.b-tooltip');
    if (document.body.contains(tooltip_node)) {
      let loc_name_city_txt = '';
      var tooltip_text = tooltip_node.textContent;
      if (tooltip_text) {
        tooltip_text = convertToSlug(tooltip_text);
        tooltip_text = tooltip_text.slice(0, 50);
        tooltip_text = 'hlpt_tt_' + tooltip_text;
        var el = document.body;
        for (let i = el.classList.length - 1; i >= 0; i--) {
          const className = el.classList[i];
          if (className.startsWith('hlpt_tt_')) {
            el.classList.remove(className);
          }
        }
        document.body.classList.add(tooltip_text);
        getLocNameCityTooltips();
        add_class_to_tooltip_loc_switcher();
      }
    }
  };
  const mo_tooltips = function () {
    const targetNode = document.body;
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'div' && node.classList.contains('b-tooltip')) {
              add_class_to_tooltip();
            }
          });
        }
      }
    });
    observer.observe(targetNode, config);
  };

  const expand_main_nav = function () {
    let selected_theme = '';
    if (window.selected_theme) selected_theme = window.selected_theme;
    let publishedTheme = '';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) publishedTheme = window.themegen_settings.theme_name;
    let activate_hcontrols_settings = 'false';
    if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_hcontrols_settings = window.themegen_settings.activate_hcontrols_settings;

    const settingsElement = document.querySelector('.hl_nav-settings');
    if (!document.body.contains(settingsElement)) {
      setTimeout(expand_main_nav, 250);
    } else {
      if (selected_theme === 'theme_cleanwhite' || publishedTheme === 'Clean White') {
        if (typeof settingsElement !== 'undefined' && settingsElement) {
          if (!settingsElement.querySelector('.show-button')) {
            var showDiv = document.createElement('div');
            showDiv.innerHTML = `<a class="btn-expand-menu"><i class="fa-solid fa-chevron-down"></i></a>`;
            showDiv.className = 'show-button';
            settingsElement.insertBefore(showDiv, settingsElement.firstChild);

            let isBlSmActive = true;
            showDiv.addEventListener('click', function () {
              settingsElement.classList.toggle('showhide-mainnav');
              settingsElement.classList.add('showhide-btn');

              if (isBlSmActive) {
                if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl'))) {
                  document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl').remove();
                }
                add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl-sm', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl_sm);
              } else {
                if (document.head.contains(document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm'))) {
                  document.querySelector('#dashboard-theme-client-cleanwhite-hcontrols-bl-sm').remove();
                }
                add_styles('dashboard-theme-client-cleanwhite-hcontrols-bl', script_url + dashboard_themes.theme_data[selected_theme].theme_styles_hcontrols_bl);
              }
              isBlSmActive = !isBlSmActive;
            });
          }
        }
      }
    }
  };
  //// assign colors.
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  const assign_colors = () => {
    const admin_agency_check = document.querySelector('#app');
    if (!document.body.contains(admin_agency_check)) {
      setTimeout(assign_colors, 250);
    } else {
      function setColor() {
        var ls_rvars_general = get_ls_rvars_general();
        var ls_rvars_advanced = get_ls_rvars_advanced();
        let ls_rvars = {
          ...ls_rvars_general,
          ...ls_rvars_advanced,
        };

        var ls_obj_general = get_ls_obj_general();
        var ls_obj_advanced = get_ls_obj_advanced();
        let ls_obj = {
          ...ls_obj_general,
          ...ls_obj_advanced,
        };

        let r = document.querySelector(':root');
        var rvar_elements = get_rvar_elements();
        var rootvar_unit_values = get_rootvar_unit_values();
        for (const [rvar, element_id_list] of Object.entries(rvar_elements)) {
          var element_id_array = element_id_list.split(',');
          if (Array.isArray(element_id_array)) {
            var element_id_cc = '';
            var element_id = element_id_array[0].trim();
            if (element_id_array.length > 1) element_id_cc = element_id_array[1].trim();
            var input_obj = '';
            input_obj = document.querySelector('#' + element_id);
            var input_value = '';
            var input_value_org = '';
            if (typeof input_obj !== 'undefined' && document.body.contains(input_obj) && input_obj.value) {
              var unit_value = '';
              if (typeof rootvar_unit_values === 'object' && rootvar_unit_values.hasOwnProperty(rvar) && rootvar_unit_values[rvar]) unit_value = rootvar_unit_values[rvar];
              input_value = input_obj.value;

              input_value_org = input_obj.value;

              if (rvar.startsWith('--dynamic-font-family') && input_value) {
                const parts = input_value.split(':');
                input_value = parts[0];
              }

              if (rvar.endsWith('-label') && input_value) {
                input_value = '"' + input_value + '"';
              } else if (rvar.endsWith('-icon') && input_value) {
                input_value = "'\\" + input_value + "'";
              }
              if (!input_value) {
                var ls_key = getKeyByValue(ls_rvars, rvar);
                if (typeof ls_key !== 'undefined' && ls_key) {
                  if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(ls_key)) {
                    input_value = ls_obj[ls_key];
                  }
                }
              }
              if (input_value) {
                input_obj.style.backgroundColor = input_value;
                r.style.setProperty(rvar, input_value + unit_value);
              }
              input_obj.addEventListener('input', setColor);
              if (element_id_cc && input_value_org) {
                var input_obj_cc = '';
                input_obj_cc = document.querySelector('#' + element_id_cc);
                if (typeof input_obj_cc !== 'undefined' && document.body.contains(input_obj_cc)) {
                  // Set value for text input instead of innerHTML
                  input_obj_cc.value = input_value_org;
                  // Add listener for hex code text input to sync back to color picker
                  // Use IIFE to properly capture closure variables
                  if (!input_obj_cc.hasAttribute('data-colorcode-listener')) {
                    input_obj_cc.setAttribute('data-colorcode-listener', 'true');
                    (function(colorPicker, textInput, rootEl, cssVar, unitVal) {
                      textInput.addEventListener('input', function(e) {
                        var hexValue = e.target.value.trim();
                        // Validate hex format and sync to color picker
                        if (/^#[0-9A-Fa-f]{6}$/i.test(hexValue)) {
                          colorPicker.value = hexValue;
                          colorPicker.style.backgroundColor = hexValue;
                          rootEl.style.setProperty(cssVar, hexValue + unitVal);
                          // Trigger the setColor function to update everything
                          colorPicker.dispatchEvent(new Event('input', { bubbles: true }));
                        }
                      });
                      textInput.addEventListener('blur', function(e) {
                        var hexValue = e.target.value.trim();
                        // Auto-add # prefix if missing and valid hex
                        if (/^[0-9A-Fa-f]{6}$/i.test(hexValue)) {
                          hexValue = '#' + hexValue;
                          e.target.value = hexValue;
                        }
                        if (/^#[0-9A-Fa-f]{6}$/i.test(hexValue)) {
                          colorPicker.value = hexValue;
                          colorPicker.style.backgroundColor = hexValue;
                          rootEl.style.setProperty(cssVar, hexValue + unitVal);
                          // Trigger the setColor function to update everything
                          colorPicker.dispatchEvent(new Event('input', { bubbles: true }));
                          colorPicker.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      });
                    })(input_obj, input_obj_cc, r, rvar, unit_value);
                  }
                }
              }
            }
          }
        }
      }
      setColor();
    }
    // parent to child - not in use for now.
    const rootVar_primary_btn_bgcol = localStorage.getItem('theme_adv_primary_btn_bgcol');
    const rootVar_primary_col = localStorage.getItem('theme_name_primary_col');
    if (rootVar_primary_btn_bgcol !== null || rootVar_primary_col !== null) {
      const eventParentData = {
        event: 'parent_colors',
        primary_btn_bgcol: rootVar_primary_btn_bgcol || null,
        primary_col: rootVar_primary_col || null,
      };
      window.postMessage(eventParentData, '*');
    }
  };
  /////////////////////////* SIDE MENU ORDER CHANGE ////////////////////// DISABLED
  // Global variable to track which page's menu listeners are active
  window.activeMenuListenersPage = null;

  const side_menu_order = function () {
    let page_url = document.location.href;
    if (page_url.includes('/location') && !page_url.includes('/settings/')) {
      const sidebar = document.getElementById('sidebar-v2');
      const menu = sidebar.querySelector('.hl_nav-header nav');
      if (typeof sidebar !== 'undefined' && sidebar) {
        if (typeof menu !== 'undefined' && menu) {
          if (menu.hasAttribute('data-location-listeners-attached') && window.activeMenuListenersPage === 'location') {
            return;
          }
          // Mark that location listeners are now active
          menu.setAttribute('data-location-listeners-attached', 'true');
          menu.removeAttribute('data-settings-listeners-attached');
          window.activeMenuListenersPage = 'location';

          const existingDefaultOrder = localStorage.getItem('themegen_sidemenu_default_order');
          if (!existingDefaultOrder || existingDefaultOrder === '[]') {
            let default_storedOrder = '';
            if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_default_order'))
              default_storedOrder = window.themegen_settings.themegen_sidemenu_default_order;
            if (existingDefaultOrder !== '[]') {
              const defaultOrder = Array.from(menu.children).map((item) => item.id);
              if (default_storedOrder && default_storedOrder !== '[]') {
                localStorage.setItem('themegen_sidemenu_default_order', default_storedOrder);
              } else if (default_storedOrder !== '[]') {
                localStorage.setItem('themegen_sidemenu_default_order', JSON.stringify(defaultOrder));
              }
            }
          }
          menu.addEventListener('dragstart', handleDragStart);
          menu.addEventListener('dragover', handleDragOver);
          menu.addEventListener('dragleave', handleDragLeave);
          menu.addEventListener('drop', handleDrop);
          loadMenuOrder();
          let dropTarget;
          function handleDragStart(e) {
            const dropTarget = e.target.closest('.group');
            e.dataTransfer.setData('text/plain', e.target.id);
            if (dropTarget) {
              e.target.style.setProperty('cursor', 'move', 'important');
              e.target.style.setProperty('opacity', '0.3', 'important');
            }
          }
          function handleDragOver(e) {
            e.preventDefault();
            const currentDropTarget = e.target.closest('.group');
            if (currentDropTarget !== dropTarget) {
              if (dropTarget) {
                dropTarget.style.setProperty('border', '', 'important');
              }
              if (currentDropTarget) {
                currentDropTarget.style.setProperty('border-top', '2px dashed #ff8000', 'important');
              }
              dropTarget = currentDropTarget;
            }
          }
          function handleDragLeave() {
            if (dropTarget) {
              dropTarget.style.setProperty('border', '', 'important');
              dropTarget = null;
            }
          }
          function handleDrop(e) {
            e.preventDefault();
            if (dropTarget) {
              const draggedItemId = e.dataTransfer.getData('text/plain');
              const draggedItem = document.getElementById(draggedItemId);
              menu.style.display = 'flex';
              menu.style.flexDirection = 'column';
              const allItems = Array.from(menu.children);
              const visuallyOrderedItems = allItems.sort((a, b) => {
                const orderA = parseInt(a.style.order) || Array.from(menu.children).indexOf(a) + 1;
                const orderB = parseInt(b.style.order) || Array.from(menu.children).indexOf(b) + 1;
                return orderA - orderB;
              });

              const dropTargetIndex = visuallyOrderedItems.indexOf(dropTarget);
              const draggedItemIndex = visuallyOrderedItems.indexOf(draggedItem);

              if (draggedItemIndex !== dropTargetIndex) {
                const itemsWithoutDragged = visuallyOrderedItems.filter(item => item.id !== draggedItemId);

                const adjustedDropIndex = dropTargetIndex > draggedItemIndex ? dropTargetIndex - 1 : dropTargetIndex;

                itemsWithoutDragged.splice(adjustedDropIndex, 0, draggedItem);

                itemsWithoutDragged.forEach((item, index) => {
                  item.style.setProperty('order', `${index + 1}`, '');
                });

                saveMenuOrder();
              }
              dropTarget.style.setProperty('border', '', 'important');
              dropTarget = null;
              draggedItem.style.setProperty('cursor', '', 'important');
              draggedItem.style.setProperty('opacity', '', 'important');
            }
          }
          function saveMenuOrder() {
            // Only save if location listeners are active (safety check)
            if (window.activeMenuListenersPage !== 'location') {
              return;
            }

            const menuItems = Array.from(menu.children);
            const sortedItems = menuItems.sort((a, b) => {
              const orderA = parseInt(a.style.order) || 0;
              const orderB = parseInt(b.style.order) || 0;
              return orderA - orderB;
            });
            const menuOrder = sortedItems
              .map((item) => item.id)
              .filter(id => id && id.trim() !== '' && id !== 'sb_');
            const menuOrderString = JSON.stringify(menuOrder);
            localStorage.setItem('themegen_sidemenu_order', menuOrderString);
            if (typeof window.themegen_settings === 'object') {
              window.themegen_settings.themegen_sidemenu_order = menuOrderString;
            }
          }
          function loadMenuOrder() {
            const storedOrder = localStorage.getItem('themegen_sidemenu_order');
            if (storedOrder) {
              const menuOrder = JSON.parse(storedOrder);
              const filteredMenuOrder = menuOrder.filter(id => id && id.trim() !== '' && id !== 'sb_');
              if (filteredMenuOrder !== undefined && filteredMenuOrder !== null && filteredMenuOrder.length > 0) {
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';

                // add params index if index requird  index;
                filteredMenuOrder.forEach((itemId, index) => {
                  const item = document.getElementById(itemId);
                  if (item) {
                    item.style.setProperty('order', `${index + 1}`, '');
                  }
                });
              }
            }
          }
        }
      }
    }
  };
  /// load menu order
  function reLoadMenuOrder() {
    let page_url = document.location.href;
    if (page_url.includes('/location') && !page_url.includes('/settings/')) {
      const sidebar = document.querySelector('#sidebar-v2');
      if (typeof sidebar !== 'undefined' && sidebar) {
        const menu = sidebar.querySelector('nav');
        if (typeof menu !== 'undefined' && menu) {
          const allMenuItems = Array.from(menu.children);
          allMenuItems.forEach((item) => {
            item.style.removeProperty('order');
          });

          let default_storedOrder = '';
          if (localStorage.getItem('themegen_sidemenu_default_order')) default_storedOrder = localStorage.getItem('themegen_sidemenu_default_order');
          if (default_storedOrder !== '[]') {
            if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_default_order') && window.themegen_settings.themegen_sidemenu_default_order !== '[]')
              default_storedOrder = window.themegen_settings.themegen_sidemenu_default_order;
            localStorage.setItem('themegen_sidemenu_default_order', default_storedOrder);
          }
          let storedOrder = '';
          if (localStorage.getItem('themegen_sidemenu_order')) storedOrder = localStorage.getItem('themegen_sidemenu_order');
          if (storedOrder !== '[]') {
            if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order') && window.themegen_settings.themegen_sidemenu_order !== '[]') storedOrder = window.themegen_settings.themegen_sidemenu_order;
            localStorage.setItem('themegen_sidemenu_order', storedOrder);
          }
          var themegen_data = window.org_theme_data;
          var location_details = __get_location_settings(themegen_data, window.current_location_id);
          if (typeof location_details === 'object' && location_details.hasOwnProperty('location_settings_exist') && location_details.location_settings_exist) {
            if (storedOrder !== '[]') {
              if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order') && window.themegen_settings.themegen_sidemenu_order !== '[]') storedOrder = window.themegen_settings.themegen_sidemenu_order;
              localStorage.setItem('themegen_sidemenu_order', storedOrder);
            }
          }
          if (storedOrder == '' && default_storedOrder !== '[]') storedOrder = default_storedOrder;

          function reorderMenu() {
            const menuOrder = JSON.parse(storedOrder);
            const filteredMenuOrder = menuOrder.filter(id => id && id.trim() !== '' && id !== 'sb_');
            if (filteredMenuOrder.length === 0) return;

            let retryCount = 0;
            const interval = setInterval(() => {
              const marketplaceItem = document.getElementById('sb_app-marketplace');
              if (marketplaceItem || retryCount >= 5) {
                clearInterval(interval);
                if (marketplaceItem) {
                  menu.style.display = 'flex';
                  menu.style.flexDirection = 'column';
                  filteredMenuOrder.forEach((itemId, index) => {
                    const item = document.getElementById(itemId);
                    if (item) {
                      // menu.appendChild(item);
                      item.style.setProperty('order', `${index + 1}`, '');
                    }
                  });
                } else {
                  // console.log('Marketplace item not found after 5 retries.');
                }
              } else {
                retryCount++;
                // console.log(`Retrying to find Marketplace item... Attempt ${retryCount}`);
              }
            }, 1000);
          }
          if (storedOrder) {
            const menuOrder = JSON.parse(storedOrder);
            const filteredMenuOrder = menuOrder.filter(id => id && id.trim() !== '' && id !== 'sb_');
            if (filteredMenuOrder.length > 0) {
              reorderMenu();
              menu.style.display = 'flex';
              menu.style.flexDirection = 'column';
              var foundItems = [];
              var missingItems = [];

              filteredMenuOrder.forEach((itemId, index) => {
                const item = document.getElementById(itemId);
                if (item) {
                  item.style.setProperty('order', `${index + 1}`, '');
                  foundItems.push(itemId);
                } else {
                  missingItems.push({ id: itemId, order: index + 1 });
                }
              });

              if (missingItems.length > 0) {
                var recheckCount = 0;
                var maxRechecks = 10;
                var recheckInterval = setInterval(function () {
                  recheckCount++;

                  for (var i = missingItems.length - 1; i >= 0; i--) {
                    const missingItem = missingItems[i];
                    const item = document.getElementById(missingItem.id);

                    if (item) {
                      item.style.setProperty('order', `${missingItem.order}`, '');
                      missingItems.splice(i, 1);
                    }
                  }
                  // Stop if all items found or max rechecks reached
                  if (missingItems.length === 0 || recheckCount >= maxRechecks) {
                    clearInterval(recheckInterval);
                    if (missingItems.length > 0) {
                    }
                  }
                }, 500); // Recheck every 500ms
              }
            }
          }
        }
      }
    }
  }
  /// allow reorder side menu
  const reorder_nav_allowed = function () {
    let page_url = document.location.href;
    let reorder_allowed = false;
    if (page_url.includes('/location/')) {
      const reorder_checkbox = document.querySelector('#reorder-side-menu-check');
      const instruction_highlights = document.querySelector('.instruction-highlights');
      if (typeof reorder_checkbox !== 'undefined' && reorder_checkbox && typeof instruction_highlights !== 'undefined' && instruction_highlights) {
        reorder_checkbox.addEventListener('change', function () {
          if (this.checked) {
            reorder_checkbox.checked = true;
            scrollToId('reorder-side-menu');
            reorder_allowed = true;

            if (page_url.includes('/location') && !page_url.includes('/settings/')) {
              localStorage.setItem('themegen_activate_sidemenu_reorder', 'true');
              side_menu_order();
            } else if (page_url.includes('/settings/')) {
              localStorage.setItem('themegen_activate_sidemenu_reorder_settings', 'true');
              side_menu_order_settings();
            }
            instruction_highlights.classList.add('active');
          } else {
            if (page_url.includes('/location') && !page_url.includes('/settings/')) {
              localStorage.setItem('themegen_activate_sidemenu_reorder', 'false');
            } else if (page_url.includes('/settings/')) {
              localStorage.setItem('themegen_activate_sidemenu_reorder_settings', 'false');
            }
            instruction_highlights.classList.remove('active');
          }
        });
      }
    }
    return reorder_allowed;
  };
  ///////// RESET REORDER
  const reorder_reset_to_default = function () {
    let page_url = document.location.href;
    if (page_url.includes('/location') && !page_url.includes('/settings/')) {
      var resetButton = document.querySelector('#resetbtn-menureorder-settings');
      if (resetButton) {
        resetButton.addEventListener('click', function () {
          const reorder_checkbox = document.querySelector('#reorder-side-menu-check');
          const sidebar = document.getElementById('sidebar-v2');
          const menu = sidebar.querySelector('.hl_nav-header nav');
          if (typeof reorder_checkbox !== 'undefined' && reorder_checkbox) {
            if (typeof sidebar !== 'undefined' && sidebar && typeof menu !== 'undefined' && menu) {
              localStorage.setItem('themegen_sidemenu_order', '[]');
              localStorage.setItem('themegen_sidemenu_default_order', '[]');
              localStorage.setItem('themegen_activate_sidemenu_reorder', 'false');
              reorder_checkbox.checked = false;
              // Reset menu order styles
              if (typeof menu !== 'undefined' && menu) {
                const menuItems = menu.querySelectorAll('[style*="order"]');
                menuItems.forEach((item) => {
                  item.style.removeProperty('order');
                });
              }
            }
          }
        });
      }
    }
  };
  /// reorder settings
  const side_menu_order_settings = function () {
    let page_url = document.location.href;
    if (page_url.includes('/location') && page_url.includes('/settings/')) {
      const sidebar = document.getElementById('sidebar-v2');
      const menu = sidebar.querySelector('.hl_nav-header-without-footer nav');
      if (typeof sidebar !== 'undefined' && sidebar) {
        if (typeof menu !== 'undefined' && menu) {
          if (menu.hasAttribute('data-settings-listeners-attached') && window.activeMenuListenersPage === 'settings') {
            return;
          }
          // Mark that settings listeners are now active
          menu.setAttribute('data-settings-listeners-attached', 'true');
          menu.removeAttribute('data-location-listeners-attached');
          window.activeMenuListenersPage = 'settings';

          const existingDefaultOrder = localStorage.getItem('themegen_sidemenu_default_order_settings');
          if (!existingDefaultOrder || existingDefaultOrder === '[]') {
            let default_storedOrder = '';
            if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_default_order_settings'))
              default_storedOrder = window.themegen_settings.themegen_sidemenu_default_order_settings;
            // Only set default order if it's not intentionally reset
            if (existingDefaultOrder !== '[]') {
              const defaultOrder = Array.from(menu.children).map((item) => item.id);
              if (default_storedOrder && default_storedOrder !== '[]') {
                localStorage.setItem('themegen_sidemenu_default_order_settings', default_storedOrder);
              } else if (default_storedOrder !== '[]') {
                localStorage.setItem('themegen_sidemenu_default_order_settings', JSON.stringify(defaultOrder));
              }
            }
          }
          menu.addEventListener('dragstart', handleDragStart);
          menu.addEventListener('dragover', handleDragOver);
          menu.addEventListener('dragleave', handleDragLeave);
          menu.addEventListener('drop', handleDrop);
          loadMenuOrder();
          let dropTarget;
          function handleDragStart(e) {
            const dropTarget = e.target.closest('.group');
            e.dataTransfer.setData('text/plain', e.target.id);
            if (dropTarget) {
              e.target.style.setProperty('cursor', 'move', 'important');
              e.target.style.setProperty('opacity', '0.3', 'important');
            }
          }
          function handleDragOver(e) {
            e.preventDefault();
            const currentDropTarget = e.target.closest('.group');
            if (currentDropTarget !== dropTarget) {
              if (dropTarget) {
                dropTarget.style.setProperty('border', '', 'important');
              }
              if (currentDropTarget) {
                currentDropTarget.style.setProperty('border-top', '2px dashed #ff8000', 'important');
              }
              dropTarget = currentDropTarget;
            }
          }
          function handleDragLeave() {
            if (dropTarget) {
              dropTarget.style.setProperty('border', '', 'important');
              dropTarget = null;
            }
          }
          function handleDrop(e) {
            e.preventDefault();
            if (dropTarget) {
              const draggedItemId = e.dataTransfer.getData('text/plain');
              const draggedItem = document.getElementById(draggedItemId);
              menu.style.display = 'flex';
              menu.style.flexDirection = 'column';
              const allItems = Array.from(menu.children);
              const visuallyOrderedItems = allItems.sort((a, b) => {
                const orderA = parseInt(a.style.order) || Array.from(menu.children).indexOf(a) + 1;
                const orderB = parseInt(b.style.order) || Array.from(menu.children).indexOf(b) + 1;
                return orderA - orderB;
              });

              const dropTargetIndex = visuallyOrderedItems.indexOf(dropTarget);
              const draggedItemIndex = visuallyOrderedItems.indexOf(draggedItem);

              if (draggedItemIndex !== dropTargetIndex) {
                const itemsWithoutDragged = visuallyOrderedItems.filter(item => item.id !== draggedItemId);
                const adjustedDropIndex = dropTargetIndex > draggedItemIndex ? dropTargetIndex - 1 : dropTargetIndex;

                itemsWithoutDragged.splice(adjustedDropIndex, 0, draggedItem);

                itemsWithoutDragged.forEach((item, index) => {
                  item.style.setProperty('order', `${index + 1}`, '');
                });

                saveMenuOrder();
              }
              dropTarget.style.setProperty('border', '', 'important');
              dropTarget = null;
              draggedItem.style.setProperty('cursor', '', 'important');
              draggedItem.style.setProperty('opacity', '', 'important');
            }
          }
          function saveMenuOrder() {
            // Only save if settings listeners are active (safety check)
            if (window.activeMenuListenersPage !== 'settings') {
              return;
            }

            const menuItems = Array.from(menu.children);
            const sortedItems = menuItems.sort((a, b) => {
              const orderA = parseInt(a.style.order) || 0;
              const orderB = parseInt(b.style.order) || 0;
              return orderA - orderB;
            });
            const menuOrder = sortedItems
              .map((item) => item.id)
              .filter(id => id && id.trim() !== '' && id !== 'sb_');
            const menuOrderString = JSON.stringify(menuOrder);
            localStorage.setItem('themegen_sidemenu_order_settings', menuOrderString);
            if (typeof window.themegen_settings === 'object') {
              window.themegen_settings.themegen_sidemenu_order_settings = menuOrderString;
            }
          }
          function loadMenuOrder() {
            const storedOrder = localStorage.getItem('themegen_sidemenu_order_settings');
            if (storedOrder) {
              const menuOrder = JSON.parse(storedOrder);
              const filteredMenuOrder = menuOrder.filter(id => id && id.trim() !== '' && id !== 'sb_');
              if (filteredMenuOrder !== undefined && filteredMenuOrder !== null && filteredMenuOrder.length > 0) {
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                filteredMenuOrder.forEach((itemId, index) => {
                  const item = document.getElementById(itemId);
                  if (item) {
                    item.style.setProperty('order', `${index + 1}`, '');
                  }
                });
              }
            }
          }
        }
      }
    }
  };
  /// load menu order settings
  function reLoadMenuOrder_settings() {
    let page_url = document.location.href;
    if (page_url.includes('/location') && page_url.includes('/settings/')) {
      const sidebar = document.querySelector('#sidebar-v2');
      if (typeof sidebar !== 'undefined' && sidebar) {
        const menu = sidebar.querySelector('.hl_nav-header-without-footer nav');
        if (typeof menu !== 'undefined' && menu) {
          const allMenuItems = Array.from(menu.children);
          allMenuItems.forEach((item) => {
            item.style.removeProperty('order');
          });

          let default_storedOrder = '';
          if (localStorage.getItem('themegen_sidemenu_default_order_settings')) default_storedOrder = localStorage.getItem('themegen_sidemenu_default_order_settings');
          if (default_storedOrder !== '[]') {
            if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_default_order_settings') && window.themegen_settings.themegen_sidemenu_default_order_settings !== '[]')
              default_storedOrder = window.themegen_settings.themegen_sidemenu_default_order_settings;
            localStorage.setItem('themegen_sidemenu_default_order_settings', default_storedOrder);
          }
          let storedOrder = '';
          if (localStorage.getItem('themegen_sidemenu_order_settings')) storedOrder = localStorage.getItem('themegen_sidemenu_order_settings');
          if (storedOrder !== '[]') {
            if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order_settings') && window.themegen_settings.themegen_sidemenu_order_settings !== '[]')
              storedOrder = window.themegen_settings.themegen_sidemenu_order_settings;
            localStorage.setItem('themegen_sidemenu_order_settings', storedOrder);
          }
          var themegen_data = window.org_theme_data;
          var location_details = __get_location_settings(themegen_data, window.current_location_id);
          if (typeof location_details === 'object' && location_details.hasOwnProperty('location_settings_exist') && location_details.location_settings_exist) {
            if (storedOrder !== '[]') {
              if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order_settings') && window.themegen_settings.themegen_sidemenu_order_settings !== '[]')
                storedOrder = window.themegen_settings.themegen_sidemenu_order_settings;
              localStorage.setItem('themegen_sidemenu_order_settings', storedOrder);
            }
          }
          if (storedOrder == '' && default_storedOrder !== '[]') storedOrder = default_storedOrder;
          if (storedOrder) {
            const menuOrder = JSON.parse(storedOrder);
            const filteredMenuOrder = menuOrder.filter(id => id && id.trim() !== '' && id !== 'sb_');
            if (filteredMenuOrder.length > 0) {
              menu.style.display = 'flex';
              menu.style.flexDirection = 'column';
              var foundItems = [];
              var missingItems = [];

              filteredMenuOrder.forEach((itemId, index) => {
                const item = document.getElementById(itemId);
                if (item) {
                  item.style.setProperty('order', `${index + 1}`, '');
                  foundItems.push(itemId);
                } else {
                  missingItems.push({ id: itemId, order: index + 1 });
                }
              });

              if (missingItems.length > 0) {
                var recheckCount = 0;
                var maxRechecks = 20;
                var recheckInterval = setInterval(function () {
                  recheckCount++;

                  for (var i = missingItems.length - 1; i >= 0; i--) {
                    const missingItem = missingItems[i];
                    const item = document.getElementById(missingItem.id);

                    if (item) {
                      item.style.setProperty('order', `${missingItem.order}`, '');
                      missingItems.splice(i, 1);
                    }
                  }

                  if (missingItems.length === 0 || recheckCount >= maxRechecks) {
                    clearInterval(recheckInterval);
                    if (missingItems.length > 0) {
                    }
                  }
                }, 500); // Recheck every 500ms
              }
            } else {
            }
          } else {
          }
        }
      }
    }
  }

  /// Monitor changes to menu reorder activation settings
  const watchMenuReorderActivation = function () {
    if (
      typeof window.themegen_settings === 'object' &&
      window.themegen_settings.hasOwnProperty('themegen_activate_sidemenu_reorder') &&
      window.themegen_settings.themegen_activate_sidemenu_reorder === 'true'
    ) {
      localStorage.setItem('themegen_activate_sidemenu_reorder', 'true');
    }
    let previousReorderValue = localStorage.getItem('themegen_activate_sidemenu_reorder');
    let previousReorderSettingsValue = localStorage.getItem('themegen_activate_sidemenu_reorder_settings');
    setInterval(function() {
      const page_url = document.location.href;
      const currentReorderValue = localStorage.getItem('themegen_activate_sidemenu_reorder');
      if (currentReorderValue !== previousReorderValue) {
        previousReorderValue = currentReorderValue;
        if (page_url.includes('/location') && !page_url.includes('/settings/')) {
          reLoadMenuOrder();
        }
      }
      if (page_url.includes('/location') && !page_url.includes('/settings/')) {
        const storedOrder = localStorage.getItem('themegen_sidemenu_order');
        if (storedOrder && storedOrder !== '[]') {
          try {
            const menuOrder = JSON.parse(storedOrder);
            const filteredMenuOrder = menuOrder.filter(id => id && id.trim() !== '' && id !== 'sb_');
            if (filteredMenuOrder.length > 0) {
              const firstItemId = filteredMenuOrder[0];
              const firstElement = document.getElementById(firstItemId);
              if (firstElement) {
                const currentOrder = firstElement.style.order;
                if (!currentOrder || currentOrder !== '1') {
                  reLoadMenuOrder();
                }
              }
            }
          } catch (e) {
            console.error('Error:', e);
          }
        }
        if (storedOrder == '[]') {
          reLoadMenuOrder();
        }
      }

      const currentReorderSettingsValue = localStorage.getItem('themegen_activate_sidemenu_reorder_settings');
      if (currentReorderSettingsValue !== previousReorderSettingsValue) {
        previousReorderSettingsValue = currentReorderSettingsValue;
        if (page_url.includes('/settings/')) {
          reLoadMenuOrder_settings();
        }
      }
      if (page_url.includes('/settings/')) {
        const storedOrderSettings = localStorage.getItem('themegen_sidemenu_order_settings');
        if (storedOrderSettings && storedOrderSettings !== '[]') {
          try {
            const menuOrderSettings = JSON.parse(storedOrderSettings);
            const filteredMenuOrderSettings = menuOrderSettings.filter(id => id && id.trim() !== '' && id !== 'sb_');
            if (filteredMenuOrderSettings.length > 0) {
              const firstItemId = filteredMenuOrderSettings[0];
              const firstElement = document.getElementById(firstItemId);
              if (firstElement) {
                const currentOrder = firstElement.style.order;
                if (!currentOrder || currentOrder !== '1') {
                  reLoadMenuOrder_settings();
                }
              }
            }
          } catch (e) {
            console.error('Error:', e);
          }
        }
        if (storedOrderSettings == '[]') {
          reLoadMenuOrder_settings();
        }
      }
    }, 500);

    if (typeof window.themegen_settings === 'object' &&
      window.themegen_settings.hasOwnProperty('themegen_sidemenu_hidden') &&
      window.themegen_settings.themegen_sidemenu_hidden !== null &&
      window.themegen_settings.themegen_sidemenu_hidden !== undefined &&
      window.themegen_settings.themegen_sidemenu_hidden !== '') {
      localStorage.setItem('themegen_sidemenu_hidden', `${window.themegen_settings.themegen_sidemenu_hidden}`);
      removeStyles_sidemenuhide();
    }
  };

  ///////// RESET REORDER settings
  const reorder_reset_to_default_settings = function () {
    let page_url = document.location.href;
    if (page_url.includes('/location') && page_url.includes('/settings/')) {
      var resetButton = document.querySelector('#resetbtn-menureorder-settings');
      if (resetButton) {
        resetButton.addEventListener('click', function () {
          const reorder_checkbox = document.querySelector('#reorder-side-menu-check');
          const sidebar = document.getElementById('sidebar-v2');
          const menu = sidebar.querySelector('.hl_nav-header-without-footer nav');
          if (typeof reorder_checkbox !== 'undefined' && reorder_checkbox) {
            if (typeof sidebar !== 'undefined' && sidebar && typeof menu !== 'undefined' && menu) {
              localStorage.setItem('themegen_sidemenu_order_settings', '[]');
              localStorage.setItem('themegen_sidemenu_default_order_settings', '[]');
              localStorage.setItem('themegen_activate_sidemenu_reorder_settings', 'false');
              reorder_checkbox.checked = false;
              // Reset menu order styles
              if (typeof menu !== 'undefined' && menu) {
                const menuItems = menu.querySelectorAll('[style*="order"]');
                menuItems.forEach((item) => {
                  item.style.removeProperty('order');
                });
              }
            }
          }
        });
      }
    }
  };
  /////////MO_sidemenudrag
  const mo_sideMenu_drag = function () {
    const targetNode = document.querySelector('#app');
    const config = { attributes: true, childList: true }; // , subtree: true
    const observer = new MutationObserver(function (mutations) {
      reorder_nav_allowed();
      if (
        localStorage.getItem('themegen_activate_sidemenu_reorder') === 'true' ||
        (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_activate_sidemenu_reorder') === 'true') ||
        (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order'))
      ) {
        reLoadMenuOrder();
        reorder_reset_to_default();
      }
      if (
        localStorage.getItem('themegen_activate_sidemenu_reorder_settings') === 'true' ||
        (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_activate_sidemenu_reorder_settings') === 'true') ||
        (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order_settings'))
      ) {
        reLoadMenuOrder_settings();
        reorder_reset_to_default_settings();
      }
      if (
        localStorage.getItem('themegen_activate_sidemenu_reorder_settings') === 'true' ||
        (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_activate_sidemenu_reorder_settings') === 'true') ||
        (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_order_settings'))
      ) {
        applyStyles_sidemenuhide();
        sidemenuhide_reset_to_default();
      }
    });
    observer.observe(targetNode, config);
  };
  ///////////////////////////* SIDE MENU ORDER CHANGE ENDS HERE ///////////////////////////
  ////////// * HIDE MENU LINKS ///////////
  const hide_side_menu_links = function () {
    let page_url = document.location.href;
    if (page_url.includes('/location')) {
      const sidebar = document.getElementById('sidebar-v2');
      const menu = sidebar.querySelector('nav');
      if (sidebar && menu) {
        const menuLinks = menu.querySelectorAll('a:not(.custom-link)');
        let menu_showhide_allowed = localStorage.getItem('themegen_activate_sidemenu_hide') || 'false';
        menuLinks.forEach((link) => {
          if (!link.querySelector('.hide-menu-icon')) {
            const hideMenuIcon = document.createElement('div');
            hideMenuIcon.className = 'hide-menu-icon';
            hideMenuIcon.innerHTML = '<i class="hideico fa-solid fa-circle-xmark"></i>';
            link.appendChild(hideMenuIcon);
          }
        });
        const hideMenuIconElements = menu.querySelectorAll('.hide-menu-icon');
        const toggleHideMenu = function () {
          const isHideMenuAllowed = menu_showhide_allowed === 'true';
          hideMenuIconElements.forEach((icon) => {
            icon.classList.toggle('active', isHideMenuAllowed);
            icon.addEventListener('click', function (event) {
              event.preventDefault();
              event.stopPropagation();
              const eyeIcon = event.currentTarget.querySelector('.hideico');
              const link = event.currentTarget.closest('a');
              if (eyeIcon && link) {
                eyeIcon.classList.toggle('fa-eye-slash');
                eyeIcon.classList.toggle('fa-circle-xmark');
                saveHiddenMenuLinksToLocalStorage();
                if (eyeIcon.classList.contains('fa-eye-slash')) {
                  link.style.setProperty('opacity', '0.5', 'important');
                } else {
                  link.style.setProperty('opacity', '');
                }
              }
            });
          });
        };
        toggleHideMenu();
      }
      applyStyles_sidemenuhide();
    }
  };
  //// save the sidemenu hidden to the storage
  const saveHiddenMenuLinksToLocalStorage = function () {
    const hiddenMenuLinks = [];
    const existingHiddenLinks = localStorage.getItem('themegen_sidemenu_hidden');
    if (existingHiddenLinks) {
      const parsedExistingLinks = JSON.parse(existingHiddenLinks);
      hiddenMenuLinks.push(...parsedExistingLinks);
    }
    const menuLinks = document.querySelectorAll('.hideico');
    menuLinks.forEach((link) => {
      const linkId = link.closest('a').id;
      if (link.classList.contains('fa-eye-slash')) {
        if (!hiddenMenuLinks.includes(linkId)) {
          hiddenMenuLinks.push(linkId);
        }
      } else if (link.classList.contains('fa-circle-xmark')) {
        const indexToRemove = hiddenMenuLinks.indexOf(linkId);
        if (indexToRemove !== -1) {
          hiddenMenuLinks.splice(indexToRemove, 1);
        }
      }
    });
    localStorage.setItem('themegen_sidemenu_hidden', JSON.stringify(hiddenMenuLinks));
  };
  //// sidemenu hide apply styles and relevant icons to left menu items
  const removeStyles_sidemenuhide = function () {
    if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_hidden')) {
      const allMenuLinks = document.querySelectorAll('#sidebar-v2 .menu-item, #sidebar-v2 a[id]:not(.custom-link)');
      allMenuLinks.forEach((link) => {
        link.style.removeProperty('opacity');
        link.style.removeProperty('display');
      });
    }
    setTimeout(applyStyles_sidemenuhide, 50);
  };
  const applyStyles_sidemenuhide = function () {
    const hiddenMenuLinks = JSON.parse(localStorage.getItem('themegen_sidemenu_hidden')) || [];
    const isAdmin = document.body.classList.contains('IsAdmin');
    const isAdminTB = document.body.classList.contains('IsAdminTB');
    const isUser = document.body.classList.contains('IsUser');
    hiddenMenuLinks.forEach((linkId) => {
      const link = document.getElementById(linkId);
      if (link) {
        if (!link.querySelector('.hide-menu-icon')) {
          const hideMenuIcon = document.createElement('div');
          hideMenuIcon.className = 'hide-menu-icon';
          hideMenuIcon.innerHTML = '<i class="hideico fa-solid fa-eye-slash"></i>';
          link.appendChild(hideMenuIcon);
        }
        const hideMenuIcon = link.querySelector('.hide-menu-icon i');
        if (hideMenuIcon) {
          const opacityValue = isAdmin || isAdminTB ? '0.5' : '0';
          const displayValue_user = !isAdmin && !isAdminTB && isUser ? 'none' : ' ';
          link.style.setProperty('opacity', opacityValue, 'important');
          link.style.setProperty('display', displayValue_user, 'important');
          if (!link.querySelector('.hide-menu-icon i.fa-eye-slash')) {
            hideMenuIcon.classList.remove('fa-circle-xmark');
            hideMenuIcon.classList.add('fa-eye-slash');
          }
        }
      }
    });
  };
  const loadStyles_sidemenuhide = function () {
    const is_sidebar_ready = document.querySelector('#sidebar-v2');
    if (!document.body.contains(is_sidebar_ready)) {
      setTimeout(loadStyles_sidemenuhide, 250);
    } else {
      let hiddenMenuLinks = [];
      if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('themegen_sidemenu_hidden')) {
        hiddenMenuLinks = window.themegen_settings.themegen_sidemenu_hidden;
        localStorage.setItem('themegen_sidemenu_hidden', `${hiddenMenuLinks}`);
        applyStyles_sidemenuhide();
        if (is_theme_builder_allowed()) {
          create_theme_gen_userinfo_btn();
        }
      }
    }
  };
  //// sidemenu hide reset to default
  const sidemenuhide_reset_to_default = function () {
    let page_url = document.location.href;
    if (page_url.includes('/location') || page_url.includes('/settings/company')) {
      const resetButton = document.querySelector('#resetbtn-hidesidemenu-settings');
      const hide_sidemenu_checkbox = document.querySelector('#hide-side-menu-check');
      const resetButton_highlights = document.querySelector('.instruction-highlights-hidemenu');

      const hiddenMenuLinks = JSON.parse(localStorage.getItem('themegen_sidemenu_hidden')) || [];
      if (typeof resetButton !== 'undefined' && resetButton && typeof hide_sidemenu_checkbox !== 'undefined' && hide_sidemenu_checkbox) {
        resetButton.addEventListener('click', function () {
          hide_sidemenu_checkbox.checked = false;
          localStorage.setItem('themegen_activate_sidemenu_hide', 'false');
          localStorage.setItem('themegen_sidemenu_hidden', '[]');
          resetButton_highlights.classList.add('active');
          hiddenMenuLinks.forEach((linkId) => {
            const link = document.getElementById(linkId);
            if (link) {
              const hideMenuIcon = link.querySelector('.hide-menu-icon');
              if (hideMenuIcon) {
                hideMenuIcon.remove();
                link.style.setProperty('opacity', '');
              }
            }
          });
        });
      }
    }
  };

  /// allow sidemnu hide button listener
  const hide_sidemenu_allowed = function () {
    let page_url = document.location.href;
    let hide_menu_allowed = false;
    if (page_url.includes('/location/')) {
      const hide_sidemenu_checkbox = document.querySelector('#hide-side-menu-check');
      const instruction_highlights_hidemenu = document.querySelector('.instruction-highlights-hidemenu');
      if (typeof hide_sidemenu_checkbox !== 'undefined' && hide_sidemenu_checkbox && typeof instruction_highlights_hidemenu !== 'undefined' && instruction_highlights_hidemenu) {
        hide_sidemenu_checkbox.addEventListener('change', function () {
          if (this.checked) {
            hide_sidemenu_checkbox.checked = true;
            hide_menu_allowed = true;
            scrollToId('hide-side-menu');
            localStorage.setItem('themegen_activate_sidemenu_hide', 'true');
            instruction_highlights_hidemenu.classList.add('active');
            hide_side_menu_links();
          } else {
            localStorage.setItem('themegen_activate_sidemenu_hide', 'false');
            instruction_highlights_hidemenu.classList.remove('active');
            hide_menu_allowed = false;
            hide_side_menu_links();
          }
        });
      }
    }
    return hide_menu_allowed;
  };


  ////////////// SUB ACCOUNT SETTTINGS ////////
  //// User sub account data settings enabled
  function is_location_settings_enabled_load() {
    let themegen_data = window.org_theme_data;
    let enable_subaccount_settings = false;
    localStorage.setItem('themegen_activate_subaccount_settings', enable_subaccount_settings);
    if ((typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup_locations')) || window.current_location_id_cp !== '') {
      enable_subaccount_settings = true;
      localStorage.setItem('themegen_activate_subaccount_settings', enable_subaccount_settings);
    }
    return enable_subaccount_settings;
  }
  /// allow sub account settings button listener
  const subaccount_settings_toggle = function () {
    let url = document.location.href;
    const subaccount_settings_checkbox = document.querySelector('#activate-subaccount-settings');
    const save_apply_theme_btn = document.querySelector('#generate-script-js');
    const save_subaccount_switch = document.querySelector('#publish-location-settings-wrap');
    const delete_location_data = document.querySelector('#delete-location-data');
    const selected_location_btn = document.querySelector('#selected-location-delete-btn');
    if (
      typeof subaccount_settings_checkbox !== 'undefined' &&
      subaccount_settings_checkbox &&
      typeof save_apply_theme_btn !== 'undefined' &&
      save_apply_theme_btn &&
      typeof save_subaccount_switch !== 'undefined' &&
      save_subaccount_switch &&
      typeof delete_location_data !== 'undefined' &&
      delete_location_data
    ) {
      if (is_location_settings_enabled_load()) {
        subaccount_settings_checkbox.checked = true;
        if (!url.includes('/location') && selected_location_btn && window.current_location_id_cp === '') {
          selected_location_btn.setAttribute('disabled', 'true');
        } else selected_location_btn.removeAttribute('disabled');

        save_apply_theme_btn.classList.add('active');
        save_subaccount_switch.classList.add('active');
        delete_location_data.classList.add('active');
      } else {
        subaccount_settings_checkbox.checked = false;
        save_apply_theme_btn.classList.remove('active');
        save_subaccount_switch.classList.remove('active');
        delete_location_data.classList.remove('active');
      }

      subaccount_settings_checkbox.addEventListener('change', function () {
        if (this.checked) {
          subaccount_settings_checkbox.checked = true;
          scrollToId('activate-subaccount-settings-wrap');
          localStorage.setItem('themegen_activate_subaccount_settings', 'true');
          save_apply_theme_btn.classList.add('active');
          save_subaccount_switch.classList.add('active');
          delete_location_data.classList.add('active');
          delete_location_data.style.setProperty('display', 'block', 'important');
          is_location_settings_active();
          if (is_location_settings_active()) setup_location_theme();
        } else {
          subaccount_settings_checkbox.checked = false;
          localStorage.setItem('themegen_activate_subaccount_settings', 'false');
          save_apply_theme_btn.classList.remove('active');
          save_subaccount_switch.classList.remove('active');
          delete_location_data.classList.remove('active');
          delete_location_data.style.setProperty('display', 'none', 'important');
          is_location_settings_active();
        }
      });
    }
  };
  ////////// END OF HIDE MENU LINKS////////////
  function __get_location_settings(themegen_data, location_id) {
    var location_details = {};
    var location_settings_exist = 0;
    var location_settings = {};
    if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup_locations')) {
      var themegensetup_locations = themegen_data.themegensetup_locations;
      if (typeof themegensetup_locations === 'object' && themegensetup_locations.hasOwnProperty(location_id)) {
        location_settings_exist = 1;
        location_settings = themegensetup_locations[location_id];
      }
    }
    location_details['location_settings_exist'] = location_settings_exist;
    location_details['location_settings'] = location_settings;
    return location_details;
  }

  const process_theme_settings_data = function (loc_id = '') {
    var themegen_data = window.org_theme_data;
    var current_location_id = loc_id;
    var location_details = __get_location_settings(themegen_data, current_location_id);
    if (typeof location_details === 'object' && location_details.hasOwnProperty('location_settings_exist') && location_details.location_settings_exist) {
      themegen_data = location_details.location_settings;
    }

    if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup')) {
      var themegen_data_setup = themegen_data.themegensetup;
      if (typeof themegen_data_setup === 'object' && themegen_data_setup.hasOwnProperty('settings')) {
        var themegen_settings = themegen_data_setup.settings;
        if (typeof themegen_settings === 'string') {
          themegen_settings = JSON.parse(themegen_settings);
        }
        if (typeof themegen_settings === 'object') {
          window.themegen_settings = themegen_settings;
          setup_tg_variables(themegen_settings);
          if (
            typeof window.themegen_settings === 'object' &&
            window.themegen_settings &&
            window.themegen_settings.hasOwnProperty('google_spreadsheet_url') &&
            window.themegen_settings.hasOwnProperty('google_webapp_deploy') &&
            window.themegen_settings.hasOwnProperty('unlock_message')
          ) {
            hlpt_loadEmbed(window.themegen_settings.google_webapp_deploy, function (jsonString) {
              try {
                const jsonData = JSON.parse(jsonString);
                window.jsonData = jsonData;
                if (is_location_id_allowed()) {
                  apply_lock();
                }
              } catch (error) {
                // console.error(`Google Sheet is not found: ${error}`);
              }
            });
          }
          update_user_colors();
          update_user_colors_tint();
        }
      }
    }
  };
  //////////////////////////// SUB ACCOUNT ENABLED  ////////////////////////
  const setup_location_theme = function () {
    const locations_check = document.querySelector('#locations-check');
    const all_locations = document.querySelector('.publish-locations-label-left');
    const selected_locations = document.querySelector('.publish-locations-label-right');
    const apply_selected_account = document.querySelector('.apply-selected-sub-account');
    const all_subaccounts = document.querySelector('.all-sub-account');

    let selected_location_id = '';
    localStorage.setItem('themegen_publish_selected_location', `${selected_location_id}`);
    if (
      typeof locations_check !== 'undefined' &&
      locations_check &&
      typeof all_locations !== 'undefined' &&
      all_locations &&
      typeof selected_locations !== 'undefined' &&
      selected_locations &&
      typeof apply_selected_account !== 'undefined' &&
      apply_selected_account &&
      typeof all_subaccounts !== 'undefined' &&
      all_subaccounts
    ) {
      var themegen_data = window.org_theme_data;
      var location_details = __get_location_settings(themegen_data, window.current_location_id);
      if ((typeof location_details === 'object' && location_details.hasOwnProperty('location_settings_exist') && location_details.location_settings_exist) || window.current_location_id_cp !== '') {
        locations_check.checked = true;
        localStorage.setItem('themegen_activate_subaccount_settings', 'true');
        apply_selected_account.classList.add('active');
        all_subaccounts.classList.remove('active');
        all_locations.style.setProperty('color', '#111111', 'important');
        selected_locations.style.setProperty('color', '#30ca30', 'important');
        fetchData((locationId) => {
          window.current_location_id = locationId;
          selected_location_id = window.current_location_id;
          localStorage.setItem('themegen_publish_selected_location', `${selected_location_id}`);
        });
      } else {
        locations_check.checked = false;
        localStorage.setItem('themegen_activate_subaccount_settings', 'false');
        all_subaccounts.classList.add('active');
        apply_selected_account.classList.remove('active');
        all_locations.style.setProperty('color', '#30ca30', 'important');
        selected_locations.style.setProperty('color', '#111111', 'important');
        localStorage.setItem('themegen_publish_selected_location', '');
      }

      locations_check.addEventListener('change', function () {
        if (this.checked) {
          fetchData((locationId) => {
            window.current_location_id = locationId;
            selected_location_id = window.current_location_id;
            localStorage.setItem('themegen_publish_selected_location', `${selected_location_id}`);
            all_locations.style.setProperty('color', '#111111', 'important');
            selected_locations.style.setProperty('color', '#30ca30', 'important');
            locations_check.checked = true;
            apply_selected_account.classList.add('active');
            all_subaccounts.classList.remove('active');
          });
        } else {
          selected_location_id = '';
          localStorage.setItem('themegen_publish_selected_location', `${selected_location_id}`);
          all_locations.style.setProperty('color', '#30ca30', 'important');
          selected_locations.style.setProperty('color', '#111111', 'important');
          locations_check.checked = false;
          all_subaccounts.classList.add('active');
          apply_selected_account.classList.remove('active');
        }
      });
    }
    get_location_info();
  };
  ///////// MO theme builder panel on click only if its enabled for location
  const mo_is_tb_enabled = () => {
    const targetNode = document.body;
    const config = { attributes: true, attributeFilter: ['class'] };
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          mo_delete_location_data();
        }
      });
    });
    if (targetNode) observer.observe(targetNode, config);
  };

  const allow_subaccount_disabled = function () {
    const allow_subaccount = document.querySelector('#dc-colorPicker-adv-allow-subaccount');
    let page_url = document.location.href;
    if (typeof allow_subaccount !== 'undefined' && allow_subaccount) {
      if (page_url.includes('/location/')) {
        allow_subaccount.setAttribute('disabled', true);
        allow_subaccount.style.opacity = '0.5';
        allow_subaccount.style.cursor = 'not-allowed';
      } else {
        allow_subaccount.removeAttribute('disabled');
        allow_subaccount.style.opacity = '';
        allow_subaccount.style.cursor = '';
      }
    }
  };

  const get_location_info = function () {
    let page_url = document.location.href;
    const loc_name = document.querySelector('.hl_switcher-loc-name');
    const loc_city = document.querySelector('.hl_switcher-loc-city');
    let loc_name_city = '';
    fetchData((locationId) => {
      window.current_location_id = locationId;
      if (locationId !== '') {
        locationId = window.current_location_id;
        if (page_url.includes(`/location`)) {
          if (window.current_location_id_cp !== '') {
            localStorage.setItem('themegen_publish_selected_location', `${locationId}`);
          }
          if (loc_name) {
            localStorage.setItem('themegen_location_name', loc_name.textContent);
          }
          if (loc_city) {
            localStorage.setItem('themegen_location_city', loc_city.textContent);
          }
          const location_name = document.querySelectorAll('.location-name');
          location_name.forEach((location_name) => {
            if (typeof location_name !== 'undefined' && location_name) {
              let loc_name = '';
              if (localStorage.getItem('themegen_location_name')) loc_name = localStorage.getItem('themegen_location_name');
              let loc_city = '';
              if (localStorage.getItem('themegen_location_city')) loc_city = localStorage.getItem('themegen_location_city');
              loc_name_city = `${loc_name}, ${loc_city}`;
              location_name.textContent = loc_name_city;
            }
          });
        } else {
          if (window.current_location_id_cp) {
            localStorage.setItem('themegen_publish_selected_location', `${window.current_location_id_cp}`);
            localStorage.setItem('themegen_activate_subaccount_settings', 'true');
          }
          if (window.current_location_name_cp) {
            localStorage.setItem('themegen_location_name', window.current_location_name_cp);
          }
          if (locationId) {
            localStorage.setItem('themegen_location_city', locationId);
          }
          const location_name = document.querySelectorAll('.location-name');
          location_name.forEach((location_name) => {
            if (typeof location_name !== 'undefined' && location_name) {
              let loc_name = '';
              if (localStorage.getItem('themegen_location_name')) loc_name = localStorage.getItem('themegen_location_name');
              let loc_city = '';
              if (localStorage.getItem('themegen_location_city')) loc_city = localStorage.getItem('themegen_location_city');
              loc_name_city = `${loc_name}`;
              location_name.textContent = loc_name_city;
              const locations_check = document.querySelector('#locations-check');
              if (locations_check) locations_check.checked = true;
              const apply_selected_account = document.querySelector('.apply-selected-sub-account');
              const all_subaccounts = document.querySelector('.all-sub-account');
              if (all_subaccounts) all_subaccounts.classList.remove('active');
              if (apply_selected_account) apply_selected_account.classList.add('active');
            }
          });
        }
      } else {
        const activate_subaccount = document.querySelector('#activate-subaccount-settings');
        if (activate_subaccount) activate_subaccount.checked = false;
        const save_apply_theme_btn = document.querySelector('#generate-script-js');
        if (save_apply_theme_btn) save_apply_theme_btn.classList.remove('active');
        loc_name_city = `No Sub-Account Found. <br /> <p style="font-size: 13px !important; color: #000;">You are in Agency Account, use Control Panel or switch to the specific sub-account in order to apply the desired theme settings.</p>`;
      }
    });
    return loc_name_city;
  };
  // agency vs. location change
  const agency_vs_location_change = function () {
    const targetElement_agloc = document.querySelector('#app');
    let url = document.location.href;
    if (document.body.contains(targetElement_agloc)) {
      fetchData((locationId) => {
        if (locationId !== '') {
          if (url.includes('/location')) {
            if (is_location_settings_active()) allow_subaccount_disabled();
            applyStyles_sidemenuhide();
          }
        }
        if (is_location_settings_active()) process_theme_settings_data(locationId);
        if (is_location_settings_active()) update_theme_styles(window.selected_theme);
        get_location_info();
      });
    }
  };
  //// new multiple locatiion code
  const handle_agency_tb_location_change = function () {
    let tb_app = document.querySelector('#app');
    if (!document.body.contains(tb_app)) {
      setTimeout(function () {
        handle_agency_tb_location_change();
      }, 250);
    } else {
      const targetNode = document.querySelector('#app');
      const config = { attributes: true };
      const observer = new MutationObserver(function (mutations) {
        agency_vs_location_change();
        reLoadMenuOrder();
        reLoadMenuOrder_settings();
        render_dashboard_banner();
      });
      observer.observe(targetNode, config);
    }
  };
  //  ends here
  //// dashboard header banner ////
  function dashboardBannerContent(url) {
    if (url.includes('/location') && url.includes('/dashboard')) {
      let div = document.createElement('div');
      div.classList.add('card', 'm-4-banner', 'border', 'border-dark', 'rounded-3', 'dashboard-header-banner', 'dashboard-header-banner-bg', 'hide');
      let subHeadText = localStorage.getItem('theme_adv_dashboard_headerbanner_subhead') || '';
      let btn1Text = localStorage.getItem('theme_adv_dashboard_headerbanner_btn_1_text') || '';
      let btn2Text = localStorage.getItem('theme_adv_dashboard_headerbanner_btn_2_text') || '';
      let btn1Link = localStorage.getItem('theme_adv_dashboard_headerbanner_btn_1_link') || '';
      let btn2Link = localStorage.getItem('theme_adv_dashboard_headerbanner_btn_2_link') || '';
      let btnInternalLink = localStorage.getItem('theme_adv_dashboard_headerbanner_btn_link_intrl') || '';
      let btn1LinkType = btnInternalLink === 'true' ? `/v2/location/${window.current_location_id}${btn1Link}` : `${btn1Link}`;
      let btn1Target = btnInternalLink === 'true' ? '_self' : '_blank';
      let btn2LinkType = btnInternalLink === 'true' ? `/v2/location/${window.current_location_id}${btn2Link}` : `${btn2Link}`;
      let btn2Target = btnInternalLink === 'true' ? '_self' : '_blank';
      let userName = '';
      if (localStorage.getItem('themegen_user_name')) userName = localStorage.getItem('themegen_user_name');

      let innerHtml = `
          <div class="card-body d-flex align-items-center justify-content-between zindexoverlay">
              <div class="d-flex align-items-center justify-content-start">
                  <div class="d-block">
                      <div class="main-head p-2 py-0">
                          Hey, <span>${userName.split(' ')[0]}</span>
                      </div>
                      <div class="sub-head p-2 py-0">${subHeadText}</div>
                  </div>
              </div>
              <div class="d-flex align-items-center justify-content-end">
                <a class="btn btn-success btn-sm mb-0 me-3 dashboard-banner-btn-1" href="${btn1LinkType}" target="${btn1Target}">${btn1Text}</a>
                <a class="btn btn-success btn-sm mb-0 me-3 dashboard-banner-btn-2" href="${btn2LinkType}" target="${btn2Target}">${btn2Text}</a>
              </div>
          </div>
      `;
      div.innerHTML = innerHtml;
      return div;
    } else {
      return null;
    }
  }
  // Function to update the sub head text in the banner
  function updateBannerElems(newText, targetElement) {
    var backgroundUrl = localStorage.getItem('theme_adv_dashboard_headerbanner_bg_url') || '';
    if (targetElement) {
      if (!targetElement.classList.contains('dashboard-header-banner-bg')) {
        targetElement.textContent = newText;
      }
      if (targetElement.classList.contains('dashboard-header-banner-bg')) {
        targetElement.style.setProperty('background-image', `url('${backgroundUrl}')`, 'important');
      }
    }
  }
  function createDashboardBanner() {
    if (window.selected_theme !== 'theme_custom' && window.selected_theme !== '') {
      let wrapperDiv = document.querySelector('#location-dashboard-header.sticky');
      if (!document.body.contains(wrapperDiv)) {
        setTimeout(createDashboardBanner, 250);
      } else {
        let activate_dashboard_banner_settings = 'false';
        if (localStorage.getItem('activate_dashboard_banner_settings')) activate_dashboard_banner_settings = localStorage.getItem('activate_dashboard_banner_settings');
        let url = window.location.href;
        let banner = dashboardBannerContent(url);
        if (banner) {
          if (!document.querySelector('.dashboard-header-banner-bg')) {
            if (wrapperDiv) {
              wrapperDiv.insertBefore(banner, wrapperDiv.firstChild);
            }
          }
        }
      }
    }
    const dbanner_exits = document.querySelector('.dashboard-header-banner-bg');
    if (window.selected_theme === 'theme_custom') {
      localStorage.setItem('activate_dashboard_banner_settings', 'false');
      if (dbanner_exits) dbanner_exits.style.display = 'none';
    } else {
      if (dbanner_exits) {
        dbanner_exits.style.display = '';
      }
    }
  }
  function displayDashboardBanner() {
    if (window.selected_theme !== 'theme_custom') {
      let dashboardbanner_elem = document.querySelector('.dashboard-header-banner-bg');
      if (!document.body.contains(dashboardbanner_elem)) {
        setTimeout(displayDashboardBanner, 250);
      } else {
        let activate_dashboard_banner_settings = '';
        if (typeof window.themegen_settings === 'object' && window.themegen_settings) activate_dashboard_banner_settings = window.themegen_settings.activate_dashboard_banner_settings;
        if (activate_dashboard_banner_settings === 'true') {
          dashboardbanner_elem.classList.remove('hide');
        }
      }
    }
  }
  function setup_font_family() {
    function loadFont(fontName, variant, linkId) {
      if (fontName === 'Inter') {
        const existingLink = document.querySelector('link[href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"]');
        if (existingLink) {
          existingLink.remove();
        }
      }

      if (fontName === 'Poppins') {
        const existingLink = document.querySelector('link[href="https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        if (existingLink) {
          existingLink.remove();
        }
      }
      let link = document.getElementById(linkId);
      if (!link) {
        link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      let fontFamily = fontName.replace(/ /g, '+').replace(/,.*/, '');
      let fontVariant = variant ? `:wght@${variant}` : '';
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}${fontVariant}&display=swap`;
    }

    const fontSelectElements = [
      { id: 'dc-colorPicker-font-family', property: '--dynamic-font-family', linkId: 'dynamic-font-link', selectedFontFamily: 'theme_font_family' },
      { id: 'dc-colorPicker-font-family-h1', property: '--dynamic-font-family-h1', linkId: 'dynamic-font-link-h1', selectedFontFamily: 'theme_font_family_h1' },
      { id: 'dc-colorPicker-font-family-h2', property: '--dynamic-font-family-h2', linkId: 'dynamic-font-link-h2', selectedFontFamily: 'theme_font_family_h2' },
      { id: 'dc-colorPicker-font-family-h3', property: '--dynamic-font-family-h3', linkId: 'dynamic-font-link-h3', selectedFontFamily: 'theme_font_family_h3' },
      { id: 'dc-colorPicker-font-family-h4', property: '--dynamic-font-family-h4', linkId: 'dynamic-font-link-h4', selectedFontFamily: 'theme_font_family_h4' },
      { id: 'dc-colorPicker-font-family-sidemenu', property: '--dynamic-font-family-sidemenu', linkId: 'dynamic-font-link-sidemenu', selectedFontFamily: 'theme_font_family_sidemenu' },
      { id: 'dc-colorPicker-font-family-topmenu', property: '--dynamic-font-family-topmenu', linkId: 'dynamic-font-link-topmenu', selectedFontFamily: 'theme_font_family_topmenu' },
    ];

    fontSelectElements.forEach(({ id, property, linkId, selectedFontFamily }) => {
      const fontFamilySelect = document.getElementById(id);
      if (!fontFamilySelect) {
        return;
      }
      function updateDefaultOptionText() {
        const selectedFont = fontFamilySelect.value;
        const defaultOption = fontFamilySelect.querySelector('[value=""]');
        if (defaultOption) {
          defaultOption.textContent = selectedFont;
        }
      }
      function setFontFromLocalStorage() {
        const storedFontName = localStorage.getItem(selectedFontFamily);
        if (storedFontName) {
          const [fontName, variant] = storedFontName.split(':');
          loadFont(fontName, variant, linkId, selectedFontFamily);
          document.documentElement.style.setProperty(property, fontName);
          if (fontFamilySelect) {
            fontFamilySelect.value = storedFontName;
            updateDefaultOptionText();
          }
        }
      }
      setFontFromLocalStorage();
      if (fontFamilySelect) {
        fontFamilySelect.addEventListener('change', function () {
          const [fontName, variant] = this.value.split(':');
          loadFont(fontName, variant, linkId);
          document.documentElement.style.setProperty(property, fontName);
          localStorage.setItem(selectedFontFamily, this.value);
          updateDefaultOptionText();
        });
      }
    });
    fontSelectElements.forEach(({ selectedFontFamily, linkId }) => {
      const storedFontName = localStorage.getItem(selectedFontFamily);
      if (storedFontName) {
        const [fontName, variant] = storedFontName.split(':');
        loadFont(fontName, variant, linkId);
      }
    });
  }

  function mo_loader() {
    const targetNode = document.querySelector('.hl-loader-container');
    const loader = document.getElementById('app-loader-app-loader-1');
    if (!document.body.contains(targetNode)) {
      setTimeout(mo_loader, 250);
    } else {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.attributeName === 'style') {
            const displayStyle = targetNode.style.display;
            if (displayStyle === '') {
              if (loader) {
                loader.style.setProperty('display', 'block', 'important');
              } else {
              }
            } else if (displayStyle === 'none') {
              hideLoader_hl();
            }
          }
        }
      });
      const config = {
        attributes: true,
        attributeFilter: ['style'],
      };
      observer.observe(targetNode, config);
    }
  }
  //// ends here
  function scrollToId(id) {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Scroll Element with ID '" + id + "' not found.");
    }
  }
  // Function to insert the keyframes CSS
  const insertKeyframes = () => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
                /*
                @keyframes fadeloader
                {
                  0%{
                    opacity:1;
                  }
                  50%
                  {
                    opacity:0;
                  }
                  100%
                  {
                    opacity:1;
                  }
                }   
                */         
               @keyframes fadeloader {
                  0%,
                  100% {
                    opacity: 0;
                  }
                  50% {
                    opacity: 1;
                  }
                }   
                .lds-ring-new {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: fadeloader 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite !important
                    animation-delay: 1.1s;
                    margin-bottom: 8px;
                }
                .lds-ring-new img {
                    margin: auto;
                                    
                }
            `;
    document.head.appendChild(style);
  };

  const lc_load_content_loader_global_hl = function () {
    const is_app_ready = document.querySelector('.hl-loader-container');
    const is_loader = document.querySelector('.lds-ring');
    if (!document.body.contains(is_app_ready)) {
      setTimeout(lc_load_content_loader_global_hl, 250);
    } else {
      is_loader.classList.add('custom-loading');
      is_loader.style.display = 'none';
      const wrapperDiv = document.createElement('div');
      insertKeyframes();
      const updateLoader = () => {
        let themegen_data = window.org_theme_data;
        let loadingIcon = '';
        let loadingIconSize = '';
        let selectedTheme = '';
        if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('themegensetup')) {
          let themegen_data_setup = themegen_data.themegensetup;
          if (typeof themegen_data_setup === 'object' && themegen_data_setup.hasOwnProperty('settings')) {
            let themegen_settings = themegen_data_setup.settings;
            if (typeof themegen_settings === 'string') {
              themegen_settings = JSON.parse(themegen_settings);
            }
            if (typeof themegen_settings === 'object') {
              selectedTheme = themegen_settings.theme_name;
              if (selectedTheme !== 'No Theme') loadingIcon = themegen_settings.theme_loading_icon;
              loadingIconSize = themegen_settings.theme_adv_loadingicon_size;
              localStorage.setItem('theme_loading_icon', loadingIcon);
              localStorage.setItem('theme_adv_loadingicon_size', loadingIconSize);
              if (loadingIcon === '' || loadingIcon === 'undefined') {
                is_loader.style.display = 'block';
              }
            }
          }
        }
        wrapperDiv.innerHTML = '';
        if (loadingIcon !== null || loadingIcon !== '') {
          if (loadingIcon === '') {
            is_loader.style.setProperty('display', 'block', 'important');
          } else {
            wrapperDiv.innerHTML = `
            <div class="lds-ring-new">
              <div>
                <img class="loader-fadeout" src="${loadingIcon}" alt=""style="width: ${loadingIconSize}px;"/>
              </div>
            </div>
        `;
          }
        }
      };
      is_loader.before(wrapperDiv);
      updateLoader();
    }
  };

  function hideLoader_hl() {
    const loader = document.getElementById('app-loader-app-loader-1');
    if (loader) {
      loader.style.setProperty('display', 'none', 'important');
      setTimeout(() => {
        // loader.remove();        
      }, 500);
    }
  }
  function cleanwhite_payment_top_menus_smallscreens(urls) {
    let pu = document.location.href;
    let matchFound = urls.some(url => pu.includes(url));
    if (pu.includes('/location') && matchFound) {
      if (window.themegen_settings.theme_name === 'Clean White' || window.selected_theme === 'theme_cleanwhite') {
        document.body.classList.add('topmenu-settings');
      }
    } else {
      document.body.classList.remove('topmenu-settings');
    }
  }
  function removeScrollOnHover() {
    let pu = document.location.href;
    const topMenuElems = ['sb_payments', 'sb_sites'];
    let isActive = pu.includes('/location') && topMenuElems.some(id => document.querySelector(`a#${id}.active`));
    if (isActive) {
      document.body.classList.add('topnav-hscroll');
      const topmenuNav = document.querySelector('.topmenu-nav');
      const navItems = document.querySelectorAll('.topmenu-navitem');
      const excludedIds = [''];
      navItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          if (!excludedIds.includes(item.id)) {
            topmenuNav.classList.add('no-scroll');
          }
        });
        item.addEventListener('mouseleave', () => {
          if (!excludedIds.includes(item.id)) {
            topmenuNav.classList.remove('no-scroll');
          }
        });
      });
    } else {
      document.body.classList.remove('topnav-hscroll');
    }
  }

  /* menurestructure starts here */
  const hl_menu_structure = script_url + 'menustructure/' + dashboard_themes.script_filename.menustructure_script + '?v=' + Date.now();
  const hlpt_load_hl_menu_structure = function (ref_key) {
    if (localStorage.getItem('themegen_activate_menugroups_settings') === 'true') {
      var existing_hl_menu_structure = document.querySelector('#hlpt-mls');
      if (!document.head.contains(existing_hl_menu_structure)) {
        var script = document.createElement('script');
        script.setAttribute('id', 'hlpt-mls');
        script.type = 'text/javascript';
        script.src = hl_menu_structure;
        script.setAttribute('data-ark', ref_key);
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    } else {
      var existing_hl_menu_structure = document.querySelector('#hlpt-mls');
      if (existing_hl_menu_structure) existing_hl_menu_structure.remove();
    }
  };
  /* end of menurestructure */
  const reorder_checkbox_state_change = function () {
    const reorder_checkbox = document.querySelector('#reorder-side-menu-check');
    if (typeof reorder_checkbox !== 'undefined' && reorder_checkbox) {
      localStorage.setItem('themegen_activate_sidemenu_reorder', 'false');
      localStorage.setItem('themegen_activate_sidemenu_reorder_settings', 'false');
      reorder_checkbox.checked = false;
    }
  }
  function scrollToTopSettings() {
    let page_url = document.location.href;
    if (page_url.includes('/settings')) {
      const settingsNavContainer = document.querySelector('.hl_nav-header-without-footer');
      if (settingsNavContainer) {
        settingsNavContainer.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  /* piroirity support marketplace customization */
  const priority_support_install_buttons = function () {
    let page_url = document.location.href;
    const targetNodeElem = document.querySelector('#view-selector-view-mode');
    let isAgencyView = false;
    if (targetNodeElem) {
      const hrBaseSelectionInput = targetNodeElem.querySelector('.hr-base-selection-input');
      if (hrBaseSelectionInput && hrBaseSelectionInput.getAttribute('title') === 'Agency View') {
        isAgencyView = true;
      }
    }
    if (page_url.includes('/location') && page_url.includes('/integration/67acbc2a7dd54806b0dfb344')){
      const hideElements = ['#add-locations', '[id^="install-btn-"]'];
      const installBtnElements = document.querySelectorAll(hideElements.join(', '));
      if (installBtnElements.length === 0) {
        setTimeout(priority_support_install_buttons, 250);
      } else {
        installBtnElements.forEach(element => {
          element.classList.add('priority-support-location');
          if (isAgencyView) {
            element.classList.add('priority-support-location-agview');
          }
        });
      }
    }
    if (!page_url.includes('/location') && page_url.includes('/integration/67acbc2a7dd54806b0dfb344')){
      const hideElements = ['#add-locations'];
      const installBtnElements = document.querySelectorAll(hideElements.join(', '));
      if (installBtnElements.length === 0) {
        setTimeout(priority_support_install_buttons, 250);
      } else {
        installBtnElements.forEach(element => {
          element.classList.add('priority-support-agency');
        });
      }
    }
  };

  const mo_PS = function () {
    let page_url = document.location.href;
    if (page_url.includes('/integration/67acbc2a7dd54806b0dfb344')) {
      const targetNode = document.querySelector('#marketplace-app');
      if (!targetNode) {
        setTimeout(mo_PS, 250);
      } else {
        const config = { attributes: true, subtree: true, childList: true };
        const observer = new MutationObserver(function (mutations) {
          setTimeout(priority_support_install_buttons, 50);
        });
        observer.observe(targetNode, config);
      }
    }
  };
  /* end of piroirity support marketplace customization */
  /* help chat HL customization */
  const help_chat_HL = function () {
    const helpIcon = document.getElementById('hl_header--help-icon');
    if (!helpIcon) {
      setTimeout(help_chat_HL, 250);
      return;
    }
    helpIcon.addEventListener('click', function() {
      // Wait for the Chat button to appear
      const checkForChatButton = function() {
        const chatButton = document.getElementById('Chat');

        if (!chatButton) {
          setTimeout(checkForChatButton, 250);
          return;
        }
        chatButton.addEventListener('click', function() {
          // Check for hl-loader-container after Chat button is clicked
          const checkForLoader = function() {
            const appElement = document.querySelector('#app');
            if (!appElement) {
              setTimeout(checkForLoader, 250);
              return;
            }
            const loaderContainer = appElement.querySelector('.hl-loader-container');
            if (!loaderContainer) {
              setTimeout(checkForLoader, 250);
              return;
            }
            // Check if it has display:none style
            const currentStyle = loaderContainer.getAttribute('style');
            if (currentStyle && currentStyle.includes('display: none')) {
              loaderContainer.style.setProperty('display', 'none', 'important');
            }
          };
          checkForLoader();
        });
      };
      checkForChatButton();
    });
  };
  /* end of help chat HL customization */

  ////////////// SUB ACCOUNT ENABLED ends here /////////
  const refresh_settings = function () {
    mo_tooltips();
    load_content_loader_global();
    process_theme_settings_data(window.current_location_id);
    if (is_theme_builder_allowed()) {
      create_theme_gen_userinfo_btn();
    }
    hlpt_display_dashboard_customizer_panel();
    if (is_user_allowed()) {
      setup_initial_theme_values();
      display_cw_elements();
      add_attributes_to_body();
      setup_advanced_settings();
      setup_dashboard_banner_settings();
      setup_activate_translations();
      cleanwhite_disabled();
      is_horizontal_nav_active();
      theme_gen_dragable();
    }
    load_files();
    load_theme_gen_card();
    load_embedded_horizontal_mainnav_styles();
    find_phone_element();
    update_dark_mode_styles();
    handle_dark_mode();
    setup_sidbar_nav_icons();
    remove_customlinks_dynamic_span();
    update_helpicon_color();
    setup_initial_theme_values();
    add_attributes_to_body();
    setup_advanced_settings();
    setup_dashboard_banner_settings();
    setup_activate_translations();
    tb_init_btn();
    setup_hcontrols_settings();
    cw_bl_sm_active();
    assign_colors();
    expand_main_nav();
    mo_sideMenu_drag();
    is_location_settings_enabled_load();
    if (is_location_settings_active()) mo_is_tb_enabled();
    get_user_data();
    loadStyles_sidemenuhide();
    is_location_settings_active();
    setup_location_theme();
    update_user_colors();
    update_user_colors_tint();
    dashbard_alerts_on_reload();
    createDashboardBanner();
    displayDashboardBanner();
    d_banner_btn_internal_links();
    cleanwhite_payment_top_menus_smallscreens(['/payments', '/funnels-websites/', '/funnels-websites/funnels', '/funnels-websites/websites', '/funnels-websites/webinars', '/analytics', '/blogs', '/wordpress', '/funnels-websites/client-portal', '/funnels-websites/stores', '/form-builder/', '/survey-builder/', '/quiz-builder/', '/qr-codes', '/marketing/', '/ai-agents/', '/reporting/']);
    setup_font_family();
    hideLoader_hl();
    removeScrollOnHover();
  };

  function handlePgChange() {
    reorder_reset_to_default();
    reorder_reset_to_default_settings();
    reorder_nav_allowed();
    reorder_checkbox_state_change();
    get_user_data();
    is_location_settings_enabled_load();
    get_location_info();
    createDashboardBanner();
    displayDashboardBanner();
    d_banner_btn_internal_links();
    dbanner_inputupdates();
    getGoogleFontsList();
    setup_font_family();
    cleanwhite_payment_top_menus_smallscreens(['/payments', '/funnels-websites/', '/funnels-websites/funnels', '/funnels-websites/websites', '/funnels-websites/webinars', '/analytics', '/blogs', '/wordpress', '/funnels-websites/client-portal', '/funnels-websites/stores', '/form-builder/', '/survey-builder/', '/quiz-builder/', '/qr-codes', '/marketing/', '/ai-agents/', '/reporting/']);
    hideLoader_hl();
    removeScrollOnHover();
    if (window.selected_theme === 'theme_cleanwhite') {
      iconElem_setup();
    }
    remove_lock();
    setTimeout(() => {
      if (is_location_id_allowed()) {
        process_theme_settings_data(window.current_location_id);
        apply_lock();
      }
    }, 2100);
    scrollToTopSettings();
    reLoadMenuOrder();
    reLoadMenuOrder_settings();
    watchMenuReorderActivation();
    mo_PS();
    help_chat_HL();
    // console.log('change');
  }
  /// hlpt load embed
  hlpt_loadEmbed('https://auth.locationapi.co/resources1?k=' + get_data_attribute_value('data-ark') + '&s=dashboard_styles' + '&v=' + Date.now(), function (j) {
    let r = JSON.parse(j);
    if (r.e || r.p == 'lifetime') {
      add_styles('lockout-styles', script_url + 'lockout/' + dashboard_themes.script_filename.lockout_page_styles);
      add_styles('dashboardcustomizer', script_url + dashboard_themes.script_filename.theme_generator_style);
      handle_dark_mode();
      hlpt_load_hl_menu_structure(get_data_attribute_value('data-ark'));
      hlpt_loadEmbed(themegen + '?k=' + get_data_attribute_value('data-ark'),
        function (k) {
          let themegen_data = JSON.parse(k);
          window.org_theme_data = themegen_data;
          lc_load_content_loader_global_hl();
          mo_loader();
          handle_agency_tb_location_change();
          refresh_settings();
          $(function () {
            // handlePgChange();
            setInterval(function () {
              if (window.location.href !== handlePgChange.lastUrl) {
                handlePgChange.lastUrl = window.location.href;
                handlePgChange();
              }
            }, 100);
          });
        });
      //// Supportify event listener
      window.addEventListener('message', async function (e) {
        if (e.data.event === 'open_themebuilder') {
          const panel_Reference = document.querySelector('#dashboard-customizer-panel');
          if (panel_Reference) {
            panel_Reference.style.display = 'block';
            window.current_location_id_cp = e.data.locationId;
            window.current_location_name_cp = e.data.locationName;
            window.current_published_theme_cp = e.data.publishedTheme;
            getPublishedLocTheme(e.data.publishedTheme);
            handleSelectClickLocTheme(e.data.publishedTheme);
            get_location_info();
          }
        }
      });
    }
  });
  // console.log(`Theme Builder v1.051 `);
  mo_isAdmin();
})();