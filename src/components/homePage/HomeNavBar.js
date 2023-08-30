import {   LogoutOutlined, Person2, StackedBarChart } from '@mui/icons-material'
import { Button, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, logoutEmployer, reset } from '../../react-redux/features/auth/authSlice'
import { toast, ToastContainer } from 'react-toastify'
//sad:(

const HomeNavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const onLogout = ()=>{
        dispatch(logout())
        dispatch(logoutEmployer())
        dispatch(reset())
        alert('You are now logged out')
        navigate('/')
        window.location.reload()
    }

    const user = useSelector(state => state.auth.user)
    const employer = useSelector(state => state.auth.employer)

    const postJob = ()=>{
        if(employer){
            toast.success('view job')
        }

        if(!employer){
            alert("log in to post job")
            navigate('/login')
            window.location.reload()
        }
        
    }

    const viewJob = ()=>{
        if(user){
            toast.success('view job')
        }

        if(!user){
            alert("log in to view job")
            navigate('/login')
            window.location.reload()
        }
    }


  return (
    <div>
        <ToastContainer />
        <nav className='navbar'>
            
            <Link to='/'>
                <div className='jobsy-logo'>
                    <img src='https://www.clipartmax.com/png/middle/413-4139811_transparent-background-cool-logo.png' alt='jobsy-logo' />
                    <h1>JOBSY</h1>
                </div>
            </Link>
            <div className={isNavExpanded ?  'nav-links mobile' : 'nav-links'}>
                    <ul className='nav-list'>
                        {user  ? (
                            <>
                            <NavLink onClick={viewJob} to='/jobs' style={{textDecoration: 'none'}}><li>Jobs</li></NavLink>
                            </>
                            ):(
                                ' '
                            )}
                            
                            {employer ? (
                                <>
                                <NavLink onClick={postJob} to='/post' style={{textDecoration: 'none'}}><li>Post</li></NavLink>
                                </>
                                ):(
                                    ' '
                                )
                                }

                            
                        
                        <NavLink to='/aboutus' style={{textDecoration: 'none'}}><li>About Us</li></NavLink>
                        {user || employer ? (
                        <>
                            <Link title={(user && user.name)|| (employer && employer.name)} to='/myprofile' style={{textDecoration: 'none'}}><li>
                                <img style={{borderRadius:'50%'}} src={((user && user.selectedFile) ||((employer && employer.selectedFile)))|| 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJkC07QFuZvIeLEadibGh6ZkDXshm8PakYYzPMMZywg&s'}  alt={user && user.name} width= '46px' height='46px'/>
                            </li></Link>

                            <Button title='logout' sx={{borderRadius:'20px', height:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}  variant='contained'>

                            <Link onClick={onLogout} style={{color:'white', margin: 0,display:'flex', justifyContent:'center', alignItems:'center'}} to='/'><LogoutOutlined/></Link>
                            </Button>
                        </>
                            ): (  
                                <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                <div>Register as</div>
                                <div className='signup-section'>
 
                                    <Link style={{ margin: '3px', background:"#1976d2", padding:'3px', color:"white"}} to='/login'>Freelancer</Link>
                                    <Link style={{ margin: '3px', background:"#1976d2", padding:'3px', color:"white"}} to='/registerEmployer'>Employer</Link>

                                </div>
                                </div>
                            )}                
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