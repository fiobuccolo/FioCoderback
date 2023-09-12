import ProductService from "../../../services/products.service.js";
import cartModel from "../models/cars.models.js";

export default class CartManager {
    static #instance
    constructor() {
        CartManager.#instance = this;
    }

    async getCartsManager (){  
        try {
            console.log("estoy en el manager")
             return await cartModel.find().lean()
        } catch (error) {
            return error
        }
    }   


    async getOne(id) {
        try {
          return await cartModel.findById(id);
        } catch (error) {
          throw error;
        }
      }
    
    async create(newCart){
        try {
            return await cartModel.create(newCart)
        } catch (error) {
            throw error;
        }
      }

      // -- PENDING: Agregarle  y eliminarle products a UN CART  

      // agregar un producto al cart
    async addProductToCart (cid,product) {
        try {
          console.log("addProductToCart manager")
          console.log(cid,product)
          return await cartModel.updateOne({ _id: cid }, { $push:{products:product}});
        } catch (error) {
          throw error;
        }
     }
// actualizar cantidad en un producto que ya esta en el cart
     async updateCart (cid,product) {
      try {
        console.log("updateCart manager")
        console.log("product quantity", product.quantity)
        console.log("product id", product.id)
        const data = await cartModel.updateOne({ _id: cid }, { $set:{products:product}});
        // const data =  await cartModel.findOne(
        //   {_id: cid, "products._id": product.id},
        // // { $set:{ 'products.quantity': product.quantity}},
        //     )
        console.log(data)
        return data
      } catch (error) {
        throw error;
      }   
   }

     

    

       // Eliminar UN CART completamente
    async deleteCart(cid){
        try {
            return await cartModel.deleteOne({ _id: pid })
        } catch (error) {
            throw error;
        }
      }

}



