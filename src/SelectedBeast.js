import React from 'react';
import Modal from 'react-bootstrap/Modal';


class selectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.openModal}
          onHide={this.props.closeModal}
        >
          <Modal.Header closeButton>
            {this.props.selectedBeast.title}
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast.image_url}
              alt={this.props.selectedBeast.description}
              width='100%'
            />
            <p>{this.props.selectedBeast.description}</p>
            <p>Number of horns: {this.props.selectedBeast.horns}</p>

          </Modal.Body>

        </Modal>




      </>

    )

  }

}


export default selectedBeast;