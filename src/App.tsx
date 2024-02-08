import { useState } from 'react';
import ProductsContainer from './components/Products/ProductsContainer.tsx';
import products from './data/products.ts'

const App = () => {
  const [isDisplayingCategory, setIsDisplayingCategory] = useState(false);
  const displayedCategorySettings = { setIsDisplayingCategory, isDisplayingCategory};

  return (
      <ProductsContainer 
        data={products} 
        displayedCategorySettings={displayedCategorySettings}
      />
  );
};

export default App;

