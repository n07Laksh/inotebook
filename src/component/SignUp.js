import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function SignUp(props) {

  let navigate = useNavigate();
  const [userCredential, setUserCredential] = useState({ name: "", email: "", password: "", cpassword: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userCredential.name, email: userCredential.email, password: userCredential.password })
    });
    const json = await response.json();
    if(json.success){
    localStorage.setItem("jwtoken", json.jwtAuth);
    navigate("/");
    props.showAlert("User SignUp Successfully", "success")
    } else {
      props.showAlert("User Credentials are Invalid", "danger")
    }
  }

  const inputChange = (e) => {
    setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
  };

  return (
    <div className='container my-3'>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <input type="text" className="form-control" value={userCredential.name} name="name" placeholder="Name" onChange={inputChange} required="required" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" value={userCredential.email} name="email" placeholder="Email" onChange={inputChange} required="required" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" value={userCredential.password} name="password" placeholder="Password" onChange={inputChange} required="required" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" value={userCredential.cpassword} name="cpassword" placeholder="Confirm Password" onChange={inputChange} required="required" />
          </div>
          <div className="form-group">
            <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a></label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mt-5 btn-block">Sign Up</button>
          </div>
        </form>
        <div className="hint-text">Already have an account? <Link to="/login">Login here</Link></div>
      </div>
    </div>
  )
}

export default SignUp
