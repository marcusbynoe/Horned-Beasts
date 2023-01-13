// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './Data/data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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

  handleSelect = (dropDown) => {
    

  }


  render() {
    return (
      <>
        <Header />

        


        <FloatingLabel controlId="floatingSelect" label="Works with selects">
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option>Click here to view horns!</option>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </Form.Select>
        </FloatingLabel>

        <Main
          beastData={this.state.beastData}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          openModal={this.state.showModal}
          closeModal={this.handleCloseModal}
        />






        <Footer />
      </>
    )
  }




}

// 3rd Export the compnent 
export default App;