/**
 * ==========================================================
 * Base Repository
 * Apps Script Enterprise Framework
 * ==========================================================
 */

const BaseRepository = {

  getSheet(sheetName) {

    return SpreadsheetService.getSheet(sheetName);

  },

  getHeaders(sheet) {

    if (sheet.getLastRow() === 0) {
      return [];
    }

    return sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0];

  },

  getAll(sheetName) {

    const sheet = this.getSheet(sheetName);

    const headers = this.getHeaders(sheet);

    if (headers.length === 0 || sheet.getLastRow() <= 1) {
      return [];
    }

    const values = sheet
      .getRange(
        2,
        1,
        sheet.getLastRow() - 1,
        headers.length
      )
      .getValues();

    return values.map(row => {

      const obj = {};

      headers.forEach((header, index) => {

        obj[header] = row[index];

      });

      return obj;

    });

  },

  findBy(sheetName, column, value) {

    return this
      .getAll(sheetName)
      .find(r => r[column] === value) || null;

  },

  insert(sheetName, record) {

    const sheet = this.getSheet(sheetName);

    const headers = this.getHeaders(sheet);

    const row = headers.map(h => record[h] ?? "");

    sheet.appendRow(row);

    return record;

  }

};