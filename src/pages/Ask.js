import React, { useState } from "react";
import Container from "../components/general/styles/Container";
import InputBlock from "../components/general/styles/InputBlock";
import Input from "../components/general/styles/Input";
import Button from "../components/general/styles/Button";
import TextArea from "../components/general/styles/TextArea";

const Ask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  return (
    <Container>
      <h1>Ask a question</h1>
      <InputBlock>
        <strong>Title</strong>
        <label>
          Be specific and imagine you’re asking a question to another person
        </label>
        <Input
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </InputBlock>
      <InputBlock>
        <strong>Body</strong>
        <label>
          Include all the information someone would need to answer your question
        </label>
        <TextArea
          type="text"
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </InputBlock>
      <InputBlock>
        <strong>Tags</strong>
        <label>
          Include all the information someone would need to answer your question
        </label>
        <Input
          type="text"
          onChange={e => setTags(e.target.value)}
          value={tags}
        />
      </InputBlock>
      <Button>Post Question</Button>
    </Container>
  );
};

export default Ask;
