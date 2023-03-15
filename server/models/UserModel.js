import db from "../database/db.js"

//sequelize

import { DataTypes } from "sequelize"

const UserModel = db.define("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },

})

export default UserModel