import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Singlepost from '../../Singlepost/Singlepost';
import "./Single.css"

const Single = () => {
  return (
    <div className='single'>
       
        <Sidebar/>
        <Singlepost/>
       </div>
  )
}

export default Single