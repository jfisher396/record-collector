import React, { Component } from 'react';
import API from '../utils/API';

export default class RecordsList extends Component {

    state = {
        results: [],
        search: ""
    }

    componentDidMount() {
        this.searchAlbums("goodbye yellow brick road")
    }

    searchAlbums = (query) => {
        API.search(query)
          .then((result) => {
            // console.log(result.data.album);
            this.setState({ results: [...result.data.album]})
          })
          .catch((err) => console.log(err));
    }

    render() {
      console.log(this.state.results)
        return (
          <div className="container-fluid">
            <h1>Results:</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Artwork:</th>
                  <th scope="col">Title:</th>
                  <th scope="col">Artist:</th>
                  <th scope="col">Release year:</th>
                  <th scope="col">Genre:</th>
                </tr>
              </thead>
              <tbody>
                {this.state.results.map((record, index) => {
                  return (
                    <tr key={record.idAlbum}>
                      <td>
                        <img src={record.strAlbumThumb} alt={record.strAlbum} style={{maxWidth: 150}}/>
                      </td>
                      <td>{record.strAlbum}</td>
                      <td>{record.strArtist}</td>
                      <td>{record.intYearReleased}</td>
                      <td>{record.strStyle}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
    }
}
