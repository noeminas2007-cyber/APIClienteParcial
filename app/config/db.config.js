require("dotenv").config();

const { URL } = require("url");

const dbUrl = new URL(process.env.DATABASE_URL);

module.exports = {
    HOST: dbUrl.hostname,
    USER: decodeURIComponent(dbUrl.username),
    PASSWORD: decodeURIComponent(dbUrl.password),
    DB: dbUrl.pathname.substring(1),
    PORT: dbUrl.port || 5432,
    dialect: "postgres",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};