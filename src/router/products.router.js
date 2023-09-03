import { Router } from "express";
import productsController from "../controllers/products.controller.js"
//import adminControllers from "../controllers/admin.controllers.js";
import authorization from "../middleware/authorization.middleware.js";
import passportCall from "../utils/passportCall.utils.js";

const productsRouter = Router();

productsRouter.get("/",authorization("superAdm"), productsController.getProducts);
//productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:id", productsController.getProduct)
productsRouter.post("/", productsController.addProduct); // solo el adminsitrador, agregar middleware --> passportCall("jwt"), authorization("admin")
productsRouter.patch('/:pid',productsController.updateProduct) // solo el adminsitrador, agregar middleware --> passportCall("jwt"), authorization("admin")
productsRouter.delete('/:pid',productsController.deleteProduct); // solo el adminsitrador, agregar middleware --> passportCall("jwt"), authorization("admin")
//productsRouter.delete('/:pid', passportCall("jwt"), authorization("admin"),productsController.deleteProduct); 


export default productsRouter  



//adminRouter.get("/private", passportCall("jwt"), authorization("admin"),  (req,res) =>{
  //  res.json({message: "si estas viendo esto sos admin"})
// }


// Yo a cada ruta, segun lo permitido por el admin o el user le tengo que poner asi el middleware de autorizacion.

// pero la authorizaciont no tiene nada que ver con el registro, sino con el login-

// >> log in le asigno un token >> en el authorization valido el role 