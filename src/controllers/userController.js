const userModel = require("../models/userModel");

exports.createUser = async (req,res) => {

    try {

         let userData = req.body;

         let createdUser = await userModel.create(userData);
        return res.status(201).send({status : true, data : createdUser});

        
        
    } catch (error) {
        res.status(500).send({status : false, message : error.message});
    }
}