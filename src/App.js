import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {geolocated} from 'react-geolocated';
import { createStore } from 'redux';
import reducer from './reducer.js';
import { Router, Route, browserHistory } from 'react-router';
import LocationList from './LocationList';
import LocationDetails from './LocationDetails';
import locations from './data';
import { setPosition } from './actions';

const initState = () => {
  return {
    timePicked: null,
    currentPosition: null,
    timeDurations: [
      { duration: 30, label: '30 MIN', isChosen: false },
      { duration: 60, label: '1H', isChosen: false },
      { duration: 120, label: '2H', isChosen: false },
      { duration: 180, label: '3H+', isChosen: false },
    ],
    locations: locations,
  };
};

const store = createStore(
   reducer,
   initState(),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("Is there a reset?")
    if (nextProps.isGeolocationAvailable && nextProps.coords) {
      store.dispatch(setPosition(nextProps.coords));
    }
  }

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

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(App);
