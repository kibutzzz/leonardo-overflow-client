import React from "react";
import Tag from "../Tag";
import QuestionContainer from "./styles/QuestionContainer";
import CounterBox from "./styles/CounterBox";
import Summary from "./styles/Summary";

const QuestionItem = props => {
  return (
    <QuestionContainer>
      <CounterBox>
        <strong>{props?.voteCount}</strong>
        <span>Votes</span>
      </CounterBox>
      <CounterBox>
        <strong>n</strong>
        <span>Answers</span>
      </CounterBox>
      <Summary>
        <span>{props?.title}</span>
        <div>
          {props?.tags?.map(tag => (
            <Tag key={tag?.id} {...tag} />
          ))}
        </div>
        <div>{props?.user?.username}</div>
      </Summary>
    </QuestionContainer>
  );
};

export default QuestionItem;
