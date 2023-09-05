// import router from "./index.router";

// router.get("/private", verifyToken,(req,res)=>{
//     res.send("Private Route", req.user)
// })


import { Router } from "express";
import productsController from "../controllers/products.controller.js"


const viewsRouter = Router();

viewsRouter.get("/products", productsController.viewsGetProducts)



export default viewsRouter  







