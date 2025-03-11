import React, { useContext, useEffect, useState } from 'react';
import { UnsplashContext } from '../service/UnsplashContext';

const Header = () => {

    //uso context desde UnsplashContext para llamar a la api y todos los valores útiles
    const { ingresarBusqueda, setIngresarBusqueda, searchPhotos, setPageNumber, pageNumber } = useContext(UnsplashContext)
    const [captura, setCaptura] = useState('')

    // Función para llamar "buscar fotos" con CLICK
    const searchPhotosClick = async () => {
        setIngresarBusqueda(captura)

    }
    // Función para llamar "buscar fotos" con ENTER
    const searchKeyEnter = async (event) => {
        if (event.key === 'Enter') {
            setIngresarBusqueda(captura)

        }
    };


    useEffect(() => {
        setPageNumber(1)
        console.log(pageNumber, 'USE EFFECT')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchPhotos])

    //tomo valor del input
    const actualizarBusqueda = (event) => {
        setCaptura(event.target.value)
    }
    console.log(captura, 'captura')

    return (
        <div>
            <h1 className='p-3 bg-danger text-white container-full text-center'>Galeria de Imágenes</h1>
            <div className='d-flex container mt-5 mb-5'>
                <input className="form-control me-3 border-1 border-black" type="search" placeholder="Search" aria-label="Search" value={captura} onChange={actualizarBusqueda} onKeyDown={searchKeyEnter} />
                <button className="btn btn-outline-success" onClick={searchPhotosClick}>Search</button>
            </div>
        </div>
    )
}

export { Header }