/**
 * ==========================================================
 * Database Installer
 * Enterprise Foundation v1.0
 * ==========================================================
 */

class DatabaseInstaller {

  static install() {

    const db = SpreadsheetService.createDatabase();

    Object.keys(DATABASE_SCHEMA).forEach(sheetName => {

      let sheet = db.getSheetByName(sheetName);

      if (!sheet) {

        sheet = db.insertSheet(sheetName);

      }

      if (sheet.getLastRow() === 0) {

        sheet.appendRow(
          DATABASE_SCHEMA[sheetName]
        );

      }

    });

    return db;

  }

}