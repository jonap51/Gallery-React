

const CardView = ({ imagen, asd }) => {


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


    const ocultar = (event) => {
        if (event.target === event.currentTarget) {
            asd(null)
            console.log('hiciste click en el card')
        }
    }


    return (
        <div style={displayZoom} onClick={ocultar} className="pepito">
            <div className="card mb-3 container" >
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src={imagen.img} alt={imagen.alt} className="img-fluid rounded-start" style={styleImage} />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body" >
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">TThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerhis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CardView }