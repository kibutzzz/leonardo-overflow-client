import React from "react";
import QuestionList from "../components/QuestionList";
import Container from "../components/general/styles/Container";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <QuestionList />
      </Container>
    </>
  );
};

export default Home;
