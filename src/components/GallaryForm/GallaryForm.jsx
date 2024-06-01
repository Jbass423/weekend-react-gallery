import React, { useState , useEffect} from "react";
import axios from "axios";




const GalleryForm = () => {
    const [getUrl, setUrl]= useState("")
    const [getTitle, setTitle]= useState("")
    const [getDescription, setDescription ]= useState("")

    const addGallery= (event)=>{
        event.preventDefault()
        console.log("add works");
    
    axios({
        method: 'POST',
        url: '/api/gallery',
        data:{
            url: getUrl,
            title: getTitle,
            description: getDescription
            }
        })
        .then((response)=>{
            console.log("in post response", response );
            

            setUrl("")
            setTitle("")
            setDescription("")
        })
        .catch((error)=>{
            console.error("failed in jsx POST", error )
        })
    
    }
    useEffect(() => {
       
    }, [getUrl, getTitle, getDescription]);


    return(
        <>
        <h2>Add your </h2>

        <form onSubmit={addGallery}>
            <lable>URL</lable>
            <input onChange={(event)=>setUrl(event.target.value)} 
             type="text"  value={getUrl} />
            <label>TITLE</label>
            <input onChange={(event)=>setTitle(event.target.value)}
              type="text" value={getTitle}/>
            <label>DESCRIPTION</label>
            <input onChange={(event)=>setDescription(event.target.value)}
             type="text" value={getDescription} />

            <button type="submit" >Add your art</button>

        
        
        </form>
        </>


    )
}


export default GalleryForm