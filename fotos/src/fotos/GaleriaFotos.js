import React from "react";
import Foto from "./Foto";
import styled from "styled-components";

/*
Estilos sacados:
https://www.quackit.com/css/flexbox/examples/flexbox_photo_gallery_examples.cfm
*/
const Galeria = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  max-height: 100vh;
`;

const GaleriaFotos = ({ fotos }) => (
  <div>
    <h1>Fotos</h1>
    <p>
      Hay {fotos.length} {fotos.length === 1 ? "foto" : "fotos"}
    </p>
    <Galeria>
      {fotos.map(foto => (
        <Foto {...foto} />
      ))}
    </Galeria>
  </div>
);

export default GaleriaFotos;
