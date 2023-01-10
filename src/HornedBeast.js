import React from 'react';


class HornedBeast extends React.Component {
  constructor(props){
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

  render() {
    return (
    <>
      <article>
      <h2>{this.props.title}</h2>
      <p> 💖{this.state.favorites} Favorites</p>
      <p onClick={this.handleFav}>Add to favorites!</p>
      <img src={this.props.image_url} alt={this.props.title} />
      <p>{this.props.description}</p>
      </article>

    </>
    )
  }
}

export default HornedBeast;