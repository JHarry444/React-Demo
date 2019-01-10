import React, { Component } from 'react';
import logo from './logo.svg';
import './film.css';


class Film extends Component {

  render() {
    return (
      <div className="film">
        <p>Title: {this.props.data.Title}</p>
        <p>Type: {this.props.data.Type}</p>
        <img src={this.props.data.Poster}/>
        <p>ID: {this.props.data.imdbID}</p>
        <p>Year: {this.props.data.Year}</p>
      </div>
    );
  }
}

export default Film;
