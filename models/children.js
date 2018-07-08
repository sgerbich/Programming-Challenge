module.exports = function (sequelize, Sequelize) {
    var Children = sequelize.define("Children", {
  
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        value: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
   
      
     
    });
    Children.associate = function (models) {
      
      Children.belongsTo(models.Factories, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Children;
  
  }
  