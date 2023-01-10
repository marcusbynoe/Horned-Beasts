// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// 2nd Class Component
class App extends React.Component{
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
};


// 3rd Export the compnent 
export default App;