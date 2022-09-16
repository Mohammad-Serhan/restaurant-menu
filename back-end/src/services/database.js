const mongoose = require("mongoose");
const config = require("../config/index");

//connect to DB
// Environment : Development or Production 
mongoose.connect(
    config.database.local,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


let conn = mongoose.connection;               // to hook events to know connection is working correctly
conn.on("connected", function () {
    console.log("MongoDB connection established successfully ");
});

conn.on("disconnected", function () {
    console.log("database is disconnected !!");
})

conn.on("error", console.error.bind(console, "connection error: "));

module.exports = conn;