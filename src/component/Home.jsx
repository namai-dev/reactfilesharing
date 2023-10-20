// import {
//   Box,
//   Button,
//   ButtonBase,
//   Container,
//   CssBaseline,
//   ThemeProvider,
//   Typography,
//   createTheme,
// } from "@mui/material";
// import React from "react";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "./context/AuthContext";

// const Home = () => {
//   let { sayHello } = useContext(AuthContext);
//   const darkTheme = createTheme({
//     palette: {
//       mode: "dark",
//     },
//   });
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <Container component="main">
//         <Box>
//           <Typography>Hamo React Security</Typography>
//           <Link to="/dashbord">
//             <Button>View DashBord</Button>
//           </Link>
//           <Link to="/login">
//             <Button>Login</Button>
//           </Link>
//           <Link to="/signUp">
//             <Button>SignUp</Button>
//           </Link>
//           <Button onClick={sayHello}>data</Button>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";

const Home = () => {
  const { sayHello } = useContext(AuthContext);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main">
        <Box sx={{ textAlign: "center", paddingTop: "3rem" }}>
          <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
            Welcome to Hamo React Security
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Explore the power of secure file sharing and management. Upload,
            store, and share your files with confidence. Your data, your way.
          </Typography>
          <Link to="/dashbord">
            <Button variant="contained" color="primary">
              View Dashboard
            </Button>
          </Link>
        </Box>
      </Container>

      <Box
        sx={{
          padding: "4rem 0",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Secure File Sharing</Typography>
                  <Typography variant="body2">
                    Share your files securely with encryption and control over
                    access permissions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Easy Management</Typography>
                  <Typography variant="body2">
                    Manage your files effortlessly with our user-friendly
                    dashboard and organization tools.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Accessible Anytime</Typography>
                  <Typography variant="body2">
                    Access your files from anywhere, whether you're on the go or
                    at home.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          padding: "4rem 0",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            App Features
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Discover the key features that make Hamo React Security stand out:
          </Typography>
          <Typography variant="body2" paragraph>
            - Secure File Encryption: Your files are encrypted to ensure the
            highest level of security during storage and transfer.
          </Typography>
          <Typography variant="body2" paragraph>
            - User-Friendly Dashboard: Our intuitive dashboard makes it easy to
            manage, organize, and access your files.
          </Typography>
          <Typography variant="body2" paragraph>
            - Flexible Access Control: Set permissions and restrictions on file
            sharing to keep your data safe and controlled.
          </Typography>
          <Typography variant="body2" paragraph>
            - Mobile Accessibility: Access your files on the go using our
            mobile-friendly platform.
          </Typography>
          {/* Add more features here */}
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" gutterBottom>
            &copy; 2023 Hamo React Security. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
