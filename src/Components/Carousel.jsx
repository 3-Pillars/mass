import React, {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import '../../public/carousel.css'

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        if (slide == data.length -1) {
            setSlide(0)
        }
        else {
            setSlide(slide+1)
        }

    }

    const prevSlide = () => {
        if (slide == 0) {
            setSlide(data.length -1)
        }
        else {
            setSlide(slide-1)
        }
    }

    return (
        <>
            <div className='carousel'>
                <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
                {
                    data.map((item, idx) => {
                        return <img src={item.src} alt={item.alt} key={idx} className={slide=== idx ? "slide slide-active" : "slide slide-hidden"}/>
                    })
                }
                <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
                <span className='indicators'>
                    {data.map((_, idx) => {
                        return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicator' : "indicator indicator-inactive"}></button>
                    })}
                </span>
            </div>
        </>
    )
}