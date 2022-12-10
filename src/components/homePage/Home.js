import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeNavBar from './HomeNavBar'
import Imagee from '../myImages/image.png'

const Home = () => {
  return (
    <div>
        <HomeNavBar/>
        <main className='home-page'>
            <div style={{display:'flex', alignItems:'center'}}>
                {/* <section style={{width:'25%'}}>
                    <h2>About Us</h2>
                    <p>We see your vision, and everything we do is an effort to help you make the connections that will turn that vision into reality, by building your Virtual Talent Bench of trusted people.  
                </p>
                </section> */}
                <section>
                    <p>Hi! , we're</p>
                    <h1>JOBSY</h1>
                    <p>
                        We make every work available for you
                    </p>
                    <Button variant='contained'><Link to='/home/jobs'>View Jobs</Link></Button>
                </section>
                <section className='image-home'>
                    <img src={Imagee} alt='kenya' />
                </section>  
          </div>
          <footer>
          </footer>
        </main>

    </div>
  )
}

export default Home