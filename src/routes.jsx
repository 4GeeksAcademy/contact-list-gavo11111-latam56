import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { CreateContact } from "./pages/CreateContact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

import addContext from "./hooks/useGlobalReducer.jsx";

const Slug = () => {
    return (
        <div>
            <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<CreateContact />} />
                        <Route path="/edit/:id" element={<CreateContact />} />
                        <Route path="*" element={<h1 className="text-center mt-5">Not found!</h1>} />
                    </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    );
};

export default addContext(Slug);

