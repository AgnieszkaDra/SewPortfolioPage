import { useState, useEffect, useCallback } from 'react';
import { CarouselProps } from '../../interfaces';
import styles from './Carousel.module.scss';

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {

    
    const [currentSlide, setCurrentSlide] = useState(0);

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

        // Clear the interval when the component unmounts
        return () => clearInterval(slideTimer);
    }, [interval, goToNextSlide]);

return (
        <div className={styles.container}>
            {images && images.length > 1 && (
                <button className={`${styles.arrow} ${styles.prev}`} onClick={goToPrevSlide} type='button'>
                    &lt;
                </button>
            )}


            {images && images.length > 0 && (
            <div 
                role={'image'} 
                aria-label={'main-carousel-image'} 
                style={{ backgroundImage: `url(${images[currentSlide]?.image})`}}
                className={styles.image}
            >
            </div>
             
            )}
         

            {images && images.length > 1 && (
                <button className={`${styles.arrow} ${styles.next}`} onClick={goToNextSlide} type='button'>
                    &gt;
                </button>
            )}
        </div>
    );
}

export default Carousel;