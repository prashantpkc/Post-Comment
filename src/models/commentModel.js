const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const commentSchema = new mongoose.Schema({
    text : {
        type: String, 
        required: true
    },
    replies:[{
        type: mongoose.Schema.ObjectId,
        ref: 'comment'
    }],
    user : {type : ObjectId, ref : "post"},
    isDeleted : {type : Boolean, default : false}

})

module.exports = mongoose.model('comment', commentSchema)