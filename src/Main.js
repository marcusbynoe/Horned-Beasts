import React from 'react';
import HornedBeast from './HornedBeast';
import data from './Data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {data.map((hornedbeast) => {
            return <HornedBeast id={hornedbeast._id} image_url={hornedbeast.image_url} title={hornedbeast.title} description={hornedbeast.description} keyword={hornedbeast.keyword} horns={hornedbeast.horns}/>
          })}
        </main>
      </>
    )
  }
}

export default Main;