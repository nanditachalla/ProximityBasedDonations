module.exports = (sequelize, DataTypes) => {
  const CreatePost = sequelize.define("CreatePost", {
    items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timespan: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: true,
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
  //CreatePost.belongsTo(Donor);
  return CreatePost;
};
