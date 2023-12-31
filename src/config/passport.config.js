// npm install passport passport-jwt
import passport from "passport";
import { Strategy, ExtractJwt as _ExtractJwt } from "passport-jwt";
import cookieExtractor from "../utils/cookieExtractor.utils.js";


const JWTStrategy = Strategy;
const ExtractJwt = _ExtractJwt; 

const initializePassport = () =>{
    passport.use("jwt", new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        // tomarle de variable de entorno dp 
        secretOrKey: "fioSecret"
    }, async (jwt_payload,done)=>{
        try {
            console.log("jwt payload", jwt_payload)
            done(null,jwt_payload)
        } catch (error) {
            done(error)
        }
    }
    ))
}

export default initializePassport 


