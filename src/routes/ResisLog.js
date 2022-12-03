const {Router,json} =require("express")
const exprees =require("express")
const router = exprees.Router()
const jwt = require("jsonwebtoken")
const bycrypt =require("bcrypt")

const Usercol= require("../models/User")
// const Userbookcol = require("../models/UserBook")

router.use(exprees.json())

router.post("/resister",async(req,res)=>{
    const {username,password,cpassword}=req.body
    if(!username || !password || !cpassword){
        return res.status(422).json({err:"fill data poperly"})
    }
    try{
        const userExist = await Usercol.findOne({username:username})
        if(userExist){
            return res.status(422).json({err:"username already present"})

        }else if(password!=cpassword){
            return res.status(422).json({err:"password not matching"})

        }
        const userData = new Usercol({username,password,cpassword})
        const userRegis= await userData.save()
        if (userData){
            res.json({messege:"success"})
        }
    }catch(err){
     console.log(err)
    }

})

router.post("/signin" ,async(req,res)=>{
    try{
        const {username,password}=req.body
        if(!username,!password){
            return res.status(404).json({
                err:"fill data porerly"
            })
            
        }
        const userLogin= await Usercol.findOne({username:username})
        if(userLogin){
            const passMatch= await bycrypt.compare(password,userLogin.password)
            const token = await userLogin.generateAuthToken()
            if(!passMatch){
                res.json({messege:"password not matched"})
            }else{
                res.json({messege:"login succesfull"})
            }
        }else{
            res.json({messege:"email not matched"})

        }
        
        
        

    }
    catch(err){
        console.log(err)
       }
} )

// router.post("/userbooks",async(req,res)=>{
//     const {title,isbn,author,description,pdate,pbook}=req.body
//     if(!title || !author || !description ||!isbn || !pdate || !pbook){
//         return res.status(422).json({err:"fill data poperly"})
//     }
//     try{
       
//         const userbookData = new Userbookcol({title,isbn,author,description,pdate,pbook})
//         const userbookRegis= await userbookData.save()
//         if (userbookData){
//             res.json({messege:"success"})
//         }
//     }catch(err){
//      console.log(err)
//     }

// })

module.exports=router