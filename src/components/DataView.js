import React from 'react';
import DataUsers from './DataUsers';
import ContentRowCards from './ContentRowCards';


function DataView(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">TOYS PLANET DASHBOARD</h1>
					</div>
				
				
					<ContentRowCards />
					
					<DataUsers />
	
					</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default DataView;