// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


// 2nd Class Component
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showModal: false,
  //     selectedBeast: ''
  //   }
  // }

  // handleOpenModal = (title) => {
  //   this.setState({
  //     showModal: true,
  //     selectedBeast: title
  //   });
  // }

  // handleCloseModal = () => {
  //   this.setState({
  //     showModal: false,
  //   });
  // }



  render() {
    return (
      <>
        <Header />
        <Main
          // handleOpenModal={this.handleOpenModal}
        />
        {/* <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedBeast}</Modal.Header>
        </Modal> */}
        <Footer />
      </>
    )
  }
}




// 3rd Export the compnent 
export default App;