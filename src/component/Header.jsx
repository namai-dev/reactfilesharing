import AuthContext from "./context/AuthContext";

import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const history = useNavigate(); // Initialize the useHistory hook

  const handleLoginClick = () => {
    history("/login"); // Use the push method to navigate to the /login route
  };
  const home = () => {
    history("/"); // Use the push method to navigate to the /login route
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={home}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hamo React Security
        </Typography>
        {user ? ( // Conditionally render Logout if authenticated
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          // Otherwise, show Sign Up and Login buttons
          <>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
