const express = require('express');
const { registerUSer } = require('../data/controller/userController');
const router = express.Router();

const route = express.Router();

router.route("/").post(registerUser);

module.exports = router;
