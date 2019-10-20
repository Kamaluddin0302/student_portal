import React from 'react';
import './App.css';
import Home from './contener/home/home'
import AppRouter from './config/router/router'
import {Store} from './config/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store = {Store}>
<AppRouter/>   
</Provider>
 </div>
  );
}

export default App;
