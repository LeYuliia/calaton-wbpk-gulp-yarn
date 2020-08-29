import React from "react";
import ImageGalleryItem from "./ImageGalleryItem.js";
import "./ImageGallery.scss";

const ImageGallery = ({ images, onClick: onClickImage }) => (
  <ul className="gallery">
    {images.map(({ id, webformatURL, tags }) => (
      <li key={id} onClick={() => onClickImage(id)}>
        <ImageGalleryItem id={id} src={webformatURL} alt={tags} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
