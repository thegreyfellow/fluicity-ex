import React from 'react';

import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardBottom: {
    margin: 10,
  },
  typography: {
    color: 'red',
  },
  cardButtons: {
  },
}));

const CardBottom = () => {
  const classes = useStyles();

  const Buttons = () => (
    <Grid
      xs={12}
      md={6}
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.cardButtons}
    >
      <Button variant="contained" color="primary">
        S&apos;abonner
      </Button>
      <Button variant="contained" color="primary">
        Plus d&apos;infos
      </Button>
    </Grid>
  );

  return (
    <Grid
      item
      container
      spacing={5}
      direction="row-reverse"
      justify="space-between"
      alignItems="baseline"
      className={classes.cardBottom}
    >
      <Buttons />
      <Grid
        xs={12}
        md={6}
        item
        container
        spacing={5}
        direction="column"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="body2" className={classes.cardBottom.typography}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur amet nostrum expedita aliquam, officia, exercitationem vitae
            quia consequatur blanditiis placeat vel eos?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>1800 Citoyens engagés</Grid>
          <Grid item>569 Contributions citoyennes</Grid>
          <Grid item>12 Idées conctétisées</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardBottom;
