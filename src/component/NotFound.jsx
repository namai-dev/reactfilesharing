import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";

const NotFound = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Typography variant="h1">URL NOT FOUND</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default NotFound;
