import passport from "passport";

const passportCall = (strategy) =>{
    return async (req,res,next) =>{
        passport.authenticate(strategy,(err,user,info)=>{
            console.log("passport aute")
            if(err) return next(err)
            if(!user) {
                console.log("no hay user")
                return res.status(401)
                .json({error: info.messages?info.messages:info.toString()});
            }
        req.user = user;
        console.log(req.user)
        next()
        }
        )(req,res,next)
    };
}

export default passportCall