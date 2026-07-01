/**
 * ==========================================================
 * KVK TMIS ERP
 * Password Service
 * SCD-002 Package 2.1A
 * Status : FINAL
 * ==========================================================
 */

const PasswordService = (() => {

  /**
   * Generates a random salt.
   */
  function generateSalt(length = 32) {

    return Utilities.getUuid()
      .replace(/-/g, "")
      .substring(0, length);

  }

  /**
   * SHA-256 hash.
   */
  function hash(password, salt) {

    const bytes = Utilities.computeDigest(

      Utilities.DigestAlgorithm.SHA_256,

      password + salt,

      Utilities.Charset.UTF_8

    );

    return bytes
      .map(function (b) {

        const value = (b < 0)
          ? b + 256
          : b;

        return (
          "0" + value.toString(16)
        ).slice(-2);

      })
      .join("");

  }

  /**
   * Creates password hash and salt.
   */
  function create(password) {

    const salt = generateSalt();

    return {

      salt: salt,

      hash: hash(
        password,
        salt
      )

    };

  }

  /**
   * Verifies password.
   */
  function verify(
    password,
    storedHash,
    storedSalt
  ) {

    return hash(
      password,
      storedSalt
    ) === storedHash;

  }

  return {

    create,

    verify,

    hash,

    generateSalt

  };

})();