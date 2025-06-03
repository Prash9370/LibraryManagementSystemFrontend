import axios from 'axios';
import React from 'react'
import { url } from '../values';


function Login() {
  async function handleSubmit(e) {
    e.preventDefault();
    const loginData = new FormData(e.target);
    const response = await axios.post(url+"/login",{email: loginData.get("email"), role:loginData.get("role"),password: loginData.get("password")}, {withCredentials: true})
    if(response.status === 200) {
      if(response.data.status){
        alert("Login Successfull");
        window.location.href="/"+response.data.data.role;
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
    }else if(response.status == 401){
      alert(response.data.message);
    }

  }

  return (
    <div className="login-bg d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-3">📚 Library Login</h2>
          <p className="text-center text-muted mb-4">Access your digital library</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name='email'
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>

              <select name="role" className='form-control'>
                <option value="member">User</option>
                <option value="librarian">Librarian</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password ****"
                name='password'
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <small className="text-muted">Don't have an account? <a href="/signup">Sign up</a></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login