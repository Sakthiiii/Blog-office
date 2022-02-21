import React from 'react';
import "./Settings.css";
import GroupIcon from '@mui/icons-material/Group';
import Sidebar from "../../Sidebar/Sidebar"
const Settings = () => {
  return (
    <div className="setting">
      <div className="settingwrapper">
        <div className="settingtitle">
          <div className="settingupdatetitle">Update your Accout</div>
          <div className="settingdeletetitle">Delete Accout</div>
                  </div>
                  <form className="settingform">
                    <lable>Profile Picture</lable>
                  <div className="settingPP">
                <img src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-profile-pictures-for-boys-nice_cute_boys_profile_photos_for_facebook_profile__tag_share_4_e59474e51.jpg?resize=413%2C476&ssl=1" 
                alt='' />
                    <label htmlFor="fileInput" >
                      <i className='settingppicon'> <GroupIcon/></i>
                       </label>
                       <input type="file" id="fileInput" style={{display:"none"}} />
                  </div>
                  <label >UserName</label>
                  <input  type="text" placeholder="name"/>
                  <label >Email</label>
                  <input  type="email" placeholder="name@mail.com"/>
                  <label >Password</label>
                  <input  type="password" />
                  <button className="settingsubbmit">Update</button>
                  </form>
      </div>
        <Sidebar/>
      
    </div>
  )
}

export default Settings