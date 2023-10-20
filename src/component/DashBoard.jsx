import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import FileWidget from "./widgets/FileWidget";
import HeroSection from "./widgets/HeroSection";
import FileListingSection from "./widgets/FileListingSection";
import { SearchOutlined } from "@mui/icons-material";

const DashBord = () => {
  const { logout, username, token } = useContext(AuthContext);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box
        p={4}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Avatar />
        <Typography sx={{ marginLeft: "3%" }}>{username}</Typography>
      </Box>

      <HeroSection />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <FileListingSection />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          marginTop: "10%",
        }}
      >
        <FileWidget />
      </Box>
    </ThemeProvider>
  );
};

export default DashBord;
