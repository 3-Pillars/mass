import React, {useEffect, useState} from 'react'
import '../../public/jimmy-carousel.css'
import {slides} from '../data/jimmy-slider-data.json'
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom"

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
                            <span className='jbtn-text' ><CustomLink to={`/${slide.link}`}>Learn More</CustomLink></span>
                                {/* <span className='jbtn-text' onClick={() => {console.log(slide.text)}}>Learn More</span> */}
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
function CustomLink({to, children, ...props}) {
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <>
            <Link to={to} style={{color: "white", textDecoration: "none"}}>{children}</Link>
        </>
    )
  }