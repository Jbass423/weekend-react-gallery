
import axios from "axios";
import { useState, useEffect } from "react";

const GalleryList = ({}) => {
    const [Gallery, SetGallery] = useState([])

  useEffect(()=>{
    fetchGallery()
  }, [])

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: `/api/gallery`
    })
    .then((response)=>{
      console.log("response from GET", response.data);
      const pictures = response.data
       SetGallery(pictures)

    })
    .catch((error)=>{
      console.error("failure in axios GET app.jsx", error )

    })

  }
  return (
    <>
    <h2> All Creatures </h2>
    <ul>{
            Gallery.map((pics)=>(
                <li key={pics.id}>{pics.url}, {pics.title}, {pics.description}</li>
            ))

        }
    </ul>
    
    
    </>
  )

}

export default GalleryList