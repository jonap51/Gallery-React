import React, { useContext } from 'react';
import { UnsplashContext } from '../service/UnsplashContext';

const Header = () => {

    //uso context desde UnsplashContext para llamar a la api y todos los valores útiles
    const { ingresarBusqueda, setIngresarBusqueda, searchPhotos } = useContext(UnsplashContext)

    // Función para llamar "buscar fotos"
    const searchPhotosClick = () => {
        searchPhotos()
    }

    //tomo valor del input
    const actualizarBusqueda = (event) => {
        setIngresarBusqueda(event.target.value)
    }

    return (
        <div>
            <h1 className='p-3 bg-danger text-white container-full text-center'>Galeria de Imágenes</h1>
            <div className='d-flex container mt-5 mb-5'>
                <input className="form-control me-3 border-1 border-black" type="search" placeholder="Search" aria-label="Search" value={ingresarBusqueda} onChange={actualizarBusqueda} />
                <button className="btn btn-outline-success" onClick={searchPhotosClick}>Search</button>
            </div>
        </div>
    )
}

export { Header }