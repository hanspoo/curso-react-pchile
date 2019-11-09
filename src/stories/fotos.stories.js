import React from "react";
import Fotos from "../fotos/Fotos";
import GaleriaFotos from "../fotos/GaleriaFotos";
export default {
  title: "Fotos"
};

const unaFoto = [
  {
    id: 1,
    title: "Una sola foto"
  }
];
const urlInvalida = "http://www.xxx.cl/shjksdhfk";

export const networkError = () => <Fotos url={urlInvalida} />;
export const urlPorDefecto = () => <Fotos />;
export const conUnaFoto = () => <GaleriaFotos fotos={unaFoto} />;
