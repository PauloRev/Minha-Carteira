import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToogleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  margin: 0 10px;
`;

export const ToogleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
  })
)<ReactSwitchProps>``;
