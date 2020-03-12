import React, { useState } from "react";
import Button from "../general/styles/Button";
import { Container, AppName, SearchBox, NavInput, NavigationLinks } from './styles';

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
      <div>
        <AppName>
          Leonardo <span>Overflow</span>
        </AppName>
        <NavigationLinks>
          <li>
            Tags
          </li>
          <li>
            Users
          </li>
        </NavigationLinks>
      </div>
      <SearchBox onSubmit={handleSearchSubmit}>
        <NavInput value={searchText} onChange={handleSearchChange} />
        <Button>Search</Button>
      </SearchBox>
    </Container>
  );
};

export default Navbar;
