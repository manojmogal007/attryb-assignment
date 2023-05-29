const jwt=require('jsonwebtoken')


const authentication=(req,res,next)=>{
    const token=req.headers.authorization
    // console.log(token)
    if(token){
        var decoded= jwt.verify(token, 'task-manager');
        console.log(decoded)
        if(decoded){
            req.body.user=decoded.user_id
            next()
        }else{
            res.status(400).json({'msg':'Login first'})
        }
    }else{
        res.status(400).json({'msg':'Login first'})
    }
}


module.exports={authentication}
