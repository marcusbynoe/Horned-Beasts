// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './Data/data.json';
import SelectedBeast from './SelectedBeast';

// 2nd Class Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      beastData: data,
      title: '',
      description: '',
      horns: '',
      image_url: '',
    }
  }

  handleOpenModal = (beastObj) => {
    this.setState({
      showModal: true,
      selectedBeast: beastObj,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }



  render() {
    return (
      <>
        <Header />
        <Main
          beastData={this.state.beastData}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          openModal={this.state.showModal}
          closeModal={this.handleCloseModal}
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