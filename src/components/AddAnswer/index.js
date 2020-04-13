import React, { useState } from 'react';

import { Container } from './styles';
import Button from '../general/styles/Button';
import TextArea from "../general/styles/TextArea";
import { isAuthenticated } from '../../services/auth';
import api from '../../services/api';

const AddAnswer = ({ questionId }) => {
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState([]);

  if (!isAuthenticated()) {
    return <></>;
  }

  const handleSubmission = async e => {
    e.preventDefault();

    try {

      const response = await api.post(`/answer/${questionId}`, {
        description: answer
      });
      console.log(response);
      setAnswer("");
    } catch (e) {
      if (e.response) {
        console.log(e.response);
        setErrors(e.response.data)
      } else {
        console.error(e)
      }

    }
  }

  return (
    <Container onSubmit={handleSubmission}>
      <TextArea value={answer} onChange={e => setAnswer(e.target.value)} min="16"/>
      <ul>
        {errors.map((err, i) => <li key={i} ><strong>{err.field}:</strong> {err.error}</li>)}
      </ul>
      <Button>Answer</Button>
    </Container>
  );
};

export default AddAnswer;
