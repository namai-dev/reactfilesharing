import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Icon, IconButton, Link } from "@mui/material";
import { Download, More, Share } from "@mui/icons-material";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const FileWidget = ({ filename, size, type, url, id }) => {
  const [token, setToken] = React.useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token")).access_token
      : null
  );

  const downloadFile = (id, filename) => {
    axios
      .get(`http://192.168.0.161:8080/api/file/getFile/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      })
      .then((resp) => {
        console.log(resp.data);
        const href = window.URL.createObjectURL(resp.data);
        const arcgElement = document.createElement("a");
        arcgElement.href = href;
        arcgElement.download = filename;
        document.body.appendChild(arcgElement);
        arcgElement.click();
        document.body.removeChild(arcgElement);
        window.URL.revokeObjectURL(href);
      })
      .catch((err) => console.log(err));
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Card sx={{ minWidth: 275, mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          My file
        </Typography>
        <Typography variant="h5" component="div">
          <Typography>{filename}</Typography>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {size}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Link href={url}>Downoad</Link>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Delete
        </Button>
        <IconButton onClick={() => downloadFile(id, filename)}>
          <Icon>
            <Download />
          </Icon>
        </IconButton>
        <IconButton>
          <Icon>
            <Share />
          </Icon>
        </IconButton>
        <IconButton>
          <Icon>
            <More />
          </Icon>
        </IconButton>
        {type && type.startsWith("audio/") && (
          <audio controls>
            <source
              src={`http://192.168.43.42:8080/api/file/getFile/${id}`}
              type={type}
            />
            Your browser does not support the audio element.
          </audio>
        )}
      </CardActions>
    </Card>
  );
};

export default FileWidget;
