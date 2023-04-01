const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text : {
        type: String, 
        required: true
    },
    replies:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
    }]
})

const Comment = mongoose.model('comment', commentSchema)