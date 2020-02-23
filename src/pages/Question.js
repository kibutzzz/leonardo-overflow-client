import React, { useState } from "react";
import Container from "../components/general/styles/Container";
import QuestionTitle from "../components/general/styles/QuestionTitle";
import Tag from "../components/Tag";
import Comment from "../components/Comment";
import Answer from "../components/Answer";

const Question = () => {
  const [question] = useState({
    id: 7,
    title: "CSS/JS Slider Code Blocking CSS/JS Overlay",
    description:
      "I have a CSS/JS image slider that seems to be preventing the CSS/JS automatic overlay popup (for a newsletter subscription) I had on the site previously.The slider works with or without the pop-up code; but with the slider code on the page, the pop-up will not work, and will work again as soon as I remove the slider code. My understanding of JS is very limited, so I have tried everything I can think of and have made no progress. Relevant code is below, and page in question is http://www.catalystathletics.com (pop-up should only appear on first visit unless browser is cleared).Thanks in advance for any suggestions!",
    answers: [
      {
        id: 3,
        description:
          "So as posted on the comments, the solution is to do that thing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. No dicam aperiam vis. ",
        voteCount: 1,
        comments: [
          {
            id: 12,
            text: "I'm glad you helped me with that thing.",
            voteCount: 1,
            user: {
              id: 1,
              username: "testDummy"
            }
          }
        ],
        user: {
          id: 2,
          username: "kibutzzz"
        }
      }
    ],
    comments: [
      {
        id: 6,
        text: "Have you tried that thing?",
        voteCount: -1,
        user: {
          id: 1,
          username: "testDummy"
        }
      },
      {
        id: 7,
        text: "What thing?",
        voteCount: 1,
        user: {
          id: 1,
          username: "testDummy"
        }
      },
      {
        id: 8,
        text: "That one",
        voteCount: 0,
        user: {
          id: 1,
          username: "testDummy"
        }
      }
    ],
    tags: [
      {
        id: 2,
        name: "JavaScript"
      },
      {
        id: 7,
        name: "CSS"
      }
    ],
    voteCount: 2,
    creationDate: "2020-01-11T18:10:11Z",
    updateDate: "2020-02-11T18:10:11Z"
  });

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
      <p>{question.description}</p>
      {question.tags.map(tag => (
        <Tag key={tag.id} {...tag} />
      ))}

      {question.comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      <hr />
      <strong>
        {question.answers.reduce(accumulator => accumulator + 1, 0)} Answer(s)
      </strong>

      {question.answers.map(answer => (
        <Answer key={answer.id} {...answer} />
      ))}
    </Container>
  );
};

export default Question;
