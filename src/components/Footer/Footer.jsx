import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <p className="categoria">Contacto:</p>
                <p>theoddersbandlosotros@gmail.com</p>
            </footer>
        </>
    );
}

export default Footer;
