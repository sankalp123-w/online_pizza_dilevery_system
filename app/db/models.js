
const mongoose = require("mongoose");
const validator = require("validator");

const student = new mongoose.Schema({
 name:{
  type:String,
  require:true,
 },
 image:{
type:String,
 	require:true,	
},
 price:{
 type:Number,
 require:true

 },
 size:{
 	type:String,
 	require:true,
 }


});
const classes = new mongoose.model("menue",student);
module.exports=classes;