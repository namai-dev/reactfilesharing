import {
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  Link,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (user) {
      alert("you are already registered kindly logout first");
      navigate("/dashbord");
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Typography color="blue" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={registerUser}>
            <TextField
              margin="normal"
              placeholder="Enter firstName"
              required
              type="text"
              fullWidth
              name="firstname"
            />
            <TextField
              margin="normal"
              placeholder="Enter LastName"
              required
              type="text"
              fullWidth
              name="lastname"
            />
            <TextField
              margin="normal"
              placeholder="Enter email"
              required
              type="email"
              fullWidth
              name="email"
            />
            <TextField
              margin="normal"
              placeholder="Enter password"
              required
              type={showPassword ? "text" : "password"}
              fullWidth
              name="password"
            />
            <FormControlLabel
              control={<Checkbox onClick={handleShowPassword} />}
              label="Show password"
            />
            <Button
              sx={{ mt: 3, mb: 2 }}
              fullWidth
              variant="contained"
              type="submit"
            >
              SignUp
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password
                </Link>
              </Grid>
              <Grid item sx={{ marginLeft: 4 }}>
                <Link href="#" variant="body2">
                  Have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
