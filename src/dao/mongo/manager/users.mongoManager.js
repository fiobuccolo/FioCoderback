import userModel from "../models/users.models.js"


export default class UserManager {
     static #instance
     constructor() {
         UserManager.#instance = this;
     }

    async getUsersManager (){  
        try {
            console.log("estoy en el manager")
             return await userModel.find().lean()
        } catch (error) {
            return error
        }
    }   


    async getUserByEmail(email){
        try {
            console.log("get user by email manager")
            const user = await userModel.findOne({email: email});
            // if(!user) {
            //     return ({message: "User not found"});
            //    }
             return user
        } catch (error) {
            throw error;
        }
     } 

    async getOne(id) {
        try {
          return await userModel.findById(id);
        } catch (error) {
          throw error;
        }
      }
    
    async insert(newUser){
        try {
            console.log("insert de user manager")
            return await userModel.create(newUser)
        } catch (error) {
            throw error;
        }
      }

    async updateUser(id, props) {
        try {
          return await userModel.updateOne({ _id: id }, { $set: props });
        } catch (error) {
          throw error;
        }
      }

    async deleteUser(id){
        try {
            return await userModel.deleteOne({ _id: id })
        } catch (error) {
            throw error;
        }
      }

}



