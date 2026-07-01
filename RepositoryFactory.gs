/**
 * ==========================================================
 * Repository Factory
 * ==========================================================
 */

class RepositoryFactory {

  static users() {

    return new UserRepository();

  }

  static settings() {

    return new SettingsRepository();

  }

  static sequences() {

    return new SequenceRepository();

  }

  static audit() {

    return new AuditRepository();

  }

}