import Carousel from '../../ui/Carousel/Carousel';
import carousel from '../../../data/carousel';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  margin-top: -10vh;
  height: 100vh;
  width: 100%;
  background-color: transparent;
`;


const Main =() => {
  return (
    <main>
      <CarouselWrapper>
        <Carousel images={carousel} />
      </CarouselWrapper>
    </main>
  );
};

export default Main