module.exports = function (sequelize, DataTypes) {
    var Problem = sequelize.define("Problem", {
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: {
                    args: [2],
                    msg: "Please enter a grade with only 2 characters"
                }
            }
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1],
                    msg: "Must include a color"
                }
            }
        },
        wall: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: {
                    args: [1],
                    msg: "Must include a wall"
                }
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [1],
                    msg: "Must include a description"
                }
            }
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1],
                    msg: "Must include a url for photo"
                }
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