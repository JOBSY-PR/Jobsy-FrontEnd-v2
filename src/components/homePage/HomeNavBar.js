import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavBar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/home'>
                <div className='jobsy-logo'>
                    <img src='https://www.clipartmax.com/png/middle/413-4139811_transparent-background-cool-logo.png' alt='jobsy-logo' />
                    <h1>JOBSY</h1>
                </div>
            </Link>
            <div className='nav-links'>
                <ul>
                    <Link to='/home/jobs' style={{textDecoration: 'none'}}><li>Jobs</li></Link>
                    <Link to='/post' style={{textDecoration: 'none'}}><li>Post</li></Link>
                    <Link to='/home' style={{textDecoration: 'none'}}><li>Home</li></Link>
                    <Button sx={{borderRadius:'20px'}} color='primary' variant='contained'>Log Out</Button>

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default HomeNavBar