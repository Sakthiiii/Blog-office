import React from 'react'
import "./Singlepost.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Singlepost = () => {
  return (
    <div className='singlepost'>
        <div className="singlepostwrapper">
            <img src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-profile-pictures-for-boys-nice_cute_boys_profile_photos_for_facebook_profile__tag_share_4_e59474e51.jpg?resize=413%2C476&ssl=1" alt=""
             className="singlepostimg" />
             <h1 className="singleposttile">Lorem, ipsum dolor sit amet
             
             <div className="singlepostedit">
             <EditIcon className="singleposticon"/>
             <DeleteIcon className="singleposticon"/>
             </div>
             </h1>
             <div className="singlepostinfo">
                 <span className="singlepostauther"> Author : <b>Mahesh</b></span>
                 <span className="singlepostDate"> 1 hour ago</span>
             </div>
             <p className="singlepostdis">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos cumque, nisi fugit vero 
                 sit placeat dolore qui sequi laborum? Laboriosam id dolore ducimus ex
                  eveniet veritatis facere nobis error!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos cumque, nisi fugit vero 
                 sit placeat dolore qui sequi laborum? Laboriosam id dolore ducimus ex
                  eveniet veritatis facere nobis error!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos cumque, nisi fugit vero 
                 sit placeat dolore qui sequi laborum? Laboriosam id dolore ducimus ex
                  eveniet veritatis facere nobis error!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos cumque, nisi fugit vero 
                 sit placeat dolore qui sequi laborum? Laboriosam id dolore ducimus ex
                  eveniet veritatis facere nobis error!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eos cumque, nisi fugit vero 
                 sit placeat dolore qui sequi laborum? Laboriosam id dolore ducimus ex
                  eveniet veritatis facere nobis error!
             </p>
        </div>
        </div>
  )
}

export default Singlepost