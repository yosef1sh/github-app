var express = require('express');
var ensureAuthenticated = require('../middleware/ensureAuthenticated.js');

var {
  getUserProfile,
  getUsers,
  getUserRepo,
  getUserFollowers,
  likeProfile,
  getLikedProfiles,
} = require("../controllers/user.controller.js");
var router = express.Router();

router.get("/profile/:username", getUserProfile);
router.get("/", getUsers);
router.get("/profile/repo/:username", getUserRepo);
router.get("/profile/followers/:username", getUserFollowers);
router.post("/like/:username", ensureAuthenticated, likeProfile);
router.get('/likedProfiles', ensureAuthenticated, getLikedProfiles);

module.exports = router;
