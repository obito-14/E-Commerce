import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Context/ProductContext.jsx";
import { FilterContextProvider } from "./Context/FilterContext.jsx";
import { CartProvider } from "./Context/Cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-oqfuxx5oz0vs0hcr.us.auth0.com"
      clientId="pGVMz7q76MmXZpfbwxqw3Hy5BQY8Lzvi"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
