import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import QuestionList from '../components/QuestionList'

import { Creators as SearchCreators } from '../store/sagas/search';

import Container from '../components/general/styles/Container';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search));
  const dispatch = useDispatch();

  useEffect(() => {
    setQuery(new URLSearchParams(location.search))
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(SearchCreators.apiLoadQuestions(query.get("q")))
  }, [query, dispatch]);

  const questions = useSelector(state => state.search.data);
  return (
    <Container>
      <QuestionList
        title={`Questions for: "${query.get("q")}"`}
        questions={questions}
      />
    </ Container>
  );
}

export default Search;
