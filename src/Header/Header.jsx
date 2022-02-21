import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className="headertitle">
            <span className='headertitlesm'> Welcome to Create Blog</span>
            
        </div>
        <img className='headerimg' 
        src='https://hbr.org/resources/images/article_assets/2015/12/dec15-03-curiosity-profile.png' alt=''/>
        
    </div>
  )
}

export default Header