import React, { useContext, useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import { UnsplashContext } from '../service/UnsplashContext';
import './Main.css'


const Main = () => {
    const { obtenerRandom, fotos } = useContext(UnsplashContext);
    const [imageHidden, setImageHidden] = useState(null)
    //  const [fotos, setFotos] = useState([])


    useEffect(() => {
        obtenerRandom()
    }, [obtenerRandom])



    console.log(fotos)

    const mostrarImagen = (ft) => {
        setImageHidden(ft);

    };


    return (
        <div>

            <div className='gallery justify-content-center'>
                {fotos.map((ft) => (
                    <img key={ft.id} src={ft.urls.small_s3} alt={ft.alt_description} onClick={() => mostrarImagen(ft)} />
                ))}
            </div>
            {imageHidden && <CardView imagen={imageHidden} setImage={setImageHidden} foto={fotos} />}
        </div>
    )
}

export { Main }