const authorization = (role) => {
    return(req,res,next) =>{
        if(!req.user) return res.status(401).json({message: "Unauthorized"})
    const {user} = req.user;
    if(user.role !== role){
        return res.status(403).json({message: "Forbidden"})
    }
    }
}

export default authorization