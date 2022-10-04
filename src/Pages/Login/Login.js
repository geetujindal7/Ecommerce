import React, { useContext, useRef } from "react";
import { context } from "../../Constant";
import "./Login.css";

function Login(props) {
  const userRef = useRef("");
  const passwordRef = useRef("");
  const values = useContext(context)
  console.log(values)

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = userRef.current.value;
    const passwordRe = passwordRef.current.value;

    console.log(username, passwordRe);
    props.setUsername(username)
    props.setLogin(true)
  };

  return (
    <>
      <div className="Contain_login">
        <div>
          <img
            className="login_main_image"
            src="https://images.herzindagi.info/image/2022/Jan/shopping-tips-for-save-money.jpg"
            alt=""
          />
        </div>
        <div className="Login_container">
          <form onSubmit={handleSubmit}>
            <img
              className="Shopping_logo"
              src="https://img.freepik.com/premium-vector/happy-shop-logo-template_57516-57.jpg?w=900"
              alt=""
            />
            <p className="login_p_message">
              Please enter your Username and Password to login
            </p>
            <div className="labelValues">
              <label htmlFor="username">Username</label>
            </div>
            <input
              type="text"
              ref={userRef}
              required
              className="inputValues"
            ></input>
            <div className="labelValues">
              <label htmlFor="username">Password</label>
            </div>
            <input
              type="password"
              ref={passwordRef}
              required
              className="inputValues"
            ></input>
            <div>
              <button className="button_submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
