import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project7 from "../images/react.svg"
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import img from "../images/html,css,js.jpg";
import Reactjs from "../images/hhhhh.png"
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Resume",
    description: `Developed a dynamic resume builder web application where users can input personal details, job experience, skills, and projects, and generate a custom resume in PDF format. 
    The application allows users to download their resume directly as a PDF,A PDF download button using the browser's print functionality.
     providing a smooth and user-friendly experience.`,
    image: img,
    liveDemo: "https://656d66918dc25f10d23b6d5b--flourishing-fairy-2b9c7f.netlify.app/",
    Github:"https://github.com/Ananthezhumalai/Htmltopdfresume"
  },
  {
    name: "Teerex-store",
    description: `TeeRex Store is a personal project I developed as part of a GeekTrust coding challenge.
     I built a responsive web application using ReactJS and CSS,
      featuring a dynamic shopping cart that displays real-time updates of item quantities and total costs.
      The project demonstrates my ability to create engaging user experiences while meeting specific technical requirements.`,
    image: img,
    liveDemo: "https://teerex-clothing-store.netlify.app/",
    Github:"https://github.com/Ananthezhumalai/Terex-store"
  },
  {
    name: "Portfolio",
    description: `Portfolio is a personal project I developed as part of a coding challenge of mine.
     I built a responsive web application using ReactJS and CSS, featuring a dynamic shopping cart that displays real-time updates of item quantities and total costs.
      The project demonstrates my ability to create engaging user experiences while meeting specific technical requirements.`,
    image: Reactjs,
    liveDemo: "https://679b61963eb3af0008a2b5dc--ananthezhumalai-portfolio.netlify.app/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                style={{
                  backgroundColor:"rgb(24 170 161 / 43%)"
                }}
                size="small"
                //  color="primary"
                variant="contained" color="error"
                 component="a"
                 href={project.Github}
                 target="_blank"
                 rel="noopener noreferrer">
                  Share
                </Button>
                <Button
                 style={{
                  backgroundColor:"rgb(24 170 161 / 43%)"
                }}
                  size="small"
                  variant="contained"
                  color="error"
                  component="a"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
