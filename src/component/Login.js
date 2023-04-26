import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = (props) => {
    let navigate = useNavigate();
    const [userCredential, setUserCredential] = useState({ email: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userCredential.email, password: userCredential.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("jwtoken", json.jwtAuth);
            navigate("/");
            props.showAlert("User Login Successfully", "success")
        } else {
            props.showAlert("Details Are Invalid", "danger")
        }
    }

    const inputChange = (e) => {
        setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
    };


    return (
        <div className='container my-3'>
            <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" id="email" name='email' onChange={inputChange} value={userCredential.email} className="form-control" required />
                </div>


                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={inputChange} value={userCredential.password} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


                <div className="text-center">
                    <p>Not a member? <Link to="/signup">Register</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
