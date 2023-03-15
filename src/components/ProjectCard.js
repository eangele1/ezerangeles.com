import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import placeholder from "../data/images/placeholder.jpeg";

export default function ProjectCard({
  title,
  body,
  image,
  demoURL,
  projectURL,
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "30px 0px",
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: "100%",
          backgroundColor: "black",
          margin: "0px 60px",
          border: 2,
          borderColor: "lightgray",
        }}
      >
        <CardMedia
          sx={{ height: 140, backgroundColor: "white" }}
          image={image ? image : placeholder}
          title="green iguana"
        />
        <CardContent sx={{ backgroundColor: "black" }}>
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          {demoURL && (
            <Button
              href={demoURL}
              target="_blank"
              sx={{ borderRadius: 15 }}
              size="small"
              variant="contained"
            >
              Demo
            </Button>
          )}
          {projectURL && (
            <Button
              href={projectURL}
              target="_blank"
              sx={{ borderRadius: 15 }}
              size="small"
              variant="contained"
            >
              Learn More
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
