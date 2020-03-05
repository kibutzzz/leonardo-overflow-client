import React from "react";
import Question from "./pages/Question";
import Navbar from "./components/Navbar";

import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Question />
    </Provider>
  );
}

export default App;
