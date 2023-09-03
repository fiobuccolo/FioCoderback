const authorization = (role) => {
    return(req,res,next) =>{
        console.log(role)
        console.log("req", req.session.user.role)
        if(!req.session.user) return res.status(401).json({message: "Unauthorized"})
   const  userRole  = req.session.user.role;
   console.log(userRole)

  
    if(userRole !== role){
        return res.status(403).json({message: "Forbidden"})
    }
    next()
    }
}

export default authorization