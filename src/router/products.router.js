import { Router } from "express";
import productsController from "../controllers/products.controller.js"
//import adminControllers from "../controllers/admin.controllers.js";
import authorization from "../middleware/authorization.middleware.js";
import passportCall from "../utils/passportCall.utils.js";

const productsRouter = Router();

productsRouter.get("/", productsController.getProducts);

productsRouter.get("/:id", productsController.getProduct)
productsRouter.post("/", authorization("admin"), productsController.addProduct); // solo el adminsitrador, agregar middleware --> passportCall("jwt"), authorization("admin")
productsRouter.patch('/:pid',authorization("admin"),productsController.updateProduct) // solo el adminsitrador, agregar middleware --> passportCall("jwt"), authorization("admin")
productsRouter.delete('/:pid',authorization("admin"),productsController.deleteProduct); // solo el adminsitrador, agregar middleware --> passportCall("jwt"), authorization("admin")



export default productsRouter  


