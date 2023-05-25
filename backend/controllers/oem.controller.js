const OEMSpecs=require('../models/oem.model')



exports.addoemcar=async(req,res)=>{
    // console.log(req.body)
    try{
        const new_product=new OEMSpecs(req.body)
        await new_product.save()
        res.status(200).json({'msg':'Details added successfully'})
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'OEM details not added'})
    }
}

exports.getoemcars=async(req,res)=>{
    const data=req.body
    try{
        if(data.name){
            const cars=await OEMSpecs.find({name:{$regex:`${data.name}`}})
            cars.length>0?res.status(200).json({'msg':'Car details',cars}):res.status(200).json({'msg':'Car details not found'})
        }else{
            const cars=await OEMSpecs.find()
            res.status(200).json({'msg':'Car details',cars}) 
        }   
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'OEM car get error'})
    }
}
