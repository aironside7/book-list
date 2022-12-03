const { Router, json } = require("express");
const exprees = require("express");
const router = exprees.Router();
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

// const Usercol= require("../models/User")
const Userbookcol = require("../models/UserBook");

router.use(exprees.json());

router.post("/userbooks", async (req, res) => {
    
  // if(!title || !isbn ||!author || !description  || !pdate || !pbook){
  //     return res.status(422).json({err:"fill data poperly"})
  // }
  try {
    
    const {userId,username}=req.payload
  const {title,isbn,author,description,pdate,pbook}=req.body
  if(!title || !isbn ||!author || !description  || !pdate || !pbook){
      return res.status(422).json({err:"fill data poperly"})
  }
    // const userbookData = new Userbookcol({title,isbn,author,description,pdate,pbook,userId})
    // const userbookRegis=  userbookData.save()
    // if (userbookData){
    //     res.json({messege:"success"})
    // }
    // const { title, isbn, author, description, pdate, pbook } = req.body;

    const userbookData = await Userbookcol.create({
      userId,
      title,
      isbn,
      author,
      description,
      pdate,
      pbook,
    });
    res.json({
      staus: "success",
      userbookData
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
