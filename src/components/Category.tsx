import React from 'react';
import { CategoryProps } from '../interfaces';

const Category: React.FC<CategoryProps> = ({...category}) => {
    const { name} = category;
    return (
        <div>
             <p>{name}</p>
        </div>
    );
};

export default Category;