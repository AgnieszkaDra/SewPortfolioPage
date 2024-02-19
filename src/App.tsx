import { useState } from 'react';
import ProductsContainer from './components/Products/ProductsContainer.tsx';
import CategoriesContainer from './components/Products/CategoriesContainer.tsx';
import Header from './components/Products/Header/Header.tsx';
import Carousel from './components/Carousel/Carousel.tsx';
import carousel from './data/carousel.ts';


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
      <Header></Header>
      <Carousel images={carousel}></Carousel>
     <CategoriesContainer 
        displayedCategorySettings= {displayedCategorySettings}
      />
    </div>
  );
  }
}


export default App;

