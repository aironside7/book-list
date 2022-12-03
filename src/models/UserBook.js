const mongoose= require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const Usercol= require("../models/User")
const userBooksch= new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:Usercol,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    isbn:{
        type: String,
        required:true,
    },
    author:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    pdate:{
        type: String,
        required:true,
    },
    pbook:{
        type: String,
        required:true,
    },
    

})

const Userbookcol = mongoose.model("userbookcols", userBooksch)
module.exports=Userbookcol