import React from "react";
import Tag from "../Tag";
import QuestionContainer from "./styles/QuestionContainer";
import CounterBox from "./styles/CounterBox";
import Summary from "./styles/Summary";

const QuestionItem = props => {
  return (
    <QuestionContainer>
      <CounterBox>
        <strong>{props?.question?.voteCount}</strong>
        <span>Votes</span>
      </CounterBox>
      <CounterBox>
        <strong>n</strong>
        <span>Answers</span>
      </CounterBox>
      <Summary>
        <span>{props?.question?.title}</span>
        <div>
          {props?.question?.tags?.map(tag => (
            <Tag key={tag?.id} tag={tag} />
          ))}
        </div>
        <div>{props?.question?.user?.username}</div>
      </Summary>
    </QuestionContainer>
  );
};

export default QuestionItem;
