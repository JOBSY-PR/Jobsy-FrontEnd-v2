import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import { Link, Router } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-form'>
        
        <FormControl 
      
         sx={{
            border:'1px solid grey',
            borderRadius:'5px',
            padding:'20px',
            '& .MuiTextField-root': { m: 1, width: '40ch',  },
          }}>
            <h1>Sign Up</h1>
            <TextField type='text' variant='filled' label='Your name'/>
            <TextField type='email' variant='filled' label='Your email'/>
            <TextField type='password' variant='filled' label='Your password'/>
            <TextField type='password' variant='filled' label='Confirm password'/>
            <Button variant='contained'  >SIGN UP</Button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </FormControl>
        
    </div>
  )
}

export default SignUp