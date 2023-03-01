import './directory.styles.scss'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ReactComponent as ArrowLeft } from '../../assets/left-arrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/right-arrow.svg';
import Button from '../Button/button.component';

import { useNavigate } from 'react-router-dom';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.2,
            delay: 0.8
        }
    }
};

const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const slides = [
    { id: 1, bgColor: 'https://i.ibb.co/VTKQTHP/Untitled-1.png', img: 'https://i.ibb.co/YhjZ7ZM/pngegg-5.png', text1: 'over 200 games', text2: 'best deals', text3: 'on boom', btntxt: 'view offers', link: 'store' },
    { id: 2, bgColor: 'https://i.ibb.co/fFTMnJz/Untitled.png', img: 'https://i.ibb.co/VMSxvkv/pngegg.png', text1: 'became a member', text2: 'register', text3: 'and play', btntxt: 'register', link: 'register' },
    { id: 3, bgColor: 'https://i.ibb.co/42phQrN/Untitled-2.png', img: 'https://i.ibb.co/YhjZ7ZM/pngegg-5.png', text1: 'have a problem ?', text2: 'feel free', text3: 'to contact', btntxt: 'contact', link: 'support' }
];

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

    const navigate = useNavigate();


    return (
        <div className='directory-container'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.3
                }}
                className='slide-show'>
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
                                <p>{slide.text1}</p>
                                <h1>{slide.text2}</h1>
                                <h1>{slide.text3}</h1>
                                <div className='btn-container'>
                                    <Link to={`/${slide.link}`}>
                                        <Button buttonType='inverted'>{slide.btntxt}</Button>
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
            </motion.div>
            <div className='categories'>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className='categories-container'>
                    <motion.div
                        variants={item}
                        className='shape'>
                        <div className='shape-image'>
                            <img src="https://i.ibb.co/Pt9NC26/marvel-spider-man-miles-morales-iz-1.jpg" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>action</h1>
                                <p>20 games</p>
                            </div>
                            <Link to='/store/action%20games' className='shape-btn'>
                                <div>
                                    <Link to='/store/action%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className='shape'>
                        <div className='shape-image'>
                            <img src="https://i.ibb.co/BfKJqZ0/Capture-d-cran-2023-02-25-165632.png" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>adventure</h1>
                                <p>20 games</p>
                            </div>
                            <Link to='/store/adventure%20games' className='shape-btn'>
                                <div>
                                    <Link to='/store/adventure%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className='shape'>
                        <div className='shape-image'>
                            <img src="https://i.ibb.co/0qF1CmB/Multiversus-Key-Art-1.jpg" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>shooter</h1>
                                <p>20 games</p>
                            </div>
                            <Link to='/store/casual%20games' className='shape-btn'>
                                <div>
                                    <Link to='/store/shooter%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className='shape'>
                        <div className='shape-image'>
                            <img src="https://i.ibb.co/d5fFSrj/Capture-d-cran-2023-02-25-170207-1.png" alt="" />
                        </div>
                        <div className='shape-infos'>
                            <div className='shape-info'>
                                <h1>racing</h1>
                                <p>20 games</p>
                            </div>
                            <Link to='/store/racing%20games' className='shape-btn'>
                                <div>
                                    <Link to='/store/racing%20games'><ArrowRight className='shape-arrow' /></Link>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}


export default Directory;