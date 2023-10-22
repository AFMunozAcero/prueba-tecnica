// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ParallaxBanner.css";

const ParallaxBanner = () => {
  return (
    <div className="parallax-banner">
      <div className="parallax-image" />
      <div className="parallax-overlay" />
      <div className="parallax-content">
        <h1>INVICTA AL DÍA</h1>
        <p>
          INSCRIBETE A NUESTRO NEWSLETTER PARA CONOCER ACERCA DE NUESTRAS
          PROMOCIONES, EVENTOS Y DESCUENTOS VIGENTES
        </p>
      </div>
    </div>
  );
};

export default ParallaxBanner;
