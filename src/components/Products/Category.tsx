import React  from 'react';
import { CategoryProps } from '../../interfaces';


const Category: React.FC<CategoryProps> = ({ name, editable, displayedCategorySettings }) => {
  const onOpenCategory = () => {
    displayedCategorySettings?.setIsDisplayingCategory(true);
 };

  return (
    <div  onClick={!editable ? onOpenCategory : () => {}}>
      <h2>{name}</h2>
    </div>
  );
};

export default Category;