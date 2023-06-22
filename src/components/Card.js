import React, { useState, useEffect, useRef } from 'react';
import './Card.css';
import CardDetail from './Card_detail';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import petroleum from './images/Petrol.png';
import anthracite from './images/Mask group.png';
import anode_paste from './images/Mask group-1.png';
import Raiser from './images/Mask group-2.png';
import Electode from './images/Mask group-3.png';
import Tamping from './images/Mask group-4.png';
import Granules from './images/Mask group-5.png';
import coal from './images/Mask group-6.png';
import ferro_alloys from './images/Mask group-7.png';
import metallurgical_coke from './images/Mask group-8.png';
import Amorphous_Graphite from './images/Mask group-9.png';
import pellet_coke from './images/Mask group-10.png';

function Card() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const carouselItemsRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [leftShift, setLeftShift] = useState(0); // Default left shift value is 40px

  useEffect(() => {
    const handleScrollPrevious = () => {
      if (carouselItemsRef.current && currentSlide > 0) {
        const scrollDistance = carouselItemsRef.current.offsetWidth * (currentSlide - 1); // Adjusted scroll distance
        carouselItemsRef.current.scrollTo({
          left: scrollDistance,
          behavior: 'smooth',
        });
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    };

    const handleScrollNext = () => {
      if (carouselItemsRef.current && currentSlide < totalItems - 1) {
        carouselItemsRef.current.scrollBy({
          left: carouselItemsRef.current.offsetWidth,
          behavior: 'smooth',
        });
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }
    };

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    prevButton.addEventListener('click', handleScrollPrevious);
    nextButton.addEventListener('click', handleScrollNext);

    return () => {
      prevButton.removeEventListener('click', handleScrollPrevious);
      nextButton.removeEventListener('click', handleScrollNext);
    };
  }, [currentSlide]);

  const handleProductClick = (productId) => {
    console.log(`Clicked product ID: ${productId}`);
    navigate(`/products/${productId}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const totalItems = 12;

  return (
    <div  className={`cards ${isHovered ? 'hovered' : ''}`} 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <p className="offer-product">Products we offer:</p>
      <div
        className={`carousel-items `}
        ref={carouselItemsRef}
       
      >
            <CardDetail
          img={petroleum}
          para="Calcined petroleum coke"
          onClick={() => handleProductClick(1)}
        />
        <CardDetail
          img={anthracite}
          para="Calcined anthracite"
          onClick={() => handleProductClick(2)}
        />
        <CardDetail
          img={anode_paste}
          para="Anode Paste"
          onClick={() => handleProductClick(3)}
        />
        <CardDetail
          img={Raiser}
          para="Carbon Raiser"
          onClick={() => handleProductClick(4)}
        />
        <CardDetail
          img={Electode}
          para="Graphite Electrode"
          onClick={() => handleProductClick(5)}
        />
        <CardDetail
          img={Tamping}
          para="Tamping Paste"
          onClick={() => handleProductClick(6)}
        />
        <CardDetail
          img={Granules}
          para="Graphite Granules"
          onClick={() => handleProductClick(7)}
        />
        <CardDetail
          img={coal}
          para="Coal"
          onClick={() => handleProductClick(8)}
        />
        <CardDetail
          img={ferro_alloys}
          para="Ferro Alloys"
          onClick={() => handleProductClick(9)}
        />
        <CardDetail
          img={metallurgical_coke}
          para="Metallurgical Coke"
          onClick={() => handleProductClick(10)}
        />
        <CardDetail
          img={Amorphous_Graphite}
          para="Amorphous Graphite"
          onClick={() => handleProductClick(11)}
        />
        <CardDetail
          img={pellet_coke}
          para="Pellet Coke"
          onClick={() => handleProductClick(12)}
        />
      </div>
      <div className="carousel-buttons">
        <button
          ref={prevButtonRef}
          className="carousel-button-prev"
          disabled={currentSlide === 0}
          style={{ left: `${isHovered ? `${leftShift}px` : '-55px'}` }}
        >
          <FiChevronLeft />
        </button>
        <button
          ref={nextButtonRef}
          className="carousel-button-next"
          disabled={currentSlide === totalItems - 1}
          style={{
            right: `${isHovered ? `${leftShift}px` : '-55px'}`,
          }}
        >
          <FiChevronRight />
          
        
        </button>
      </div>
    </div>
  );
}

export default Card;
