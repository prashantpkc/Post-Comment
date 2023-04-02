const commentModel = require('../models/commentModel')

exports.createComment = async(req, res)=> {
    try{
        let data = req.body
        let comment = await commentModel.create(data)

        res.status(201).send({status:true, data:comment, message: 'comment created succesfully'})
    }catch(err){
        res.status(500).send({status:false, message: err.message})
    }
}


exports.repliesComment = async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.commentId);
      if (!comment) {
        return res.status(404).send({ message: "Comment not found" });
      }
      comment.replies.push(req.body);
      const updatedComment = await Comment.create(comment);
      return res.status(201).send(updatedComment);
    } catch (error) {
      
      return res.status(500).send({status:false, message: err.message})
    }
  };
  
exports.updateComment = async (req,res) => {
    try {
        let commentId = req.params.commentId
        let comment = req.body

        let updatedComment = await commentModel.findByIdAndUpdate({_id : commentId}, {text : comment}, {new : true});

        return res.status(200).send({status : true, data : updatedComment});
    } catch (error) {
        res.status(500).send({status : false, message : error.message})
    }
}

exports.deleteComment = async (req,res) => {
    try {
        
        const commentId = req.params.commentId;

        const findComment = await commentModel.findByIdAndUpdate({_id:commentId},{isDeleted : true});
         if(!findComment){
            return res.status(404).send({status : false, message : "comment not found"})
         }
         else{
            return res.status(200).send({status : false, message : "comment is deleted"})
         }
    } catch (error) {
        res.status(500).send({status : false, message : error.message});
    }
}

