module.exports = function(sequelize, DataTypes) {
    var Setter = sequelize.define("Setter", {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [1, 20],
              msg: "Must include setter's name"
            } 
        }
      },
      role: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
          validate: {
            len: {
              args: [1, 50],
              msg: "Must include setter's role"
            } 
        }
      },
      bio: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: false,
          validate: {
            len: {
              args: [1],
              msg: "Must include a bio for setter"
            } 
        }
      }
    });

Setter.associate = (models) => {
    models.Setter.hasMany(models.Problem);
};

    return Setter;
  };