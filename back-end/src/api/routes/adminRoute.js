const express = require("express");
const router = express.Router();

const AdminController = require("../../controllers/adminController");
const ItemController = require("../../controllers/itemController");


// routes and api
router.post("/login", AdminController.logInAdmin);
// router.post("/register", AdminController.registerUser);

router.get("/getAllMenuItems", ItemController.getAllMenuItems);
// router.post("/addItem", ItemController.addMenuItem);
// router.put("/editItem", ItemController.editMenuItem);
// router.delete("/deleteItem", ItemController.deleteMenuItem);


module.exports = router;