import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import logo from './logo_invert.png'

export default function Header(){
    return(
         
        <header>
        <div className='header'>
        <img className='header--image' src={logo} />
        <h4 className ="header--logo_text"><Link to ="/">Logu i Harushave</Link></h4> 
        <h4 className="header--rooms"><Link to ="/rooms">Rooms</Link></h4>
        <h4 className="header--login"><Link to ="/login">Log in</Link></h4>
        </div>
      </header>
    
    )
}