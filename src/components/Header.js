import React from 'react'
import styled from '@emotion/styled'

import ProfilePicture from '../components/ProfilePicture'

const Header = styled.header`
  background: #a8dcd9;
  background: linear-gradient(
    ${({ theme }) => theme.direction},
    ${({ theme }) => theme.colors.inverse} -30%,
    #a8dcd9 80%
  );
  width: 100%;
  height: 250px;
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  margin: 0;
  padding: 0;

  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    clip-path: inherit;
  }
`

const Content = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint}) {
    align-items: normal;
  }
`

const Text = styled.div`
  text-align: right;
  margin-left: 20px;

  h1 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 2.5rem;
  }

  p {
    margin: 0;
    text-transform: lowercase;
  }
`

const Picture = styled(ProfilePicture)`
  width: 125px;
  border-radius: 50%;
`

export default () => (
  <Header>
    <Content>
      <div>
        <Picture />
      </div>
      <Text>
        <h1>Dalton Craven</h1>
        <p>Student & web developer</p>
      </Text>
    </Content>
  </Header>
)
