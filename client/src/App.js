import React from 'react';
import SearchList from './components/SearchList';
import SavedAlbums from './components/SavedAlbums'

// console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <div className="App">
      <SearchList />
      <SavedAlbums />
    </div>
  );
}

export default App;
