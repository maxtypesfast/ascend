module.exports = function(sequelize, DataTypes) {
    var Gym = sequelize.define("Gym", {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1, 150]
          }
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: [16]
          }
      },
      phone_number: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          validate: {
            len: [11]
          }
      },
      website: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      }
    });

    Gym.associate = (models) => {
        models.Gym.hasMany(models.Problem);
    };

    return Gym;
  };
  