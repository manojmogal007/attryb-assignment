import axios from 'axios'
import { url } from '../components/url'
import React, { useEffect, useState } from 'react'

const state={
    name:'',//
    year:'',//
    image:'',
    // description:'',
    price: '',
    originalprice:'',//
    color:'',//
    mileage: '',//
    kmOdometer: '', 
    majorScratches: '', 
    originalPaint: '', 
    accidentsReported: '', 
    previousBuyers: '', 
    registrationPlace:''
}

const Addcar = () => {

    const [cars,setCars]=useState(null)
    const [dealercar,setDealercar]=useState(state)
    const [car,setCar]=useState(null)
    console.log(localStorage.getItem('token'))


    const fetchspecs=()=>{
        axios({
            url:`${url}/oem/getcar`,
            method:'post'
        })
        .then((res)=>{
            // console.log(res)
            if(res.data.msg==='Car details not found'){
                // setCars([])
            }else{
                setCars(res.data.cars)
            }
        })
        .catch(err=>console.log(err))
    }

    const handlechange=(e)=>{
        // console.log(e.target.value)
        const selectedcar=cars.filter((el)=>el.name===e.target.value)
        // console.log(selectedcar)
        setCar(selectedcar[0])
    }

    const handledetails=(e)=>{
        // console.log(e.target.value)
        const {type,name,value}=e.target
        const val=type==='number'?Number(value):value
        setDealercar({...dealercar,[name]:val})
    }

    const handlecar=()=>{
        // console.log(dealercar)
        if(car===null){
            alert('Select car name first')
            return;
        }
        setDealercar({...dealercar,name:car.name,year:car.year,originalprice:car.leastPrice,color:car.availableColors,mileage:car.mileage})
        // console.log(dealercar)
        axios({
            url:`${url}/dealer/addcar`,
            method:'post',
            data:dealercar,
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    useEffect(()=>{
        fetchspecs()
    },[])

    const {image,price,kmOdometer,majorScratches,originalPaint,accidentsReported,previousBuyers,registrationPlace}=dealercar
  return (
    <div>
        
        <select onChange={handlechange} value={car}>
            {
                cars!==null&&cars.map((el,i)=>(
                    <option value={el.name}>{el.name}</option>
                ))
            }
        </select>
        <div>
            <input placeholder='Image url' name='image' type='url' value={image} onChange={handledetails}/>
            <input placeholder='Price' name='price' type='number' value={price} onChange={handledetails}/>
            <input placeholder='Odometer KM' name='kmOdometer' type='number' value={kmOdometer} onChange={handledetails}/>
            <input placeholder='No of accident reported' name='accidentsReported' type='number' value={accidentsReported} onChange={handledetails}/>
            <input placeholder='No of previous buyers' name='previousBuyers' type='number' value={previousBuyers} onChange={handledetails}/>
            <input placeholder='Registeration place' name='registrationPlace' type='text' value={registrationPlace} onChange={handledetails}/>
            <select value={majorScratches} name='majorScratches' onChange={handledetails}>
                <option>Selects Major scratches</option>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>
            <select value={originalPaint} name='originalPaint' onChange={handledetails}>
                <option>Select for original paint</option>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>
            <button onClick={handlecar}>Add car</button>
        </div>
    </div>
  )
}

export default Addcar