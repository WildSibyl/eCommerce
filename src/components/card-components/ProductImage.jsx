import React, { useState } from "react";
import noImageAvailable from "../../assets/noImageAvailable.jpg";

const ProductImage = ({ product }) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <img
      src={isError ? noImageAvailable : product.image}
      alt={product.name}
      onError={handleError}
      className="w-full h-full object-contain rounded-lg p-2"
    />
  );
};

export default ProductImage;
