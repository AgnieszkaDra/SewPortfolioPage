import { useState } from 'react';
import { CarouselProps } from '../../interfaces';
import styles from './Carousel.module.scss';

const Carousel: React.FC<CarouselProps> = ({ images }) => {

    console.log(images)
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

return (
        <div className={styles.container}>
            {images && images.length > 1 && (
                <button className={`${styles.arrow} ${styles.prev}`} onClick={goToPrevSlide} type='button'>
                    &lt;
                </button>
            )}


            {images && images.length > 0 && (
             
                <picture>
                <source srcSet={images[currentSlide]?.image} />
                <source srcSet={images[currentSlide]?.image} />
                <img
                    src={images[currentSlide]?.image}
                    alt={`Slide ${currentSlide + 1}`}
                    width='100%'
                    className="slide"
                />
            </picture>
             
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