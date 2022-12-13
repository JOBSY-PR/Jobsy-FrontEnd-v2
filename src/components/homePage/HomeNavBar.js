import {  StackedBarChart } from '@mui/icons-material'
import { Button, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../react-redux/features/auth/authSlice'


const HomeNavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const onLogout = ()=>{
        dispatch(logout())
        dispatch(reset())
        alert('You are now logged out')
        navigate('/')
        window.location.reload()
    }

    const user = useSelector(state => state.auth.user)

    const postJob = ()=>{
        if(!user){
            alert("log in to post job")
            navigate('/login')
            window.location.reload()
        }
    }



  return (
    <div>
        <nav className='navbar'>
            <Link to='/home'>
                <div className='jobsy-logo'>
                    <img src='https://www.clipartmax.com/png/middle/413-4139811_transparent-background-cool-logo.png' alt='jobsy-logo' />
                    <h1>JOBSY</h1>
                </div>
            </Link>
            <div className={isNavExpanded ?  'nav-links mobile' : 'nav-links'}>
                <ul className='nav-list'>
                    <NavLink onClick={postJob} to='/jobs' style={{textDecoration: 'none'}}><li>Jobs</li></NavLink>
                    <NavLink onClick={postJob} to='/post' style={{textDecoration: 'none'}}><li>Post</li></NavLink>
                    
                    <NavLink to='/aboutus' style={{textDecoration: 'none'}}><li>About Us</li></NavLink>
                    {user ? (  <Button sx={{borderRadius:'20px'}}  variant='contained'>

                        <Link onClick={onLogout} style={{color:'white', margin: 0}} to='/'>Log Out</Link>
                        </Button>): (  <Button sx={{borderRadius:'20px'}}  variant='contained'>

                        <Link style={{color:'white', margin: 0}} to='/login'>Log In</Link>
                </Button>)}
                  
                </ul>
            </div>
            <div className='menu-icon' >
                <StackedBarChart onClick={()=> setIsNavExpanded(!isNavExpanded)}/>
            </div>
        </nav>
    </div>
  )
}

export default HomeNavBar