import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const navigate = useNavigate();
  const [username, setUsername] = useState(() =>
    localStorage.getItem("token")
      ? jwtDecode(JSON.parse(localStorage.getItem("token")).access_token).sub
      : null
  );

  const [myfiles, setMyfiles] = useState([]);
  const [token, setToken] = useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token")).access_token
      : null
  );
  const urlfiles = "http://192.168.0.161:8080/api/file/userFiles";

  const fetchFile = () => {
    axios
      .get(urlfiles, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMyfiles(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFile();
  }, []);

  const registerUser = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const userdata = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(userdata);
    axios
      .post("http://192.168.0.161:8080/api/v1/auth/register", userdata)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const url = "http://192.168.0.161:8080/api/v1/auth/authenticate";
  const sayHello = () => {
    console.log("helooooo");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    axios
      .post(url, { email: email, password: password })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("token", JSON.stringify(res.data));
        navigate("/dashbord");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const data = {
    sayHello: sayHello,
    handleLogin: handleLogin,
    user: user,
    logout: logout,
    registerUser: registerUser,
    username: username,
    myfiles: myfiles,
    fetchFile: fetchFile,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
