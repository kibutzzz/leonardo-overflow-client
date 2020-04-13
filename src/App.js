import React from "react";

import Ask from "./pages/Ask";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Question from "./pages/Question";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Tags from "./pages/Tags";

import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/question/:id" component={() => <Question />} />
          <Route path="/tags" component={() => <Tags />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/signup" component={() => <Signup />} />
          <Route path="/search" component={() => <Search />} />
          <PrivateRoute path="/ask" component={() => <Ask />} />
          <Route path="*" component={() => <NotFound />} />
        </Switch>
      </Router>
      <GlobalStyle />
    </Provider>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated()
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: "/login" }} />)
    }
  />
);

export default App;
