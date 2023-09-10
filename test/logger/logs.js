import { Router } from "express";


const logsRouter = Router()
   
logsRouter.get("/loggerTest", async (req,res)=>{
    req.logger.info("Prueba de logger nivel info"),
    req.logger.debug("Prueba de logger nivel debug")
    req.logger.error("Prueba de logger,nivel error")
    res.send("Hola")
})

export default logsRouter

