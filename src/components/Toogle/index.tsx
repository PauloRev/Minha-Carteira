import React from 'react';

import { Container, ToogleLabel, ToogleSelector } from './styles';

const Toogle: React.FC = () => (

  <Container>
    <ToogleLabel>Claro</ToogleLabel>
    <ToogleSelector
      uncheckedIcon={false}
      checkedIcon={false}
      checked
      onChange={() => console.log("Changed")}
    />
    <ToogleLabel>Escuro</ToogleLabel>
  </Container>

);

export default Toogle;
