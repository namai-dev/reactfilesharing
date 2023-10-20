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
import { useContext, useState } from "react";
import AuthContext from "./context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useContext(AuthContext);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleLogin}>
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
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password
                </Link>
              </Grid>
              <Grid item sx={{ marginLeft: 4 }}>
                <Link href="#" variant="body2">
                  Dont have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
