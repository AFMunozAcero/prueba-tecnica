// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import "./SlideBanner.css";
import leftArrowIcon from "../assets/icons/izqui.svg";
import rightArrowIcon from "../assets/icons/dere.svg";

const images = [
  "https://invictamexico.com/cdn/shop/files/PRO_DIVER_banner-principal-desk-1920x650_copia.jpg?v=1697748487",
  "https://invictamexico.com/cdn/shop/files/HASTA_70_OFF_banner-principal-desk-1920x650_copia.jpg?v=1696286584",
  "https://invictamexico.com/cdn/shop/files/DESDE_999_banner-principal-desk-1920x650_copia_1.jpg?v=1697840543",
  "https://invictamexico.com/cdn/shop/files/jm_banner_mexico_banner-prin-1920x600.jpg?v=1696978648",
  "https://invictamexico.com/cdn/shop/files/GORRA__banner-principal-desk-1920x650.jpg?v=1696359712",
];

const SlideBanner = () => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      handleNext();
    } else if (startX - endX < -50) {
      handlePrev();
    }
  };

  return (
    <div
      className="slide-banner"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img src={images[current]} alt="Imagen del carrusel" />
      <button className="prev" onClick={handlePrev}>
        <img src={leftArrowIcon} alt="Flecha Izquierda" />
      </button>
      <button className="next" onClick={handleNext}>
        <img src={rightArrowIcon} alt="Flecha Derecha" />
      </button>
    </div>
  );
};

export default SlideBanner;
