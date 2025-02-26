import React, { useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import './Main.css'

const Main = () => {

    const [fotos, setFotos] = useState([])
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

    console.log(fotos, 'hola')

    return (
        <div>
            <CardView />

            <div className='gallery container'>
                {fotos.map((ft) => (
                    <img key={ft.id} src={ft.img} alt={ft.alt} />
                ))}
            </div>

        </div>
    )
}
/*  <div className='gallery container'>
                {fotos.map((ft) => (
                    <div key={ft.id}>
                        <img src={ft.img} alt={ft.alt} />
                    </div>
                ))}
            </div>*/
export { Main }