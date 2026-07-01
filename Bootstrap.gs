/**
 * ==========================================================
 * KVK TMIS ERP
 * Enterprise Bootstrap
 * ==========================================================
 */

function doGet(e) {

  Bootstrap.initialize();

  return HtmlService
    .createTemplateFromFile("Index")
    .evaluate()
    .setTitle(APP.NAME);

}

class Bootstrap {

  static initialize() {

    AppConfig.initialize();

    Logger.info(`${APP.NAME} ${APP.VERSION} starting`);

  }

}