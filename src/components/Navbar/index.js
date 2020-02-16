import React, { useState } from "react";
import styled from "styled-components";
import Input from "../general/styles/Input";
import Button from "../general/styles/Button";

const SearchBox = styled.form`
  justify-content: center;
`;

const Container = styled.nav`
  display: flex;
  position: sticky;
  padding: 10px 20px;
  top: 0;
  backdrop-filter: blur(20px);

  justify-content: space-between;
  align-items: center;

  box-shadow: 10px 0 10px gray;

  > ${SearchBox} {
    display: flex;
    flex-grow: 1;
    margin: 0 50px;
  }
`;

const NavInput = styled(Input)`
  margin-top: 0;
  flex-grow: 1;
  max-width: 500px;
`;

const AppName = styled.h1`
  font-weight: 300;
  font-size: 1.2rem;
  word-spacing: 0px;
  span {
    font-weight: 600;
  }
`;

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchText("");
  };

  const handleSearchChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <AppName>
        Leonardo <span>Overflow</span>
      </AppName>

      <SearchBox onSubmit={handleSearchSubmit}>
        <NavInput value={searchText} onChange={handleSearchChange} />
        <Button>Search</Button>
      </SearchBox>

      <div>User Info</div>
    </Container>
  );
};

export default Navbar;
