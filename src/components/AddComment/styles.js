import styled from  "styled-components";
import DefaultTextArea from "../general/styles/TextArea";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;

`

export const TextArea = styled(DefaultTextArea)`
  height: 8px;
  resize: none;
  flex-grow: 1;
`