import React from "react";
import { useState, useEffect } from "react";
import ChartRowUser from "./ChartRowUser";

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


function DataUsers() {
  const [users, setUsers] = useState([]);

  // traer las api products
  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointUsers = "http://localhost:3005/api/users";
    fetch(endpointUsers)
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
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
                      <th>Mail</th>
                      <th>Privilegio</th>
                      {/* <th>Categoría</th> */}
                     
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Nombre</th>
                      <th>Mail</th>
                      <th>Privilegio</th>
                      {/* <th>Categoría</th> */}
                     
                    </tr>
                  </tfoot>
                  <tbody>
                    {users.map((row, i) => {
                      return <ChartRowUser {...row} key={i} />;
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

export default DataUsers;
