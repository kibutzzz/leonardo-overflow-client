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
      <strong>{props?.voteCount}</strong>
      <div>
        <p>{props?.description}</p>
        {props?.comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </AnswerContainer>
  );
};

export default Answer;
