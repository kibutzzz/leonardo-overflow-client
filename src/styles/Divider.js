import styled from "styled-components";


export default styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    flex-grow: 1;
    max-height: 100px;
    overflow-y: scroll;
  }
`;