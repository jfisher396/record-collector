import axios from "axios";

const albumURL = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?a=";

export default {
  search: function (query) {
    return axios.get(albumURL + query);
  },

  saveAlbum: function (albumData) {
    return axios.post("/api/albums", albumData);
  },

  deleteAlbum: function (id) {
    return axios.delete("/api/albums/" + id);
  },
};
