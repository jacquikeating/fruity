import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginPage.scss";

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <main className="login">
        <h1 className="login__heading">Log In</h1>
        <button className="login__button" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </main>
    );
  } else {
    const role = user["https://wall-is-safe.netlify.app/roles"][0];

    return (
      <main className="login">
        <h1 className="login__heading">Your Account</h1>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {role === "admin" ? <p>Hi admin</p> : ""}
        </div>
        <button
          className="login__button"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </main>
    );
  }
};

export default LoginPage;
