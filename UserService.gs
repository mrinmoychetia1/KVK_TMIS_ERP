/**
 * ==========================================================
 * KVK TMIS ERP
 * User Service
 * SCD-002 Package 2.2
 * Version : 2.0
 * ==========================================================
 *
 * Purpose
 * -------
 * Handles user authentication business logic.
 *
 * Dependencies
 * ------------
 * UserRepository
 * PasswordService
 * Response
 */

const UserService = (() => {

  /**
   * Find user by Username or Email.
   *
   * @param {string} loginId
   * @returns {Object|null}
   */
  function findUser(loginId) {

    if (!loginId) {
      return null;
    }

    return UserRepository.findByLogin(loginId);

  }

  /**
   * Check whether a user account is active.
   *
   * @param {Object} user
   * @returns {boolean}
   */
  function isActive(user) {

    if (!user) {
      return false;
    }

    return String(user.Status || "")
      .trim()
      .toUpperCase() === "ACTIVE";

  }

  /**
   * Verify password.
   *
   * @param {Object} user
   * @param {string} password
   * @returns {boolean}
   */
  function verifyPassword(user, password) {

    if (!user) {
      return false;
    }

    if (!user.PasswordHash || !user.PasswordSalt) {
      return false;
    }

    return PasswordService.verify(
      password,
      user.PasswordHash,
      user.PasswordSalt
    );

  }

  /**
   * Authenticate user.
   *
   * @param {string} loginId
   * @param {string} password
   * @returns {Object}
   */
  function authenticate(loginId, password) {

    const user = findUser(loginId);

    if (!user) {

      return Response.failure(
        "Invalid username/email or password."
      );

    }

    if (!isActive(user)) {

      return Response.failure(
        "Your account is inactive. Please contact the Administrator."
      );

    }

    if (!verifyPassword(user, password)) {

      return Response.failure(
        "Invalid username/email or password."
      );

    }

    // Update LastLogin in memory.
    // Database update will be added in the User Management package.
    user.LastLogin = new Date().toISOString();

    return Response.success(
      "Login successful.",
      {
        UserID: user.UserID,
        Username: user.Username,
        FullName: user.FullName,
        Designation: user.Designation,
        Email: user.Email,
        Role: user.Role,
        MustChangePassword: user.MustChangePassword
      }
    );

  }

  return {

    findUser,
    isActive,
    verifyPassword,
    authenticate

  };

})();