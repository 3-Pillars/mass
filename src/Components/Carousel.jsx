import React, {useEffect, useState} from 'react'
import '../../public/carousel.css'
import {slides} from '../data/slider-data.json'
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom"
import diagram from '../../public/assets/diagram.png'
import notebook_glyphs from '../../public/assets/notebook_glyphs.jpg'
import grandpa_willow from '../../public/assets/grandpa_willow.jpg'

export default function Carousel () {
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
            <img src={diagram} style={{"display": "none"}}/>
            <img src={notebook_glyphs} style={{"display": "none"}}/>
            <img src={grandpa_willow} style={{"display": "none"}}/>
            {slides.map((slide, idx) => {
                return (
                    <div 
                    key={`slide-${idx}`}
                    className={`demo-wrap ${currentSlide=== idx ? "carousel-content carousel-content-active" : "carousel content carousel-content-hidden"}`} 
                    style={{backgroundImage: `url(${slide.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: "50% 0", backgroundSize: "cover"}}>
                        <div className="demo-content">
                            <div className='demo-block'>
                                <h1>{slide.text}</h1>
                            </div>
                            <div className='demo-block'>
                                <h1></h1>
                            </div>
                            <div className='demo-block'>
                            <span className='carousel-btn-text' ><CustomLink to={`/${slide.link}`}>Learn More</CustomLink></span>
                            </div>
                        </div>
                    </div>
                )}
            )}
            <div className='carousel-div'>
            <span className='carousel-indicators'>
                {slides.map((_, idx) => {
                    return <button key={idx} onClick={() => setCurrentSlide(idx)} className={currentSlide === idx ? 'carousel-indicator' : "carousel-indicator carousel-indicator-inactive"}></button>
                })}
            </span>
            </div>
        </>
    )
}
function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <>
            <Link to={to} style={{color: "white", textDecoration: "none"}}>{children}</Link>
        </>
    )
  }