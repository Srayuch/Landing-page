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
} from "@material-ui/core";

import logo from "../../assest/img1.png";

const WhiteTextTypographyHeader = withStyles({
  root: {
    color: "#21243d",
    fontSize: "2.7rem",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerbackground: {
    width: "100%",
    backgroundColor: "white",
  },
  useButton: {
    backgroundColor: "#eb5b7e",
    borderRadius: "32px",
    height: "60px",
    width: "100%",
    maxWidth: "320px",
  },
}));

function Content1(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.containerbackground}>
        <Toolbar />
        <CssBaseline />
        <Container maxWidth="md">
          <div className={classes.root}>
            <Grid container direction="row-reverse">
              <Grid item xs={12} sm={6}>
                <img src={logo} alt="logo" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteTextTypographyHeader
                  component="h1"
                  variant="inherit"
                  align="left"
                  gutterBottom
                >
                  Build your business, hobby or career. 555555555
                </WhiteTextTypographyHeader>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  Online video classes with in-depth & practical skills.
                  Education <br />
                  made easy, affordable and fun!
                </Typography>
                <br />
                <Button
                  variant="contained"
                  size="large"
                  className={classes.useButton}
                  color="secondary"
                >
                  Get 4 weeks Free
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Content1;
