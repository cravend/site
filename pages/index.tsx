/* eslint-disable max-len */
import React, { FC } from 'react';
import {
  Container, Grid, Text, Heading, Box,
} from 'theme-ui';
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
        It's hard for me to introduce myself over the internet, but here's a little bit about myself:
      </Text>
      <Grid
        gap={3}
        columns={[1, 2]}
        my={3}
      >
        <Feature heading="Education" body="I'm currently a rising sophomore at the University of South Carolina. I'm pursuing a Bachelor of Science in Computer Science with a major in computer science and a minor in psychology (weird, right?). I'm also a McNair Scholar as part of UofSC's most prestigious scholarship program, the University Top Scholars." />
        <Feature
          heading="Career"
          body={<>I just wrapped up a full-time internship as a front-end web developer at <Link to="https://cloverleaf.me">Cloverleaf</Link>. There, I used a variety of technologies (primarily Next/React and GraphQL) in an agile development team to routinely publish production code for our application. I was also an undergraduate teaching assistant for the spring 2020 semester, running eight sections of Linux/UNIX labs for approximately 250 students.</>}
        />
        <Feature
          heading="Extracurriculars & Fun"
          body={<>I began taking swing dance classes last year (we’ve paused to protect the dancers' health) and hanging out at a swing dance club in Columbia. I also own a 1963 Mercury Comet Custom that I am restoring, learning a <i>ton</i> about working on classic cars in the process. I am an avid film photographer and am planning to take a photography course this fall. Finally, I am the webmaster and executive board member at <Link to="http://acm.cse.sc.edu">ACM@USC</Link>, the University of South Carolina's student chapter of the Association for Computing Machinery.</>}
        />
        <Feature
          heading="Freelancing"
          body={(
            <>
              I also do freelance web development! I work primarily with small businesses (although I’m open for anything), with an emphasis on providing resources and training to ensure long-term functionality.
              <ul>
                <li><Link to="https://crystalclearcontractors.com">Crystal Clear Cleaning &amp; Contracting</Link></li>
                <li><Link to="https://elitepaintcincy.com">Elite Painting</Link></li>
                <li><Link to="https://elitecontractingcincy.com">Elite Contracting</Link></li>
                <li><Link to="https://mabbaseball.com">Mason Amateur Baseball</Link></li>
              </ul>
            </>
          )}
        />
      </Grid>
      <Box>
        <Heading as="h2">Skills &amp; Certifications</Heading>
        <ul>
          <li>
            <strong>Languages:</strong> React, Java, C++, HTML, CSS, JavaScript, GraphQL, Visual Basic .NET, C++, PHP, SQL, Python, R
          </li>
          <li>
            <strong>Tools:</strong> WordPress, Gatsby, Next, Git, GitHub, GitLab, cPanel, WHM, Flask, Django, Linux, DigitalOcean, AWS, Netlify
          </li>
          <li>
            <strong>Certifications:</strong>
            <ul>
              <li>The Fundamentals of Digital Marketing, Google — <em>Certified April 2020</em></li>
              <li>Microsoft Office Specialist (MOS) Master 2016, MOS Word 2016 Expert, MOS Excel 2016 Expert, MOS PowerPoint 2016, MOS Outlook 2016, MOS Access 2016 — <em>Certified Fall 2018</em></li>
            </ul>
          </li>
        </ul>
      </Box>
      <Box>
        <Heading as="h2">Contact</Heading>
        <ul>
          <li><strong>Phone:</strong> <Link isExternal to="tel:5138136421">513.813.6421</Link></li>
          <li><strong>Email:</strong> <Link isExternal to="mailto:daltonjcraven@gmail.com">daltonjcraven@gmail.com</Link></li>
        </ul>
      </Box>
    </Container>
    <Footer />
  </Grid>
);

export default IndexPage;
