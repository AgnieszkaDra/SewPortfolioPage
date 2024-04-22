import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProps } from '../../interfaces';
import styles from './Carousel.module.scss';

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
        <div className={styles.container}>
            {images && images.length > 1 && (
                <button className={`${styles.arrow} ${styles.prev}`} onClick={goToPrevSlide} type='button'>
                    &lt;
                </button>
            )}

            { images && images.length > 0 && (
            <div 
                role={'image'} 
                aria-label={'main-carousel-image'} 
                style={{ backgroundImage: `url(${images[currentSlide]?.image})`}}
                className={styles.image}
            >
            <div className={`${styles.banner} ${isAnimating && styles.animation}`}>
                {/* <a 
                    href={`${images[currentSlide]?.href}`}
                    className={`${styles.banner__link} `}
                >
                    {`${images[currentSlide]?.text}`}
                </a> */}
                 <Link 
                to={`/category/${images[currentSlide]?.name}`} 
                className={`${styles.banner__link} `}
              >
                {`${images[currentSlide]?.name}`}
              </Link>
            </div>
            </div>
             
            )}
            { images && images.length > 1 && (
                <button className={`${styles.arrow} ${styles.next}`} onClick={goToNextSlide} type='button'>
                    &gt;
                </button>
            )}
        </div>
    );
}

export default Carousel;