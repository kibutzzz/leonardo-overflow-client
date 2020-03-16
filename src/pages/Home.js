import React, { useEffect } from "react";

import QuestionList from "../components/QuestionList";
import Container from "../components/general/styles/Container";
import { useSelector,useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "API_LOAD_QUESTIONS" })
  }, [dispatch])

  const questions = useSelector(state => state.questions.data);
  return (
    <Container>
      <QuestionList questions={questions}/>
    </Container>
  );
};

export default Home;
