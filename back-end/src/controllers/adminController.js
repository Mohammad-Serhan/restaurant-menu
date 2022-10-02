const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");  // model



class adminController {
  async logInAdmin(req, res) {
    try {
      const { email, password } = req.body;
      // check the admin if the email exist
      const existingAdmin = await Admin.findOne({ email }).exec();
      if (!existingAdmin) {
        return res.status(400).send({
          message: "Email does not exist !!",
        });
      }

      const isPassvalid = await bcrypt.compare(
        password,
        existingAdmin.password
      );
      if (!isPassvalid) {
        return res.status(401).send({
          message: "Password is incorrect",
        });
      }
      let ACCESS_TOKEN_SECRET =
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyIjp7Il9pZCI6IjYzMjQ5YzVmZmRkN2VjZWJkMjhmMTc2MiIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInl;
      // Generate a verification token with the admin's object
      const accessToken = jwt.sign(
        { user: existingAdmin },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      return res.status(200).send({
        authenticated: true,
        accessToken,
        admin: existingAdmin,
      });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  }



  async logOut(req, res) {
    try {
      // const id = req.params.admin_id;
      //  const existingAdmin = await Admin.findOne({ id }).exec();
      //  if (!existingAdmin) {
      //    return res.status(400).send({
      //      message: "Admin does not exist !!",
      //    });
      //  }

      // const refreshToken =
      //   req.headers.cookie && req.headers.cookie.split("=")[1];
      // console.log(refreshToken);

      res
        .status(200)
        // .clearCookie("accessToken", {
        //   path: "/",
        // })s
        .send({
          logOut: true,
          message: "Successfully logged out 😏 🍀",
        });
      res.end();

    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  }



  async registerUser(req, res) {
    try {
      const {  email, password } = req.body;
      const salt = await bcrypt.genSalt(10); // => default = 10 ||   if there are more than 2 users with the same password. If the hacker cracked one he will know the others
      const hashedPassword = await bcrypt.hash(password, salt); //  bcrypt.hash() is an async function so we need to use async/await.

      // create user's object
      const user = new Admin({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        password: hashedPassword,
      });

      // Step 1 - Create and save the user
      const newUser = await new Admin(user).save();
      // console.log("insert   ")
      if (!newUser) {
        return res.send(401).send({
          message: "Something happened ",
        });
      }

      return res.status(201).send({
        authenticated: true,
        admin: user,
      });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  }
}

module.exports = new adminController();