import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';

import store from './store';
import AppNavbar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Leaderboard from './components/Leaderboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Leaderboard />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
