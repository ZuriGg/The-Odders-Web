import React from "react";
import "./Foto.css";

function Foto({ titulo, descripcion, src }) {
    return (
        <>
            <img src={src} alt={descripcion} />
            <div className="descriptionContainer">
                <p className="titulo">{titulo}</p>
                <p className="descripcion">{descripcion}</p>
            </div>
        </>
    );
}

export default Foto;
