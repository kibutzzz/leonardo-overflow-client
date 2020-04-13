import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Container from "../components/general/styles/Container";
import InputBlock from "../components/general/styles/InputBlock";
import Input from "../components/general/styles/Input";
import Button from "../components/general/styles/Button";
import TextArea from "../components/general/styles/TextArea";

import api from "../services/api";
import { useEffect } from "react";
import Divider from "../styles/Divider";

const Ask = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const history = useHistory();

  async function getResults(search) {
    try {
      const { data } = await api.get(`/tag/${search}`)
      setResults(data);
      console.log(data);
    } catch (e) {
      alert("error: " + e);
    }
  }

  useEffect(() => {
    if (tags) {
      getResults(tags);
    } else {
      setResults([]);
    }
  }, [tags]);

  function handleSelection(tag) {
    console.log(tag)
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  async function handleSubmission() {

    const tagsIds = selectedTags.map(tag => tag.id);
    const description = body;

    try {
      await api.post("/question", {
        title,
        description,
        tagsIds
      });
      setErrors([]);
      history.push("/");
    } catch (e) {
      console.log(e.response)
      if (Array.isArray(e.response.data)) {
        setErrors(e.response.data);
      } else {
        setErrors([].concat(e.response.data))
      }

    }
  }

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
          min={5}
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
          min={32}
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
          onChange={e => {
            setTags(e.target.value)
          }}
          value={tags}
        />
        <Divider >
          <div>
            <h3>Selected</h3>
            <ul>
              {selectedTags.map(tag => (
                <li key={tag.id} onClick={() => {
                  setSelectedTags(selectedTags.filter(t => t.id !== tag.id))
                }}>
                  <strong>{tag.name}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>results</h3>
            <ul>
              {results.map(tag => (
                <li key={tag.id} onClick={() => handleSelection(tag)}>
                  <strong>{tag.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        </Divider>
      </InputBlock>
      <div>
        {errors.length > 0 ? <h3>Errors</h3> : null}
        {errors.map((error, i) => (
          <p key={i}><strong>{error.field}</strong> {error.error}</p>)
        )}
      </div>
      <Button onClick={handleSubmission}>Post Question</Button>
    </Container>
  );
};

export default Ask;
