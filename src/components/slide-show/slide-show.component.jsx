import './slide-show.styles.scss'
import { useState } from 'react';

import { ReactComponent as Arrow } from '../../assets/arrow.svg'

import { motion } from 'framer-motion';

const Carousel = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    /*  if (Array.isArray(slides) || slides.length <= 0) {
          return null;
      } */

    return (
        <motion.section className='slider'>
            <div className='left-arrow' onClick={prevSlide}><Arrow className='left-arrow-img' /></div>
            <div className='right-arrow' onClick={nextSlide}><Arrow className='right-arrow-img' /></div>

            {
                slides.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (<img src={slide.image} alt='image' className='image' />)}
                        </div>
                    )


                })
            }
        </motion.section>
    )

}

export default Carousel;
