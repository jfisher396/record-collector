import React, { Component } from 'react';
import API from '../utils/API';

export default class RecordsList extends Component {

    state = {
        result: {},
        search: ""
    }

    componentDidMount() {
        this.searchAlbums("Master of Puppets")
    }

    searchAlbums = (query) => {
        API.search(query)
          .then((result) => {
            console.log(result.data.album);
          })
          .catch((err) => console.log(err));
    }

    render() {
        return (
          <div className="container-fluid">
            <h1>Records:</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title:</th>
                  <th scope="col">Artist:</th>
                  <th scope="col">Release year:</th>
                  <th scope="col">Artwork:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}
