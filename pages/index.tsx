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
import useLocalization from '../src/hooks/useLocalization';
import { languageNames } from '../src/translations/config';

const IndexPage: FC = () => {
  const [t, locale, otherLocale] = useLocalization();
  return (
    <Grid variant="layout">
      <Head title="Home" />
      <Header />
      <Container>
        <Text>
          <Text>{locale} {t('tagline')}</Text>
          <Link to="/" locale={otherLocale}>{languageNames[otherLocale]}</Link>
          <Text as="span" variant="headline" sx={{ display: 'block' }}>
            Hello! My name is <Text as="span" variant="gradient">Dalton Craven</Text>.{' '}
          </Text>
          It's hard to introduce myself over the internet, but here's a little bit about me:
        </Text>
        <Grid
          gap={3}
          columns={[1, 2]}
          my={3}
        >
          <Feature heading="Education">
            <Text as="p">I'm a sophomore at the University of South Carolina. I'm pursuing a Bachelor of Science in Computer Science with a major in computer science and a minor in psychology (weird, right?). I'm also a McNair Scholar as part of UofSC's most prestigious scholarship program, the University Top Scholars.</Text>
          </Feature>
          <Feature heading="Study Abroad">
            <Text as="p">I'm currently studying abroad at the American University of Paris! I'll be in France for the entirety of 2021. Spending an extended period of time in a different culture has been a goal of mine for a long time, and I'm looking forward to fully experiencing it <em>when</em> COVID is finally over.</Text>
          </Feature>
          <Feature heading="Work">
            <Text as="p">I recently wrapped up a full-time internship as a front-end web developer at <Link to="https://cloverleaf.me">Cloverleaf</Link>. There, I used a variety of technologies (primarily Next/React and GraphQL) in an agile development team to routinely publish production code for our application. I was also an undergraduate teaching assistant for the spring 2020 semester, running eight sections of Linux/UNIX labs for approximately 250 students.</Text>
          </Feature>
          <Feature heading="Freelancing">
            <Text as="p">I also do freelance web development! I work primarily with small businesses (although I’m open for anything), with an emphasis on providing resources and training to ensure long-term functionality.</Text>
            <ul>
              <li><Link to="https://crystalclearcontractors.com">Crystal Clear Cleaning &amp; Contracting</Link></li>
              <li><Link to="https://elitepaintcincy.com">Elite Painting</Link></li>
              <li><Link to="https://elitecontractingcincy.com">Elite Contracting</Link></li>
              <li><Link to="https://mabbaseball.com">Mason Amateur Baseball</Link></li>
            </ul>
          </Feature>
        </Grid>
        <Box>
          <Heading as="h2">Skills &amp; Certifications</Heading>
          <ul>
            <li>
              <strong>Languages:</strong> React, GraphQL, Java, HTML, CSS, JavaScript, Visual Basic .NET, C++, PHP, SQL, Python, R
            </li>
            <li>
              <strong>Tools:</strong> Next, Git, GitHub, GitLab, Gatsby, cPanel, WHM, Flask, Django, Linux, DigitalOcean, AWS, Netlify, WordPress
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
            <li><strong>American Phone:</strong> <Link isExternal to="tel:+15138136421">+1 513 813 6421</Link></li>
            <li><strong>French Phone:</strong> <Link isExternal to="tel:+330749792094">+33 07 49 79 20 94</Link></li>
            <li><strong>Email:</strong> <Link isExternal to="mailto:daltonjcraven@gmail.com">daltonjcraven@gmail.com</Link></li>
          </ul>
        </Box>
      </Container>
      <Footer />
    </Grid>
  );
};

export default IndexPage;
