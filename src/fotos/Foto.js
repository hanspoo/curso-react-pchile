import React from "react";
import Styled from "styled-components";

const Img = Styled.img`
    margin: 10px;
    border: 3px solid #000;
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3);
    max-width: 23vw;
  }
`;

const Foto = ({ id, alt_description, urls: { regular } }) => (
  <Img alt={alt_description} src={regular} />
);
export default Foto;
