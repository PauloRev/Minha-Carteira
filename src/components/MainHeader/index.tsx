import React, { useMemo } from 'react';

import {
  Container,
  Profile,
  Welcome,
  Username
} from './styles';

import Toogle from '../Toogle';

import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {

    const index = Math.floor(Math.random() * emojis.length);

    return emojis[index];

  }, []);

  return (
    <Container>
      <Toogle />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Paulo Henrique</Username>
      </Profile>
    </Container>
  )
}

export default MainHeader;
