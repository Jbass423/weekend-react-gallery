import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";




function App() {
  return (
    <div data-testid="app">
     <h1>React Gallery</h1>
       <p>The gallery goes here!</p>
       <GalleryForm/>
        <GalleryList />
    </div>
  );
}

export default App;
