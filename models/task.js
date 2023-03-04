const mongoose = require('mongoose')

const taskschema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'yo put somethin'],
        trim: true,
        maxlength:[20,'20 se jyada nahi be']
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('task',taskschema)