import React from "react";
import "./ImageGallery.scss";

const ImageGalleryItem = ({ src, alt, id }) => (
  <img id={id} src={src} alt={alt} className="gallery__image" />
);

export default ImageGalleryItem;
