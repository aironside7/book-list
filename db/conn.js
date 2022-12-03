const mongoose = require("mongoose")
const DB= "mongodb+srv://1234:1234@cluster0.ghx9edb.mongodb.net/booklist?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("server connecrted")
}).catch((err)=>{
    console.log("server not connecting")
})
