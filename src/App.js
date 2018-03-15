import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return ([

          <div id="wrapper">
                    <Header />
                    <Main/>
                     <Footer/>
          </div>,
          <div id="bg" />

        ])
    }
};

export default App;
