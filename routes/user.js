const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
//  get user LIST
router.get("/", userController.fetch);
// get user
router.get("/:id", userController.getUser);
// update USer
router.post("/:id", userController.updateUser);
// delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
