import React, { Component, Fragment } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
        
      </Fragment>
    );
  }
}

export default App;
