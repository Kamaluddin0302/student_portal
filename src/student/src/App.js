import React from 'react';
import './App.css';
import Router from './Config/Router/router'
import {Provider} from "react-redux";
import Store from './Containers/Store/store'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router/>
      </Provider>
     </div>
  );
}

export default App;
