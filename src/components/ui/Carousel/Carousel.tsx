import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProps } from '../../../interfaces';
import Button from '../Button/Button';
import styled from 'styled-components';
import styles from './Carousel.module.scss';


const CarouselWrapper = styled.div`
    position: relative;
    max-width: 100%;
    height: 100vh;
    margin: -10vh 0 0 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
`;


const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {

    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, [images]);

    
    useEffect(() => {
       
        const slideTimer = setInterval(() => {
            goToNextSlide();
        }, interval);
    
        setIsAnimating(true);
    
        const animationTimeout = setTimeout(() => {
            setIsAnimating(false);
        }, 1000); 
    
        return () => {
            clearInterval(slideTimer);
            clearTimeout(animationTimeout);
        };
    }, [interval, goToNextSlide, currentSlide]); 

 
return (

    <CarouselWrapper>
        {images && images.length > 1 && (
            <>
            <ButtonWrapper style={{ left: '10px' }}>
                <Button size='24px' onClick={goToPrevSlide} >
                    &lt;
                </Button>   
            </ButtonWrapper>
             <div 
                role={'image'} 
                aria-label={'main-carousel-image'} 
                style={{ backgroundImage: `url(${images[currentSlide]?.image})`}}
                className={styles.image}
            >
            <div className={`${styles.banner} ${isAnimating && styles.animation}`}>
              <Link 
                to={`/category/${images[currentSlide]?.name}`} 
                className={`${styles.banner__link} `}
              >
                {`${images[currentSlide]?.name}`}
              </Link>
            </div>
            </div>
            <ButtonWrapper style={{ right: '10px' }}>
                <Button size='24px' onClick={goToNextSlide} >
                &gt;
                </Button>   
            </ButtonWrapper>
            </>
        )}

    </CarouselWrapper>
           

    );
}

export default Carousel;