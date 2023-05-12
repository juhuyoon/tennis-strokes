const User = require('./User');
const Stroke = require("./Stroke");

User.hasMany(Stroke, {
    foreignKey: "user_id"
});

Stroke.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Stroke };