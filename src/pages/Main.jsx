import React, { useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import './Main.css'

const Main = () => {

    const [fotos, setFotos] = useState([])
    const [imageHidden, setImageHidden] = useState(false)

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch('/JSON/apiLocal.json')
                const data = await response.json()
                setFotos(data)

            } catch (e) {
                console.error(e)
            }
        };
        obtenerDatos();
    }, []);



    const mostrarImagen = () => {
        setImageHidden(true);
        console.log('hiciste click en la imagen')

    };

    return (

        <div>

            <div className='gallery container'>
                {fotos.map((ft) => (
                    <img key={ft.id} src={ft.img} alt={ft.alt} onClick={mostrarImagen} />
                ))}
            </div>
            {imageHidden && <CardView />}

        </div>

    )
}

export { Main }