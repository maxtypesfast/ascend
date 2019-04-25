module.exports = function(sequelize, DataTypes) {
    var Setter = sequelize.define("Setter", {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              len: [1, 20]
          }
      },
      role: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
          validate: {
            len: [1,35]
          }
      },
      bio: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: false,
          validate: {
            len: [1]
          }
      }
    });

Setter.associate = (models) => {
    models.Setter.hasMany(models.Problem);
};

    return Setter;
  };