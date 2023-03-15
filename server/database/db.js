import { Sequelize } from "sequelize"
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from "../config.js"


const db = new Sequelize('chaty', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db