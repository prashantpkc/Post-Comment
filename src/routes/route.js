const express = require('express')
const router = express.Router()

const {createPost,updatePost,deletePost} = require ("../controllers/postController");
const {createUser} = require("../controllers/userController")

router.post("/createUser", createUser);
router.post("/uploadPost", createPost);
router.put("/updatePost/:postId", updatePost);
router.delete("/deltePost/:postId", deletePost);



module.exports = router