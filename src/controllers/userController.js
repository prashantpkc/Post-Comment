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

exports.login = async (req, res) => {
    try {
        
   
    let {email, password }= req.body

    let user = await userModel.findOne({email})

    if(!user) return res.status(400).send({status:false, message: "plz provide valud email"})

    let token = jwt.sign({email : user.email}, "dilip chutiya hai",{
        expiresIn : "1h"
    })

    return res.status.send({token})
} catch (error) {
        res.status(500).send({status:false, message:error.message})
}
}