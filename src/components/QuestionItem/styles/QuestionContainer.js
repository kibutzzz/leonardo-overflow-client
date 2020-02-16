import styled from "styled-components";

const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid gray;

  & + & {
    border-top: 0px;
  }
`;

export default QuestionContainer;
