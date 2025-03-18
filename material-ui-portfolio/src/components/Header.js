import React,{useState} from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Footer from "./Footer";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  listItem: {
    color: "tan",
  },
}));
const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];
const Header = () => {
  const classes = useStyles();
 const [open, setOpen] = useState(false);

 const sideList = () => (
  <Box className={classes.menuSliderContainer} component="div">
    <Avatar className={classes.avatar} src={avatar} alt="Ananth Ezhumalai"  />
    <Divider />
    <List>
      {menuItems.map((item, i) => (
        <ListItem
          button
          key={i}
          className={classes.listItem}
          onClick={() => setOpen(false)}
          component={Link}
          to={item.listPath}
        >
          <ListItemIcon className={classes.listItem}>
            {item.listIcon}
          </ListItemIcon>
          <ListItemText primary={item.listText} />
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (
    <>
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Ananth Ezhumalai"  onClick={() => setOpen(true)}/>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Ananth Ezhumalai"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "React js Developer",
            "Sharepoint Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
       
    </Box>
    <Box className={classes.typedContainer}>
    <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
              {sideList()}
              <Footer />
            </Drawer>
      </Box>
    </>
  );
};

export default Header;
