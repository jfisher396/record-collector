import axios from "axios";

const albumURL = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?a=";

export default {
  search: function (query) {
    return axios.get(albumURL + query);
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
