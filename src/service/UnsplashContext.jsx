import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';

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
    //const keyRandomTag = process.env.REACT_RANDOM_AND_TAGS_ACCESS_KEY;

    //Función para buscar fotos
    const getRandom = useCallback(async () => {
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
    }, [accessKey])


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


    // Función para actualizar ingresarBusqueda y luego llamar a searchPhotos
    const updateIngresarBusquedaAndSearch = (newSearch) => {
        setIngresarBusqueda(newSearch); // Actualiza el estado
        setPageNumber(1)
    }


    //Función para buscar fotos

    useEffect(() => {
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
                console.error("Error fetching search photos:", error);
            }
        }
        searchPhotos()
    }, [ingresarBusqueda, pageNumber])




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