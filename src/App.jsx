// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header'; 
import Marquee from './components/Marquee'; 
import SlideBanner from './components/SlideBanner';
import Carrusel from './components/Carrusel';
import ParallaxBanner from './components/ParallaxBanner';
import Footer from './components/Footer';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <div className="App">
      <Marquee text={[
        "3 años de garantia invicta",
        "únicos distribuidores oficiales en méxico",
        "seguridad en tu compra",
        "evita el riesgo de comprar falsificaciones, te invitamos a comprar en nuestra tienda oficial",
        "3 años de garantia invicta", 
        "únicos distribuidores oficiales en méxico", 
        "seguridad en tu compra", 
        "evita el riesgo de comprar falsificaciones, te invitamos a comprar en nuestra tienda oficial" 
      ]} />
      <Header />
      <SlideBanner/>
      <Carrusel/>
      <ParallaxBanner/>
      <Footer/>
      <HomePage/>
    </div>
    
  );
};
export default App;
