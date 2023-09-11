//npm i @faker-js/faker   
import { faker } from "@faker-js/faker/locale/es"



export const generateProduct = () =>{
    // let numOfProducts = parseInt(faker.random.numeric(1,{bannedDigits:["0"]}))
    // let products = []
    // for (let i=0; i>numOfProducts;i++){
    //     products.push(generateProduct())
    // }
    const status = ["active","sold out"]
    return{
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        code: faker.name.sex(),
        price: faker.commerce.price({ min: 100, max: 6000 }) ,
        stock: faker.number.int({ min: 0, max: 300 }) ,
        status: faker.helpers.arrayElement(status),
    //     image: faker.internet.avatar(),
        id: faker.database.mongodbObjectId()
        
    }
}  




