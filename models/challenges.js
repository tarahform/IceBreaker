module.exports = function (sequelize, DataTypes) {
    const Challenge = sequelize.define("Challenge", {
        challenge_task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        point_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Challenge;
}