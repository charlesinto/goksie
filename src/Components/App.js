import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import '../Resources/style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes {...this.props} />
      </BrowserRouter>
    );
  }
}

export default App;
