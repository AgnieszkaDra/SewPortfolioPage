import React from 'react';
import Category from "./Category";

interface ProductsCategoryProps {
    content: string;
}

const ProductsCategory: React.FC<ProductsCategoryProps> = (props) => {
    const { content } = props;

    return (
        <>
            <Category content={content}></Category>
        </>
    );
};

export default ProductsCategory;