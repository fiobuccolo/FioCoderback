// npm i winston
import  winston from "winston"
import config from "../config/config.js"
const environment = config.environment
let logger = {}




const customLevelOptions = { 
    levels:{
        fatal:0,
        error:1,
        warning:2,
        info:3,
        debug:4,
    },
    colors:{
        fatal:"red",
        error:"red",
        warning:"yellow",
        info:"blue",
        debug:"grey"
    }
} 



    if(environment === "DEVELOPMENT" ){
        logger = winston.createLogger({
        levels: customLevelOptions.levels,
        transports:[
            //new winston.transports.Console({ level: "http"}),
            new winston.transports.Console({ 
                level: "debug", 
                format: winston.format.combine(
                    winston.format.colorize({colors: customLevelOptions.colors}),
                    winston.format.simple()
                    )
                }),
            new winston.transports.File({ 
                    filename: './test/logger/errosDev.log', 
                    level: "error", 
                    format: winston.format.combine(
                        winston.format.colorize({colors: customLevelOptions.colors}),
                         winston.format.simple()
                         )
                    }),
            ]
            })
        }
        if(environment === "PRODUCTION" ){
         logger = winston.createLogger({
            levels: customLevelOptions.levels,
            transports:[
                //new winston.transports.Console({ level: "http"}),
                new winston.transports.Console({ 
                    level: "info", 
                    format: winston.format.combine(
                        winston.format.colorize({colors: customLevelOptions.colors}),
                         winston.format.simple()
                         )
                    }),
                    new winston.transports.File({ 
                        filename: './test/logger/errosProd.log',
                        level: "error", 
                        format: winston.format.combine(
                            winston.format.colorize({colors: customLevelOptions.colors}),
                             winston.format.simple()
                             )
                        }),
                ]
                 })
             }



             export const addLogger = (req,res,next)=>{
                req.logger = logger
                //req.logger.http(`${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`)
                next()
            }