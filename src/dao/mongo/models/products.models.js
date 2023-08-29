import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productsCollection = "products";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    code: {
        type:String,
        unique:true,
    },
    price: Number,
    category: String,
    stock: Number,
    status: Boolean,
    // thumbails : array de strings-- rutas de imagenes
});

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model(productsCollection,productSchema);

export default productModel