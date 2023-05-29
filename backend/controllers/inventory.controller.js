const MarketplaceInventory=require('../models/inventory.model')


exports.adddealercar=async(req,res)=>{
    try{
        const new_car=new MarketplaceInventory(req.body)
        await new_car.save()
        res.status(200).json({'msg':'Car added successfully'})
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Car not added'})
    }
}

exports.getdealercars=async(req,res)=>{
    try{
        const cars=await MarketplaceInventory.find()
        res.status(200).json({'msg':'Cars found',cars})
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Error cars not found'})
    }
}

exports.updatedealercars=async(req,res)=>{
    const {id}=req.params
    const car=req.body
    const check=await MarketplaceInventory.find({_id:id})
    try{
        if(check.user_id===car.user_id){
            await MarketplaceInventory.findByIdAndUpdate({_id:id},car)
            res.status(200).json({'msg':'Car updated'})
        }else{
            res.status(200).json({'msg':'You are not authorized'})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Error car not updated'})
    }
}

exports.deletedealercars=async(req,res)=>{
    const {id}=req.params
    const check=await MarketplaceInventory.find({_id:id})
    try{
        if(check.user_id===car.user_id){
            await MarketplaceInventory.findByIdAndDelete({_id:id})
            res.status(200).json({'msg':'Car deleted'})
        }else{
            res.status(200).json({'msg':'You are not authorized'})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Error car not deleted'})
    }
}

