import axios from "axios";
import React from "react";

function Signup() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await axios.post(
      "/signup",
      {
        name: formData.get("name"),
        email: formData.get("email"),
        role: "member",
        password: formData.get("password")
      },
      { withCredentials: true }
    );
    if (response.status === 201) {
      if (response.data.status) {
        alert("SignUp Successfull");
        window.location.href = "/" + response.data.data.role;
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
    } else if (response.status == 409) {
      alert("Email Already Exists");
    } else if (response.status == 400) {
      alert("Fill all fields before submitting.");
    } else {
      alert(response.data.message);
    }
  }

  return (
    <div className="login-bg d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "480px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-3">
            📖 Create User Account
          </h2>
          <p className="text-center text-muted mb-4">
            Join our digital library system
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password ****"
                name="password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <small className="text-muted">
              Already have an account? <a href="/login">Login</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
