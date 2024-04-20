import Home from './components/layout/SharedLayout/SharedLayout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesContainer from './components/Products/CategoriesContainer.tsx';
import ProductsContainer from './components/Products/ProductsContainer.tsx';

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="category" element={<CategoriesContainer />} />
          <Route path='category/:categoryName' element={<ProductsContainer/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
 )

}

export default App;

