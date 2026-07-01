/**
 * ==========================================================
 * Database Schema Definition
 * Enterprise Foundation v1.0
 * ==========================================================
 */

const DATABASE_SCHEMA = {

  Users: [
    "UserID",
    "Name",
    "Designation",
    "Email",
    "Mobile",
    "Role",
    "Status",
    "CreatedOn",
    "ModifiedOn"
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