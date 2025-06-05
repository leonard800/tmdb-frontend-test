"use client";
// eslint-disable-next-line
import React from "react";

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white flex justify-between p-4 items-center">
            <h1 className="text-3xl font-bold">Navbar</h1>
            <div className="flex gap-4">  
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>    
        </div>
    );
};

export default Navbar;