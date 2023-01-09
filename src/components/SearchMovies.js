import React, { useState, useEffect, useRef } from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){

	const [products, setProducts] = useState([]);

	// traer las api products
	useEffect(() => {
	  // Petición Asincrónica al montarse el componente
	  const endpointUsers = "http://localhost:3005/api/products";
	  fetch(endpointUsers)
		.then((response) => response.json())
		.then((data) => setProducts(data.data))
		.catch((error) => console.log(error));
	}, []);




	const [movies, setMovies] = useState([]);
	const [keyword, setKeyword] = useState('comedy');

	const inputTag = useRef();

	// Credenciales de API
	const apiKey = 'e24ea09d';
	
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;

		if (apiKey !== '') {
			fetch(endpoint)
				.then(response => response.json())
				.then(data => {
					if (!data.Error) {
						setMovies(data.Search);
					} else {
						setMovies([]);
					}
				})
				.catch(error => console.log(error))
		}
	}, [keyword])

	const searchMovie = async e => {
		e.preventDefault();
		const inputValue = inputTag.current.value;
		setKeyword(inputValue);
		inputTag.current.value = '';
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Listado de Productos:</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={"http://localhost:3005/images/products-img/" + movie.filename} alt={movie.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.price} $</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
