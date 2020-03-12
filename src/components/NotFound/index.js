import React from 'react';
import { NotFoundImage } from './styles';

import Container from '../general/styles/Container';

const NotFound = () => {
  //TODO redirect after n seconds to homepage

  return (
    <Container>
      <NotFoundImage alt="page not found" src="https://http.cat/404" />
    </Container >
  );
}

export default NotFound;
