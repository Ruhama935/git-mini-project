const express = require("express")
const router = express.Router()
const taskController = require("../controllers/taskController")

router.post("/", taskController.createNewTask)
router.get("/", taskController.getAllTasks)
router.put("/", taskController.updateTask)
router.delete("/:_id", taskController.deleteTask)
router.put("/:_id", taskController.taskComplete)

module.exports = router