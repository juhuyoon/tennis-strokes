const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Stroke extends Model {};

Stroke.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    post: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    }
}, 
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stroke'
}
);

module.exports = Stroke;