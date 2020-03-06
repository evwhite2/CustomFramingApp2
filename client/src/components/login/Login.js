import React from "react";

import { useAuth0 } from "../../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

import Section from "../Section"

function Login() {
  return (
    <Section>
        <div className="container has-text-centered">
          
          <div className="column is-4 is-offset-4">
          <h3 class="title has-text-black">Login</h3>
            <hr class="login-hr"/>
            <form>
              <div className="field">
                  <div className="control">
                      <input className="input is-med" type="text" placeholder="Username" autofocus=""/>
                  </div>
              </div>

              <div className="field">
                  <div className="control">
                      <input className="input is-med" type="password" placeholder="Password"/>
                  </div>
              </div>
                <button className="button is-block is-success is-med is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
            <hr class="login-hr"/>
            <p class="has-text-black">
            New User? <a href="/signUp">Sign Up Here</a>
                    </p>
          </div>
        </div>
    </Section>
  );
}

  return (
    <div className="">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;