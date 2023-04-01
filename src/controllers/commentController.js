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

exports.updateComment = async (req,res) => {
    try {
        let commentId = req.params.commentId
        let comment = req.body

        let updatedComment = await commentModel.findByIdAndUpdate({_id : commentId}, {text : comment}, {new : true});

        return res.status(200).send({status : "dilleep", data : updatedComment});
    } catch (error) {
        res.status(500).send({status : false, message : error.message})
    }
}

