import React, { useState } from "react";
import QuestionItem from "../QuestionItem";
import QuestionListContainer from "./styles/QuestionListContainer";

const QuestionList = () => {
  const [questions] = useState([
    {
      id: 2,
      title: "How to recreate Stack overflow",
      description:
        "how to recreate stackoverflow using Spring Boot with Jata for the backend, MariaDB and ReactJS for the frontend",
      voteCount: -1,
      user: {
        id: 2,
        username: "kibutzzz"
      },
      tags: [
        {
          id: 1,
          name: "Java"
        }
      ]
    },
    {
      id: 6,
      title: "invalid tag",
      description: "testing a question creating with an invalid tag id",
      voteCount: 1,
      user: {
        id: 1,
        username: "testDummy"
      },
      tags: []
    },
    {
      id: 7,
      title: "CSS/JS Slider Code Blocking CSS/JS Overlay",
      description:
        "I have a CSS/JS image slider that seems to be preventing the CSS/JS automatic overlay popup (for a newsletter subscription) I had on the site previously.The slider works with or without the pop-up code; but with the slider code on the page, the pop-up will not work, and will work again as soon as I remove the slider code. My understanding of JS is very limited, so I have tried everything I can think of and have made no progress. Relevant code is below, and page in question is http://www.catalystathletics.com (pop-up should only appear on first visit unless browser is cleared).Thanks in advance for any suggestions!",
      voteCount: 2,
      user: {
        id: 1,
        username: "testDummy"
      },
      tags: [
        {
          id: 2,
          name: "JavaScript"
        },
        {
          id: 7,
          name: "CSS"
        }
      ]
    }
  ]);

  return (
    <QuestionListContainer>
      <h1>Questions</h1>
      {questions.map(question => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </QuestionListContainer>
  );
};

export default QuestionList;
