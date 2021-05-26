const cartController= ()=>{
  return{
        index(req,res){
            res.render("coustomer/cart");
        },
        update(req,res){
        	//creating cart for first time
          if(!req.session.cart){
           req.session.cart={
            items:{}
   ,
            totalQty:0,
            totalPrice:0
           }

        }
//if cart exists 
        let cart =req.session.cart
        if(!cart.items[req.body._id]){

        	cart.items[req.body._id]={
                item:req.body,
                qty:1
        	}

        	cart.totalQty=cart.totalQty+1;
            cart.totalPrice=cart.totalPrice+req.body.price;
        }
        else{
cart.items[req.body._id].qty=cart.items[req.body._id].qty+1;
        cart.totalQty=cart.totalQty+1;
        cart.totalPrice=cart.totalPrice+req.body.price;
        }
         //console.log(req.body);
          return res.json({totalQty:req.session.cart.totalQty});
        }
  }	
};


module.exports=cartController;