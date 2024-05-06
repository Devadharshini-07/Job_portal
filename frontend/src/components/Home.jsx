import React from 'react'
import { Link } from 'react-router-dom';
import job_profile5 from '../images/job_profile5.jpeg'
import homepage from '../images/homepage.jpg';
import login_logo3 from '../images/login_logo3.jpeg';
import logo from '../images/logo.jpg';

function Home() {
  return (
      <div className="Home_container">
        <div className="topnav">
          <a href="#Jobportal"><img src={logo} alt="Logo" className="logo" /></a>
          <div className="topnav-right">
            <Link to="/signup">
            <a href="#Signup"><img src={job_profile5} alt="Jobpro" className="jobpro" /></a>
            </Link>
            <Link to="/login">
            <a href="#Login"><img src={login_logo3} alt="Login_logo3" className="login_logo3" /></a>
            </Link>
          </div>
        </div>
        <div className='home_content'>
        <div className="content">
        <div className="heading">
          <h1>Get your Own Job!...</h1>
        </div>
        <div className="text">
          <h1>You can select your job through our website</h1>
          <h1>Find the most exciting startup jobs</h1>
        </div>
        <div className="show">
          <button class="button button1">Apply Now!</button>
        </div>
        </div>
        <div className="home_image">
<img src={homepage} alt="Job_home" className="job_home" />
</div>
      </div></div>



  )
}

export default Home;
