import { Router } from "express";
import productsRouter from "./products.router.js";
import cartsRouter from "./carts.router.js";
import usersRouter from "./users.router.js";
//import adminRouter from "./admin.router.js";
//import adminRouter from "./admin.router.js";

const router = Router();

router.use("/products",productsRouter)
router.use("/carts",cartsRouter)
router.use("/",usersRouter)
//router.use("/admin",adminRouter)

export default router;

// const router = app =>{
   // app.use("/api/products",productsRouter)
// }