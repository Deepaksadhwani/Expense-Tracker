import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/home", element: <Home /> },
  { path: "/ProfilePage", element: <UserProfile /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>,
);
