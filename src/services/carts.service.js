

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

    addProductToCart = (cid,product) => {
        console.log("addProductToCart service")
        console.log(cid, product)
        //return this.dao.getProxductoById(id)
        return this.dao.addProductToCart(cid,product)
    }

    updateCart = (cid,product) => {
        console.log("updateCart service")
        console.log(cid, product)
        //return this.dao.getProxductoById(id)
        return this.dao.updateCart(cid,product)
    }

}