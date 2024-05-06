import React from 'react'
import new_job from '../images/new_job.png';

const Login = () => {
  return (
    <div className="login_container">
        
        <div className="login_form-container">
          <div className="welcome">
       <h1 className="login_gradient-text1">Welcome Back!!</h1>   
       </div>
          <h2 className='login_gradient-text1'>Login</h2>
          <form>
            <div className="mb-3 login_customer-width">
              <h5>Email</h5>
                <input type="text" placeholder="Username or Email"/>
            </div>
            <div className="mb-3 login_cutomer-width">
                <h5>Password</h5>
                <input type="text" placeholder="Password"/>
            </div>
            <button type="submit" className="login_btn btn-success w-100">
             Login
            </button>
    
          </form>
          </div>
          <div className="login_image">
        <img src={new_job} alt="Job" className="job" /></div>
          </div>
    
  )
}

export default Login
