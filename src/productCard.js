import React, { useState } from "react";

const ProductCard = ({ imgSrc, title, shortDescription, fullDescription }) => {
  // State to track whether to show full description or not
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle the description
  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p className="short-description">{shortDescription}</p>

      {/* Show full description only if showFullDescription is true */}
      {showFullDescription && (
        <p className="full-description">{fullDescription}</p>
      )}

      {/* Toggle button
       */}
      <button className="read-more-btn" onClick={toggleDescription}>
        {showFullDescription ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ProductCard;
