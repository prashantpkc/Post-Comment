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

