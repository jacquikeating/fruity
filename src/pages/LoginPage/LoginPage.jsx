import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginPage.scss";

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <main className="login">
        <button className="login__button" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </main>
    );
  }
};

export default LoginPage;
