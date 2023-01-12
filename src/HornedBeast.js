import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  handleFav = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }


  handleNameClick = () => {
    this.props.handleOpenModal(this.props.title)
  }

  render() {
    return (

      <>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" onClick={this.handleFav} src={this.props.image_url} alt={this.props.title} />
            <Card.Body>
              <Card.Title /*onClick={this.handleNameClick}*/>{this.props.title}</Card.Title>
              <Card.Text>💖{this.state.favorites} Favorites</Card.Text>
              <Card.Text>
                {this.props.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* <article>
      <h2>{this.props.title}</h2>
      <p> 💖{this.state.favorites} Favorites</p>
      <img onClick={this.handleFav} src={this.props.image_url} alt={this.props.title} />
      <p>{this.props.description}</p>
      </article> */}

      </>
    )
  }
}

export default HornedBeast;