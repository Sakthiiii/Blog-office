import React from 'react';
import{Link} from "react-router-dom"
import "./Topbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, LinkedIn, Search } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const Topbar = () => {
    const user=false;
    return (
        <div className='top'>
            <div className="topbarleft">
                <a href="" className='topicon'><FacebookIcon /> </a>
                <a href="" className='topicon'><LinkedIn /> </a>
                <a href="" className='topicon'> <Instagram /> </a>
            </div>

            <div className="topbarcenter">
                <ul className='toplistitem'>
                    <div className=""><Link  className="link" to="/">Home</Link></div>
                    <div className=""><Link className="link" to="/">About</Link></div>
                    <div className=""><Link className="link" to="/">Contact</Link></div>
                    <div className=""><Link  className="link"to="/write">Update</Link></div>
                    <div className="">{user && "Logout"}</div>
                </ul>

            </div>

            <div className="topbarright">

            {user ? (
                    <img className='topimg'
                    src='https://wallpaperaccess.com/full/2213424.jpg' />
                
            ) :(
                <ul className="toplistitem">
               <li className='linkeds'>
                <Link className="linked" to="/login"><LoginIcon/></Link>
               <Link className="linked" to="/register"><LogoutIcon/></Link>
               </li> </ul>
            )}
            <Search className='topsearch' />
               
            </div>
        </div>
    )
}

export default Topbar