import {UsersService } from "../services/index.service.js"
import { createHash, isValidPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.utils.js";


    // get users
    const getUsers = async (req,res) =>{ 
        try {
            const users = await UsersService.getAllUsers();
            console.log("en el controller")
            res.json({status:"success", message: users})  
        } catch (error) {
            res.status(500).json({status:"error get users", error: error.message})  
        }
    }

    // LOGIN

    const getUser = async (req,res) =>{ 
        try {
            console.log("get one user")
            const { email, password, role } = req.body;
            if ( !email || !password)
                return res.status(400).json({status:"error", message: "Datos incompletos"})  
            const user = await UsersService.findUser(email)
            console.log(user)
            if(!user){ 
                return res.json({status:"success", message: "User not found", payload:user}) }
            // --- PENDING VALIDACIÖN DE CONTRASEÑA ----
            if(!isValidPassword(user,password))
                return res.status(403).json({status:"error", message: "Datos incorrectos"})
           delete user.password
            // registro de sesión:
                // sí existe el usuario, Créale una SESIÓN:
            req.session.user = {
                name: `${user.first_name} ${user.last_name}`,
                email:user.email,
                role: user.role
            }
            // Generación de token:
                const token = generateToken(user)
            res.cookie("authToKen",token, {maxAge:300000,httpOnly:true}).json({status:"success", message: "User logged in"})  
           
        } catch (error) {
        res.status(500).json({status:"error del get User", message: error.message})  
        }
    
    }
    
    // REGISTER
    const addUser = async (req,res) =>{ 
        try {
            console.log("add users controller 1")
            const { first_name,last_name,email,password, role } = req.body
            if ( !first_name || !last_name || !email || !password )
            return res.status(400).json({status:"error", message: "Datos incompletos"})
            //--- PEnding: validación de cliente existente
                // const exist = users.find((user)=> user.email === email)
                // if(exist){ return res.status(400).json({status:"error", message: "El usuario ya existe"})}
            const newUser = {
                first_name,
                last_name,
                email,
                password: createHash(password),
                role
            }
            const user =  await UsersService.insertUser(newUser)
            console.log("add user controller 2 ") 
            return res.status(201).json({status:"success", message: user})
        } catch (error) {
            res.status(500).json({status:"error del add user", message: error.message, ecode: error.code})  
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


