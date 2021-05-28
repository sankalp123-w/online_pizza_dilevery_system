const Orders = require('../../../db/order');

function adminorderController (){

return{

    async index(req,res){
      
    Orders.find({ status: { $ne: 'completed' } }, null, { sort: { 'createdAt': -1 }}).populate('coustomerID', '-password').exec((err, orders) => {
               if(req.xhr) {
                   return res.json(orders)
               } else {
                return res.render('admin/order')
               }
           })
    }

}

}

module.exports=adminorderController;