import React from "react";
import QuestionItem from "../QuestionItem";
import QuestionListContainer from "./styles/QuestionListContainer";
import Button from "../general/styles/Button";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

const QuestionList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "API_LOAD_QUESTIONS"})
  }, [dispatch])

  const questions = useSelector(state => state.questions.data);

  return (
    <QuestionListContainer>
      <h1>Questions</h1>
      <Button>Ask a question</Button>
      {questions.map(question => (
        <QuestionItem key={question.id} {...question} />
      ))}
    </QuestionListContainer>
  );
};

export default QuestionList;
