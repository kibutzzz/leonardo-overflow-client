import React from "react";
import Question from "./pages/Question";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Ask from "./pages/Ask";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/question/:id">
            <Question />
          </Route>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/ask">
            <Ask />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Router path="*">
            <NotFound />
          </Router>
        </Switch>
      </Router>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
