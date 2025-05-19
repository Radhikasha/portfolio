import React from 'react'
import './About.css'
import profile_img from '../../assets/avtarportfolio.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1 className="gradient-heading">About me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" style={{ width: "400px", height: "400px" }}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Third-year B.Tech Computer Science student at GLA University with a strong foundation in problem-solving, demonstrated by solving 300+ questions on LeetCode, Codeforces and codechef. Proficient in programming languages like C, Java, and Python, with a growing interest and foundational knowledge in web development. Eager to apply technical skills to real-world projects and continue learning in the field of software development. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React & JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1 className="gradient-heading">10+</h1>
                <p>Projects Done</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1 className="gradient-heading">10+</h1>
                <p>Web Development</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1 className="gradient-heading">10+</h1>
                <p>Data Structure and Algorithms</p>
            </div>
        </div>


    </div>
  )
}

export default About;import { Link } from 'react-router-dom';
// ...
<ul className='nav-menu'>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About me</Link></li>
  <li><Link to="/projects">Projects</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li>Resume</li>
</ul>