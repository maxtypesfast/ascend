module.exports = function(sequelize, DataTypes) {
    var Problem = sequelize.define("Problem", {
      grade: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              len: [2]
          }
      },
      color: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
      wall: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
          validate: {
            len: [1]
          }
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      photo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
    });

    Problem.associate = (models) => {
        models.Problem.belongsTo(models.Gym, {
            onDelete: "CASCADE"
        });
        models.Problem.belongsTo(models.Setter, {
            onDelete: "CASCADE"
        });
    };

    return Problem;
  };