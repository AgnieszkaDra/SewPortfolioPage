// import { useLocation } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { CategoriesContainer } from '../../../pages';
import Carousel from '../../ui/Carousel/Carousel';
import carousel from '../../../data/carousel';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  margin-top: -10vh;
  height: 100vh;
  width: 100%;
  background-color: transparent;
`;

interface MainProps {
  children: ReactNode; 
}

const Main: React.FC<MainProps> = ({ children }) => {
  // const location = useLocation();
  // const showCarousel = location.pathname === '/' || location.pathname === '/category';
 
  return (
    <main>
      <CarouselWrapper>
        <Carousel images={carousel} />
      </CarouselWrapper>
      <CategoriesContainer/>
      {children} 
    </main>
  );
};

export default Main