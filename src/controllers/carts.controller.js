import { ProductsService } from "../services/index.service.js"
import { CartsService } from "../services/index.service.js";

    const getCarts = async (req,res) =>{ 
        try {
            const carts = await  CartsService.getAllCarts();
            console.log("en el controller")
            res.json({status:"success", message: carts})  
        } catch (error) {
            res.satus(500).json({status:"error", error: error.message})  
        }
    }

    const getCart = async (req,res) =>{ 
        try {
            console.log("get one cart")
            const { id } = req.params;
            console.log("controler", id)
            const cart = await  CartsService.getCart(id)
            if(!cart){
                return res.json({status:"success", message: "Cart not found", payload:cart}) }
            res.json({status:"success", message: cart})  
        } catch (error) {
        res.status(500).json({status:"error", error: error.message})  
        }
    
    }

    const addCart = async(req,res) => {
        try {
            const newCart = req.body;
            const cart = await  CartsService.addCart(newCart)
            console.log("add Cart controller ") 
            return res.status(201).json({status:"success", message:cart})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
    }

// ------ PENDING DE HACER Y PROBAR --------
    const addProductToCart = async (req,res) =>{ 
        try {
            console.log("add Products to Cart controller 1")
            const { pid , cid } = req.params;
        // VALIDACIONES PENDING:
            // 1. Existe el CID?
             const cart1 = await  CartsService.getCart(cid)
             console.log(cart1)
                // No: MSJ DE ERROr 
                if(!cart1){
                    return res.json({status:"success", message: "Cart not found"}) }
                // SI: Next
                    //Existe el producto:
                    const product = await ProductsService.getProduct(pid)
                    //console.log(product)
                        //NO: MSJ DE ERROR
                        if(!product){
                            return res.json({status:"success", message: "Product not found"}) }
                        //SI: next
                            // Existe el producto en el carrito:
                            console.log(cart1.products[1])
                            const productInCart = cart1.products.find(p => p.id === pid);
                            console.log("product in cart", productInCart)
                                // SI: Sumarle una cantidad
                                if(productInCart){
                                    
                                    // const newQuantity = productInCart.quantity += 1;
                                     const newProduct = {
                                           id: pid, 
                                            quantity: productInCart.quantity += 1
                                     } 
                                     const cartUpdated = await CartsService.updateCart(cid,newProduct)
                                     return res.status(201).json({status:"success", message:cartUpdated})
                                }
                                // NO: AGregarleo
                                 else{
                                    console.log("No entro por indice producto")
                                   const value = 1                         
                                       //console.log(cid,pid,value)
                                       const newProduct = {
                                             id: pid,
                                          quantity: 1
                                         } 
                                         const cartUpdated = await CartsService.addProductToCart(cid,newProduct)
                                         return res.status(201).json({status:"success", message:cartUpdated})
                                    }
                                       
                                 
                                    console.log(cartUpdated)
                     return res.status(201).json({status:"success", message:cartUpdated})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
    }


export default {    
    getCarts,
    getCart,
    addCart,
    addProductToCart
}



