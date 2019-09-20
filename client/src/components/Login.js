import React, { useState } from "react";
import { connect } from "react-redux";
import { getLogin } from "../store/actions";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    
      props.getLogin(form, props);
    
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="LoginContainer">
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="info-input">
            <label>User Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={form.username}
            />
          </div>
          <div className="info-input">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={form.password}
            />
          </div>
          <button className="form-button" type="submit">
            Sign in
          </button>
         
        </form>
        
      </div>
    </>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    
  };
};

export default connect(
  mapStateToProps,
  { getLogin }
)(Login);

