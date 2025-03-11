import { useCallback, useContext, useEffect, useState } from "react";
import './CardView.css'
import { UnsplashContext } from "../service/UnsplashContext";

const CardView = ({ imagen, setImage }) => {
    const { fotos, photoById, fotoId, setIngresarBusqueda, ingresarBusqueda, searchPhotos, updateIngresarBusquedaAndSearch } = useContext(UnsplashContext)

    const [index, setIndex] = useState(fotos.indexOf(imagen))
    const [tituloTag, setTituloTag] = useState(null)

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
        console.log(tags.title, ' tag DENTRO del click CARD')

    }




    console.log(ingresarBusqueda, 'tag AFUERA del click CARD')



    return (

        <div id="carouselExample" className="carousel slide">
            <div className='display-zoom' onClick={ocultar}>
                <div className="card mb-3 container" style={{ width: '100%', objectPosition: 'center' }}>
                    <div className="row g-0">
                        <div className="col-md-9 vh75">
                            <img src={fotos[index].urls.regular} alt={fotos[index].alt_description} className="img-fluid rounded-start style-image" />
                        </div>


                        <div className="col-md-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {fotoId && fotoId.tags && fotoId.tags.map((tags) => (<span key={tags.title} onClick={() => tagPhotoSearch(tags)} className="badge rounded-pill text-bg-warning me-3" style={{ cursor: 'pointer' }}> {tags.title} </span>))}
                                </h5>
                                <p className="card-text">or, sit amet consectetur adipi  </p>
                                <p className="card-text m-4"><small className="text-body-secondary"> asd
                                </small></p>
                                <p className="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ullam! Ut, delectus, ratione placeat, dignissimos consectetur aliquam labore expedita harum veniam tenetur quis rem? Iusto eveniet aperiam soluta eligendi molestiae?</p>
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