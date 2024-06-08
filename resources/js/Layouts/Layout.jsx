import React from "react";
import NavBar from "../Components/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};

export default Layout;
