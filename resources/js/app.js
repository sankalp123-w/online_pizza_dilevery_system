import axios from 'axios';
import Noty from "noty";
import { initAdmin } from './admin'
let cartbutton = document.querySelectorAll('.add-to-cart');
let cart_counter =document.querySelector('.cart_counter');
function updateCart(pizza){
	axios.post("/updatecart",pizza).then(res=>{
    cart_counter.innerText=res.data.totalQty;
    new Noty({
    	type:"success",
 text: "Item Added to cart",
  timeout:1000

}).show();
    
}).catch(err=>{
new Noty({
    	type:"error",
 text: "can't add item to cart try later",
  timeout:1000

}).show();

});}
cartbutton.forEach((btn)=>{

btn.addEventListener("click",(e)=>{
 let pizza=JSON.parse(btn.value);
    updateCart(pizza);
})

});

var ale = document.querySelector('.ale');

if(ale){

 setTimeout(
function(){ ale.style.display="none"; },2000);
}

if(window.location.pathname.includes('adminorders')){
 initAdmin();
}

