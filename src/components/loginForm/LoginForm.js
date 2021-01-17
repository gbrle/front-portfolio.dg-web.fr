import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "./dg-web-logo.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    background: "white",
    border: "1px solid black",
    padding: "50px",
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();

  return (
    <div className={props.displayLoginForm ? "d-block" : "d-none"}>
      <div
      id="containerLoginForm"
        onClick={(e) => 
            {
                if (e.target.id === "containerLoginForm"){props.displayLoginFormAction()
                } else {
                    }

                }
            }
            
        className="position-absolute w-100 h-100 d-flex align-items-center"
        style={{ zIndex: 1000, background: "rgb(255,255,255, 0.9)" }}
      >
        <Container className="fadeIn" component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <div className="d-flex justify-content-center">
                <Avatar className={classes.avatar}>
                  <img alt="Logo dg web" src={logo} />
                </Avatar>
              </div>
              <Typography className="text-center" component="h1" variant="h5">
                Se connecter
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Connexion
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
