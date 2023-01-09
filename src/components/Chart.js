import React from "react";
import { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

// let products = [
//     {
//         name: 'Juguete 1 ',
//         price: '1230',
//         category_id: '5',
//         description: 'Descripcion 1'
        
//     },
//     {
//         name: 'Juguete 2 ',
//         price: '9999',
//         category_id: '4',
//         description: 'Descripcion 2'
//     },    
// ]


function Chart() {
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

  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">

          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Precio</th>
                      <th>Categoría</th>
                     
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Precio</th>
                      <th>Categoría</th>
                     
                    </tr>
                  </tfoot>
                  <tbody>
                    {products.map((row, i) => {
                      return <ChartRow {...row} key={i} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Chart;
