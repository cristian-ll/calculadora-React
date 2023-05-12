import React from "react";
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
    <button className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </button>
);

export default BotonClear;