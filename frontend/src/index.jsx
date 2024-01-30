import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "@/store";
import { restoreCSRF, csrfFetch } from "@/store/csrf";

import * as sessionActions from "@/store/session";
import * as userActions from "@/store/users";
import * as storyActions from "@/store/stories";
import * as commentActions from "@/store/comments";

const store = configureStore();

if (import.meta.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.userActions = userActions;
  window.storyActions = storyActions;
  window.commentActions = commentActions;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
