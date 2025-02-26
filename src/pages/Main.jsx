import React, { useEffect, useState } from 'react';
import './Main.css'
import { CardView } from '../components/CardView';

const Main = () => {

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch('/JSON/apiLocal.json')
                const data = await response.json()

                console.log(data)
            } catch (e) {
                console.error(e)
            }

        };
        obtenerDatos();

    }, []);



    return (
        <div>
            <CardView />
        </div>
    )
}

/*<div className='gallery container'>

                {fotos.map(ft => (
                    <div>

                        <img src={ft.img} alt="guitar player at concert" />
                    </div>
                ))}


            </div>*/
export { Main }