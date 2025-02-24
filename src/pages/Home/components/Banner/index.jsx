import React from 'react';

import {
  Card,
  Typography,
  Avatar,
  Grid,
  Container,
  useMediaQuery,
} from '@material-ui/core';
import { Dashboard, Room, VerifiedUser } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import cat from './cat.jpg';
import bgImage from './bg-image.jpg';

import CardBottom from './CardBottom';

const useStyles = makeStyles(() => ({
  cardTop: {
    maxHeight: 260,
    fontFamily: "'Roboto', sans-serif",
    color: 'white',
    backgroundColor: 'white',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)) ,url(${bgImage})`,
  },
  avatar: {
    width: 70,
    height: 70,
    marginTop: 40,
    marginBottom: -20,
    marginLeft: 15,
  },
  list: {
    fontSize: 16,
  },
  icon: {
    height: 24,
  },
}));

const Banner = () => {
  const classes = useStyles();

  const isSm = useMediaQuery('(max-width:620px)');

  return (
    <Container maxWidth="xl">
      <Card>
        <Grid
          container
        >
          <Grid
            item
            container
            spacing={3}
            direction="row"
            justify={isSm ? 'center' : 'flex-start'}
            alignItems="flex-end"
            className={classes.cardTop}
          >
            <Grid xs="auto" item>
              <Avatar alt="avatar" src={cat} className={classes.avatar} />
            </Grid>
            <Grid xs="auto" item>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems={isSm ? 'center' : 'flex-start'}
              >
                <Grid item>
                  <Typography variant="h6">
                    Paris Neuf
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  spacing={isSm ? 1 : 2}
                  direction="row"
                  justify={isSm ? 'center' : 'flex-start'}
                  alignItems="center"
                  className={classes.list}
                >
                  <Grid xs="auto" item>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                    >
                      <Grid item className={classes.icon}>
                        <Dashboard fontSize="inherit" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          Collectivité
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs="auto" item>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                    >
                      <Grid item className={classes.icon}>
                        <Room fontSize="inherit" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          Paris
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs="auto" item>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                    >
                      <Grid item className={classes.icon}>
                        <VerifiedUser fontSize="inherit" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          Actif depuis septembre 2019
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CardBottom />
        </Grid>
      </Card>
    </Container>
  );
};

export default Banner;
