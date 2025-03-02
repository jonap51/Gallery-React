import React, { useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import './Main.css'

const Main = () => {

    const [fotos, setFotos] = useState([])
    const [imageHidden, setImageHidden] = useState(null)

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch('https://api.unsplash.com/photos/random?count=28', {
                    headers: {
                        Authorization: 'Client-ID FOSXf1dXzj3j0m5N394rm-wa8cb71AhTQzc0icjxjQ4',
                    },
                })
                const data = await response.json()
                setFotos(data)

            } catch (e) {
                console.error(e)
            }
        };
        obtenerDatos();
    }, []);
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