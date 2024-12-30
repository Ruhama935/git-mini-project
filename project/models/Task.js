const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    tags:{
        type: [String]
    },
    comleted:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true
})
module.exports = mongoose.model("Task", taskSchema)