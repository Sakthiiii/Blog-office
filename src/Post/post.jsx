import React from 'react'
import "./post.css"
const post = () => {
  return (
    <div className="post">
        <img className="postimg"
        src ="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-profile-pictures-for-boys-nice_cute_boys_profile_photos_for_facebook_profile__tag_share_4_e59474e51.jpg?resize=413%2C476&ssl=1" 
        alt='' />

        <div className="postinfo">
            <div className="postCats">
                <div className="postCat">Music</div>
                <div className="postCat">Life</div>
            </div>
            <span className="posttile">Lorem ipsum dolor sit amet  </span>
            <hr/>
            <span className="postDate">1 Hour ago</span>
        </div>
        <p className='postdis'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quos iste provident illum autem numquam non aspernatur ullam molestiae labore est voluptates cum,
              eveniet repellat consectetur nesciunt et tenetur recusandae ea!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quos iste provident illum autem numquam non aspernatur ullam molestiae labore est voluptates cum,
              eveniet repellat consectetur nesciunt et tenetur recusandae ea!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quos iste provident illum autem numquam non aspernatur ullam molestiae labore est voluptates cum,
              eveniet repellat consectetur nesciunt et tenetur recusandae ea!</p>
    </div>
  )
}

export default post