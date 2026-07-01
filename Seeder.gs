/**
 * ==========================================================
 * KVK TMIS ERP
 * Default Data Seeder
 * SCD-002 Package 2.1B
 * ==========================================================
 */

const Seeder = (() => {

  function seed() {

    seedRoles();

    seedAdministrator();

  }

  function seedRoles() {

    const roles = SpreadsheetService.getSheet("Roles");

    if (roles.getLastRow() > 1) {
      return;
    }

    roles.appendRow([
      "ROLE001",
      "ADMIN",
      "System Administrator"
    ]);

    roles.appendRow([
      "ROLE002",
      "SMS",
      "Subject Matter Specialist"
    ]);

    roles.appendRow([
      "ROLE003",
      "PA",
      "Programme Assistant"
    ]);

  }

  function seedAdministrator() {

    const users = SpreadsheetService.getSheet("Users");

    if (users.getLastRow() > 1) {
      return;
    }

    const password = PasswordService.create("admin123");

    users.appendRow([

      "ADMIN001",

      "admin",

      "System Administrator",

      "Administrator",

      "admin@kvk.local",

      "",

      password.hash,

      password.salt,

      "ADMIN",

      "ACTIVE",

      "YES",

      "",

      new Date(),

      "SYSTEM",

      "",

      ""

    ]);

  }

  return {
    seed
  };

})();