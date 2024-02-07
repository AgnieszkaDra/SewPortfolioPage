import React from 'react';
import Category from './components/Category';
import { AppProps } from './interfaces';

const App: React.FC<AppProps> = ({ data }) => {
  return (
    <div >
  {data.categories.map((category) => (
      <Category key={category.id} images={category.images}  {...category} name={category.name} id={category.id} editable={false} collection={category.collection}/>
   
    ))}
  </div>
  );
};

export default App;


