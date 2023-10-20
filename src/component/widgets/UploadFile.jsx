import React, { useContext, useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Typography,
  LinearProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const url = "http://192.168.0.161:8080/api/file/store";
  const { fetchFile } = useContext(AuthContext);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileClear = () => {
    setSelectedFile(null);
  };

  const handleUploadProgress = (progressEvent) => {
    const percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setUploadProgress(percentCompleted);
  };

  const handleSubmit = () => {
    const token = JSON.parse(localStorage.getItem("token")).access_token;
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important for progress tracking
          },
          onUploadProgress: handleUploadProgress, // Track progress
        })
        .then((res) => {
          console.log(res);
          setSelectedFile(null);
          setUploadProgress(0); // Reset progress
          fetchFile();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <input
        id="file-upload-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
      <label htmlFor="file-upload-input">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload File
        </Button>
      </label>
      {selectedFile && (
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Selected File:
          </Typography>
          <TextField
            variant="outlined"
            value={selectedFile.name}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={handleFileClear}
                >
                  <DeleteIcon />
                </IconButton>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "1rem" }}
          >
            Submit File
          </Button>
          {/* Display progress bar */}
          {uploadProgress > 0 && (
            <LinearProgress variant="determinate" value={uploadProgress} />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
