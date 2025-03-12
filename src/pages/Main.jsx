import React, { useContext, useEffect, useState } from 'react';
import { CardView } from '../components/CardView';
import { UnsplashContext } from '../service/UnsplashContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Main.css'



const Main = () => {
    const { getRandom, fotos, boleanInfinite, pageNumber, setPageNumber } = useContext(UnsplashContext);
    const [imageHidden, setImageHidden] = useState(null)



    useEffect(() => {
        getRandom()
    }, [getRandom])

    const mostrarImagen = (ft) => {
        setImageHidden(ft);
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={fotos.length}
                next={() => setPageNumber(pageNumber + 1)}
                hasMore={boleanInfinite}
                loader={<h4>Loading...</h4>}
            >
                <div className='gallery justify-content-center'>

                    {fotos.map((ft) => (
                        <img key={ft.id} src={ft.urls.small_s3} alt={ft.alt_description} onClick={() => mostrarImagen(ft)} />
                    ))}
                </div>
            </InfiniteScroll>
            {imageHidden && <CardView imagen={imageHidden} setImage={setImageHidden} />}

        </div>
    )
}

export { Main }