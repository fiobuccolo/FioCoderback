import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";

const cartsRouter = Router();

cartsRouter.get("/", cartsController.getCarts)
cartsRouter.get("/:id", cartsController.getCart)
cartsRouter.post("/", cartsController.addCart); 
//cartsRouter.patch('/:pid',cartsController.updateProduct)  -- // solo el usuario puede agregar productos al carrito, agregar middleware --> passportCall("jwt"), authorization("user")
//cartsRouter.delete('/:pid',cartsController.deleteProduct); 



export default cartsRouter  