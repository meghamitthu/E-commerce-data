var product = require('../model/productModel');

module.exports.new_product = async function(req,res){
    try{
    let product_input = new product({
        "product_name": req.body.product_name,
        "product_price": req.body.product_price,
        "product_image": req.body.product_image
    })
    let data = await product_input.save()
    res.send(data)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}