import { useContext, useEffect, useState } from "react";
import './CardView.css'
import { UnsplashContext } from "../service/UnsplashContext";
import { Button } from "@heroui/button";
import { CursorArrowRaysIcon, CalendarDaysIcon, CameraIcon, DocumentTextIcon } from '@heroicons/react/24/outline';



const CardView = ({ imagen, setImage, bloquear }) => {
    const { fotos, photoById, fotoId, updateIngresarBusquedaAndSearch } = useContext(UnsplashContext)
    const [index, setIndex] = useState(fotos.indexOf(imagen))

    //--CERRAR CARDVIEW--//
    //cerrar Card View con la tecla ESC
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setImage(null)
                bloquear(false)
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setImage]);

    //cerrar Card View al clickear en la CRUZ
    function close() {
        setImage(null)
        bloquear(false)
    }

    //cerrar Card View al clickear afuera de la card
    const ocultar = (event) => {
        if (event.target === event.currentTarget) {
            setImage(null)
            bloquear(false)
        }
    }
    //--TERMINA CIERRE DE CARDVIEW--//


    //obtiene los tags de la foto mostrada y los coloca en el CardView
    useEffect(() => {
        photoById(fotos[index].id)
    }, [index])

    // Función para realizar búsqueda por tag
    const tagPhotoSearch = (tags) => {
        setTimeout(() => {
            setImage(null);
            updateIngresarBusquedaAndSearch(tags.title)
        }, 700);//retraso para visualizar la animación del boton
    }

    // Muestra Tags dependiendo el tamaño de la pantalla
    let dimensionPantalla = []
    function widthLess(fotoId) {
        return window.screen.width < 450 ? dimensionPantalla = fotoId.tags.slice(0, 41) : window.screen.width < 800 ? dimensionPantalla = fotoId.tags.slice(0, 6) : dimensionPantalla = fotoId.tags
    }

    //Convertir la Fecha
    const dateString = fotoId.created_at
    const date = new Date(dateString);
    // Formatear toda la fecha automáticamente
    const fechaFormateada = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="carousel slide">
            <div className='display-zoom' onClick={ocultar}>
                <div className="card mt-3" style={{ width: '80%', height: '100% ' }}>
                    <div className="row row-cols-2  w-100 h-100 responsive-row">
                        <div className="col-10  overflow-hidden h-65 w-75">
                            <span
                                className="
                                link-light
                                cursor-pointer
                                position-absolute 
                                start-100 top-0 
                                translate-middle 
                                badge 
                                rounded-pill 
                                bg-danger"
                                onClick={close}
                            >
                                <i className="bi bi-x-lg  "></i>
                            </span>
                            <img className="rounded-lg object-fit-cover w-100 h-100 "
                                src={fotos[index].urls.regular}
                                alt={fotos[index].alt_description}
                            />
                        </div>

                        <div className="col-2 h-100 w-25 m-0 p-0 ">
                            <div className="card-body">
                                <p className="card-text d-flex mt-2 ">
                                    <CalendarDaysIcon className="h-5 w-5 me-1" />
                                    <small className="container-fluid">
                                        Fecha de creación : {fechaFormateada}
                                    </small>
                                </p>
                                <p className="card-text flex  mt-2 ">
                                    <DocumentTextIcon className="h-5 w-5 me-1" />
                                    <small className="container-fluid">
                                        {fotoId.description || 'Sin información'}
                                    </small>

                                </p>
                                <p className="card-text flex mt-2 " >
                                    <CameraIcon className="h-5 w-5 me-1" />
                                    <small className="text-body-secondary container-fluid">
                                        {fotoId.exif && fotoId.exif.name || 'Sin información'}
                                    </small>
                                </p>
                                { /*Aquí se obtienen los tags*/}
                                <h2 className="card-title  mt-4 ">
                                    {fotoId && fotoId.tags && widthLess(fotoId).map((tags) =>
                                    (<Button
                                        className="m-1 cursor-pointer"
                                        radius="full" color="danger"
                                        size="sm"
                                        variant="flat"
                                        key={tags.title}
                                        onPress={() => tagPhotoSearch(tags)}
                                    >
                                        <CursorArrowRaysIcon className="h-4 w-4" />
                                        {tags.title}
                                    </Button>))}
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                    disabled={index === fotos.length - 1 ? 'disabled' : ''} onClick={() => setIndex(index + 1)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <button className="carousel-control-prev m-0 p-0" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                    disabled={index === 0 ? 'disabled' : ''} onClick={() => setIndex(index - 1)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
            </div >
        </div >

    )
}

export { CardView }