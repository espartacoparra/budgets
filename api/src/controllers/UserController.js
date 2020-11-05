const models = require("../models/models");
class UserController {
  async getUser(req, res) {
    let user = await models.User.findAll();
    return res.json(user);
  }
}
module.exports = new UserController();
