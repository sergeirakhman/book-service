import {sequelize} from "../config/db.js";
import {DataTypes} from "sequelize";

const Publisher = sequelize.define("publisher", {
    publisher_name: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    tableName: "publishers",
})

export default Publisher;