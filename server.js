const express = require("express");
const port = process.env.PORT||3000;
const ejs = require("ejs");
const path = require("path");
const layouts = require("express-ejs-layouts");
const app = express();


app.use(express.static('public'));
app.use(layouts);
app.set("views",path.join(__dirname,"resources/views"));
app.set("view engine","ejs");


app.get("/",(req,res)=>{
res.render("index");
});
app.get("/cart",(req,res)=>{
res.render("coustomer/cart");
});
app.get("/login",(req,res)=>{
res.render("auth/login");
});
app.get("/register",(req,res)=>{
res.render("auth/register");
});


app.listen(port,()=>{
	console.log(`listening to${port}`);
});