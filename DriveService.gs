/**
 * ==========================================================
 * Drive Service
 * Enterprise Foundation v1.0
 * ==========================================================
 */

class DriveService {

  static getRootFolder() {

    const id = AppConfig.get(PROPERTY.ROOT_FOLDER_ID);

    if (!id) {
      return null;
    }

    try {

      return DriveApp.getFolderById(id);

    } catch (e) {

      return null;

    }

  }

  static createRootFolder() {

    let folder = this.getRootFolder();

    if (folder) {
      return folder;
    }

    folder = DriveApp.createFolder(APP.ROOT_FOLDER_NAME);

    AppConfig.set(PROPERTY.ROOT_FOLDER_ID, folder.getId());

    return folder;

  }

}