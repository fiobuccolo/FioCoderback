// import el dto 

export default class UserService{
    constructor(dao) {
        this.dao = dao
    }

    getAllUsers = () => {
        console.log("hola")
        return this.dao.getUsersManager()
    };

    getUser = (id) => {
        console.log("get user service")
        console.log("service", id)
        //return this.dao.getProductoById(id)
        return this.dao.getOne(id)
    }

    findUser = (email) => {
        console.log("find user service")
        console.log("service", email)
        return this.dao.getUserByEmail(email)
    }

     async insertUser(newUser) {
        try {
          console.log("desde el repository");
         //    const newUserInfo = new UserDTO(userInfo);
          return await this.dao.insert(newUser);
        } catch (error) {
            throw error;
        }
     }

     async updateUser(id, props){
        try {
            console.log("update el repository");
            return await this.dao.updateUser(id, props);
        } catch (error) {
            throw error;
        }
     }

     async deleteUser(id){
        try {
            console.log("delete el repository");
            return await this.dao.deleteUser(id)
        } catch (error) {
            throw error;
        }
     }
   
}