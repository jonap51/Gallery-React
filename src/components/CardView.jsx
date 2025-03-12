import { useContext, useEffect, useState } from "react";
import './CardView.css'
import { UnsplashContext } from "../service/UnsplashContext";

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
        updateIngresarBusquedaAndSearch(tags.title)
        setImage(null);
    }
    console.log(fotoId)



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
                <div className="card  " style={{ width: '70%', height: '95%' }}>
                    <div className="row g-0">
                        <div className="g-col-6 " >
                            <img src={fotos[index].urls.regular} alt={fotos[index].alt_description} className=" rounded object-fit-cover container " />
                        </div>


                        <div className="g-col-6">
                            <div className="card-body">

                                <p className="card-text mt-4"> Fecha de creación : {fechaFormateada}</p>
                                <p className="card-text">{fotoId.description} </p>
                                <p className="card-text" ><i class="bi bi-camera me-2"></i>

                                    <small className="text-body-secondary">{fotoId.exif && fotoId.exif.name}
                                    </small></p>

                                <h2 className="card-title">
                                    {fotoId && fotoId.tags && fotoId.tags.map((tags) => (<span key={tags.title} onClick={() => tagPhotoSearch(tags)} className="badge rounded-pill text-bg-secondary m-1" style={{ cursor: 'pointer' }}> {tags.title} </span>))}
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