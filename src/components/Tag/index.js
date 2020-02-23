import React from "react";
import styled from "styled-components";

const TagContainer = styled.span`
  display: inline-block;
  padding: 0px 6px;
  font-size: 0.9em;
  margin-right: 4px;
  border-radius: 5px;
  border: 1px solid #0095ff;
  background-color: #aaccff;
`;

const Tag = props => {
  return <TagContainer>{props.name}</TagContainer>;
};

export default Tag;
