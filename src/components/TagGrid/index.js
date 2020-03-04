import React from "react";
import TagBox from "../TagBox";
import { useSelector, useDispatch } from 'react-redux';
 
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagGrid = () => {

  const tags = useSelector(state => state.data);
  const dispatch = useDispatch();

  console.log(tags);

  return (
    <Grid>
      <button onClick={() => dispatch({
        type: "API_LOAD_TAGS", payload: [{
          id: Math.floor(Math.random() * 1000),
          name: "JavaScript",
          description:
            "JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, object-oriented, prototype-based, weakly-typed, and interpreted language used for both client-side and server-side scripting. Its primary use is in the rendering and manipulation of web pages. Use this tag for questions regarding ECMAScript and its various dialects/implementations (excluding ActionScript and Google-Apps-Script)."
        }]
      })}>click</button>
      {tags.map(tag => (
        <TagBox key={tag.id} {...tag} />
      ))}
    </Grid>
  );
};

export default TagGrid;
