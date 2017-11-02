require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'features/step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    'features'
  ],
  nightwatchOutput: false
});

module.exports = {
  src_folders: ["features"],
  output_folder: "reports",
  custom_commands_path: "",
  custom_assertions_path: "",
  page_objects_path: "page-objects",
  globals_path : "",
  selenium: {
    start_process: false,
    host: "localhost",
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots : {
        enabled: false,
        path: ""
      },
      desiredCapabilities: {
        browserName: "chrome"
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  }
};