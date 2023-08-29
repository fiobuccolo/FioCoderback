import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


const cartsCollection = "carts";

const cartSchema = new mongoose.Schema({
    products: [{
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        quantity: Number,
    }]
});

cartSchema.plugin(mongoosePaginate)

const cartModel = mongoose.model(cartsCollection,cartSchema);

export default cartModel