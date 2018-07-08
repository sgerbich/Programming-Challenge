module.exports = function (sequelize, Sequelize) {
    var Factories = sequelize.define("Factories", {
        facName: {
            type: Sequelize.STRING,
            notEmpty: true
          },
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          }
    })

    Factories.associate = function (models) {

        Factories.hasMany(models.Children, {
            onDelete: "cascade"
        });
    };

    return Factories;
}