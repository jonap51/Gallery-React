import React, { useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import './Main.css'

const Main = () => {

    const [fotos, setFotos] = useState([])
    const [imageHidden, setImageHidden] = useState(null)

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch(process.env.PUBLIC_URL + '/JSON/apiLocal.json')
                const data = await response.json()
                setFotos(data)

            } catch (e) {
                console.error(e)
            }
        };
        obtenerDatos();
    }, []);
    console.log(fotos)


    const mostrarImagen = (img) => {
        setImageHidden(img);
        console.log('hiciste click en la imagen')

    };

    return (

        <div>

            <div className='gallery container'>
                {fotos.map((ft) => (
                    <img key={ft.id} src={ft.img} alt={ft.alt} onClick={() => mostrarImagen(ft)} />
                ))}
            </div>
            {imageHidden && <CardView imagen={imageHidden} asd={setImageHidden} />}

        </div>

    )
}

export { Main }