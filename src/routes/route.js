const express = require('express')
const router = express.Router()

const {authentication} = require("../middleware/auth")

const {createUser,login} = require("../controllers/userController")
const {createPost,updatePost,deletePost} = require ("../controllers/postController");
const {createComment,updateComment,deleteComment, repliesComment} = require("../controllers/commentController")

//user API
router.post("/createUser", createUser);
router.post("/login", login);

// post API
router.post("/uploadPost", createPost);
router.put("/updatePost/:postId", updatePost);
router.delete("/deltePost/:postId", deletePost);

// comment APi
router.post("/createComment",authentication,createComment);
router.put("/updateComment/:commentId",updateComment);
router.delete("/deleteComment/:commentId",deleteComment);

// replies api
router.post('/comments/:commentId/replies',repliesComment)


module.exports = router