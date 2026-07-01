/**
 * ==========================================================
 * KVK TMIS ERP
 * Enterprise Installer
 * ==========================================================
 */

function installSystem() {

  try {

    Bootstrap.initialize();

    DatabaseInstaller.install();

    DriveService.createRootFolder();

    AppConfig.set(PROPERTY.INSTALLED, "YES");

    Logger.info("System installation completed.");

    return Response.success(
      "KVK TMIS ERP installed successfully."
    );

  }
  catch (error) {

    Logger.error("Installation failed.", error);

    return Response.failure(error.message);

  }

}