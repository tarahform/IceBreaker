module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        first_name: DataTypes.STRING,
        middle_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        photo_link: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_number: DataTypes.INTEGER,
        age: DataTypes.INTEGER,
        member_since: DataTypes.DATE,
        challeng_id: DataTypes.STRING,
        user_points: DataTypes.INTEGER,
    });
    return User;
}