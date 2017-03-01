import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LocationList from './LocationList';
import reducer from './reducer.js';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}><LocationList /></Provider>
    );
  }
}

export default App;
