/**
 * ==========================================================
 * Spreadsheet Service
 * Enterprise Foundation v1.0
 * ==========================================================
 */

class SpreadsheetService {

  static getDatabase() {

    const id = AppConfig.get(PROPERTY.DATABASE_ID);

    if (!id) {
      return null;
    }

    try {

      return SpreadsheetApp.openById(id);

    } catch (e) {

      return null;

    }

  }

  static createDatabase() {

    let db = this.getDatabase();

    if (db) {
      return db;
    }

    db = SpreadsheetApp.create(APP.DATABASE_NAME);

    AppConfig.set(PROPERTY.DATABASE_ID, db.getId());

    return db;

  }

  static getSheet(sheetName) {

    const db = this.getDatabase();

    if (!db) {
      throw new Error("Database not initialized.");
    }

    let sheet = db.getSheetByName(sheetName);

    if (!sheet) {

      sheet = db.insertSheet(sheetName);

    }

    return sheet;

  }

}