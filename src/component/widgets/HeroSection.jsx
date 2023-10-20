import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFile from "./UploadFile";

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: "4rem 0",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Share Files Easily and Securely
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          With our advanced file sharing feature, you can securely upload and
          store your files for the long term. Share important documents, images,
          and more with a simple link.
        </Typography>
        <UploadFile />
      </Container>
    </Box>
  );
};

export default HeroSection;
