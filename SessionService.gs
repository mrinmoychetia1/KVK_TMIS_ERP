/**
 * ==========================================================
 * KVK TMIS ERP
 * Session Service
 * SCD-002 Package 2.2
 * Version : 1.0
 * ==========================================================
 *
 * Purpose
 * -------
 * Handles user session management.
 *
 * Dependencies
 * ------------
 * PropertiesService
 *
 * Used By
 * -------
 * LoginController
 * DashboardController
 *
 * Status
 * ------
 * Production
 */

const SessionService = (() => {

  const SCRIPT_PROPERTIES =
    PropertiesService.getScriptProperties();

  const SESSION_KEY = "CURRENT_SESSION";

  /**
   * Creates a new session.
   *
   * @param {Object} user
   */
  function create(user) {

    const session = {

      loggedIn: true,

      loginTime: new Date().toISOString(),

      user: user

    };

    SCRIPT_PROPERTIES.setProperty(
      SESSION_KEY,
      JSON.stringify(session)
    );

  }

  /**
   * Returns the current session object.
   *
   * @returns {Object|null}
   */
  function getSession() {

    const value =
      SCRIPT_PROPERTIES.getProperty(
        SESSION_KEY
      );

    if (!value) {

      return null;

    }

    try {

      return JSON.parse(value);

    }

    catch (e) {

      return null;

    }

  }

  /**
   * Returns current logged in user.
   *
   * @returns {Object|null}
   */
  function getCurrentUser() {

    const session = getSession();

    if (!session) {

      return null;

    }

    return session.user;

  }

  /**
   * Checks login status.
   *
   * @returns {boolean}
   */
  function isLoggedIn() {

    const session = getSession();

    if (!session) {

      return false;

    }

    return session.loggedIn === true;

  }

  /**
   * Clears session.
   */
  function destroy() {

    SCRIPT_PROPERTIES.deleteProperty(
      SESSION_KEY
    );

  }

  /**
   * Returns session information.
   *
   * @returns {Object}
   */
  function info() {

    return getSession();

  }

  return {

    create,

    destroy,

    getSession,

    getCurrentUser,

    isLoggedIn,

    info

  };

})();