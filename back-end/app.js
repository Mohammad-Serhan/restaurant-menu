const express = require("express");// imported the package into this file
const app = express();             // to execute express
// ==>       -------  now you have the ability to create routes  -----------
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./src/config/index");
require("dotenv/config");           // // since when we push code , people can see our own username and password, so we installed a library --dotenv-- to hide them
app.use('/uploads', express.static('uploads'));          // it makes folder statically so publically available

app.use(bodyParser.json());         // can not read the request message unless transform it to json

// to allow access from # resources.
// CORS will add a response header access-control-allow-origins
// for using Cookies and it is a part of security. 
// If you want to allow credentials then your Access-Control-Allow-Origin must not use *.
// You will have to specify the exact protocol + domain + port.
app.use(
  cors({
    // origin: "https://menu-admin1.netlify.app",
    origin: "http://localhost:3000",
    credentials: true,
  })
);


// Route Middleware
const adminRouter = require("./src/api/routes/adminRoute.js")
app.use("/admin", adminRouter);             // everything in adminRouter has a prefix     "/admin"


app.get("/", (req, res) => {
  res.send("Hello to Restuarant API ")
})

// connect to Mongoose database
require("./src/services/database");


// listen to the server 
const port = config.app.port || 8080;
app.listen(port, () => {
    console.log(" 🔥 Server is up and running on port : " + port);
})
