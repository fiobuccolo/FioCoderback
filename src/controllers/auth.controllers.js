import {UsersService } from "../services/index.service.js"
import { generateToken } from "../utils/jwt.utils.js";


    // get users
    const getUsers = async (req,res) =>{ 
        try {
            const users = await UsersService.getAllUsers();
            console.log("en el controller")
            res.json({status:"success", message: users})  
        } catch (error) {
            res.status(500).json({status:"error", error: error.message})  
        }
    }

    // LOGIN

    const getUser = async (req,res) =>{ 
        try {
            console.log("get one user")
            const { email, password } = req.body;
            console.log("controler", email)

            
            const user = await UsersService.findUser(email)
            //console.log(product.message)
            console.log("usuario desde el auth controller:", user)
            if(!user){
                return res.json({status:"success", message: "User not found", payload:user}) }
            // --- PENDING VALIDACIÖN DE CONTRASEÑA ----
            
            // registro de sesión
            console.log("antes del registro de session")
            console.log("user email:",  user.email)
            
            // sí existe el usuario, Créale una SESIÓN:

            /* ???? PREGUNTA PARA TUTOR:
                si pongo req.session.user se rompe el proceso y me da error: "error": "Cannot set properties of undefined (setting 'user')""
                si pongo req.session no rompe, pero no me genera sesión-- no hace nada
            */ 
            req.session = {
                name: `${user.first_name} ${user.last_name}`,
                email:user.email
            }
            
            console.log("dp del registro de session")
            // Generación de token:
                const token = generateToken(user)
            res.cookie("authToKen",token, {maxAge:300000,httpOnly:true}).json({status:"success", message: "User logged in"})  
           
        } catch (error) {
        res.status(500).json({status:"error", error: error.message})  
        }
    
    }
    
    // REGISTER
    const addUser = async (req,res) =>{ 
        try {
            console.log("add users controller 1")
            const newUser = req.body
            const { first_name,last_name,email,role } = req.body
            if ( !first_name || !last_name || !email )
            return res.send("Datos incompletos")
            user =  await UsersService.insertUser(newUser)
            console.log("add user controller 2 ") 
            return res.status(201).json({status:"success", message:user})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
    }

   

    const deleteUser = async (req,res) =>{ 
        try {
            console.log("delete users")
            const { id } = req.params;
            const user = await UsersService.deleteUser(id)
            return res.status(200).json({status:"success", message:user})
        } catch (error) {
            res.status(500).json({status:"error", error: error.message, errorcode:error.code})  
        }
     
    }


export default {    
    getUsers,
    getUser, 
    addUser,
    deleteUser
}


