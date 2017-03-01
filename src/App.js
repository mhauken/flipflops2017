import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.js';
import { Router, Route, browserHistory } from 'react-router';
import LocationList from './LocationList';
import LocationDetails from './LocationDetails';
import './App.css';

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
         <Route path="/" component={LocationList} />
         <Route path="/location/:locationId" component={LocationDetails} />
       </Router>
      </Provider>
    );
  }
}

export default App;
