const express = require("express");
const router = express.Router();

const AdminController = require("../../controllers/adminController");
const ItemController = require("../../controllers/itemController");

const AuthController = require("../../controllers/auth.controller");


// routes and api
router.post("/login", AdminController.logInAdmin);
router.get("/:admin_id/logout", AuthController.verifyToken, AdminController.logOut);
router.post("/register", AdminController.registerUser);
// router.post("/auth/verify", AuthController.verifyToken);


router.get("/getMenuItems", ItemController.getAllMenuItems);
router.get("/getCategories", ItemController.getCategories);
router.get("/getMenuItems/:item_id", ItemController.getItem);
router.post("/addItem", ItemController.createItem);
router.put("/editItem/:item_id", ItemController.editItem);
router.delete("/deleteItem/:item_id", ItemController.deleteItem);


module.exports = router;