module.exports = (sequelize, DataTypes) => {
  const Acceptor = sequelize.define("Acceptor", {
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
    house_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
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
  return Acceptor;
};
