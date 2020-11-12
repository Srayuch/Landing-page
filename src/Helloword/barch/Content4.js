import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Toolbar,
  Button,
  withStyles,
  withWidth,
  Box,
} from "@material-ui/core";

import logo from "../../assest/img2.png";
import img1 from "../../assest/a1.png";
import img2 from "../../assest/a2.png";
import img3 from "../../assest/a3.png";
import "../App.css";

const WhiteTextTypographyHeader = withStyles({
  root: {
    color: "#21243d",
    fontSize: "2.7rem",
  },
})(Typography);

const Boxstyle = withStyles((theme) => ({
  root: {
    "&>img": {
      marginRight: theme.spacing(1),
    },
  },
}))(Box);

const ButtonStyle = withStyles({
  root: {
    backgroundColor: "#eb5b7e",
    borderRadius: "32px",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbackground: {
    width: "100%",
    backgroundColor: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Content4(props) {
  const isMobile = ["xs" /*, "sm"*/].includes(props.width);
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.containerbackground}>
        <CssBaseline />
        <Container maxWidth="md">
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <WhiteTextTypographyHeader
                  component="h1"
                  variant="inherit"
                  align="center"
                  gutterBottom
                >
                  Earn an Accredited Qualification
                </WhiteTextTypographyHeader>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img src={logo} alt="logo" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Toolbar />
                <Toolbar />
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  Demonstrate your new skills and gain a step up in your career
                  with a Shaw Academy globally recognised certification.
                </Typography>
                <br />
                <Typography
                  component="h5"
                  variant="inherit"
                  color="textSecondary"
                  gutterBottom
                >
                  Recognized by
                </Typography>
                <br />
                {isMobile ? (
                  <Boxstyle display="flex">
                    <img
                      src={img1}
                      alt="logo"
                      className="imgs-sponser-mobile"
                    />
                    <img
                      src={img2}
                      alt="logo"
                      className="imgs-sponser-mobile"
                    />
                    <img
                      src={img3}
                      alt="logo"
                      className="imgs-sponser-mobile"
                    />
                  </Boxstyle>
                ) : (
                  <Boxstyle display="flex">
                    <img src={img1} alt="logo" className="imgs-sponser" />
                    <img src={img2} alt="logo" className="imgs-sponser" />
                    <img src={img3} alt="logo" className="imgs-sponser" />
                  </Boxstyle>
                )}

                <br />
                <ButtonStyle variant="contained" color="secondary">
                  More info
                </ButtonStyle>
              </Grid>
            </Grid>
          </div>
          <Toolbar/>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default withWidth()(Content4);
