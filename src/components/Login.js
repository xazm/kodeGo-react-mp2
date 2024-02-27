import React from "react";
import { useState } from "react";
import companyLogo from "../assets/companyLogo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [authenticate, setAuthenticate] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // THIS IS MY ORIGINAL FUNCTION

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Basic validation

    // if (username === "user" && password === "password") {
    //   // Successful login redirect to dashboard
    //   history.push("/dashboard");
    //   alert("Login successful!");
    // } else {
    //   setLoginError("Invalid username or password");
    // }

    try {
      const response = await fetch("http://localhost:5000/login-validation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        // Successful login

        alert("Login successful!");
        navigate("/dashboard");
      } else {
        // Failed login
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("An error occurred during login");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
            <form onSubmit={handleLogin}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img
                  src={companyLogo}
                  alt="Logo"
                  className="img-fluid logo"
                  style={{ width: "120px" }}
                />
                <h3>Log In</h3>
              </div>
              <div className="p-2px p-sm-3px my-2 mx-2 col-8">
                {loginError && <p style={{ color: "white" }}>{loginError}</p>}
              </div>
              <div className="form-floating mb-3 ">
                <input
                  type="text"
                  className=" form-control"
                  placeholder="username"
                  autoComplete="username"
                  value={username}
                  onChange={handleUsername}
                />
                <label>Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password" // Use type="password" for password fields
                  className="form-control"
                  placeholder="password"
                  autoComplete="password"
                  value={password}
                  onChange={handlePassword}
                />
                <label>Password</label>
              </div>
              <button type="submit" className="btn btn-warning py-3 w-100 mb-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
