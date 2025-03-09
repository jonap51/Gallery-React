import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

// Crear el contexto
const UnsplashContext = createContext();

// Proveedor del contexto
const UnsplashProvider = ({ children }) => {

    const [fotos, setFotos] = useState([])
    const [ingresarBusqueda, setIngresarBusqueda] = useState('')
    const [fotoId, setFotoId] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [boleanInfinite, setBoleanInfinite] = useState(false)


    //key de Unsplash
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    //Función para buscar fotos
    const getRandom = useCallback(async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random?count=28', {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            })
            setFotos(response.data)
            setBoleanInfinite(false)

        } catch (e) {
            console.error(e)
        }
    }, [accessKey])

    //Función para buscar fotos

    const searchPhotos = async () => {
        try {
            const response = await axios(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${ingresarBusqueda}&per_page=28`, {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            });
            const data = response.data.results
            setBoleanInfinite(true)

            //Si la página es 1, se guarda en 'fotos', sino se agrega el nuevo array a 'fotos'
            if (pageNumber === 1) {
                setFotos(data)
            } else {
                setFotos((prevFotos) => [...prevFotos, ...data]);
            }

        } catch (error) {
            console.error("Error fetching search photos:", error);
        }
    }


    // Función para obtener una foto por ID
    const photoById = async (imagen) => {
        try {
            const response = await axios(`https://api.unsplash.com/photos/${imagen}`, {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
            });
            const data = response.data
            setFotoId(data)

        } catch (error) {
            console.error("Error fetching photo by ID:", error);
        }
    }

    // Valores que se compartirán
    const value = {
        fotos,
        getRandom,
        setIngresarBusqueda,
        setFotos,
        searchPhotos,
        boleanInfinite,
        setPageNumber,
        pageNumber,
        photoById,
        fotoId


    };

    return (
        <UnsplashContext.Provider value={value}>
            {children}
        </UnsplashContext.Provider>
    )
}

export { UnsplashContext, UnsplashProvider };