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

function App() {
  //vhangesd
  return (
    <div className="App">
     
      
        <Routes>
          <Route path='/home/jobs' element={<><Mui /></>} />
          <Route path='/post' element={<> <HomeNavBar/><Post /> </>} />
          <Route path='/home' element={<><Home /></>} />
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
     
      
      
  </div>
  );
}

export default App;
