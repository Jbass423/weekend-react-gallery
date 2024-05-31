
import axios from "axios";
import { useState, useEffect } from "react";

const GalleryList = () => {
    const [Gallery, SetGallery] = useState([])

    const handleLikes = (id)=> {

         
        console.log("like works");
        axios({
            method: "PUT",
            url: `/likes/${id}`
        })
        .then((response)=>{
            console.log("response in PUT", response);
            
        })
        .catch((error)=>{
            console.error("error in jsx PUT", error )
        })
         
            
    }

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
      
       SetGallery(response.data)

    })
    .catch((error)=>{
      console.error("failure in axios GET app.jsx", error )

    })

 
            
    

  }
  return (
    <>
    <h2> All Pictures </h2>
    <ul>{
            Gallery.map((pics)=>(
                <li key={pics.id}> 
                <img src={pics.url} alt={pics.title} />
                <p>{pics.title}, {pics.description}</p>
                <button onClick={()=> handleLikes(pics.id)} >Like</button>
                </li>
            ))

        }
    </ul>
    
    
    </>
  )

}

export default GalleryList