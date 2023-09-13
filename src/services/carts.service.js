

export default class CartService{
    constructor(dao) {
        this.dao = dao
    }

    getAllCarts = () => {
        console.log("hola desde el service de get carts")
        return this.dao.getCartsManager()
    };

    getCart = (id) => {
        console.log("get cart service")
        console.log("service", id)
        //return this.dao.getProductoById(id)
        return this.dao.getOne(id)
    }

    addCart = (newCart) =>{
        console.log("add cart service")
        //return this.dao.getProductoById(id)
        return this.dao.create(newCart)
    }

    addProductToCart = (cid,create) => {
        console.log("addProductToCart service")
        console.log(cid, create)
        //return this.dao.getProxductoById(id)
        return this.dao.addProductToCart(cid,create)
    }

    updateCart = (cid,pid) => {
        console.log("updateCart service")
        console.log(cid, pid)
        //return this.dao.getProxductoById(id)
        return this.dao.updateCart(cid,pid)
    }

}