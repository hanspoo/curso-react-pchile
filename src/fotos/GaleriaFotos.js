import React from "react";

const GaleriaFotos = ({ fotos }) => (
  <div>
    <h1>Fotos</h1>
    <p>
      Hay {fotos.length} {fotos.length !== 1 ? "fotos" : "foto"}
    </p>
  </div>
);

export default GaleriaFotos;
