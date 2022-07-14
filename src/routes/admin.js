const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController")
const adminMiddleware = require("../middlewares/adminMiddleware")

router.get("/", adminController.index)

module.exports = router;