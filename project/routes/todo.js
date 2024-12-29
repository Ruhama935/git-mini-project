const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

router.post("/", todoController.createNewTodo)
router.get("/", todoController.getAllTodos)
router.put("/", todoController.updateTodo)
router.delete("/:_id", todoController.deleteTodo)
router.put("/:_id", todoController.todoComplete)

module.exports = router