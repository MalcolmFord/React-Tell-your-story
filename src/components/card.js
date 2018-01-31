import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { image: './images/no_image.jpg' }
  };

  render() {
    return (
      <div className="Card">
        <img src="" alt="" srcset="" />

      </div>
    );
  };
};