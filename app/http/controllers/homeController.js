const Menues = require('../../db/models')
function homeController() {
    return {
           
         async index(req, res) {
         	
            const pizzas = await Menues.find({})
         
          return  res.render('index',{pizzas:pizzas})
        }
    }
}

module.exports = homeController;
