import React, { useState } from 'react'
import '../styles/Signup.css'
import axios from 'axios'
import { url } from '../components/url'
import { Link } from 'react-router-dom'

const state={
    username:'',
    email:'',
    password:''
}

const Signup = () => {
    const [user,setUser]=useState(state)
    // console.log(user)
    const handleuser=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }

    const createaccount=(e)=>{
        const {username,email,password}=user
        if(username===''||email===''||password===''){
            return;
        }

        axios({
            url:`${url}/user/register`,
            method:'post',
            data:user
        })
        .then((res)=>{
            // console.log(res)
            if(res.data.msg==='Signup successful'){
                alert(res.data.msg)
            }else{
                alert(`${res.data.msg} please try again`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const {username,email,password}=user
  return (
    <div className='maincont'>
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <input type='text' placeholder='Username' name='username' value={username} onChange={handleuser}/> 
            <input type='email' placeholder='Email' name='email' value={email} onChange={handleuser}/> 
            <input type='password' placeholder='Password' name='password' value={password} onChange={handleuser}/>
            <button onClick={createaccount}>Sign Up</button>
            <p>Already have account <Link to='/login'>Login</Link></p> 
        </div>
    </div>
  )
}

export default Signup