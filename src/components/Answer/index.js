import React from "react";
import styled from "styled-components";
import Comment from "../Comment";
import VoteBox from "../VoteBox";

const AnswerContainer = styled.div`
  display: flex;

  > strong {
    padding: 0 20px;
  }
  > .question {
    width: 100%;
    
    p > span {
      float: right;
    }
  }
`;

const Answer = props => {
  console.log(props)
  return (
    <AnswerContainer>
      <VoteBox voteCount={props.voteCount}/>

      <div className="question">
        <p>{props?.description} <span>{props.user.username}</span></p>
        {props?.comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </AnswerContainer>
  );
};

export default Answer;
