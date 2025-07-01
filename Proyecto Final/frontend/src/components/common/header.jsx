'use client';
import { useEffect, useState } from "react";

import Button from "../ui/button";

const Header = ({ booksCount }) => {

    return (
        <header className="header">
            <span>
                <h1>
                    Mi Biblioteca Personal
                </h1>
                <p>
                    {booksCount} libros en tu colección
                </p>
            </span>
            <Button
                text="Agregar Libro"
            >
            </Button>

        </header>
    );
}

export default Header;