import styled from "styled-components";

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding-right: 20px;

  > span {
    color: #0064bd;

    :hover {
      color: #0095ff;
    }
  }

  > div {
    height: fit-content;
    width: fit-content;
    & + div {
      align-self: flex-end;
    }
  }
`;

export default Summary;
