import { useState } from 'react';
import ProductsContainer from './components/Products/ProductsContainer.tsx';
import CategoriesContainer from './components/Products/CategoriesContainer.tsx';

const App = () => {
  const [isDisplayingCategory, setIsDisplayingCategory] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const displayedCategorySettings = { setIsDisplayingCategory, setSelectedCategoryId, isDisplayingCategory};
 
  if (isDisplayingCategory && selectedCategoryId) {
    return (<ProductsContainer
      editable={false} 
      displayedCategorySettings={displayedCategorySettings} 
      categoryId={selectedCategoryId}
      />);
 } else {
  return (
    <div className='App'>
      <CategoriesContainer 
        displayedCategorySettings= {displayedCategorySettings}
      />
    </div>
  );
  }
}


export default App;


