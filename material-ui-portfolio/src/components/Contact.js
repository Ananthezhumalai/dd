import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com"; 
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
// const handleSubmit = (e) => {
//   e.preventDefault(); // Prevent default form submission

//   const formData = {
//     name,
//     email,
//     message,
//   };

//   // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS service and user IDs
//   emailjs
//     .send(
//       // "service_msoyli7",
//       "service_msoyli7",
//       // "ananthezhumalai@gmail.com",
//       "template_czswdbo",
//        formData,
//        "ananthezhumalai@gmail.com",
//        "plXAxOecJn1fRA4ye"
//       )
//     .then(
//       (response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Message sent successfully!");
//         // Reset form fields
//         setName("");
//         setEmail("");
//         setMessage("");
//       },
//       (err) => {
//         console.log("FAILED...", err);
//         alert("An error occurred while sending the message.");
//       }
//     );
// };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission
  
  //   const formData = {
  //     name,
  //     email,
  //     message,
  //   };
  
  //   try {
  //     const response = await fetch("http://localhost:5000/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       // Reset form fields
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     } else {
  //       alert("Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while sending the message.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const formData = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
             Contact me Here...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            value={message}
            className={classes.field}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={handleSubmit}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
