import React from "react";
import TagBox from "../TagBox";
import { useSelector } from 'react-redux';

import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagGrid = () => {

  const tags = useSelector(state => state.tags.data);
  return (
    <Grid>
      {tags.map(tag => (
        <TagBox key={tag.id} {...tag} />
      ))}
    </Grid>
  );
};

export default TagGrid;
