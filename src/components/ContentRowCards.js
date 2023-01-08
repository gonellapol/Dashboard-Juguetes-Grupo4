import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowCards(){

    // traer las api de users
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
    
	// traer las api users
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3005/api/users';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setUsers(data.data) )
				.catch(error => console.log(error))
	}, [])

	// traer las api products
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3005/api/products';
			fetch(endpointUsers)
				.then(response => response.json())
				.then((data) => setProducts(data.data))
				.catch(error => console.log(error))
	}, [])
//console.log(products);

//Contar Cantidad de Categorías
let cantidadCategorias = products.reduce(function(acc, curr) {
    
    // Check if there exist an object in empty array whose CategoryId matches
    let isElemExist = acc.findIndex(function(item) {
      return item.category_id === curr.category_id;
    })
    if (isElemExist === -1) {
      let obj = {};
      obj.category_id = curr.category_id;
      obj.count = 1;
      acc.push(obj)
    } else {
      acc[isElemExist].count += 1
    }
    return acc;
  
  }, [])

  //console.log(cantidadCategorias);
  
 



    /*  Cada set de datos es un objeto literal */
    let clientesInDB = {
        title: 'Clientes',
        color: 'primary', 
        cuantity: users.length,
        icon: 'fa-user-check'
    }
    
    let totalProducts = {
        title:' Productos', 
        color:'success', 
        cuantity: products.length,
        icon:'fa-cheese'
    }
    
    let sociosQuantity = {
        title:'Categorias' ,
        color:'warning',
        cuantity: cantidadCategorias.length || 'Sin datos',
        icon:'fa-clipboard-list',
    }

    let cartProps = [clientesInDB, totalProducts, sociosQuantity];

    return (
    
        <div className="row">
            {cartProps.map( (tarjetas, i) => {
                return <SmallCard {...tarjetas} key={i}/>
            })}
        </div>
    )
}

export default ContentRowCards;