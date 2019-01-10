import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import * as constants from "./constants.js";
import Film from "./Film";

class Search extends Component {

  constructor() {
    super();
    this.state = {
      filmData: "{}"
    };
  }

  getFilm = (year = $("#filmYear").val(), filmName = $("#filmName").val()) => {
    console.log(`http://www.omdbapi.com/?s=${filmName}&apikey=${constants.OMDBKEY}&y=${year}`);
    axios.get(`http://www.omdbapi.com/?s=${filmName}&apikey=${constants.OMDBKEY}&y=${year}`)
      .then(response => this.setState({ filmData: response.data.Search }))
      .catch(error => console.error(error));
  }

  render() {
    let films = [];
    if (this.state.filmData) {
      for (let film of this.state.filmData) {
        films.push(<Film data={film} />);
      }
    }
    return (
      <div>
        <input id="filmName" placeholder="Film Name" />
        <input id="filmYear" placeholder="Film Year" />
        <input type="button" onClick={() => this.getFilm()} value="Search" />
        {films}
      </div>
    );
  }
}

export default Search;
