import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";

const cartsRouter = Router();

cartsRouter.get("/", cartsController.getCarts)
cartsRouter.get("/:id", cartsController.getCart)
cartsRouter.post("/", cartsController.addCart); 
//cartsRouter.patch('/:pid',cartsController.updateProduct)
//cartsRouter.delete('/:pid',cartsController.deleteProduct); 



export default cartsRouter  