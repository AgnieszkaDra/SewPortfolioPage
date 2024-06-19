import { createBrowserRouter } from 'react-router-dom';
import {
  Home,
  Main
} from './components/';
import {
  CategoriesContainer,
  ProductsContainer,
} from './pages/';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <Main/>
            <CategoriesContainer />
          </>
        )
      },
      {
        path: '/category',
        element: <CategoriesContainer />
      },
      {
        path: '/category/:categoryName',
        element: <ProductsContainer />
      }
    ]
  }
]);

export default router;