const homeController = require("../app/http/controllers/homeController");
const cartController = require("../app/http/controllers/coustomers/cartController");
const authController = require("../app/http/controllers/authController")
const preventlogandreg = require("../app/http/middlewares/guest");
const call =(app)=>{
app.get("/" , homeController().index);
app.get("/cart",cartController().index);
app.get("/login",preventlogandreg,authController().login);
app.post("/login",authController().postLogin);
app.post("/logout",authController().logout);
app.get("/register",preventlogandreg,authController().register);
app.post("/register",authController().postRegister);
app.post("/updatecart",cartController().update);

};

module.exports = call;