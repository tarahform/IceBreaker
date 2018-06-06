module.exports = function (sequelize, DataTypes) {
    const Recommendation = sequelize.define("Recommendation", {
        challenge_task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        point_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Recommendation;
}