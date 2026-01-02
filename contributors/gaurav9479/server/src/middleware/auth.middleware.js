import jwt from 'jsonwebtoken'
export const verifyJWT=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token ,"yehlo")
    console.log(authHeader,"yehlo")

    if(!token){
        return res.status(401).json({error:'access denied'})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next();
    }catch(err){
        return res.status(403).json({error:"invalid"})
    }
}