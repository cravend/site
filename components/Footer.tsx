/** @jsx jsx */
import { FC } from 'react';
import {
  jsx, Container, Text, Flex,
} from 'theme-ui';
import Link from './Link';

const Footer: FC = () => (
  <Container
    variant="wide"
    as="footer"
    m={0}
    p={0}
    sx={{
      backgroundColor: 'dark',
      height: 100,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
    }}
  >
    <Container
      sx={{
        color: 'white',
      }}
    >
      <Flex>
        <Text mr={3}>&copy; 2020 Dalton Craven</Text>
        <Text>View Source on <Link to="https://github.com/cravend/site">GitHub</Link></Text>
      </Flex>
    </Container>
  </Container>
);

export default Footer;
