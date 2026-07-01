/**
 * ==========================================================
 * KVK TMIS ERP
 * Database Installer
 * SCD-002 Package 2.1B
 * ==========================================================
 */

const DatabaseInstaller = (() => {

  function install() {

    const spreadsheet = SpreadsheetService.createDatabase();

    Object.keys(DATABASE_SCHEMA).forEach(sheetName => {

      let sheet = spreadsheet.getSheetByName(sheetName);

      if (!sheet) {
        sheet = spreadsheet.insertSheet(sheetName);
      }

      const headers = DATABASE_SCHEMA[sheetName];

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
      }

    });

    Seeder.seed();

    return spreadsheet;

  }

  return {
    install
  };

})();