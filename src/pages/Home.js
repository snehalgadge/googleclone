import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './google-logo.png'
import Search from '../components/Search';


const Home = () => {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home_headerRight'>
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon />
        <AccountCircleIcon />
        </div>
      </div>
      <div className='home_body'>
        <img src= { logo }  alt='logo'/>
         {/* search */}
        <Search />
      </div>  
    </div>
  )
}

export default Home