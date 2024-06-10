import Home from './components/layout/SharedLayout/SharedLayout.tsx';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import CategoriesContainer from './components/ui/Categories/CategoriesContainer.tsx';
import ProductsContainer from './components/ui/Products/ProductsContainer.tsx';
import Main from './components/layout/Main/Main.tsx';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
        <Route
            index
            element={
              <Main>
                <Outlet /> 
              </Main>
            }
          />
          <Route path="category" element={<CategoriesContainer />} />
          <Route path='category/:categoryName' element={<ProductsContainer/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
 )

}

export default App;

