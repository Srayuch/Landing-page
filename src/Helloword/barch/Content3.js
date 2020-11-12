import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  withStyles,
  Toolbar,
  withWidth,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const WhiteTextTypographyHeader = withStyles({
  root: {
    color: "#21243d",
  },
})(Typography);

const ButtonStyle = withStyles({
  root: {
    backgroundColor: "#21243D",
    borderRadius: "32px",
    height: "60px",
    width: "40%",
    maxWidth: "240px",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  containerbackground: {
    width: "100%",
    backgroundColor: "white",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    flexDirection: "column",
    borderRadius: "15px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9 56.25%
  },
  cardContent: {
    flexGrow: 1,
  },
  useButton: {
    borderRadius: "32px",
    height: "35px",
    width: "70%",
    maxWidth: "320px",
    backgroundColor: "#eb5b7e",
  },
}));

function Content3(props) {
  const isMobile = ["xs","sm"].includes(props.width);

  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.containerbackground}>
        <br />
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              isMobile
                ? (<Grid item xs={12} key={card}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar variant="square" src={`https://source.unsplash.com/random`} />
                    </ListItemAvatar>
                    <ListItemText  primary={`Graphic Design`} />
                  </ListItem>
                </Grid>)
                : (<Grid item key={card} xs={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <WhiteTextTypographyHeader
                        component="h3"
                        variant="inherit"
                        align="center"
                        gutterBottom
                      >
                        Graphic Design
                      </WhiteTextTypographyHeader>
                      <Toolbar />
                      <Typography color="textSecondary" align="center">
                        904,789 graduates
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        size="medium"
                        className={classes.useButton}
                        color="secondary"
                      >
                        Select
                      </Button>
                    </CardActions>
                    <p></p>
                  </Card>
                </Grid>)
            ))}
          </Grid>
          <Toolbar />
          <div>
            <center>
              <ButtonStyle variant="contained" color="primary">
                View all courses
              </ButtonStyle>
            </center>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default withWidth()(Content3);
