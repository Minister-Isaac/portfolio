import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { FaArrowRight } from 'react-icons/fa';

export const MyWork = () => {
  return (
    <div id='work' className='mywork'>
     <div className='mywork-title'>
       <h1>My latest work</h1>
     </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
            return <img key={index} src={work.w_img} style={{height: "200px", width: "300px"}} alt='' />
        })}
      </div>
      <div className='mywork-showmore'>
       <p>Show More</p>
       <FaArrowRight size={24} />
      </div>
    </div>
  )
}
