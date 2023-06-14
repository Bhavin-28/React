import React, { useState } from 'react';
import './Registration.css';

const Registration = ({handleRegistration}) => {
  const [fname,setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(email,password,fname);
    console.log('Register:', password, email, confirmPassword);
    // Handle registration logic
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Registration Page</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" className="form-control" id="fname" aria-describedby="name" placeholder="Enter First Name" value={fname} onChange={(e) => setFname(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" className="form-control" id="lname" aria-describedby="last name" placeholder="Enter Your Last Name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <small id="emailHelp" className="form-text text-mute d">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <small className="form-text text-muted">Confirm password must be the same as the password.</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
