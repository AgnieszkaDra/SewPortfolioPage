import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsContainer from './components/Products/ProductsContainer.tsx';
import CategoriesContainer from './components/Products/CategoriesContainer.tsx';
import Header from './components/Products/Header/Header.tsx';

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
     <Router>
        <Routes>
          {<Route path='/' element={<Header/>} />}
          {/* {<Route path='/home' element={<Header/>} />} */}
        </Routes>
      </Router>
     
     <CategoriesContainer 
        displayedCategorySettings= {displayedCategorySettings}
      />
    </div>
  );
  }
}


export default App;

