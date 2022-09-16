const Item = require("../models/snackItemModel"); // model


class itemController {



  async getAllMenuItems(req, res) {
    try {
      const menuItems = await Item.find();
      return res.status(200).send({
        menuItems,
      });
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  }
}

module.exports = new itemController();


