import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  margin: 0 20px;
  strong {
    margin: 0 auto;
  }
`;
const VoteBox = props => {
  return (
    <Container>
      <FontAwesomeIcon icon={faAngleUp} size={"3x"} />
      <strong>{props.voteCount}</strong>
      <FontAwesomeIcon icon={faAngleDown} size={"3x"} />
    </Container>
  );
};

export default VoteBox;
