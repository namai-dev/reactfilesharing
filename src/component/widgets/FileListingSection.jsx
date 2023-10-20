import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import FileWidget from "./FileWidget";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const FileListingSection = () => {
  const { myfiles } = useContext(AuthContext);

  return (
    <Box
      sx={{
        padding: "4rem 0",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Your Uploaded Files
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            marginTop: "10%",
          }}
        >
          {myfiles.map((file, index) => (
            <React.Fragment key={index}>
              <FileWidget
                filename={file.fileName}
                size={file.size}
                type={file.fileType}
                url={file.url}
                id={file.id
                }
              />
              {/* {index !== files.length - 1 && <Divider />} */}
            </React.Fragment>
          ))}
        </Box>
        {/* <List component="nav">
          {files.map((file, index) => (
            <React.Fragment key={index}>
              <ListItem button>
                <ListItemText primary={file} />
              </ListItem>
              {index !== files.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List> */}
      </Container>
    </Box>
  );
};

export default FileListingSection;
