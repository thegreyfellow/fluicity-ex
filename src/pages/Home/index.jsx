import React from 'react';

import Container from '@material-ui/core/Container';

import Banner from './components/Banner';

const Home = () => (
  <>
    <Container maxWidth="lg" styles="background-color: blue;">
      <Banner />
    </Container>
  </>
);

export default Home;
