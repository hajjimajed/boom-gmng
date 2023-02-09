import './slide-show.styles.scss'

import React, { useState, useEffect } from 'react';

const images = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/201',
    'https://picsum.photos/300/202',
    'https://picsum.photos/300/203'
];

const SlideShow = () => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(current => (current + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="slider-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Slider"
                    className="slider-image"
                />
            ))}
        </div>
    );
};

export default SlideShow;