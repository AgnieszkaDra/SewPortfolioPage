import Category from "./Category";

interface ProductsCategory {
    content: string; 
}
const ProductsCategory = (props: ProductsCategory, ) => {
      const { content } = props;

    return (
        <>
        <Category content={content}></Category>
        </>
    );
  };
  
  export default ProductsCategory