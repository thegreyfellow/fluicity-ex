import React from 'react';

import {
  Grid, Button, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardBottom: {
    margin: '14px 5px',
  },
  description: {
    color: '#5d5d5d',
  },
  details: {
    color: '#5d5d5d',
    fontWeight: 100,
  },
  detailsNumber: {
    color: '#5d5d5d',
  },
}));

const buttonStyles = makeStyles(() => ({
  button: {
    borderRadius: 20,
    width: 150,
  },
  Primarybutton: {
    backgroundColor: 'rgb(73,59,248)',
    color: 'white',
  },
  SecondaryButton: {
    backgroundColor: 'white',
    color: 'rgb(73,59,248)',
  },
}));

const CardBottom = () => {
  const classes = useStyles();
  const buttonClasses = buttonStyles();

  // const isSm = useMediaQuery('(min-width:620px)');

  const Buttons = () => (
    <Grid
      xs={12}
      md={4}
      item
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className={`${buttonClasses.button} ${buttonClasses.Primarybutton}`}
        >
          S&apos;abonner
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          className={`${buttonClasses.button} ${buttonClasses.SecondaryButton}`}
        >
          Plus d&apos;infos
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid
      item
      container
      spacing={2}
      direction="row-reverse"
      justify="space-between"
      alignItems="baseline"
      className={classes.cardBottom}
    >
      <Buttons />
      <Grid
        xs={12}
        md={8}
        item
        container
        spacing={2}
        direction="column"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="body2" className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet nostrum expedita aliquam, officia, exercitationem
            vitae quia consequatur blanditiis placeat vel eos?
          </Typography>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  className={classes.detailsNumber}
                >
                  1800
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.details}>
                  Citoyens engagés
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  className={classes.detailsNumber}
                >
                  569
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.details}>
                  Contributions citoyennes
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  className={classes.detailsNumber}
                >
                  12
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.details}>
                  Idées concrétisées
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardBottom;
