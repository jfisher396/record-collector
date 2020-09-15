import axios from 'axios'
import React, { Component } from 'react';

export default class RecordsList extends Component {


    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        axios
          .get("https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?a=metallica")
          .then((result) => {
            console.log(result);
          });
    }




    render() {
        return (
            <div>
                <h1>This is my records list</h1>
            </div>
        )
    }
}
