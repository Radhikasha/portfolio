import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my_photo.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
        <img src={profile_img} alt="Radhika Sharma" style={{ width: "400px", height: "400px", borderRadius: "50%", objectFit: "cover" }} />

        <h1 className="gradient-heading"> <span>I'm Radhika Sharma</span> ,a Software Developer</h1>
        <p>Aspiring Computer Science Engineer | Proficient in Java, and Web Development | Problem Solver with 300+ LeetCode Questions Solved | Passionate About Scalable Systems and Innovative Solutions</p>
        <div className="hero-action">
            <button className="hero-connect" onClick={() => navigate('/contact')}>Connect with me</button>
                <button className="hero-connect" onClick={() => navigate('/resume')}>My Resume</button>
            
        </div>
    </div>
  )
}
export default Hero
