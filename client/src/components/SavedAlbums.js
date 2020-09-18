import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API"

export default class SavedAlbums extends Component {
  state = {
    albums: [],
  };
  componentDidMount() {
    this.albumApi();
  }

  componentDidUpdate() {
    this.albumApi();
  }
  albumApi() {
    axios.get("/api/albums").then((response) => {
      return this.setState({ albums: response.data });
    });
  }

  handleButtonClick = (id) => {
      API.deleteAlbum(id)
          .then(this.albumApi())

  }

  render() {
    const { albums } = this.state;
    return (
      <>
        <div className="container-fluid">
          <h1>Records in collection:</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Artwork:</th>
                <th scope="col">Title:</th>
                <th scope="col">Artist:</th>
                <th scope="col">Release Year:</th>
                <th scope="col">Genre</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {albums.map((item) => {
                console.log(item);
                return (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.artwork}
                        alt={item.title}
                        style={{ maxWidth: 150 }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.artist}</td>
                    <td>{item.releaseYear}</td>
                    <td>{item.genre}</td>
                    <td>
                      <button
                        onClick={() => this.handleButtonClick(item._id)}
                        className="btn btn-danger mt-3"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
