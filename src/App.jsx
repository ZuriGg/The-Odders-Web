import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./routes/Home/Home.jsx";
import Musica from "./routes/Musica/Musica.jsx";
import Fotos from "./routes/Fotos/Fotos.jsx";
import Videos from "./routes/Videos/Videos.jsx";
import Eventos from "./routes/Eventos/Eventos.jsx";
import TheOdders from "./routes/TheOdders/TheOdders.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "The Odders - Home";
        } else if (location.pathname === "/the-odders") {
            document.title = "The Odders - About";
        } else if (location.pathname === "/musica") {
            document.title = "The Odders - Música";
        } else if (location.pathname === "/fotos") {
            document.title = "The Odders - Fotos";
        } else if (location.pathname === "/videos") {
            document.title = "The Odders - Vídeos";
        } else if (location.pathname === "/eventos") {
            document.title = "The Odders - Eventos";
        } else {
            document.title = "The Odders";
        }
    }, [location]);

    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="the-odders" element={<TheOdders />} />
                    <Route path="musica" element={<Musica />} />
                    <Route path="fotos" element={<Fotos />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="eventos" element={<Eventos />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
