import React, { useState, useContext } from "react";

import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  let [details, setDetails] = useState({ username: "", password: "" });
  let [error, setError] = useState("");
  let [sucess, setSucess] = useState("");
  let { token, setToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let username = details.username;
    let password = details.password;

    console.log("input", username, password);
    if (details.username.trim() === "" || details.password.trim() === "") {
      setError("All fields are mandatory");
      return;
    }

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),

      // expiresInMins: 60, // optional
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid credentials") {
          setError("Invalid credentials");
        } else {
          setSucess("Successfully logged in!");
        }
        console.log(data);
        setToken(data);
        console.log("token", token);
        localStorage.setItem("userData", JSON.stringify(data));
        clearData();
        navigate("/Profile");
      });
  };

  function clearData() {
    setError("");
    setDetails({ username: "", password: "" });
  }

  const change = (e) => {
    const { name, value } = e.target;
    setDetails((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  return (
    <div className="form-container">
      <h1>LOGIN</h1>
      <form action="" onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={details.name}
          onChange={change}
        />
        <input
          type="Password"
          name="password"
          placeholder="password"
          value={details.password}
          onChange={change}
        />
        <p>{error}</p>

        <button id="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
