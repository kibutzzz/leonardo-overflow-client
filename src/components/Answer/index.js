import React from "react";
import styled from "styled-components";
import Comment from "../Comment";
import VoteBox from "../VoteBox";

const AnswerContainer = styled.div`
  display: flex;

  > strong {
    padding: 0 20px;
  }
`;

const Answer = props => {
  return (
    <AnswerContainer>
      <VoteBox voteCount={props.voteCount}/>

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
