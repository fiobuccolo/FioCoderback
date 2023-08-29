import { ProductsService } from "../services/index.service.js"

    const getProducts = async (req,res) =>{ 
        try {
            const products = await  ProductsService.getAllProducts();
            console.log("en el controller")
            res.json({status:"success", message: products})  
        } catch (error) {
            res.satus(500).json({status:"error", error: error.message})  
        }
    }

    const getProduct = async (req,res) =>{ 
        try {
            console.log("get one product")
            const { id } = req.params;
            console.log("controler", id)
            const product = await  ProductsService.getProduct(id)
            //console.log(product.message)
            console.log(product)
            if(!product){
                return res.json({status:"success", message: "Product not found", payload:product}) }
            res.json({status:"success", message: product})  
        } catch (error) {
        res.status(500).json({status:"error", error: error.message})  
        }
    
    }

    const addProduct = async (req,res) =>{ 
        try {
            console.log("add products controller 1")
            const newProduct = req.body
            const { name,description,price,category,stock,code } = req.body
            if ( !name || !description || !price || !category || !stock || !code)
            return res.send("Datos incompletos")
            product =  await ProductsService.insertProduct(newProduct)
            console.log("add product controller 2 ") 
            return res.status(201).json({status:"success", message:product})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
    }

    const updateProduct = async (req,res) =>{ 
    try {
        console.log("update products")
        const { pid } = req.params;
        const props = req.body;
            console.log(pid)
            const product = await ProductsService.updateProduct(pid, props)
            // --- VER COMO TRAER CON LOS ATRIBUTOS NUEVOS
            return res.status(200).json({status:"success", message:product})
    } catch (error) {
        res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
    }
    }

    const deleteProduct = async (req,res) =>{ 
        try {
            console.log("delete products")
            const { pid } = req.params;
            const product = await ProductsService.deleteProduct(pid)
            return res.status(200).json({status:"success", message:product})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
     
    }


export default {    
    getProducts,
    getProduct, 
    addProduct,
    updateProduct,
    deleteProduct
}



