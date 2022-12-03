// const { application } = require("express")
const exprees= require("express")
const Usercol= require("./src/models/User")
const Userbookcol = require("./src/models/UserBook")
require("./db/conn")

const app = exprees()
app.use(require("./src/routes/ResisLog"))
app.use(require("./src/routes/login"))
app.use(require("./src/routes/auth"))

app.use(require("./src/routes/Userbookres"))



app.use(require("./src/routes/Userbookres"))

const middleWare = (req,res,next)=>{
    console.log("middele")
    next()
}
app.get("/", middleWare ,(req,res)=>{
    res.send("hello")

})

app.listen(4000,()=>{
    console.log("server is up at 4000")
})