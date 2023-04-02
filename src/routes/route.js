const express = require('express')
const router = express.Router()

const {createUser,login} = require("../controllers/userController")
const {createPost,updatePost,deletePost} = require ("../controllers/postController");
const {createComment,updateComment,deleteComment} = require("../controllers/commentController")

router.post("/createUser", createUser);
router.post("/login", login);

// post API
router.post("/uploadPost", createPost);
router.put("/updatePost/:postId", updatePost);
router.delete("/deltePost/:postId", deletePost);

// comment APi
router.post("/createComment",createComment);
router.put("/updateComment/:commentId",updateComment);
router.delete("/deleteComment",deleteComment);


module.exports = router