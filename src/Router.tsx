import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import {
  Home,
  Main,
} from './components/';
import {
  CategoriesContainer,
  ProductsContainer,
} from './pages/';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route index element={<Main> <Outlet /> </Main>} />
        <Route path="category" element={<CategoriesContainer />} />
        <Route path="category/:categoryName" element={<ProductsContainer />} />
      </Route>
    )
  );
				
export default router;