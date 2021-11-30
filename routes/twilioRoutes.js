"use strict";

const express = require("express");
const twilioController = require("../controllers/twilioController");
const router = express.Router();

const { generateToken } = twilioController;

router.post("/GenerateToken", generateToken);

module.exports = {
  routes: router,
};
