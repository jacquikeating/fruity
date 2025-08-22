import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./styles/index.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-28ixr5eh7jkt3f04.ca.auth0.com"
      clientId="4wqqQ23Y9I6zh4XK2UDQon4YWvFS9Oxs"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>
);
