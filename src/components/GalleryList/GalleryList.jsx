
import axios from "axios";
import { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = () => {
  const [gallery, setGallery] = useState([])



  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery =  () => {
    axios({
      method: "GET",
      url: "/api/gallery"
    })
      .then((response) => {
        console.log("response from GET", response.data);

        setGallery(response.data)

      })
      .catch((error) => {
        console.error("failure in axios GET app.jsx", error)

      })


  }

  const handleLikes =  (id) => {
    console.log("like works");
    axios({
      method: "PUT",
      url: `/api/gallery/likes/${id}`
    })
      .then((response) => {
        console.log("response in PUT", response);
          fetchGallery();
      })
      .catch((error) => {
        console.error("error in jsx PUT", error)
      })
    }
      const handleDelete = (id) => {
        axios({
            method: "DELETE",
            url: `/api/gallery/${id}`
        })
        .then((response)=>{
            console.log("response in delete axios", response);
         fetchGallery()     
         

      })
      .catch((error)=>{
        console.error("it failed in delete", error)
      })
     


  }

  return (
    
    <div id="container" data-testid="galleryList">
        <h2>All Pictures</h2>
        <ul id="galleryList">
          
            {gallery.map((pic) => (
              <li key={pic.id} >
                <GalleryItem pic={pic} handleLikes={handleLikes} />   
                <button key={pic.delete} onClick={()=> handleDelete(pic.id) } >DELETE</button>
                </li>
            ))}
           
        </ul>
    </div>
    
);

}

export default GalleryList