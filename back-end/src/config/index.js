const dotenv = require("dotenv");
const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("Couldn't find .env file ⚠️");
}

const ENV = "DEV";

module.exports = {
  app: {
    port: parseInt(process.env.APP_PORT),
    // base_url: process.env.APP_BASE_URL,
  },
  database: {
    local:
      ENV === "DEV"
        ? process.env.DB_LOCAL
        : 
        process.env.DB_CONNECT,
  },
};
