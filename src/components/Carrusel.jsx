// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Carrusel.css";

const productos = [
  {
    id: 1,
    nombre: "RELOJ PARA HOMBRE INVICTA BOLT 31475",
    imagenUrl:
      "https://invictamexico.com/cdn/shop/products/886678298839_201_51b48221-c280-4eaa-8b17-45322c0d61f9.jpg?v=1684949486&width=360",
    antes: 100,
    despues: 80,
    nuevo: true,
  },
  {
    id: 2,
    nombre: "RELOJ DEPORTIVO PARA HOMBRE INVICTA BOLT 35086",
    imagenUrl:
      "https://invictamexico.com/cdn/shop/products/886678421299_201.jpg?v=1684953671&width=360",
    antes: 200,
    despues: 180,
    nuevo: false,
  },
  {
    id: 3,
    nombre: "RELOJ DEPORTIVO PARA HOMBRE INVICTA BOLT 40314",
    imagenUrl:
      "https://invictamexico.com/cdn/shop/products/886678542260_201_cfaf1817-a6d4-4f3b-a72d-d447ec3366ea.jpg?v=1684950221&width=360",
    antes: 150,
    despues: 130,
    nuevo: true,
  },
  {
    id: 4,
    nombre: "RELOJ PARA HOMBRE INVICTA BOLT 34118",
    imagenUrl:
      "https://invictamexico.com/cdn/shop/products/886678298839_201_51b48221-c280-4eaa-8b17-45322c0d61f9.jpg?v=1684949486&width=360",
    antes: 120,
    despues: 100,
    nuevo: false,
  },
  {
    id: 5,
    nombre: "RELOJ DEPORTIVO PARA HOMBRE TECHNOMARINE CRUISE TM",
    imagenUrl:
      "https://invictamexico.com/cdn/shop/collections/Logo-Invivta-Automatico-02.png?v=1665704489&width=330",
    antes: 90,
    despues: 70,
    nuevo: true,
  },
  {
    id: 6,
    nombre: "RELOJ CLÁSICO PARA HOMBRE INVICTA SPECIALTY 13787",
    imagenUrl:
      "https://invictamexico.com/cdn/shop/collections/experiencia_Invicta-clasicoim-reloj-invicta-clasico-exprienciad-desk.jpg?v=1665704323&width=330",
    antes: 300,
    despues: 280,
    nuevo: false,
  },
];

const Carrusel = () => {
  const [current, setCurrent] = useState(0);
  const next = () =>
    setCurrent(current === productos.length - 3 ? 0 : current + 1);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="carrusel">
      {productos.slice(current, current + 3).map((producto, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          <div>
            <img src={producto.imagenUrl} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio Antes : ${producto.antes}</p>
            <p>Precio Después : ${producto.despues}</p>
            {producto.nuevo && <span>Nuevo</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrusel;
