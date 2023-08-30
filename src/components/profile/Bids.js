import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import { Button, Paper } from '@mui/material'
const Bids = ({job}) => {
    const [bids, setBids] = React.useState([])
    console.log(job);
        
     useEffect(()=>{
        axios.request(`https://fumbling-amusement-production.up.railway.app/bid/${job}`)
        .then((response) => {
            setBids(response.data);
            console.log(response.data);
        }
        ).catch((error) => {
            console.log(error);
        })
     },[])
     const [isSelected , setisSelected] = React.useState(true)
     const isPicked =(id)=>{
        if(window.confirm('Are you sure you want to approve this bid?')){
          axios.put(`https://fumbling-amusement-production.up.railway.app/bid/select/${id}`, isSelected)
            .then((response) => {
                setisSelected(response.data);
                console.log(response.data);
            }
            ).catch((error) => {
                console.log(error);
            }
            )
        }
        }
        
     
    
    
  return (
    <div>
        <h1>Bids</h1>
        {bids.map((bid) =>  {return (
            <div key={bid.id}>
                <Paper sx={{position:'relative', padding:'10px', m:1}} elevation={4}>
                     <div className=''>
                     <div style={{position:'absolute', bottom:"20px", right: '5px', background:'blue', borderRadius:'10px', color:'white'}} className='job-selected'>
                         {bid.isSelected ? <p >selected</p> : <p>Not selected</p>}
                     </div>
                     <main className='job-description'>
                         
                                <h2 style={{color:"black"}}>{bid.name}</h2>
                         {/* <p>JavaScript offers a wide variety of array methods that make working with arrays simpler. This article demonstrated how to render data from a nested array using a map array method. Apart from map, there are also methods to help you push data to an array, concatenate two arrays, or even sort an array.</p> */}
                         <p>{bid.description}</p>
                     </main>
                     
                     <div>
                        
                         <div  className='job-time'>                         
                        
                      
                         <Button variant='contained' onClick={()=> {isPicked(bid.id)}}>Pick</Button>
                         </div>
                        
                     </div>
                 </div>
             </Paper>
            </div>

        )})}
    </div>
  )
}

export default Bids