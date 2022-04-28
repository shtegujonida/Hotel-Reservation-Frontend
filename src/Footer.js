import React from 'react';
import './Footer.css';
import SocialFollow from "./SocialFollow"


export default function Footer(){
    return(
         
        <footer className='footer'>
            <div className='footer--text'>
                <h2>Contact</h2>
                <h4>loguiharushave@gmail.com</h4>
                <h4>+355 676 7676</h4>
                <h4 id='rights'>© Logu i Harushave, All rights reserved.</h4>
            </div> 
            <SocialFollow /> 
            
        </footer>
        
        
    )
}

