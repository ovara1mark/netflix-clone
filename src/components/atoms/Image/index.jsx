import React from "react";

// link to the image
// to pass in alt

export const Image = ({ image, alt, className }) => (
  <img src={image} className={className} alt={alt} />
);
