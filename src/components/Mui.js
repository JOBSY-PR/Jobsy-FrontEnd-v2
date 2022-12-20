
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React, { useEffect, useState } from 'react'
import HomeNavBar from './homePage/HomeNavBar';

import Popup from 'reactjs-popup';
import { Email, LocationOn, Phone, WhatsApp } from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export default function Mui() {
    var token = useSelector(state => state.auth.user.token)
    //solutiom
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // }
        axios.request('https://expressjs-production-e1ab.up.railway.app/jobs')
            .then((response) => {
                setJobs(response.data);
            
            }).catch((error) => {
                console.log(error);
            })
            
    },[])

    console.log(token)

    


    const myDate = new Date();
    const hours = myDate.getHours();
    const date = myDate.getDate();
    const myDay= myDate.getDay();
    const myMonth = myDate.getMonth();

    const monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    const month = monthName[myMonth];

    const weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday");
    const day = weekday[myDay];
    if(hours < 12){
        var greet = 'Good Morning';
    }else if(hours >= 12 && hours <= 17){
         greet = 'Good Afternoon';
    }else if(hours >= 17 && hours <= 24){
         greet = 'Good Evening';
    }


    const navigate = useNavigate()


    const user = useSelector(state => state.auth.user)
 

    
    return (
        
        <>
        {user ? (
             <>
             <HomeNavBar />
         <Paper style={{margin:'30px', textAlign: 'left'}}>
             <div className='time'>
             <h2>{day}, {month} {date} </h2>
             <h1>{greet} {user && user.name}!</h1>
             </div>
         </Paper>
         <Box
             sx={{
                 display: 'grid',
                 justifyItems: 'center',
                 gridTemplateColumns: {xs:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)'},
                 color: 'text.primary',
                 '& > :not(style)': {
                     m: 1,
                     width: '70%',
                     height: 'auto',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                 },
             }}
         >
            
             {jobs.map(job => (
                 <Paper sx={{position:'relative', padding:'10px'}} elevation={4}>
                     <div className=''>
                     <top className='job-title'>
                         <h1>{job.title}</h1>
                         <div title='add to favorite'><FavoriteIcon  title='fav'/></div>
                     </top>
                     <main className='job-description'>
                         <p>{job.description}</p>
                     </main>
                     
                     <div>
                         <bottom className='job-bottom'>
                             <div style={{display:'flex', alignItems:'center'}}>
                                 <LocationOn /><p>{job.location}</p>
                             </div>
                             <p>Ksh. {job.salary}</p>
                         </bottom>
                         <div  className='job-time'>                       
                         
                             <Popup trigger={<Button variant='contained'>Bid</Button> } modal>
                                 <div className='bid-popup'>
                                     <h2>{job.title}</h2>
                                     <h3>Connect with {job.employer}</h3>
                                     <div className='social-icon'>
                                     <Phone /><a href="tel:+254 791849836"> <span>Call</span></a> 
                                         <p>+254 705982249</p>
                                         <ReactWhatsapp number="+254705982249" message="Hello World!!!">
                                             <WhatsApp />
                                         </ReactWhatsapp><span>WhatsApp</span>
                                     </div>
                                     </div>
                             
                             </Popup>
                        
                         </div>
                     </div>
                 </div>
             </Paper>
             ))}
            
         </Box>
             </>
        ):(
            navigate('/login')
        )}
           
        </>
    );
}