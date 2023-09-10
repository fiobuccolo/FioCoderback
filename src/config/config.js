import dotenv from "dotenv";

const environment = process.env.NODE_ENV || "PRODUCTION"

dotenv.config({
    path:environment=== "DEVELOPMENT"? "./.env.development" : "./.env.local"
})



console.log("Environment: ", environment)
console.log("MongoDB URL: ", process.env.MONGO_URL)
console.log("PORT: ", process.env.PORT)

export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGO_URL,
    environment
    // persistence = process.env.PERSISTENCE || "memory";
}
 