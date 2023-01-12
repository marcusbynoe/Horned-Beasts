import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <Container>
            <Row>
              {this.props.beastData.map((hornedBeast, id) => {
                return (

                  <HornedBeast
                    beast={hornedBeast}
                    key={id}
                    display={this.props.handleOpenModal}
                    // id={hornedBeast._id}
                    // image_url={hornedBeast.image_url}
                    // title={hornedBeast.title}
                    // description={hornedBeast.description}
                    // keyword={hornedBeast.keyword}
                    // horns={hornedBeast.horns}
                    // handleOpenModal={this.props.handleOpenModal}
                  />
                )
              })}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;