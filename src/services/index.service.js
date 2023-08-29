import ProductService from "./products.service.js";
import ProductManager from "../dao/mongo/manager/products.mongoManager.js";
import CartService from "./carts.service.js";
import CartManager from "../dao/mongo/manager/carts.mongoManager.js";
import UserService from "./users.service.js";
import UserManager from "../dao/mongo/manager/users.mongoManager.js";

export const ProductsService = new ProductService(new ProductManager())
export const CartsService = new CartService(new CartManager())
export const UsersService = new UserService(new UserManager())