const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const postSchema = new mongoose.Schema({
    post : {
        type: String,
        required: true
     },
     user : {type : ObjectId, ref : "post"},
    content: {
        type: String,
         required: true
    },
    comment: [{
        type: ObjectId,
        ref: 'comment'
    }],
    
    isdeleted : {type : Boolean, default : false}
})

module.exports = mongoose.model('post', postSchema)