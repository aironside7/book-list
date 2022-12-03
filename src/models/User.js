const mongoose= require("mongoose")
const jwt = require("jsonwebtoken")
const bycrypt =require("bcrypt")
const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true,
    },
    cpassword:{
        type: String,
        required:true,
    }

})
// userSchema.pre("save",async function(next){
//     if(this.isModified("password")){
//         this.password= await bycrypt.hash(this.password,12)
//     }
//     next()
// })
// userSchema.methods.generateAuthToken=async function(){
//     try {
//          let token = jwt.sign({_id:this.id},"MYNAMEISANIRBANIAMDOINGBOOKLIST")
//          return token
//     }catch(err){
//         console.log(err)
//     }
// }
  

const Usercol= mongoose.model("usercol", userSchema)
module.exports=Usercol