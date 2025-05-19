import React from 'react'
import './MyWork.css'
import Projects from '../../assets/Projects'
const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1 className="gradient-heading">My Latest Projects </h1>

        </div>
        <div className="mywork-container">
            {Projects.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" style={{ width: "250px", height: "250px" }} />
            })}

        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
        </div>

    </div>
  )
}

export default MyWork