import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex;

  border-top: 1px solid gray;
  margin: 4px 0;
  padding: 8px 4px;
`;

const Comment = props => {
  return (
    <CommentContainer>
      <span>{props?.voteCount}</span>
      <span>{props?.text}</span>
      <span>{props?.user.username}</span>
    </CommentContainer>
  );
};

export default Comment;
