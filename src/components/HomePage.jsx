// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Popup.css";
import myImage from "../assets/images/image 7.jpg";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`app ${showPopup ? "blur" : ""}`}>
      {showPopup && (
        <div className="popup">
          <button className="close" onClick={closePopup}>
            <i className="fas fa-times"></i>
          </button>
          <div className="popup-content">
            <div className="popup-image">
              <img src={myImage} alt="Imagen descriptiva"></img>
            </div>
            <div className="popup-text">
              <h2 className="highlight">
                ¡SUSCRÍBETE A LAS NOVEDADES DE NUESTRO CLUB CROCS!
              </h2>
              <p className="highlight">
                Y OBTÉN ENVÍO GRATIS EN LA COMPRA DE TUS PRIMEROS CROCS
              </p>
              <input
                type="text"
                placeholder="Ingresa tu correo"
                className="email-input"
              />
              <button className="subscribe">Suscribir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
