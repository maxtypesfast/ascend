module.exports = function(sequelize, DataTypes) {
    var Gym = sequelize.define("Gym", {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: {
                args: [1, 150],
                msg: "Please enter a gym name with at least 1 character but no more than 150"
              } 
          }
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [16, 150],
              msg: "Please enter a full address"
            } 
        }
      },
      phone_number: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [10],
              msg: "Please enter a phone number including area code"
            } 
        }
      },
      website: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [1],
              msg: "Must enter a website"
            } 
        }
      }
    });

    Gym.associate = (models) => {
        models.Gym.hasMany(models.Problem);
    };

    return Gym;
  };
  