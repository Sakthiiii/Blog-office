import { Add } from '@mui/icons-material';
import { Input } from '@mui/material';
import React from 'react';
import "./Write.css"

const Write = () => {
  return (
    <div className='write'>
        <img src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-profile-pictures-for-boys-nice_cute_boys_profile_photos_for_facebook_profile__tag_share_4_e59474e51.jpg?resize=413%2C476&ssl=1"
         alt='' className='writeimg' />
        <form className='writeform'>
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                    <Add className="writeicon"/> </label>
                    <input type="file" id="fileinput" style={{display:"none"}} />
                    <input  type="text" placeholder='Title' className="writeinput" autoFocus={true}/>
            </div>
            <div className="writeformgroup">
                <textarea placeholder='Uplode your Story...' type="text" className='writeinput writetext'></textarea>
            </div>
            <button className="writesubmit">Upload</button>
        </form>
    </div>
  )
}

export default Write