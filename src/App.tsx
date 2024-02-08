import { useState } from 'react';
import ProductDetails from './components/Products/ProductDetails.tsx';
import ProductsContainer from './components/Products/ProductsContainer.tsx';


const App = () => {
  const [isDisplayingCategory, setIsDisplayingCategory] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const displayedCategorySettings = { setIsDisplayingCategory, setSelectedCategoryId};
  console.log(selectedCategoryId)


  if (isDisplayingCategory && selectedCategoryId) {
    return (<ProductDetails 
      displayedCategorySettings={displayedCategorySettings} 
      categoryId={selectedCategoryId}
      />);
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

