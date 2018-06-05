module.exports = function (sequelize, DataTypes) {
    const Challenge = sequelize.define("Challenge", {
        challenge_task: DataTypes.STRING,
        point_value: DataTypes.INTEGER
    });
    return Challenge;
}