import React, { FC } from 'react';
import {
  Container, Card, Grid, Heading, Text,
} from 'theme-ui';
import Head from '../components/Head';
import Header from '../components/Header';
import Link from '../components/Link';

const IndexPage: FC = () => (
  <>
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
        <Card variant="interactive">
          <Heading as="h3">Coding</Heading>
          <Text>
            I'm currently entering my sophomore year at the University of South Carolina, pursuing a Bachelor of Science in Computer Science in Computer Science (weird, right?). I'm also a web developer at <Link to="https://cloverleaf.me">Cloverleaf</Link>.
          </Text>
        </Card>
        <Card variant="interactive">
          <Heading as="h3">Activism</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card>
        <Card variant="interactive">
          <Heading as="h3">Computer Science</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card>
        <Card variant="interactive">
          <Heading as="h3">Computer Science</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card>
      </Grid>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

    </Container>
  </>
);

export default IndexPage;
