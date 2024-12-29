const express = require("express")
const router = express.Router()
const postController = require("../controllers/postController")

router.post("/", postController.createNewPost)
router.get("/", postController.getAllPosts)
router.put("/", postController.updatePost)
router.delete("/:_id", postController.deletePost)
router.put("/:_id", postController.postLike)

module.exports = router