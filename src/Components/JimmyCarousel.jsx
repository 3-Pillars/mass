import React, {useEffect, useState} from 'react'
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
    let current;
    return (
        <>
            {slides.map((slide, idx) => {
                return (
                    <div 
                    key={`slide-${idx}`}
                    className={`demo-wrap ${currentSlide=== idx ? "jcontent jcontent-active" : "jcontent jcontent-hidden"}`} 
                    style={{backgroundImage: `url(${slide.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: "50% 0", backgroundSize: "cover"}}>
                        <div className="demo-content">
                            <div className='demo-block'>
                                <h1>{slide.text}</h1>
                            </div>
                            <div className='demo-block'>
                                <h1></h1>
                            </div>
                            <div className='demo-block'>
                                <span className='jbtn-text'>Learn More</span>
                            </div>
                        </div>
                    </div>
                )}
            )}
            {console.log(`current: ${currentSlide}`)}
            <div className='jdiv'>
            <span className='jindicators'>
                {slides.map((_, idx) => {
                    return <button key={idx} onClick={() => setCurrentSlide(idx)} className={currentSlide === idx ? 'jindicator' : "jindicator jindicator-inactive"}></button>
                })}
            </span>
            </div>
        </>
    )
}