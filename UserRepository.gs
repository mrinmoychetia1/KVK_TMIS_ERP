/**
 * ==========================================================
 * KVK TMIS ERP
 * User Repository
 * SCD-002 Package 2.2
 * Version : 2.0
 * ==========================================================
 *
 * Purpose
 * -------
 * Repository for Users sheet.
 *
 * Dependencies
 * ------------
 * BaseRepository
 * Constants.gs
 */

const UserRepository = (() => {

  /**
   * Returns all users.
   */
  function getAll() {

    return BaseRepository.getAll(SHEET.USERS);

  }

  /**
   * Finds a user by UserID.
   */
  function findByUserId(userId) {

    return BaseRepository.findBy(
      SHEET.USERS,
      "UserID",
      userId
    );

  }

  /**
   * Finds a user by Username.
   */
  function findByUsername(username) {

    if (!username) {
      return null;
    }

    return BaseRepository.findBy(
      SHEET.USERS,
      "Username",
      String(username).trim()
    );

  }

  /**
   * Finds a user by Email.
   */
  function findByEmail(email) {

    if (!email) {
      return null;
    }

    return BaseRepository.findBy(
      SHEET.USERS,
      "Email",
      String(email).trim()
    );

  }

  /**
   * Finds a user using either Username or Email.
   */
  function findByLogin(loginId) {

    if (!loginId) {
      return null;
    }

    const value = String(loginId).trim();

    let user = findByUsername(value);

    if (user) {
      return user;
    }

    return findByEmail(value);

  }

  /**
   * Inserts a new user.
   */
  function insert(user) {

    return BaseRepository.insert(
      SHEET.USERS,
      user
    );

  }

  /**
   * Updates an existing user.
   *
   * (Implementation will be added in the CRUD package.)
   */
  function update(user) {

    throw new Error(
      "User update will be implemented in the User Management package."
    );

  }

  /**
   * Deletes a user.
   *
   * (Implementation will be added in the CRUD package.)
   */
  function remove(userId) {

    throw new Error(
      "User deletion will be implemented in the User Management package."
    );

  }

  return {

    getAll,

    findByUserId,

    findByUsername,

    findByEmail,

    findByLogin,

    insert,

    update,

    remove

  };

})();