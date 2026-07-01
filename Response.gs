/**
 * ==========================================================
 * Standard Response Object
 * ==========================================================
 */

class Response {

  static success(message = "Success", data = null) {

    return {

      success: true,

      message,

      data,

      timestamp: new Date().toISOString()

    };

  }

  static failure(message = "Failure", errors = null) {

    return {

      success: false,

      message,

      errors,

      timestamp: new Date().toISOString()

    };

  }

}