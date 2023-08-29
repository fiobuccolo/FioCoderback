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
                // No: MSJ DE ERROr 
                // SI: Next
                    //Existe el producto:
                        //NO: MSJ DE ERROR
                        //SI: next
                            // Existe el producto en el carrito:
                                // NO: AGregarleo
                                // SI: Sumarle una cantidad



            // const quantity = req.body
            const cart = await  CartsService.XXXcart(cid,pid)
            return res.status(201).json({status:"success", message:cart})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
    }


export default {    
    getCarts,
    getCart,
    addCart
}



