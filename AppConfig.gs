/**
 * ==========================================================
 * Application Configuration Manager
 * ==========================================================
 */

class AppConfig {

  static get properties() {

    return PropertiesService.getScriptProperties();

  }

  static get(key) {

    return this.properties.getProperty(key);

  }

  static set(key, value) {

    this.properties.setProperty(key, String(value));

  }

  static setAll(values) {

    this.properties.setProperties(values);

  }

  static exists(key) {

    return this.get(key) !== null;

  }

  static remove(key) {

    this.properties.deleteProperty(key);

  }

  static initialize() {

    if (!this.exists(PROPERTY.APP_NAME)) {

      this.setAll({

        APP_NAME: APP.NAME,

        APP_VERSION: APP.VERSION,

        APP_RELEASE: APP.RELEASE,

        APP_BUILD: APP.BUILD

      });

    }

  }

}