import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm"

export default class SearchList extends Component {
  state = {
    results: [],
    search: "",
  };

  // componentDidMount() {
  //   this.searchAlbums("Far Beyond Driven");
  // }

  searchAlbums = (query) => {
    API.search(query)
      .then((result) => {
        // console.log(result.data.album);
        this.setState({ results: [...result.data.album] });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchAlbums(this.state.search);
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    console.log(this.state.results[0].strArtist)
    API.saveAlbum({
      artwork: this.state.results[0].strAlbumThumb,
      title: this.state.results[0].strAlbum,
      artist: this.state.results[0].strArtist,
      releaseYear: this.state.results[0].intYearReleased,
      genre: this.state.results[0].strStyle,
    }).catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <h1>Search Results:</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Artwork:</th>
              <th scope="col">Title:</th>
              <th scope="col">Artist:</th>
              <th scope="col">Release year:</th>
              <th scope="col">Genre:</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((record, index) => {
              return (
                <tr key={record.idAlbum}>
                  <td>
                    <img
                      src={record.strAlbumThumb}
                      alt={record.strAlbum}
                      style={{ maxWidth: 150 }}
                    />
                  </td>
                  <td>{record.strAlbum}</td>
                  <td>{record.strArtist}</td>
                  <td>{record.intYearReleased}</td>
                  <td>{record.strStyle}</td>
                  <td>
                    <button
                      onClick={this.handleButtonClick}
                      className="btn btn-primary mt-5"
                    >
                      Add to collection
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
