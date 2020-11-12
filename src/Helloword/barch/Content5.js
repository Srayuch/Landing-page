import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  withWidth,
  Container,
  CssBaseline,
  Grid,
  withStyles,
  Typography,
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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Content5(props) {
  const isMobile = ["xs" /*, "sm"*/].includes(props.width);
  const classes = useStyles();
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

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
                  align="left"
                  gutterBottom
                >
                  Earn an Accredited Qualification
                </WhiteTextTypographyHeader>
              </Grid>
            </Grid>
          </div>
          <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Container>
      </div>
    </React.Fragment>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default withWidth()(Content5);
