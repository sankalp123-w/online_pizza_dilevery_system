const mongoose = require("mongoose");
const validator = require("validator");

const pizzaorder = new mongoose.Schema({
 coustomerID:{type:mongoose.Schema.Types.ObjectID,
         
         ref:'user',
         require:true
 },

 items:{type:Object,require:true},
 number:{
type:String,
require:true,
},
 address:{
 type:String,
 require:true
 },
 paymentType:{type:String,
 default:"cod"
 },
 status:{
 	type:String,
 	default:"ordered_Placed"
 }
}, { timestamps: true });
const orders= new mongoose.model("order",pizzaorder);
module.exports=orders;