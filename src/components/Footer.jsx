// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import FacebookIcon from "../assets/icons/Face.svg";
import TwitterIcon from "../assets/icons/twit.svg";
import InstagramIcon from "../assets/icons/insta.svg";
import LinkedInIcon from "../assets/icons/linke.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Invencible en detalle</h4>
            <ul>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Cuida tu reloj</a>
              </li>
              <li>
                <a href="#">Mi cuenta</a>
              </li>
              <li>
                <a href="#">Reloj Azteca</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Servicio al cliente</h4>
            <ul>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
              <li>
                <a href="#">Política y privacidad</a>
              </li>
              <li>
                <a href="#">Venta al por mayor</a>
              </li>
              <li>
                <a href="#">Términos y condiciones de promociones</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Encuentranos</h4>
            <ul>
              <li>
                <a href="#">Tiendas</a>
              </li>
              <li>
                <a href="#">Mapa del sitio</a>
              </li>
              <li>
                <a href="#">Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Siguenos</h4>
            <div className="social-links">
              <a href="#" className="icon-container">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="icon-container">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="#" className="icon-container">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="#" className="icon-container">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
