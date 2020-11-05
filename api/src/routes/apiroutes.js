const express = require("express"),
  UserController = require("../controllers/UserController"),
  api = express.Router();

api.get("/user", UserController.getUser);

module.exports = api;
