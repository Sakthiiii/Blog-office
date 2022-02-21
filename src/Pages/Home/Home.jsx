import {useEffect,useState} from "react";
import React from 'react';
import Header from '../../Header/Header';
import Post from '../../Posts/Posts';
import Sidebar from '../../Sidebar/Sidebar';
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [posts,setPosts]=  useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      setPosts(res.data)
     }
      fetchPosts()
  },[])
  return (
    <>
      <Header />
      <div className='home'>
     <Sidebar />
        <Post posts={posts}/>
      </div>
    </>
  )
}

export default Home