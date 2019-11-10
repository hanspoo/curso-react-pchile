import React from "react";
import Fotos from "../fotos/Fotos";
import { Loader, Dimmer } from "semantic-ui-react";
import Foto from "../fotos/Foto";
import GaleriaFotos from "../fotos/GaleriaFotos";
import fotos from "./fotos.json";
export default {
  title: "Fotos"
};
const regular =
  "https://images.unsplash.com/photo-1572800578930-fd1013b506c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";
const urlInvalida = "http://www.xxx.cl/shjksdhfk";
const foto = fotos[0];

export const networkError = () => <Fotos url={urlInvalida} />;
export const urlPorDefecto = () => <Fotos />;
export const confotos = () => <GaleriaFotos fotos={fotos} />;
export const fotoSola = () => <Foto {...foto} />;
export const fotoSolaArgs = () => (
  <Foto id="1" alt_description="Descripción alternativa" urls={{ regular }} />
);
export const dimmer = () => (
  <Dimmer active>
    <Loader />
  </Dimmer>
);
