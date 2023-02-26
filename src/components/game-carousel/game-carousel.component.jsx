import './game-carousel.styles.scss'

import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';
import React, { useState, useEffect } from 'react';

const GameCarousel = ({ captures }) => {

    const slides = captures.map((capture, index) => ({
        id: index + 1,
        url: capture
    }));

    const [currentSlide, setCurrentSlide] = useState(1);

    const nextSlide = () => {
        if (currentSlide === slides.length) {
            setCurrentSlide(1);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 1) {
            setCurrentSlide(slides.length);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className='game-carousel-container'>
            <ArrowLeft className='arrow-left' onClick={prevSlide} />
            <ArrowRight className='arrow-right' onClick={nextSlide} />
            <div className="carousel">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`slide ${currentSlide === slide.id ? 'active' : ''} ${currentSlide < slide.id ? 'next' : ''} ${currentSlide > slide.id ? 'prev' : ''}`}

                    >
                        <img className='main-image' src={slide.url} alt="" />
                    </div>
                ))}
                <div className="controls">

                    <div className="dots">
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`${currentSlide === slide.id ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(slide.id)}
                            >
                                <img src={slide.url} alt="" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


export default GameCarousel;