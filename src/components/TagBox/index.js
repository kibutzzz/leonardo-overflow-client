import React from "react";
import Tag from "../Tag";

import styled from "styled-components";

const Box = styled.div`
  width: 32%;

  padding: 16px;
  margin: 0.66%;

  border-radius: 5px;
  border: solid 1px grey;
  background-color: white;


  @media(max-width: 800px) {
    width: 100%;
  }
  
  span {
    margin-left: 1rem;
    margin-top: 6px;
  }

  p {
    --max-lines: 6;
    --line-height: 1.4rem;

    position: relative;
    line-height: var(--line-height);
    margin-top: 10px;
    padding: 0 1rem;
    text-align: justify;

    max-height: calc(var(--line-height) * var(--max-lines));
    overflow: hidden;

    ::before {
      content: "...";
      background-color: white;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    ::after {
      content: "";
      position: absolute;
      right: 0;
      width: 1rem;
      height: 1rem;
      background-color: white;
    }
  }
`;

const TagBox = props => {
  return (
    <Box>
      <Tag {...props} />
      <p>{props.description}</p>
    </Box>
  );
};

export default TagBox;
