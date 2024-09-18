import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Layout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
