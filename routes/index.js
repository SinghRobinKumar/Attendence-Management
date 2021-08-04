const express = require("express");

const controller = require("../controllers/index");
const userController = require("../controllers/user");

const router = express.Router();

router.use("/list", controller.list);
router.use("/single", controller.singleRecord);
router.use("/new", controller.new);
router.use("/update", controller.update);
router.use("/login", userController.login);
router.use("/signup", userController.signup);

exports.router = router;
