import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API"

export default class SavedAlbum extends Component {
    state = {
        albums: [],
    };
    componentDidMount() {
        this.albumApi()
    }
    albumApi(){
        axios.get("/api/albums")
            .then((response) => {
               return this.setState({ albums: response.data })});
    }

    handleButtonClick = (id) => {
        API.deleteAlbum(id)
            .then(this.albumApi())
        
    }

    render() {
        const { albums } = this.state;
        return (
            <>
                <div>
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
                                return (
                                    <tr key={item._id}>
                                        <td><img src={item.image} alt={item.title} /></td>
                                        <td>{item.title}</td>
                                        <td>{item.authors}</td>
                                        <td>{item.description}</td>
                                        <td><a className="btn btn-info mt-3" href={item.link} target="_blank" rel="noopener noreferrer">Google Books</a></td>
                                        <td><button onClick={()=>this.handleButtonClick(item._id)} className="btn btn-primary mt-3">Remove</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}