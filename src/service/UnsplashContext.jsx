import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

// Crear el contexto
const UnsplashContext = createContext();

// Proveedor del contexto
const UnsplashProvider = ({ children }) => {

    const [fotos, setFotos] = useState([]);

    //key de Unsplash
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    // Función para obtener fotos randoms
    const obtenerRandom = useCallback(async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random?count=28', {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            })
            setFotos(response.data)

        } catch (e) {
            console.error(e)
        }
    }, [accessKey])






    /*
        // Función para obtener una foto por ID
        const fetchPhotoById = async (id) => {
            try {
                const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=TU_CLIENT_ID`);
                const data = await response.json();
                setPhotoById(data);
            } catch (error) {
                console.error("Error fetching photo by ID:", error);
            }
      */


    // Valores que se compartirán
    const value = {
        fotos,
        obtenerRandom

    };



    return (
        <UnsplashContext.Provider value={value}>
            {children}
        </UnsplashContext.Provider>
    )
}

export { UnsplashContext, UnsplashProvider };