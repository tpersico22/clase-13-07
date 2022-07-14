const express = require('express');
const router = express.Router();
const formUserController = require("../controllers/formUserController")

router.get("/create", formUserController.index)

router.post("/", formUserController.process)


module.exports = router;