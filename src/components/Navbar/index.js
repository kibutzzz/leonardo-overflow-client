import React, { useState } from "react";
import Button from "../general/styles/Button";
import { Container, AppName, SearchBox, NavInput, NavigationLinks } from './styles';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSearchSubmit = e => {
    e.preventDefault();

    history.push({ pathname: "/search", search: `?q=${searchText}` });
    setSearchText("");
  };

  const handleSearchChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <div>
        <AppName>
          <Link to="/">
            Leonardo <span>Overflow</span>
          </Link>
        </AppName>
        <NavigationLinks>
          <li>

            <Link to="/tags">
              Tags
            </Link>
          </li>
          <li>
            <Link to="/ask">
              Ask
            </Link>
          </li>
        </NavigationLinks>
      </div>
      <SearchBox onSubmit={handleSearchSubmit}>
        <NavInput value={searchText} onChange={handleSearchChange} minLength="2" required />
        <Button>Search</Button>
      </SearchBox>
    </Container>
  );
};

export default Navbar;
