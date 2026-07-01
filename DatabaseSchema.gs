/**
 * ==========================================================
 * KVK TMIS ERP
 * Database Schema
 * SCD-002 Package 2.1B
 * FINAL
 * ==========================================================
 */

const DATABASE_SCHEMA = {

  Users: [

    "UserID",

    "Username",

    "FullName",

    "Designation",

    "Email",

    "Mobile",

    "PasswordHash",

    "PasswordSalt",

    "Role",

    "Status",

    "MustChangePassword",

    "LastLogin",

    "CreatedOn",

    "CreatedBy",

    "ModifiedOn",

    "ModifiedBy"

  ],

  Roles: [

    "RoleID",

    "RoleName",

    "Description"

  ],

  Settings: [

    "Key",

    "Value",

    "Description"

  ],

  AuditLogs: [

    "LogID",

    "DateTime",

    "User",

    "Module",

    "Action",

    "Status",

    "Remarks"

  ],

  Sequences: [

    "Module",

    "CurrentNumber"

  ]

};