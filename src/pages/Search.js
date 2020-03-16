import React from 'react';
import { useLocation } from 'react-router-dom';

import QuestionList from '../components/QuestionList'

import Container from '../components/general/styles/Container';

const Search = () => {
  const query = new URLSearchParams(useLocation().search);

  return (
    <Container>
      <QuestionList title={`Questions for: "${query.get("q")}"`}/>
    </ Container>
  );
}

export default Search;
