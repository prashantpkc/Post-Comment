const postModel = require('../models/postModel')
exports.createPost = async(req, res)=> {
    try{
        let data = req.body
        let uploadedPost = await postModel.create(data)

        res.status(201).send({status:true, data:uploadedPost, message: 'Post created succesfully'})
    }catch(err){
        res.status(500).send({status:false, message: err.message})
    }

}
