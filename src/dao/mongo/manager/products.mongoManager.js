import productModel from "../models/products.models.js";

export default class ProductManager {
    static #instance
    constructor() {
        ProductManager.#instance = this;
    }

    async getProductsManager (){  
        try {
            console.log("estoy en el manager")
             return await productModel.find().lean()
        } catch (error) {
            return error
        }
    }   

    async paginateProducts(limit,page, filter,sort){ 
      try {
        console.log(limit,page, filter,sort)
         const producs = await productModel.paginate(filter,{page, limit, sort, lean:true}); 
        console.log(`desde el managerproducs`)
        console.log(producs)
         return producs
      } catch (error) {
        return error
      }
      
      }

    async getProductoByCode(code){
       const product = await productModel.findOne({code: code});
       if(!product) {
          return ({message: "Product not found"});
         }
         return product
     } 

    async getOne(id) {
        try {
          return await productModel.findById(id);
        } catch (error) {
          throw error;
        }
      }
    
    async insert(newProduct){
        try {
            return productModel.create(newProduct)
        } catch (error) {
            throw error;
        }
      }

 // --- PATCH: UPDATE se puede hacer con findByIdAndUpdate o con updateOne -------- para el POST deberia usar replaceOne() ?

    // async updateProduct (pid, props) {
    //     return await productModel.findByIdAndUpdate(pid, props)
    // }

    async updateProduct(pid, props) {
        try {
          return await productModel.updateOne({ _id: pid }, { $set: props });
        } catch (error) {
          throw error;
        }
      }

    async deleteProduct(pid){
        try {
            return await productModel.deleteOne({ _id: pid })
        } catch (error) {
            throw error;
        }
      }

}



