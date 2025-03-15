import { useContext, useEffect, useState } from "react";
import './CardView.css'
import { UnsplashContext } from "../service/UnsplashContext";
import { Button } from "@heroui/button";
import { CursorArrowRaysIcon, CalendarDaysIcon, CameraIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const CardView = ({ imagen, setImage }) => {
    const { fotos, photoById, fotoId, updateIngresarBusquedaAndSearch } = useContext(UnsplashContext)
    const [index, setIndex] = useState(fotos.indexOf(imagen))

    //cerrar Card View con la tecla ESC
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setImage]);

    //cerrar Card View al clickear afuera de la card
    const ocultar = (event) => {
        if (event.target === event.currentTarget) {
            setImage(null)
        }
    }
    //obtiene los tags de la foto en el CardView
    useEffect(() => {
        photoById(fotos[index].id)

    }, [index])

    // Función para manejar la búsqueda por tag
    const tagPhotoSearch = (tags) => {
        setTimeout(() => {
            setImage(null);
            updateIngresarBusquedaAndSearch(tags.title)
        }, 700);//retraso para visualizar la animación del boton
    }


    const dateString = fotoId.created_at
    const date = new Date(dateString);
    // Formatear toda la fecha automáticamente
    const fechaFormateada = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    console.log(fotos[index].urls);

    /* className="badge rounded-pill text-bg-secondary m-1 chip-flat" style={{ cursor: 'pointer' }} */
    return (

        <div className="carousel slide">
            <div className='display-zoom' onClick={ocultar}>
                <div className="card" style={{ width: '80%', height: '100% ' }}>
                    <div className="row row-cols-2  w-100 h-100 ">
                        <div className="col-10  overflow-hidden h-65 w-75">
                            <img className="rounded-lg object-fit-cover w-100 h-100 "
                                src={fotos[index].urls.regular}
                                alt={fotos[index].alt_description}



                            />
                        </div>


                        <div className="col-2 h-100 w-25 m-0 p-0 ">
                            <div className="card-body">
                                <p className="card-text d-flex mt-2 ">
                                    <CalendarDaysIcon className="h-5 w-5 me-1" />
                                    Fecha de creación : {fechaFormateada}
                                </p>
                                <p className="card-text flex mt-2 ">
                                    <DocumentTextIcon className="h-5 w-5 me-1" />
                                    {fotoId.description}
                                </p>
                                <p className="card-text flex mt-2 " >
                                    <CameraIcon className="h-5 w-5 me-1" />
                                    <small className="text-body-secondary">
                                        {fotoId.exif && fotoId.exif.name}
                                    </small>
                                </p>
                                <h2 className="card-title  mt-4 ">
                                    {fotoId && fotoId.tags && fotoId.tags.map((tags) =>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                    disabled={index === 0 ? 'disabled' : ''} onClick={() => setIndex(index - 1)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
            </div >
        </div >

    )
}

export { CardView }