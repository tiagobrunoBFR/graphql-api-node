require('dotenv').config()

module.exports = {
    dialect: process.env.APP_DB_CONNECTION,
    host: process.env.APP_DB_HOST,
    port: process.env.APP_DB_PORT,
    database: process.env.APP_DB_NAME,
    username: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    define: {
        timestamps: true,
        underscored: true,
    }
}