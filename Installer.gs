/**
 * ==========================================================
 * Enterprise Installer
 * ==========================================================
 */

function installSystem() {

  try {

    Bootstrap.initialize();

    DatabaseInstaller.install();

    DriveService.createRootFolder();

    AppConfig.set(PROPERTY.INSTALLED, "YES");

    Logger.info("Enterprise Foundation installed.");

    return Response.success(
      "Enterprise Foundation installed successfully."
    );

  }

  catch (error) {

    Logger.error(
      "Installation failed.",
      error
    );

    return Response.failure(
      error.message
    );

  }

}