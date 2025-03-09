import React, { useContext, useEffect } from 'react';
import { UnsplashContext } from '../service/UnsplashContext';

const Header = () => {

    //uso context desde UnsplashContext para llamar a la api y todos los valores útiles
    const { ingresarBusqueda, setIngresarBusqueda, searchPhotos, setPageNumber, pageNumber } = useContext(UnsplashContext)

    // Función para llamar "buscar fotos" con CLICK
    const searchPhotosClick = () => {
        searchPhotos()
    }
    // Función para llamar "buscar fotos" con ENTER
    const searchKeyEnter = (event) => {
        if (event.key === 'Enter') {
            searchPhotos()
        }
    };


    useEffect(() => {
        setPageNumber(1)
        console.log(pageNumber, 'USE EFFECT')
    }, [searchPhotos])

    //tomo valor del input
    const actualizarBusqueda = (event) => {
        setIngresarBusqueda(event.target.value)
    }

    return (
        <div>
            <h1 className='p-3 bg-danger text-white container-full text-center'>Galeria de Imágenes</h1>
            <div className='d-flex container mt-5 mb-5'>
                <input className="form-control me-3 border-1 border-black" type="search" placeholder="Search" aria-label="Search" value={ingresarBusqueda} onChange={actualizarBusqueda} onKeyDown={searchKeyEnter} />
                <button className="btn btn-outline-success" onClick={searchPhotosClick}>Search</button>
            </div>
        </div>
    )
}

export { Header }