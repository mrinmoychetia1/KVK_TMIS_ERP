/**
 * ==========================================================
 * Enterprise Logger
 * ==========================================================
 */

class Logger {

  static info(message) {

    console.log(`[INFO] ${message}`);

  }

  static warn(message) {

    console.warn(`[WARN] ${message}`);

  }

  static error(message, error = null) {

    console.error(`[ERROR] ${message}`);

    if (error) {

      console.error(error);

    }

  }

}