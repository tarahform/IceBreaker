module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        first_name: DataType.STRING,
        middle_name: DataType.STRING,
        last_name: DataType.STRING,
        photo_link: DataType.STRING,
        email: DataType.STRING,
        phone_number: DataType.INTEGER,
        age: DataType.INTEGER,
        member_since: DataType.DATE, //???
        challeng_id: DataType.STRING,
        user_points: DataType.INTEGER,
    });
    return User;
}