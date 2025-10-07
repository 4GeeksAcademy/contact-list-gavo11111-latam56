import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar mb-3">
            <div className="container">
                <div className="ms-auto">
                    <Link to="/add">
                        <button className="btn btn-success fs-5">Add New Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
