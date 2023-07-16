import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useCart } from '../context/cart'
const Login = ({handleClose}) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const{setAlert}=useCart()
    const handleSubmit= async()=>{
        if(!email || !password){
            setAlert({
                open:true,
                message:'Please fill all the fields',
                type:'error'
            })
            return
        }

        try {
            const result=await signInWithEmailAndPassword(auth,email,password)
            setAlert({
                open:true,
                message:`Login successful. welcome ${result.user.email}`,
                type:'success'
            })
            handleClose()
        } catch (error) {
            setAlert({
                open:true,
                message:error.message,
                type:'error'
            })
        }
    }

  return (
    <Box p={3} style={{display:'flex',flexDirection:'column',gap:'20px'}} >
    <TextField
    variant='outlined'
    type='email'
    label='Enter Email'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    fullWidth
    className = "textfield"
    >

    </TextField>
    <TextField
    variant='outlined'
    type='password'
    label='Enter Password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    fullWidth
    className = "textfield"
    >

    </TextField>
   
    <Button
    variant='contained'
    size='large'
    style={{backgroundColor:'#EEBC1D'}}
    onClick={handleSubmit}
    >Login</Button>
</Box>
  )
}

export default Login