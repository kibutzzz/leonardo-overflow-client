import styled from "styled-components";
import Input from "../general/styles/Input";

export const SearchBox = styled.form`
  display: flex;
  flex-grow: 1;
  max-width: 400px;
`;

export const Container = styled.nav`
  display: flex;
  position: sticky;
  top: 0;

  padding: 10px 20px;

  justify-content: space-between;
  align-items: center;

  z-index: 100;
  backdrop-filter: blur(20px);
  box-shadow: 10px 0 10px gray;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const NavInput = styled(Input)`
  margin-top: 0;
  flex-grow: 1;
  max-width: 500px;
`;

export const AppName = styled.h1`
  font-weight: 300;
  font-size: 1.2rem;
  word-spacing: 0px;
  span {
    font-weight: 600;
  }
`;

export const NavigationLinks = styled.ul`
  display: flex;
  font-size: 0.85rem; 
  
  li {
    display: block;
    margin: 10px;
    list-style-type: none;
  }

`;