const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
    try {
        let userData = req.body;
        let createdUser = await userModel.create(userData);
        return res.status(201).send({ status: true, data: createdUser });
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

exports.login = async (req, res) => {
    try {

        let { email, password } = req.body

        if (!email || !password) return res.status(400).send({ status: false, message: "plz provide both email and password" })

        let user = await userModel.findOne({ email : email, password : password })

        if (!user) return res.status(400).send({ status: false, message: "plz provide valid email or password" })

        let token = jwt.sign({ email: user.email }, "bonusProject", {
            expiresIn: "1h"
        })

        return res.status(200).send({ token })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}