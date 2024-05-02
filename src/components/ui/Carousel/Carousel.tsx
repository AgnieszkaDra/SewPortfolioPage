import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProps } from '../../../interfaces';
import Button from '../Button/Button';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
    position: relative;
    max-width: 100%;
    height: 100vh;
    margin: -10vh 0 0 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
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

const LinkWrapper = styled.div<{ isAnimating?: boolean }>`
    @keyframes slideUp {
        from {
            transform: translate(-100%, -50%);
        }

        to {
            transform: translate(-50%, -50%);
        }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ isAnimating }) => isAnimating && `
        animation: slideUp 2s ease forwards;
    `}
    `;

const StyledLink = styled(Link)`
    background-color: ${({ theme }) => theme.colors.smokeWhite};
    color: ${({ theme }) => theme.colors.textLighten};
    padding: ${({ theme }) => theme.padding.large};
    color: $color-font-lightBlack;
    text-decoration: none;
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
    <CarouselWrapper  
        style={{ backgroundImage: `url(${images[currentSlide]?.image})`}}
        role={'image'} 
        aria-label={'main-carousel-image'} 
    >
        {images && images.length > 1 && (
            <>
                <ButtonWrapper style={{ left: '10px' }}>
                    <Button size='24px' onClick={goToPrevSlide} >
                        &lt;
                    </Button>   
                </ButtonWrapper>
                    <LinkWrapper isAnimating={isAnimating}>
                        <StyledLink to={`/category/${images[currentSlide]?.name}`}>
                            {images[currentSlide]?.name}
                        </StyledLink>
                    </LinkWrapper>
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