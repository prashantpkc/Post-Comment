
// authentication part
const jwt = require('jsonwebtoken')

exports.authenticate = async function (req, res, next) {

    try {
        let token = req.headers['x-api-key'];
        if (!token) return res.status(400).send({ status: false, message: "token is mandatory" });
        
        jwt.verify(token, "bonusProject", function (err, data) {

            if (err) {
                return res.status(401).send({ status: false, message: err.message })
            }
            else {
                req['userId'] = data.userId;
                next();
            }
        })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}