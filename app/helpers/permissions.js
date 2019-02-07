exports.hasPermission = (accessLevel, user) => {
  if (accessLevel < user.permissions) {
    throw Error('You do not have the appropriate permissions to do that ⛔');
  }
};
