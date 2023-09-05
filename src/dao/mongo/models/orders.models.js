
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
    code: {
        type:Number,
        unique:true,
    },
    totalPrice: Number,
    products: [{
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        quantity: Number,
    }],
    user:[{
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
    }],
}, {
timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
}
}
);

collectionSchema.pre("find", function () {
    this.populate("products").populate("user");
  });

  orderSchema.plugin(mongoosePaginate)

const OrderModel = mongoose.model(ordersCollection,orderSchema);

export default OrderModel