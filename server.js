const express = require("express");
const port = process.env.PORT||3000;
const ejs = require("ejs");
const path = require("path");
const app = express();

app.use(express.static('public'));
app.set("views",path.join(__dirname,"resources/views"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
res.render("index");
});

app.listen(port,()=>{
	console.log(`listening to${port}`);
});