var mongoose = require ('mongoose');
const {Schema} = mongoose;
const Products= new Schema({
    product_name: String,
    product_price: String,
    product_image: String,
})
mongoose.model('Pro', Products);
module.exports = mongoose.model('Pro');