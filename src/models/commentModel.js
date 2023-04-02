const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const commentSchema = new mongoose.Schema({
    text : {
        type: String, 
        required: true
    },
    replies:[{
        type: String,
        // ref: 'comment'
    }],
    userId: { type: ObjectId, required: true, ref: "user" },

    isDeleted : {type : Boolean, default : false}

})

module.exports = mongoose.model('comment', commentSchema);