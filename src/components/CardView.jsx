import { useEffect, useState } from "react";

const CardView = ({ imagen, setImage, foto }) => {

    const [index, setIndex] = useState(foto.indexOf(imagen))


    const displayZoom = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(105, 105, 105, 0.8)',
        height: '100vh',
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        zIndex: '1',
        backdropFilter: 'blur(2px)'
    }

    const styleImage = {
        width: '95%',
        height: '70vh',
        objectFit: 'cover',
        margin: '20px '
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
                setImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setImage]);


    const ocultar = (event) => {
        if (event.target === event.currentTarget) {
            setImage(null)
        }
    }

    return (

        <div id="carouselExample" class="carousel slide">
            <div style={displayZoom} onClick={ocultar}>
                <div className="card mb-3 container" >
                    <div className="row g-0">
                        <div className="col-md-8">
                            <img src={foto[index].urls.regular} alt={foto[index].alt_description} className="img-fluid rounded-start" style={styleImage} />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body" >
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">TThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerhis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                            <button className="btn btn-danger" disabled={index === 0 ? 'disabled' : ''} onClick={() => setIndex(index - 1)}> Anterior </button>
                            <button className="btn btn-danger" disabled={index === foto.length - 1 ? 'disabled' : ''} onClick={() => setIndex(index + 1)}> Siguiente </button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                    disabled={index === foto.length - 1 ? 'disabled' : ''} onClick={() => setIndex(index + 1)}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                    disabled={index === 0 ? 'disabled' : ''} onClick={() => setIndex(index - 1)}>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
            </div>
        </div>

    )
}

export { CardView }