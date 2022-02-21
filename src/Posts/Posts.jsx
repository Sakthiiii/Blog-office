import React from 'react';
import "./Posts.css";
import Post from'../Post/post'

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map(p=>{
        <Post/>
      })}
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Posts