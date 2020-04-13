import React, { useState } from 'react';

import { Container, TextArea, Form } from './styles';
import Button from "../../components/general/styles/Button";

import { isAuthenticated } from '../../services/auth';
import api from '../../services/api';

const AddComment = ({ type, id }) => {
  console.log(type, id)
  const [isActive, setActive] = useState(false);

  if (!isAuthenticated()) {
    return <></>;
  }

  const toggleActiveComment = e => {
    e.preventDefault();
    setActive(!isActive);
  }

  return (
    <Container>
      {!isActive ? <a onClick={toggleActiveComment}>add Comment</a> : <CommentBox id={id} type={type} />}
    </Container>
  )
};


const CommentBox = ({ type, id }) => {
  const [comment, setComment] = useState("");

  //TODO make the request as a redux saga so the entity's comments can be updated 
  const handleCommentSubmission = async (e) => {
    e.preventDefault(); 
    try {
      const { data } = await api.post(`/comment/${id}`, {
        entity: type,
        text: comment
      });
      setComment(""); 
      console.log("Response", data)
    } catch (e) {
      console.error(e.response);
    }

  }

  return (
    <Form onSubmit={handleCommentSubmission}>
      <TextArea value={comment} onChange={e => setComment(e.target.value)} />
      <Button >Comment</Button>
    </Form>
  );
}

export default AddComment;
