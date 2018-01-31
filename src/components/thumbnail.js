import React, { Component } from 'react';


class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "defalut.jpg"
    };
  };

  render() {
    return (
      <img src={require("default.jpg")} alt="Default" />
    );
  }
};

export default Thumbnails;