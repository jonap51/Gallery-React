import axios from 'axios';
import React, { useState } from 'react';

const Header = () => {
    const [busqueda, setBusqueda] = useState('')

    const actualizarBusqueda = (event) => {
        setBusqueda(event.target.value)

    }

    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    const searchPhotos = () => {

        // Función para buscar fotos
        const fetchsearchPhotos = async (query) => {
            try {
                const response = await axios(`https://api.unsplash.com/search/photos?page=1&query=${busqueda}&per_page=28`, {
                    headers: {
                        Authorization: `Client-ID ${accessKey}`,
                    },
                });
                const data = response.data
                console.log(data)

                //setSearchResults(data.results);
            } catch (error) {
                console.error("Error fetching search photos:", error);
            }
        };
        fetchsearchPhotos()
    }


    console.log(busqueda)
    return (

        <div>
            <h1 className='p-3 bg-danger text-white container-full text-center'>Galeria de Imágenes</h1>

            <div className='d-flex container mt-5 mb-5'>

                <input className="form-control me-3 border-1 border-black" type="search" placeholder="Search" aria-label="Search" value={busqueda} onChange={actualizarBusqueda} />

                <button className="btn btn-outline-success" onClick={searchPhotos}>Search</button>
            </div>
        </div>
    )

}

export { Header }