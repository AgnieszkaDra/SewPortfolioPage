// import { useLocation } from 'react-router-dom';
import CategoriesContainer from "../../ui/Categories/CategoriesContainer";
import Carousel from '../../ui/Carousel/Carousel';
import carousel from '../../../data/carousel';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  margin-top: -10vh;
  height: 100vh;
  width: 100%;
  background-color: transparent;
`;

const Main  = () => {
  // const location = useLocation();
  // const showCarousel = location.pathname === '/' || location.pathname === '/category';
 
  return (
    <main>
      <CarouselWrapper>
        <Carousel images={carousel} />
      </CarouselWrapper>
      <CategoriesContainer/>
    </main>
  );
};

export default Main