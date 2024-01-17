const jwt = require('jsonwebtoken');
const UsersModel = require('../Models/user.model');
const httpStatusCode = require('http-status-codes');

const protect =async (req,res,next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await UsersModel.findById(decodedToken._id)
        if(!user){
            throw new Error("Invalid Token")
        }
        req.user = {id:user._id}
        next()
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({massage:error})
    }
}

module.exports = protect