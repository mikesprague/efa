exports.hasPermission = (accessLevel, user) => accessLevel >= user.permissions;
