import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../components/url'
import '../styles/Oemspecs.css'

const Oemspecs = () => {
    const [cars,setCars]=useState(null)
    const [name,setName]=useState(null)
    // console.log(name)

    const getcars=(name=null)=>{
        axios({
            url:`${url}/oem/getcar`,
            method:'post',
            data: name!==null?{name}:''
        })
        .then((res)=>{
            // console.log(res)
            setCars(res.data.cars)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handlename=(e)=>{
        setName(e.target.value)
    }
    

    const handlereset=()=>{
    //   window.location.reload()
        setName(null)
        getcars()
    }

    useEffect(()=>{
        getcars()
    },[])
  return (
    <div>
        <div>
            <input placeholder='Search by car name' type='text' value={name} onChange={handlename}/>
            <button onClick={()=>getcars(name)} className='search'>Search</button>
            {name!==null&&<button onClick={handlereset} className='search'>Reset</button>}
        </div>
        {
            cars!==null&&<div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Leastprice</th>
                            <th>Available colors</th>
                            <th>Mileage</th>
                            <th>Power</th>
                            <th>Maxspeed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map((el)=>(
                              <tr key= {el._id}>
                                <td>{el.name}</td> 
                                <td>{el.year}</td> 
                                <td>{el.leastPrice}</td> 
                                <td style={{display:'flex'}}>
                                {
                                    el.availableColors.map((a)=>(
                                        <p style={{margin:'auto'}} key={a}>{a},</p>
                                    ))
                                }
                                </td> 
                                <td>{el.mileage} Km/ltr</td> 
                                <td>{el.power} BHP</td> 
                                <td>{el.maxSpeed} Km/hr</td> 
                              </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        }
    </div>
  )
}

export default Oemspecs