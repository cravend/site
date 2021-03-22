import React, { FC } from 'react';
import {
  Container, Text, Flex,
} from 'theme-ui';
import useLocalization from '../src/hooks/useLocalization';
import Link from './Link';

const Footer: FC = () => {
  const [t] = useLocalization();
  const year = new Date().getFullYear();

  return (
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
          <Text mr={3}>&copy; {year} {t('name')}</Text>
          <Text>
            {t('viewSource')}{' '}
            <Link to="https://github.com/cravend/site">{t('github')}</Link>
          </Text>
        </Flex>
      </Container>
    </Container>
  );
};

export default Footer;
