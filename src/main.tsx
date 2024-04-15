import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx'
import CategoriesContainer from './components/Products/CategoriesContainer.tsx';
import './index.css'
import ProductsContainer from './components/Products/ProductsContainer.tsx';

const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement!).render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="category" element={<CategoriesContainer />} />
          <Route path='category/:categoryName' element={<ProductsContainer/>} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );