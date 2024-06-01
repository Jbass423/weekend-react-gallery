import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const GalleryForm = ({gallery}) => {
    const [getUrl, setUrl]= useState("")
    const [getTitle, setTitle]= useState("")
    const [getDescription, setDescription ]= useState ("")

    const addGallery= (event)=>{
        event.preventDefault()
        console.log("add works", addGallery);
    
    axios({
        method: "POST",
        url: '/gallery',
        data:{
            url: getUrl,
            title: getTitle,
            description: getDescription
            }
        })
        .then((response)=>{
            console.log("in post response", response );

            fetchGallery()

            setUrl("")
            setTitle("")
            setDescription("")
        })
        .catch((error)=>{
            console.error("failed in jsx POST", error )
        })
    
    }

    return(
        <>
        <h2>Add your </h2>

        <form onSubmit={addGallery}>
            <lable>URL</lable>
            <input onChange={(event)=>setUrl(event.target.value)} 
            value={getUrl} />
            <label>TITLE</label>
            <input onChange={(event)=>setTitle(event.target.value)}
            value={{getTitle}}/>
            <label>DESCRIPTION</label>
            <input onChange={(event)=>setDescription(event.target.value)}
            value={getDescription} />

            <button type="submit" >Add your art</button>

        
        
        </form>
        </>


    )
}


export default GalleryForm