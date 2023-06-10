import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../css/Navbar.css"


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(()=>{//if the location changes the setExpandNavbar becomes false
        setExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={expandNavbar ? "open": "close"}>
        <div className='toggleButton'>
            <button 
            onClick={() => {
                setExpandNavbar((prev)=> !prev);// when clicked the status open or close changes to the oposite
                }}
            > 
                <ReorderIcon/> 
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/OverMezelf">over mij</Link>
            <Link to="/Projecten">projecten</Link>
            <Link to="/Stage">stage</Link>
            
        </div>
        </div>
  )
}

export default Navbar