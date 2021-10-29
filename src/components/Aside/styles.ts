import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const Logo = styled.img`
  height: 35px;
  width: 35px;
`;

export const Title = styled.h3`
  margin-left: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  font-weight: bold;
  text-decoration: none;

  transition: opacity ease 0.3s;

  margin: 10px 0;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
    transition: all ease 0.7s;
  }

  > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;
