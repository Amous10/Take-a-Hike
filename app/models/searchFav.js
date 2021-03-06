module.exports = function(sequelize, DataTypes) {
  var SearchFav = sequelize.define("SearchFav", {
    trailname: DataTypes.STRING,
    type: DataTypes.STRING,
    summary: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    stars: DataTypes.DOUBLE,
    location: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    length: DataTypes.DOUBLE,
    longit: DataTypes.DOUBLE,
    latit: DataTypes.DOUBLE,
    conditionstat: DataTypes.STRING,
    conditiondetails: DataTypes.STRING,
    conditiondate: DataTypes.STRING,
    trailid: DataTypes.DOUBLE
  });

  SearchFav.associate = function(models) {
    SearchFav.belongsTo(models.user, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return SearchFav;
  
};
