import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Mic } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = ({hideButtons = false}) => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const search = (e) =>{
        e.preventDefault();
        navigate('/search')
    }
  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className='search_inputIcon'/>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <Mic />
        </div>
        { !hideButtons ? (
            <div className='search_buttons'>
            <Button
            type='submit' 
            variant='outlined'
            onClick={search}
            >
               Google search
            </Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
           </div>
        ):(
            <div className='search_buttons'>
            <Button
            className='search_buttonsHidden'
            type='submit' 
            variant='outlined'
            onClick={search}
            >
                Google search
            </Button>
            <Button 
            className='search_buttonsHidden' 
            variant='outlined'
            >
                I'm Feeling Lucky
            </Button>
        </div>
        )  
        }
       
    </form>
  )
}

export default Search