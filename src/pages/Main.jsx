import React, { useContext, useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import { UnsplashContext } from '../service/UnsplashContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Main.css'

const Main = ({ bloquear }) => {
    const { getRandom, fotos, boleanInfinite, pageNumber, setPageNumber } = useContext(UnsplashContext);
    const [imageHidden, setImageHidden] = useState(null)

    useEffect(() => {
        getRandom()
    }, [])

    const mostrarImagen = (ft) => {
        setImageHidden(ft);
        bloquear(true)
    };

    return (
        <div className='mt-5 '>
            <InfiniteScroll
                dataLength={fotos.length}
                next={() => setPageNumber(pageNumber + 1)}
                hasMore={boleanInfinite}
                loader={<h4>Loading...</h4>}
            >
                <div className='gallery justify-content-center  '>
                    {fotos.map((ft) => (
                        <img
                            key={ft.id}
                            src={ft.urls.small_s3}
                            alt={ft.alt_description}
                            onClick={() => mostrarImagen(ft)}
                        />
                    ))}
                </div>
            </InfiniteScroll>
            {imageHidden && <CardView imagen={imageHidden} setImage={setImageHidden} bloquear={bloquear} />}

        </div>
    )
}

export { Main }