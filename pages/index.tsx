import React, { FC } from 'react';
import { Container, Grid, Text } from 'theme-ui';
import Head from '../components/Head';
import Header from '../components/Header';
import Link from '../components/Link';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

const IndexPage: FC = () => (
  <Grid variant="layout">
    <Head title="Home" />
    <Header />
    <Container>
      <Text>
        <Text as="span" variant="headline" sx={{ display: 'block' }}>
          Hello! My name is <Text as="span" variant="gradient">Dalton Craven</Text>.{' '}
        </Text>
        It's hard for me to introduce myself over the internet,
        but here's a little bit about myself:
      </Text>
      <Grid
        gap={3}
        columns={[1, 2]}
      >
        <Feature heading="Education" body="I'm currently entering my sophomore year at the University of South Carolina, pursuing a Bachelor of Science in Computer Science in Computer Science (weird, right?). Additionally, I'm pursuing a minor in psychology. Previously, I was a student at William Mason High School." />
        <Feature
          heading="Coding"
          body={<>I currently work as a web development intern at <Link to="https://cloverleaf.me">Cloverleaf</Link>, working with Next, styled-components, and Apollo (some of the same stuff I'm using <Link to="github">for this website</Link>).</>}
        />
      </Grid>
    </Container>
    <Footer />
  </Grid>
);

export default IndexPage;
