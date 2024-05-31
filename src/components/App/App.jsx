import React from "react";
import GalleryList from "../GalleryList/GalleryList";




function App() {
  return (
    <div data-testid="app">
     <h1>React Gallery</h1>
       <p>The gallery goes here!</p>
        <GalleryList />
    </div>
  );
}

export default App;
