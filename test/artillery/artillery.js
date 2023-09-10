import { Router } from "express";


const artilleryRouter = Router()
   
artilleryRouter.get("/opsencilla", async (req,res)=>{
    let suma = 0
    for(let i=0;i<10000;i++){
        suma += i
    }
    res.send({status:"success", payload:suma})
})

artilleryRouter.get("/opcompleja", async (req,res)=>{
    let suma = 0
    for(let i=0;i<5e7;i++){
        suma += i
    }
    res.send({status:"success", payload:suma})
})


export default artilleryRouter


// npx artillery quick \
// --count 20 \
// --num 100 \
// "http://localhost:8080/api/opsencilla" -o ./test/artillery/sencilla.json
