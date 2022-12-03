const router = require("express").Router();
const Usercol= require("../models/User")
const {Router,json} =require("express")

const {compare} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const SECRET = process.env.SECRET || "this is a secret";

// router.get("/", (req, res) => res.send("<h2>Login</h2>"))

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await Usercol.findOne({username});

        if (!user) {
           return res.status(400).json({
                status: "No such user exists"
            })
        }
        
        //compare 
        const isPassValid = await compare(password, user.password);

        if(!isPassValid) {
            return res.status(400).json({
                status: "wrong password"
            })
        }
        console.log(user, "login");

        //sign token
        const accToken = sign({userId: user._id, username: user.username}, SECRET, {expiresIn: "12d"});

        res.status(200).json({
            status: "success",
            message: "User successfully logged in",
            payload: accToken
        })
    } catch(err) {
        res.status(500).json({
            status: "failed",
        })
    }
});

module.exports=router;