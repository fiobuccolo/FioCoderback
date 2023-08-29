import { Router } from "express";
import productsController from "../controllers/products.controller.js"


const productsRouter = Router();

productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:id", productsController.getProduct)
productsRouter.post("/", productsController.addProduct); 
productsRouter.patch('/:pid',productsController.updateProduct)
productsRouter.delete('/:pid',productsController.deleteProduct); 



export default productsRouter  