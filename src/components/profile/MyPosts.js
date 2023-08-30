import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteGoal } from '../../react-redux/features/jobs/jobSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { LocationOn } from '@mui/icons-material'
import Popup from 'reactjs-popup'
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import Bids from './Bids'


const MyPosts = () => {
    const { id }= useParams()
    const [jobs, setJobs] = useState([])
    const [bids , setBids]= useState([])
    const employer = useSelector(state => state.auth.employer)
   
    useEffect(() => {
     
        axios.request(`https://fumbling-amusement-production.up.railway.app/job/employer/${employer.id}`)
            .then((response) => {
                setJobs(response.data);
                console.log(response.data)
            
            }).catch((error) => {
                console.log(error);
            })
            
    }, [])

    const viewBid = (id)=>{
        
        console.log(id)
        axios.request(`https://fumbling-amusement-production.up.railway.app/bid/${id}`)
        .then((response) => {
            setBids(response.data);
            console.log(response.data);
        }
        ).catch((error) => {
            console.log(error);
        })
    }
 

    const dispatch = useDispatch()
    const navigate = useNavigate()
//DELETE JOB
   
        var deleteJob=(e, id)=>{
            e.preventDefault();
            if(window.confirm('Are you sure you want to delete this job?')){
                dispatch(deleteGoal(id))
                navigate('/myprofile')
             }
        }


    


    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newEmployer, setNewEmployer] = useState('')
    const [newSalary, setNewSalary] = useState('')


    const updateTitle =async (e, id)=>{
        e.preventDefault();
        if(!newTitle || !newDescription || !newLocation  || !newSalary){
            return alert('Please fill all fields')
        }
        //
      await axios.put(`https://fumbling-amusement-production.up.railway.app/bid/1`, {title: newTitle, description:newDescription, location:newLocation, salary: newSalary, id:id})
        .then((response)=>{
            console.log(response)
            alert('Job updated')
            navigate('/myprofile')
        }
        ).catch((error)=>{
            console.log(error)
        }
    )
  
 }

  return (
    <div>
        <>
        <h1>My Posts</h1>
        {jobs.length === 0 && <div style={{height:'60vh'}}><h1>No jobs posted</h1></div>}
        {jobs.map(job => (
                 <Paper sx={{position:'relative', padding:'10px',  width:{xs:'90%', md:'60%'}, m:1}} elevation={4}>
                     <div className=''>
                     <div className='job-title'>
                         <h1>{job.title}</h1>
                     </div>
                     <main className='job-description'>
                         <p>{job.description}</p>
                     </main>
                     
                     <div>
                         <div className='job-bottom'>
                             <div style={{display:'flex', alignItems:'center'}}>
                                 <LocationOn /><p>{job.location}</p>
                             </div>
                             <p>Ksh. {job.salary}</p>
                         </div>
                         <div  className='job-time'>                         
                         <Button variant='contained'  onClick={(e, id)=> deleteJob(e, job.id)} >delete</Button>
                       
                      
                         <Popup trigger={<Button variant='contained'>Update</Button> } modal>
                                 <div className='bid-popup'>


                                 <FormControl component="form" noValidate autoComplete="off"
                                        sx={{
                                        border:'1px solid grey',
                                        borderRadius:'5px',
                                        padding:'20px',
                                        '& .MuiTextField-root': { m: 1, width: {md:'50ch', lg:'auto'}},
                                        }}>
                                        <h2>JOB POSTING FORM</h2>
                                        <TextField id="outlined-basic" label="job title"  value={newTitle}  onChange={(e)=>{setNewTitle(e.target.value)}} />
                                        <TextField id="filled-basic" label="description" value={newDescription}  onChange={(e)=>{setNewDescription(e.target.value)}} />
                                        <TextField id="filled-basic" label="location"  value={newLocation}  onChange={(e)=>{setNewLocation(e.target.value)}} />
                                        <TextField id="filled-basic" label="salary" 
                                       value={newSalary}  onChange={(e)=>{setNewSalary(e.target.value)}}/>
                                        <Button variant='contained' onClick={(e)=> updateTitle(e,job.id)}>SUBMIT</Button>
                                </FormControl>

                                 </div>
                             
                             </Popup>
                         </div>
                        
                     </div>
                 </div>
                 <Bids job={job.id} />
             </Paper>
             ))}
        </>
    </div>
  )
}

export default MyPosts