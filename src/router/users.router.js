import { Router } from "express";
import authControllers from "../controllers/auth.controllers.js";


const usersRouter = Router();

usersRouter.get("/users", authControllers.getUsers);
usersRouter.get("/login", authControllers.getUser);
usersRouter.post("/register", authControllers.addUser); 

 

//usersRouter.get("/", usersController.getProducts);
//usersRouter.patch('/:id',usersController.updateUser)
//usersRouter.delete('/:id',usersController.deleteUser); 



export default usersRouter  