import React, {useEffect, useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import '../../public/jimmy-carousel.css'
import {slides} from '../data/jimmy-slider-data.json'

export default function JimmyCarousel () {
    const [currentSlide, setCurrentSlide] = useState(0)

    const autoScroll = true
    let intervalTime = 5000
    let slideInterval

    const nextSlide = () => {
        if (currentSlide == slides.length -1) {
            setCurrentSlide(0)
        }
        else {
            setCurrentSlide(currentSlide+1)
        }

    }

    const prevSlide = () => {
        if (currentSlide == 0) {
            setCurrentSlide(slides.length -1)
        }
        else {
            setCurrentSlide(currentSlide-1)
        }
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <>
            <div className='jimmy-carousel'>
                <BsArrowLeftCircleFill className="jarrow jprev" onClick={prevSlide} />
                <BsArrowRightCircleFill className="jarrow jnext" onClick={nextSlide} />
                <div id='carousel-container'>
                    {slides.map((slide, idx) => {
                        console.log(idx)
                        return (
                            <div className={currentSlide=== idx ? "jcontent jcontent-active" : "jcontent jcontent-hidden"}>
                                <img src={slide.src} key={idx} className={currentSlide=== idx ? "jslide jslide-active" : "jslide jslide-hidden"}/>
                                <div className="jbutton" onClick={() => {console.log(`Learn more about ${idx}`)}}>
                                    <span className='jbtn-text'>Learn More</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}