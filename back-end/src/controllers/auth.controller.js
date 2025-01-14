const jwt = require("jsonwebtoken");


class AuthController {
  async verifyToken(req, res, next) {
    try {
      // console.log("cookie = " + req.headers.cookie.split('; '));
      const authHeader = req.headers["authorization"];
      // console.log("header = " + authHeader);
      const token = authHeader && authHeader.split(" ")[1];
      // console.log("token = " + token)
      if (token === null) {
        return res.status(401).send({
          authenticated: false,
        });
      }

        let ACCESS_TOKEN_SECRET =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyIjp7Il9pZCI6IjYzMjQ5YzVmZmRkN2VjZWJkMjhmMTc2MiIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInl";
      
      jwt.verify(
        token,
        ACCESS_TOKEN_SECRET,
        function (err, decoded) {
          // console.log(err)
          if (err) {
             return res.status(401).send({
              authenticated: false,
              message: err.message,
            });
          }
          // console.log(decoded)
          return res.status(200).json({
            authenticated: true,
            email: decoded.admin.email,
            name: decoded.admin.name ?? "Guest",
          });
          // req.admin = decoded.admin;
          // console.log(decoded.admin);
          // next();
        }
      );
    } catch (error) {
      return res.status(401).send({
        authenticated: false,
        error: error.message,
      });
    }
  }
}

module.exports = new AuthController();