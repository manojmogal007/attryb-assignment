import React, { useState } from 'react'
import '../styles/Signup.css'
import axios from 'axios'
import { url } from '../components/url'
import { Link } from 'react-router-dom'

const state={
    email:'',
    password:''
}

const Login = () => {
    const [user,setUser]=useState(state)
    // console.log(user)
    const handleuser=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }

    const createaccount=(e)=>{
        const {email,password}=user
        if(email===''||password===''){
            return;
        }

        axios({
            url:`${url}/user/login`,
            method:'post',
            data:user
        })
        .then((res)=>{
            // console.log(res)
            if(res.data.msg==='Login successful'){
                alert(res.data.msg)
                localStorage.setItem('user',JSON.stringify(res.data))
            }else{
                alert(`${res.data.msg} please try again`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const {email,password}=user
  return (
    <div className='maincont'>
        <div className='signup-container'>
            <h1>Login</h1>
            <input type='email' placeholder='Email' name='email' value={email} onChange={handleuser}/> 
            <input type='password' placeholder='Password' name='password' value={password} onChange={handleuser}/>
            <button onClick={createaccount}>Login</button>
            <p>Don't have account <Link to='/signup'>Sign up</Link></p> 
        </div>
    </div>
  )
}

export default Login