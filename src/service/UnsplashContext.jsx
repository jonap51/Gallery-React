import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
const UnsplashContext = createContext();

// Proveedor del contexto
const UnsplashProvider = ({ children }) => {

    const [fotos, setFotos] = useState([])
    const [fotoId, setFotoId] = useState([])

    const [ingresarBusqueda, setIngresarBusqueda] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [boleanInfinite, setBoleanInfinite] = useState(false)

    const [isFirstRender, setIsFirstRender] = useState(true)
    //key de Unsplash
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    //const keyRandomTag = process.env.REACT_RANDOM_AND_TAGS_ACCESS_KEY;

    //Función para buscar fotos
    const getRandom = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random', {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
                params: {
                    count: 28,
                },
            })
            setFotos(response.data)
            setBoleanInfinite(false)

        } catch (e) {
            console.error(e)
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

    //Función para buscar fotos


    const searchPhotos = async () => {
        try {
            const response = await axios('https://api.unsplash.com/search/photos', {
                headers: {
                    Authorization: `Client-ID ${accessKey}`,
                },
                params: {
                    page: pageNumber,
                    query: ingresarBusqueda,
                    per_page: 28,
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
            if (error === 403) {
                <h1>SIN REQUEST PARA LA API espera 1 hs</h1>
            }
            console.error("Error fetching search photos:", error);
        }
    }

    // Función para actualizar ingresarBusqueda y activa searchPhoto
    const updateIngresarBusquedaAndSearch = (newSearch) => {
        setIngresarBusqueda(newSearch);
        setPageNumber(1)
    }

    //si no es su primera carga, comienza por random, sino puede ejecutarse searchPhoto por alguna dependencia
    useEffect(() => {
        !isFirstRender ? searchPhotos() : setIsFirstRender(false)
    }, [pageNumber, ingresarBusqueda])

    // Valores que se compartirán
    const value = {
        fotos,
        getRandom,
        setIngresarBusqueda,
        setFotos,
        boleanInfinite,
        setPageNumber,
        pageNumber,
        photoById,
        fotoId,
        updateIngresarBusquedaAndSearch
    };

    return (
        <UnsplashContext.Provider value={value}>
            {children}
        </UnsplashContext.Provider>
    )
}

export { UnsplashContext, UnsplashProvider }