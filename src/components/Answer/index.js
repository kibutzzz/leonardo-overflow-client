import React from "react";
import styled from "styled-components";
import Comment from "../Comment";

const AnswerContainer = styled.div`
  display: flex;

  strong {
    padding: 0 20px;
  }
`;

const Answer = props => {
  return (
    <AnswerContainer>
      <strong>{props.answer.voteCount}</strong>
      <div>
      <p>{props.answer.description}</p>
      {props.answer.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      </div>
    </AnswerContainer>
  );
};

export default Answer;
