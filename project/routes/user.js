const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/", userController.createNewUser)
router.get("/", userController.getAllUsers)
router.put("/", userController.updateUser)
router.delete("/:id", userController.deleteUser)


module.exports = router