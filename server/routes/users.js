var express = require('express');
var {
  getUserProfile,
  getUsers,
  getUserRepo,
  getUserFollowers
} = require("../controllers/user.controller.js");
var router = express.Router();

router.get("/profile/:username", getUserProfile);
router.get("/", getUsers);
router.get("/profile/repo/:username", getUserRepo);
router.get("/profile/followers/:username", getUserFollowers);

module.exports = router;
