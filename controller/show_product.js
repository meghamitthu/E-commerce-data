var product = require('../model/productModel');

module.exports.show_product = async function(req,res){
    try{
        let data = await product.find()
        res.send(data)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}