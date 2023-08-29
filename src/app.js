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


import config from "./config/config.js";
import router from "./router/index.router.js";
import initializePassport from "./config/passport.config.js";
//import mongoConnect from "../db/index.js";

const app = express();
const MongoDB = config.MONGODB_URL
const PORT = config.PORT

const connection = await mongoose.connect(`mongodb+srv://${MongoDB}`)

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

// mongoConnect();
// router(app);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"))
app.use("/api",router)
app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

//app.use(cors())


 

app.listen(PORT,() =>{
    console.log(`Server is running in port ${PORT}`)
})
