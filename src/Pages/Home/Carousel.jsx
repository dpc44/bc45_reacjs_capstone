import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Carousel = (props) => {
    
    const { ProductCarousel } = props
    // console.log(ProductCarousel[1])
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active border-bottom border-black" data-bs-interval={10000}>
                        <img src={ProductCarousel[0]?ProductCarousel[0].image:""} className="d-block w-25 mx-auto" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{ProductCarousel[0]?ProductCarousel[0].name:""}</h5>
                            <p>{ProductCarousel[0]?ProductCarousel[0].shortDescription:""}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ProductCarousel[1]?ProductCarousel[1].image:""} className="d-block w-25 mx-auto" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{ProductCarousel[1]?ProductCarousel[1].name:""}</h5>
                            <p>{ProductCarousel[1]?ProductCarousel[1].shortDescription:""}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ProductCarousel[2]?ProductCarousel[2].image:""} className="d-block w-25 mx-auto" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{ProductCarousel[2]?ProductCarousel[2].name:""}</h5>
                            <p>{ProductCarousel[2]?ProductCarousel[2].shortDescription:""}</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



    )
}

export default Carousel