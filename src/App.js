import React from "react";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import DashBord from "./component/DashBoard";
import PrivateRoutes from "./component/utils/PrivateRoutes";
import Login from "./component/Login";
import Register from "./component/Register";
import NotFound from "./component/NotFound";
import { AuthProvider } from "./component/context/AuthContext";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={Home} path="/" />
        <Route Component={Register} path="/signUp" />
        <Route Component={NotFound} path="*" />
        <Route element={<PrivateRoutes />}>
          <Route Component={DashBord} path="/dashbord" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
