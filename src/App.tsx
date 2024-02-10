import { useState } from 'react';
import ProductDetails from './components/Products/ProductDetails.tsx';
import ProductsContainer from './components/Products/ProductsContainer.tsx';


const App = () => {
  const [isDisplayingCategory, setIsDisplayingCategory] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const displayedCategorySettings = { setIsDisplayingCategory, setSelectedCategoryId, isDisplayingCategory};
 
  if (isDisplayingCategory && selectedCategoryId) {
    return (<ProductDetails
      editable={false} 
      displayedCategorySettings={displayedCategorySettings} 
      categoryId={selectedCategoryId}
      />);
 } else {
  return (
    <div className='App'>
     <ProductsContainer 
        displayedCategorySettings= {displayedCategorySettings}
      />
    </div>
     
  );
  }
}


export default App;

