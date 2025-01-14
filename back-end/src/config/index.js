const dotenv = require("dotenv");
const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("Couldn't find .env file ⚠️");
}

const ENV = "DEV";

module.exports = {
  app: {
    port: parseInt(process.env.PORT),
    base_url: "http://localhost:8080/",
  },
  database: {
    local: process.env.CONNECTION_URL,
  },
};
