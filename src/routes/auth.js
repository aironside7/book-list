const {verify} = require("jsonwebtoken");
const SECRET = process.env.SECRET || "this is a secret";
const {Router,json} =require("express")

const auth = (req, res, next) => {
    try {
        const authStr = req.headers.authorization;
        if (!authStr) {
            return res.status(401).json({
                status: "failed",
                message: "this is a protected route provide token"
            });
        }

        const accToken = authStr.split(" ")[1];
        const decoded = verify(accToken, SECRET);
        req.payload = {userId: decoded.userId, username: decoded.username};
        next();
    } catch(err) {
        if (err.name ==="JsonWebTokenError") {
            res.status(401).json({
                status: "failed"
            })
        }

        res.status(500).json({
            status: "failed"
        })
    }
}

module.exports=auth;