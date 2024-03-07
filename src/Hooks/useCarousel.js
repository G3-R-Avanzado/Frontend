import { useState } from 'react';

const useCarousel = (totalItems) => {
    console.log(totalItems);
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };
    const goToIndex = (index) => {
        if (index >= 0 && index < totalItems) {
            setCurrentIndex(index);
        }
    };
    return {
        currentIndex,
        goToNext,
        goToPrev,
        goToIndex,
    };
};

export default useCarousel;