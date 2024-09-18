import React, { useEffect, useState } from "react";
import "./Fotos.css";
import Foto from "../../components/Foto/Foto";

function Fotos() {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        fetch("/data/fotos.json")
            .then((response) => response.json())
            .then((data) => setFotos(data))
            .catch((error) =>
                console.error("Error fetching the fotos:", error)
            );
    }, []);
    return (
        <>
            <div className="fondoFotos">
                <div className="fotosContainer">
                    {fotos.map((foto) => (
                        <div className="fotos" key={foto.id}>
                            <Foto
                                titulo={foto.titulo}
                                descripcion={foto.descripcion}
                                src={foto.src}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Fotos;
