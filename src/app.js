import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors"
import cookieParser from "cookie-parser";
import passport from "passport";
//npm i express-session
import session from "express-session";
//npm i connect-mongo
import MongoStore from "connect-mongo";
import handlebars from 'express-handlebars';
import _dirname from "./dirname.js";


import config from "./config/config.js";
import router from "./router/index.router.js";
import initializePassport from "./config/passport.config.js";
import viewsRouter from "./router/views.router.js";
//import mongoConnect from "../db/index.js";

import { addLogger } from "./utils/logger.js";

const app = express();
const MongoDB = config.MONGODB_URL
const PORT = config.PORT

const connection = await mongoose.connect(`mongodb+srv://${MongoDB}`)

app.use(addLogger); 

// handlebars
app.engine('handlebars',handlebars.engine());
app.set("views",_dirname + "/views")
app.set("view engine","handlebars")
//app.use(express.static(_dirname+ "/public"))

// SESSION:  ---
app.use(
    session({
        store: new MongoStore({
            mongoUrl:`mongodb+srv://${MongoDB}`,
            ttl: 3600,
        }),
        secret:"fioSecret",
        resave:true,
        saveUninitialized: true,
    })
)




app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(morgan("dev"))
app.use("/api",router)
app.use("/",viewsRouter)

app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

//app.use(cors())



/// ---- TESTING-----

import productsTestingRouter from "../test/products.js"
app.use("/api/mockingproducts",productsTestingRouter)

import artilleryRouter from "../test/artillery/artillery.js"
app.use("/api",artilleryRouter)

import logsRouter from "../test/logger/logs.js"

app.use("/api",logsRouter)


app.listen(PORT,() =>{
    console.log(`Server is running in port ${PORT}`)
})
