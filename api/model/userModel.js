const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    email:{
        type: String,
        required: true
    },
    userName: String
})

module.exports = mongoose.model("Users", userSchema)