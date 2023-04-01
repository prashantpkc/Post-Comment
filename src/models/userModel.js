const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({

    userName : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    // posts : {type : ObjectId, ref : "post"},
    // comment : {type : ObjectId, ref : "comment"}
})

module.exports = mongoose.model("user",userSchema);