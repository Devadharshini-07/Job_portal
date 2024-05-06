import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import new_job from '../images/new_job.png';
const Signup = () => {
    return (
      <div className="container">
        
      <div className="form-container">
        <h2 className='gradient-text1'>Register</h2>
        <form>
          <div className="mb-3 customer-width">
            <h5>Email</h5>
              <input type="text" placeholder="Username or Email"/>
          </div>
          <div className="mb-3 cutomer-width">
              <h5>Password</h5>
              <input type="text" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
          <p>Already Have an Account</p>
          <Link to="/login">
          <button className="btn btn-default border w-100">
            Login
          </button>
          </Link>
        </form>
        </div>
        <div className="image">
      <img src={new_job} alt="Job" className="job" /></div>
        </div>
  
    );
  };
  
  export default Signup;