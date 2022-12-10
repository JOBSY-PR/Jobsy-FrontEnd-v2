import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import axios from 'axios';
import { Checkbox } from 'react-input-checkbox';

const Post = () => {
  const [postjob, setpostjob] = useState({
    title: '',
    description: '',
    employer: '',
    location: '',
    salary:'',
    imageUrl:''
  })

  const handleClick =async (e) => {
    e.preventDefault();
    const newjob = {
      title: postjob.title,
      description: postjob.description,
      employer: postjob.employer,
      location: postjob.location,
      salary: postjob.salary,
      imageUrl: postjob.imageUrl
    }
    await axios.post('https://jobsy.up.railway.app/job',   newjob)
  }

  return (
    <div className='form-input'>
      <FormControl component="form" noValidate autoComplete="off"
        sx={{
          border:'1px solid grey',
          borderRadius:'5px',
          padding:'20px',
          '& .MuiTextField-root': { m: 1, width: {md:'50ch', lg:'70ch'}},
        }}>
          <h2>JOB POSTING FORM</h2>
        <TextField id="outlined-basic" label="job title" value={postjob.title} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, title: e.target.value })} />
        <TextField id="filled-basic" label="description" value={postjob.description} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, description: e.target.value })} />
        <TextField id="standard-basic" label="employer" value={postjob.employer} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, employer: e.target.value })} />
        <TextField id="filled-basic" label="location" value={postjob.location} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, location: e.target.value })} />
         <TextField id="filled-basic" label="salary" type='number' value={postjob.salary} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, salary: e.target.value })} />
        <TextField id="filled-basic" label="imageurl" value={postjob.imageUrl} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, imageUrl: e.target.value })} />
        <Button variant='contained' onClick={handleClick}>SUBMIT</Button>
      </FormControl>
    </div>
  )
}

export default Post