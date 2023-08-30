import { Button } from '@mui/material';
import { BrowserRouter, Link,  Route, Routes } from 'react-router-dom';import './App.css';
import Display from './components/Display';
import Mui from './components/Mui';
import Navbar from './components/Navbar';
import Post from './components/Post';
import SignUp from './components/authenticatioin/SignUp'
import Login from './components/authenticatioin/login';
import Home from './components/homePage/Home';
import HomeNavBar from './components/homePage/HomeNavBar';
import Footer from './components/Footer/Jfooter';
import AboutUs from './components/about/AboutUs';
import Team from './components/about/Team';
import Spinner from './components/Spinner/Spinner';
import Profile from './components/profile/Profile';
import SocialMedia from './components/SocialMedia/Instagram';
import RegisterEmployer from './components/authenticatioin/RegisterEmployer';
import EmployerHomePage from './Employer/EmployerHomePage';
import LoginEmployer from './components/authenticatioin/LoginEmployer';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/jobs' element={<><Mui /><Footer/>  </>} />
          <Route path='/post' element={<> <HomeNavBar/><Post /><Footer/>  </>} />
          <Route path='/' element={<><Home /><Footer/> </>} />
          <Route path='/aboutus' element={<><HomeNavBar/><AboutUs/><Footer/>  </>} />
          <Route path='/directors' element={<><HomeNavBar/><Team /><Footer/> </>} />
          <Route path='/myprofile' element={<><HomeNavBar/><Profile /><Footer/> </>} />
          <Route path='/signup' element={<><SignUp /></>} />
          <Route path='/registerEmployer' element={<><RegisterEmployer/></>} />
          <Route path='/loginEmployer' element={<><LoginEmployer /></>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='aboutus/instagram/jobsydekut' element={<SocialMedia />} />
          <Route path='/employer' element={<><EmployerHomePage /><Footer/> </>} />
        </Routes>

  </div>
  );
}

export default App;
