const express = require("express");
const router = express.Router();
const  multer = require("multer");


const AdminController = require("../../controllers/adminController");
const ItemController = require("../../controllers/itemController");

const AuthController = require("../../controllers/auth.controller");
const itemController = require("../../controllers/itemController");

// routes and api
router.post("/login", AdminController.logInAdmin);
router.get(
  "/:admin_id/logout",
  AuthController.verifyToken,
  AdminController.logOut
);
router.post("/register", AdminController.registerUser);
// router.post("/auth/verify", AuthController.verifyToken);

router.get("/getMenuItems", ItemController.getAllMenuItems);
router.get("/getCategories", ItemController.getCategories);
router.get("/getMenuItems/:item_id", ItemController.getItem);
router.delete("/deleteItem/:item_id", ItemController.deleteItem);


  // we have 2 approaches to send images in the post route: 
  //   a. build additional endpoint where you accept binary data only  (req.body won't be available since binary body will not be parsed by body parser package only URL encoded or JSON) => use raw body
  //   b. use formData object to submit fields and files(images) ==> to read formData (# content type) I need seperate package => multer 

// Sets up where to store all incoming files in uploads
// this folder isn't publicly accessible by default => so you will have to turn it to a static folder(accessible) by adding middleware(express.static()) in app.js

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "././uploads"); 
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}); // initialize multer which gives us  middlewares infront of our main handler(createItem)



// Multer adds a body object and a file or files object to the request object.
router.post("/addItem", upload.single("img"), itemController.createItem);
// The upload.single('name the field that hold that file') line tells Multer to process the incoming image data and store it in the local file system

router.put(
  "/editItem/:item_id",
  upload.single("myImg"),
  ItemController.editItem
);


module.exports = router;
