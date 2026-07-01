/**
 * ==========================================================
 * KVK TMIS ERP
 * Login Controller
 * SCD-002 Package 2.2
 * Version : 1.0
 * ==========================================================
 *
 * Purpose
 * -------
 * Handles login/logout requests from the UI.
 *
 * Dependencies
 * ------------
 * UserService
 * SessionService
 * Response
 *
 * Used By
 * -------
 * Login.html
 *
 * Status
 * ------
 * Production
 */

/**
 * Login request from HTML.
 *
 * @param {string} username
 * @param {string} password
 * @returns {Object}
 */
function login(username, password) {

  try {

    username = String(username || "").trim();
    password = String(password || "");

    if (!username) {

      return Response.failure(
        "Username is required."
      );

    }

    if (!password) {

      return Response.failure(
        "Password is required."
      );

    }

    const result = UserService.authenticate(
      username,
      password
    );

    if (!result.success) {

      return result;

    }

    SessionService.create(result.data);

    return Response.success(
      "Login successful.",
      {
        user: result.data,
        redirect: "Dashboard"
      }
    );

  }

  catch (error) {

    Logger.error(
      "Login failed.",
      error
    );

    return Response.failure(
      error.message
    );

  }

}

/**
 * Logout current user.
 *
 * @returns {Object}
 */
function logout() {

  try {

    SessionService.destroy();

    return Response.success(
      "Logged out successfully."
    );

  }

  catch (error) {

    Logger.error(
      "Logout failed.",
      error
    );

    return Response.failure(
      error.message
    );

  }

}

/**
 * Returns currently logged-in user.
 *
 * @returns {Object}
 */
function getCurrentUser() {

  try {

    const user = SessionService.getCurrentUser();

    if (!user) {

      return Response.failure(
        "No active session."
      );

    }

    return Response.success(
      "Current user.",
      user
    );

  }

  catch (error) {

    Logger.error(
      "Unable to retrieve current user.",
      error
    );

    return Response.failure(
      error.message
    );

  }

}

/**
 * Checks whether a session exists.
 *
 * @returns {Object}
 */
function isLoggedIn() {

  try {

    return Response.success(
      "Session status.",
      {
        loggedIn: SessionService.isLoggedIn()
      }
    );

  }

  catch (error) {

    Logger.error(
      "Session check failed.",
      error
    );

    return Response.failure(
      error.message
    );

  }

}