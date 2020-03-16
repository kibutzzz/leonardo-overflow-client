import React from "react";
import QuestionItem from "../QuestionItem";
import QuestionListContainer from "./styles/QuestionListContainer";
import Button from "../general/styles/Button";

import { useHistory } from "react-router-dom";

const QuestionList = ({ questions = [], title = "Questions" }) => {
  const history = useHistory();

  return (
    <QuestionListContainer>
      <strong>{title}</strong>
      <Button onClick={() => history.push("/ask")}>Ask a question</Button>
      {questions.map(question => (
        <QuestionItem key={question.id} {...question} />
      ))}
    </QuestionListContainer>
  );
};

export default QuestionList;
