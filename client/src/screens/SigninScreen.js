import React, { useEffect, useState } from "react";
import Header2 from "../components/header2";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <Header2/>
      <form className="form-register" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="div-in-form">
          <label className="register-label" htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* password */}

        <div className="div-in-form">
          <label className="register-label" htmlFor="inputEmail">Password</label>
          <input
            type="password"
            id="password"
            placeholder="****"
            autoComplete="on"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="div-in-form">
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div className="div-in-form">
          <label />
          <div className="below-form-note">
            New to our site?{" "}
            <Link to={`/register?redirect=${redirect}`}>Register Here</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
