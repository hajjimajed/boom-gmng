import './directory.styles.scss'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';
import Button from '../Button/button.component';

const slides = [
    { id: 1, bgColor: 'https://i.ibb.co/VTKQTHP/Untitled-1.png', img: 'https://i.ibb.co/YhjZ7ZM/pngegg-5.png' },
    { id: 2, bgColor: 'https://i.ibb.co/fFTMnJz/Untitled.png', img: 'https://i.ibb.co/VMSxvkv/pngegg.png' },
    { id: 3, bgColor: 'https://i.ibb.co/42phQrN/Untitled-2.png', img: 'https://i.ibb.co/YhjZ7ZM/pngegg-5.png' }
];
const images = ['https://i.ibb.co/VTKQTHP/Untitled-1.png',
    'https://i.ibb.co/fHMdKCd/dylan-nolte-SH-Ijr-Kw-G8c-unsplash.jpg',
    'https://i.ibb.co/Z8mjmwy/Untitled.png']

const Directory = () => {

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
        <div className='directory-container'>
            <div className='slide-show'>
                <ArrowLeft className='arrow-left' onClick={prevSlide} />
                <ArrowRight className='arrow-right' onClick={nextSlide} />
                <div className="carousel">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`slide ${currentSlide === slide.id ? 'active' : ''} ${currentSlide < slide.id ? 'next' : ''} ${currentSlide > slide.id ? 'prev' : ''}`}
                            style={{ backgroundImage: `url(${slide.bgColor})` }}
                        >
                            <div className='carousel-infos'>
                                <p>over 200 games</p>
                                <h1>best deals</h1>
                                <h1>on boom</h1>
                                <div className='btn-container'>
                                    <Link to='/store'>
                                        <Button buttonType='inverted'>view offers</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img src={slide.img} alt="" />
                            </div>
                        </div>
                    ))}
                    <div className="controls">

                        <div className="dots">
                            {slides.map((slide) => (
                                <span
                                    key={slide.id}
                                    className={`${currentSlide === slide.id ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(slide.id)}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className='categories'>
                <div className='categories-container'>
                    <div className='shape'>
                        <div className='shape-image'>
                            <img src="https://images.hdqwalls.com/wallpapers/marvel-spider-man-miles-morales-iz.jpg" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>action</h1>
                                <p>20 games</p>
                            </div>
                            <div className='shape-btn'>
                                <div>
                                    <Link to='/store/action%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape'>
                        <div className='shape-image'>
                            <img src="https://i.ibb.co/BfKJqZ0/Capture-d-cran-2023-02-25-165632.png" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>adventure</h1>
                                <p>20 games</p>
                            </div>
                            <div className='shape-btn'>
                                <div>
                                    <Link to='/store/adventure%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape'>
                        <div className='shape-image'>
                            <img src="https://www.nme.com/wp-content/uploads/2022/05/Multiversus-Key-Art.jpg" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>casual</h1>
                                <p>20 games</p>
                            </div>
                            <div className='shape-btn'>
                                <div>
                                    <Link to='/store/casual%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape'>
                        <div className='shape-image'>
                            <img src="https://i.ibb.co/6NTqf1x/Capture-d-cran-2023-02-25-170207.png" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>racing</h1>
                                <p>20 games</p>
                            </div>
                            <div className='shape-btn'>
                                <div>
                                    <Link to='/store/racing%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Directory;