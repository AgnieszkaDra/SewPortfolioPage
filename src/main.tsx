import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import products from './data/products.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App data={products}/>
  </React.StrictMode>
)
