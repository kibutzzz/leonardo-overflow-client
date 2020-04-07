import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Container from "../components/general/styles/Container";
import QuestionTitle from "../components/general/styles/QuestionTitle";
import Tag from "../components/Tag";
import Comment from "../components/Comment";
import Answer from "../components/Answer";
import VoteBox from "../components/VoteBox";
import styled from "styled-components";

import { useParams } from 'react-router-dom';

import { Creators as questionApiActions } from '../store/sagas/questions';

const QuestionContainer = styled.div`
  display: flex;
`;

const Question = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("dispatch", id)
    dispatch(questionApiActions.apiLoadQuestion(id))
  }, [id, dispatch]);

  const question = useSelector(state => state.specificQuestion.data);

  console.log(question)
  return (
    <Container>
      <QuestionTitle>{question.title}</QuestionTitle>
      <span>
        {question.creationDate
          ? new Date(question.creationDate).toLocaleString()
          : ""}
      </span>
      <span>{question?.user?.name}</span>
      <hr />
      <QuestionContainer>
        <VoteBox voteCount={question.voteCount} />
        <div>
          <p>{question.description}</p>
          {question.tags?.map(tag => (
            <Tag key={tag.id} {...tag} />
          ))}
        </div>
      </QuestionContainer>

      {question?.comments?.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      <hr />
      <strong>
        {question?.answers?.reduce(accumulator => accumulator + 1, 0)} Answer(s)
      </strong>

      {question?.answers?.map(answer => (
        <Answer key={answer.id} {...answer} />
      ))}
    </Container>
  );
};

export default Question;
