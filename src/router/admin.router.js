import { Router } from "express";
//import adminControllers from "../controllers/admin.controllers.js";
//import authorization from "../middleware/authorization.middleware.js";


const adminRouter = Router();


//adminRouter.get("/private", passportCall("jwt"), authorization("admin"),  (req,res) =>{
  //  res.json({message: "si estas viendo esto sos admin"})
// }


// Yo a cada ruta, segun lo permitido por el admin o el user le tengo que poner asi el middleware de autorizacion.

// pero la authorizaciont no tiene nada que ver con el registro, sino con el login-

// >> log in le asigno un token >> en el authorization valido el role 

export default adminRouter  



