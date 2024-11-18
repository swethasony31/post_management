let express=require("express")
const { adduser, login,islogin } = require("../controlers/usercon")
const { addpost, getposts, getbycat, getdonebyme, delpost, upd, getrposts, accept, updrv } = require("../controlers/postcont")
let route=new express.Router()
route.post("/adduser",adduser)
route.post("/login",login)


route.post("/addpost",islogin,addpost)
route.get("/get",getposts)
route.get("/getbycat/:cat",getbycat)
route.get("/getdonebyme/:uid",islogin,getdonebyme)
route.delete("/delpost/:pid",islogin,delpost)
route.put("/upd",islogin,upd)
route.get("/getrposts",islogin,getrposts)
route.get("/accept/:pid",islogin,accept)
route.put("/updrv",islogin,updrv)
module.exports=route