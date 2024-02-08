import { useState } from 'react';

import ProductsContainer from './components/Products/ProductsContainer.tsx';


const App = () => {
  const [isDisplayingCategory, setIsDisplayingCategory] = useState(false);
  const displayedCategorySettings = { setIsDisplayingCategory};
  
  if (isDisplayingCategory) {
    return (<h3>There will be products of categories</h3>);
 } else {
  return (
    <>
     <ProductsContainer 
        displayedCategorySettings= {displayedCategorySettings}
      />
    </>
     
  );
  }
}


export default App;

