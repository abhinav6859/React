import React from "react";

var nologged = false;
function login() {
  return (
    <form className="form">
      <input type="text" placeholder="username"></input>
      <input type="password" placeholder="password"></input>
      {nologged ? (
        <input type="password" placeholder="confirm password"></input>
      ) : null}
      <button type="submit">{nologged ? <h4>Register</h4> : <h4>login</h4>}</button>
    </form>
  );
}

export default login;
