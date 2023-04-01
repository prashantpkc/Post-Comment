const postModel = require("../models/postModel")
const mongoose = require('mongoose')

exports.createPost = async (req, res) => {
    try {
        let data = req.body
        let uploadedPost = await postModel.create(data)

        return res.status(201).send({ status: true, data: uploadedPost })
    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

}

exports.updatePost = async (req,res) => {
    try {
        
       // const userId = req.params.userId
        const postId = req.params.postId

        let data = req.body

        let updatedPost = await postModel.findByIdAndUpdate({_id:postId},{$set :{post : data.post}},{new : true})
        
        return res.status(200).send({status : true, updatePost : updatedPost});
        
    } catch (error) {
        res.status(500).send({status : false, message : error.message});
    }
}

exports.deletePost = async (req,res) => {
    try {
        
        // const userId = req.params.userId
        const postId = req.params.postId

        let deltedPost = await postModel.findByIdAndUpdate({_id:postId},{$set :{isdeleted:true}},{new : true})
        
        return res.status(204).send({status : true, message : deltedPost});
    } catch (error) {
        res.status(500).send({status : false, message : error.message});
    }
}