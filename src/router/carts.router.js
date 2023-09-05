import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";

const cartsRouter = Router();

cartsRouter.get("/", cartsController.getCarts)
cartsRouter.get("/:id", cartsController.getCart)
cartsRouter.post("/", cartsController.addCart); 

// --- PENDING:

//cartsRouter.patch('/:pid',cartsController.updateProduct)  -- // solo el usuario puede agregar productos al carrito, agregar middleware --> passportCall("jwt"), authorization("user")
//cartsRouter.delete('/:pid',cartsController.deleteProduct); 



// # implementar en el router de carts, la ruta /:cid/purchase, la cual permitira finalizar el proceso de compra
//     # l a compra debe corroborar el stock del producto al momento de finalizarse
//         # si el producto tiene stock -- restar del stock y continuar
//         # si el producto NO tiene stock -- no agregar el prodducto al proceso de comrpa

export default cartsRouter  