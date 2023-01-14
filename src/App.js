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

  handleSelect = (event) => {

    let selected = event.target.value;

    let newData = data.filter(beastData => {
      if (selected === 'All') {
        return beastData;
      } else {
        return beastData.horns === +selected
      }
    })


    this.setState({
      beastData: newData
    })

  }


  render() {
    return (
      <>
        <Header />




        <FloatingLabel controlId="floatingSelect" label="Works with selects">
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option >Click here to search horns!</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
            <option value="All">All</option>
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