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

    async update(pid,quantity) {
        try {
         // ----- PENDINGGG ------
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



