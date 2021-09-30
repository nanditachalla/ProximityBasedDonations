module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    createdAt: {
      type: "TIMESTAMP", //from github , this works for automatic created_at and updated_at
      allowNull: true,
      //defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)"),
      //field: "created_at",
    },
    updatedAt: {
      type: "TIMESTAMP",
      allowNull: true,
      //defaultValue: sequelize.literal(
      //"CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
      //),
      // field: "updated_at",
    },
  });
  return Users;
};
