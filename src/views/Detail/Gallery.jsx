import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({images}) {

    return (
        <div>
            <ImageGallery items={images} />;
        </div>
    )
}
