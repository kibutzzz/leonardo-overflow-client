import React from "react";
import Tags from "./pages/Tags";
import Navbar from "./components/Navbar";

import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Tags />
    </Provider>
  );
}

export default App;
