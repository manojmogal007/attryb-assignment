const {adddealercar,getdealercars,updatedealercars,deletedealercars}=require('../controllers/inventory.controller')
const express=require('express')
const {authentication}=require('../middlewares/auth.middleware')

const inventoryRouter=express.Router()

inventoryRouter.route('/getcars').get(getdealercars)
inventoryRouter.route('/updatecar').patch(updatedealercars)
inventoryRouter.route('/deletecar').delete(deletedealercars)

inventoryRouter.use(authentication)
inventoryRouter.route('/addcar').post(adddealercar)

module.exports=inventoryRouter
