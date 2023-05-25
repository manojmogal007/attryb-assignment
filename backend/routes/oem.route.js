const {addoemcar,getoemcars}=require('../controllers/oem.controller')
const express=require('express')



const oemRouter=express.Router()
oemRouter.route('/addcar').post(addoemcar)
oemRouter.route('/getcar').post(getoemcars)

module.exports=oemRouter
