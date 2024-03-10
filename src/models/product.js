const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    //image: String,
    category: String,// - Categoría  "Camisetas", "Pantalones", "Zapatos", "Accesorios".
    size: String,// - Talla  "XS", "S", "M", "L", "XL"
    price: Number
},{timestamps:true})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product
// {
//     "title": "jean",
//     "image": "alt",
//     "category: "Pantalones",
//     "size": "XS",
//     "price": "25"
//     }