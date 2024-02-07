import React, { useState } from 'react';
import { CategoryProps } from '../interfaces';


const Category: React.FC<CategoryProps> = ({ name, images }) => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages(!showImages);
   
  };

  return (
    <div>
      <h2 onClick={handleClick}>{name}</h2>
      {showImages && (
        <div>
          {images?.map((image, index) => (
            <img src={image} alt={`Image ${index}`} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;