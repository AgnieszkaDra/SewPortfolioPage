import React from 'react';
import Category from './components/Category';
import { AppProps } from './interfaces';

const App: React.FC<AppProps> = ({ data }) => {
  return (
    <div >
  {data.categories.map((category) => (
      <Category key={category.id} {...category} />
   
    ))}
  </div>
  );
};

export default App;

