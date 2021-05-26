const homeController = require("../app/http/controllers/homeController");
const cartController = require("../app/http/controllers/coustomers/cartController");
const authController = require("../app/http/controllers/authController")

const call =(app)=>{
app.get("/" , homeController().index);
app.get("/cart",cartController().index);
app.get("/login",authController().login);
app.get("/register",authController().register);
app.post("/updatecart",cartController().update);

};

module.exports = call;