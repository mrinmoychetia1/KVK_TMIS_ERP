/**
 * ==========================================================
 * User Repository
 * ==========================================================
 */

const UserRepository = {

  getAll() {

    return BaseRepository.getAll(SHEET.USERS);

  },

  findByUserId(userId) {

    return BaseRepository.findBy(
      SHEET.USERS,
      "UserID",
      userId
    );

  },

  findByEmail(email) {

    return BaseRepository.findBy(
      SHEET.USERS,
      "Email",
      email
    );

  },

  insert(user) {

    return BaseRepository.insert(
      SHEET.USERS,
      user
    );

  }

};