import React from 'react';
import HornedBeast from './HornedBeast';
import data from './Data/data.json';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>

              {data.map((hornedbeast) => {
                return <HornedBeast id={hornedbeast._id} image_url={hornedbeast.image_url} title={hornedbeast.title} description={hornedbeast.description} keyword={hornedbeast.keyword} horns={hornedbeast.horns} />
              })}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;