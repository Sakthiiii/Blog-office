import "./Sidebar.css"
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, LinkedIn } from '@mui/icons-material';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <div className="sidebartitle">About My self</div>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbsCzbbc5hfWqzQZkVzJ5AB1k-BFQ-iHZpfh1VgWaKHcy_b3XvcH2BKRTeAoMuVaKdHg&usqp=CAU"
            alt="" />
            <p>I learnt stack developing software to make myself unique with a certain skill and now i am going to be working as a MERN stack developer in our company. 
                 </p>
        </div>
        <div className="sidebaritem">
        <div className="sidebartitle">Follow Me</div>
        <div className="sidebarsocial">
                 <a href="" className='topicon'><FacebookIcon /> </a>
                <a href="" className='topicon'><LinkedIn /> </a>
                <a href="" className='topicon'> <Instagram /> </a>
        </div>
        <ul></ul>
        </div>
    </div>
  )
}

export default Sidebar