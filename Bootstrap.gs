/**
 * ==========================================================
 * KVK TMIS ERP
 * Bootstrap & Router
 * SCD-002 Package 2.2
 * Status : Production
 * ==========================================================
 */

/**
 * Main entry point.
 */
function doGet(e) {

  Bootstrap.initialize();

  let page = "Login";

  if (e && e.parameter && e.parameter.page) {

    switch (String(e.parameter.page).toLowerCase()) {

      case "dashboard":
        page = "Dashboard";
        break;

      case "users":
        page = "Users";
        break;

      case "oft":
        page = "OFT";
        break;

      case "fld":
        page = "FLD";
        break;

      case "login":
      default:
        page = "Login";
        break;

    }

  }

  return HtmlService
    .createTemplateFromFile(page)
    .evaluate()
    .setTitle(APP.NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);

}

/**
 * Bootstrap
 */
const Bootstrap = (() => {

  function initialize() {

    AppConfig.initialize();

    Logger.info(
      `${APP.NAME} ${APP.VERSION} started`
    );

  }

  return {

    initialize

  };

})();

/**
 * Include HTML partials.
 */
function include(filename) {

  return HtmlService
    .createHtmlOutputFromFile(filename)
    .getContent();

}