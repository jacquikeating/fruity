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
        <div className="login__info">
          <img src={user.picture} alt="Your avatar" className="login__avatar" />
          <div className="login__info-text">
            <h2 className="login__user-name">{user.username}</h2>
            <p className="login__body-text">
              <span className="login__label-text">Email</span>
              {user.email}
            </p>
            <p className="login__body-text">
              <span className="login__label-text">Role{"  "}</span>
              {role || "N/A"}
            </p>
            <p className="login__note">
              TEMP NOTE: Roles are manually granted within a few hours, or
              faster if you @ me. Avatars can't be changed yet, sorry!
            </p>
          </div>
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
