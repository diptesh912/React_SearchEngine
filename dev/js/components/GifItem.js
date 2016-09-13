import React from 'react';

class GifItem extends React.Component {
  constructor(props) {
    super(props);
   
  }  

  render() {
    return (
      <div className="gif-item">
        <img src={this.props.gif.images.downsized.url} />
      </div>
    );
  }
}

export default GifItem;
