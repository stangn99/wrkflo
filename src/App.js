import React, { Component, Fragment } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
// import Footer from './Components/Footer/Footer';


import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <Header />
        {/* <Footer /> */}
        
      </Fragment>
    );
  }
}

export default App;
