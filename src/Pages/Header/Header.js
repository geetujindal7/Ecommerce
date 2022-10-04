import React from "react";
import Icons from "../../Component/Icons/Icons";
import "./Header.css";

function Header(props) {
  return (
    <>
      <div className="headerMain">
        <div className="header_flex">
          <h2>Happy Shop</h2>
          <div className="login_icons">
            <h2>Welcome {props.userName}</h2>
            <h4>Home</h4>
            <h4>Support</h4>
            <h4 onClick={props.handleLogout}>Logout</h4>
          </div>
        </div>
      </div>
      <Icons />
    </>
  );
}

export default Header;
