import React from 'react';

const Header = () => {

    return (

        <div>
            <h1 class="p-3 mb-2 bg-danger text-white container text-center">Galeria de Imágenes</h1>

            <div className='d-flex container mt-5 mb-5'>

                <input className="form-control me-3 border-1 border-black" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
        </div>
    )

}

export { Header }