import React, { useState } from "react"

const GalleryItem = ({ pic, handleLikes }) => {
    const [showImage, setShowImage] = useState(true);

    const toggleDisplay = () => {
        setShowImage(!showImage)

    }

    return (
        
        <li data-testid="galleryItem">
                {showImage ? (
                    <img src={pic.url} alt={pic.title} data-testid="toggle" onClick={toggleDisplay} />
                ) : (
                    <p className="des" data-testid="toggle" onClick={toggleDisplay}>{pic.description}</p>
                )}
                <p>{pic.title}</p>
                <p>Likes: {pic.likes}</p>
                <button data-testid="like" onClick={() => handleLikes(pic.id)}>Like</button>
            </li>



    )

};

export default GalleryItem
