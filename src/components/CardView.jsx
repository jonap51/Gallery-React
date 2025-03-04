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
        height: '90vh',
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


        <div id="carouselExample" className="carousel slide">


            <div style={displayZoom} onClick={ocultar}>

                <div className="card mb-3 container" style={{ width: '100%', objectPosition: 'center' }}>
                    <div className="row g-0">

                        <div className="col-md-9 vh75">
                            <img src={foto[index].urls.regular} alt={foto[index].alt_description} className="img-fluid rounded-start" style={styleImage} />
                        </div>


                        <div className="col-md-3">
                            <div className="card-body">
                                <h5 className="card-title"> or, sit amet consectetur adipi{foto[index].description}</h5>
                                <p className="card-text">or, sit amet consectetur adipi {foto[index].exif.model} </p>
                                <p className="card-text"><small className="text-body-secondary"> asdd</small></p>
                                <p className="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ullam! Ut, delectus, ratione placeat, dignissimos consectetur aliquam labore expedita harum veniam tenetur quis rem? Iusto eveniet aperiam soluta eligendi molestiae?</p>


                            </div>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                    disabled={index === foto.length - 1 ? 'disabled' : ''} onClick={() => setIndex(index + 1)}>
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