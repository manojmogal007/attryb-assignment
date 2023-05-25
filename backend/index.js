const express=require('express')
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const userRouter=require('./routes/user.route')

const port=process.env.port


const app=express()
app.use(cors())
app.use(express.json())
app.use('/user',userRouter)




app.listen(port,()=>{
    mongoose.connect(process.env.url)
    .then(res=>{console.log('Server is connected to database')})
    .catch(err=>{
        console.log(err)
        console.log('Server connection error')
    })
    .finally(()=>{
        console.log(`Server running on port ${port}`)
    })
})