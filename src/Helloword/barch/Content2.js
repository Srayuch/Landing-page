import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Toolbar,
  withStyles,
  Grid,
} from "@material-ui/core";

const WhiteTextTypographyHeader = withStyles({
  root: {
    color: "#21243d",
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
}));

function Content2() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.containerbackground}>
        <Toolbar />
        <CssBaseline />
        <Container maxWidth="md">
          <div className={classes.root}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                <WhiteTextTypographyHeader
                  component="h1"
                  variant="inherit"
                  align="left"
                  gutterBottom
                >
                  Earn an Accredited Qualification
                </WhiteTextTypographyHeader>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Content2;
