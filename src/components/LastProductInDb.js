
import React, { useState, useEffect } from "react";
// import React from 'react';
// import imagenFondo from '../assets/images/mandalorian.jpg';

function LastProductInDb(){

    const [product, setProduct] = useState([]);

        useEffect(() => {
        fetch("http://localhost:3005/api/products/last")
            .then((response) => {return response.json();})
            .then((data) => {setProduct(data.data)})
            .catch((error) => console.log(error));
         }, []);




    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://localhost:3005/images/products-img/" + product.filename} alt={product.name}/>
                    </div>
                    <p>
                     {product.description}  
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
