module.exports = (sequelize, DataTypes) => {
  const Complaint = sequelize.define("Complaint", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
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
  return Complaint;
};
