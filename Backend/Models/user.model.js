const mongoose = require('mongoose')

const Schema = mongoose.Schema
const objectId = mongoose.Schema.Types.ObjectId

const userSchema = new Schema ({
    _id:{type:objectId, auto:true},
    _name:{type:String,required:true},
    _email:{type:String,required:true},
    _phone:{type:Number,required:true},
    _birth:{type:Date,required:true},
    _address:{type:String, required:true},
    _password:{type:String},
}, {
    versionKey:false
})

const user = mongoose.model('users',userSchema);
module.exports = user;