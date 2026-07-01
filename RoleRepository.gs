/**
 * ==========================================================
 * KVK TMIS ERP
 * Role Repository
 * SCD-002 Package 2.1A
 * Status : FINAL
 * ==========================================================
 */

const RoleRepository = (() => {

  const SHEET_NAME = "Roles";

  function getAll() {

    return BaseRepository.getAll(SHEET_NAME);

  }

  function findByRole(roleName) {

    return BaseRepository.findBy(
      SHEET_NAME,
      "RoleName",
      roleName
    );

  }

  function exists(roleName) {

    return findByRole(roleName) !== null;

  }

  function save(role) {

    if (exists(role.RoleName)) {

      throw new Error(
        "Role already exists."
      );

    }

    return BaseRepository.insert(
      SHEET_NAME,
      role
    );

  }

  function deleteRole(roleName) {

    throw new Error(
      "Delete operation will be implemented in Repository CRUD Package."
    );

  }

  return {

    getAll,

    findByRole,

    exists,

    save,

    deleteRole

  };

})();