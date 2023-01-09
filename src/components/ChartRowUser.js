import React from 'react';




function ChartRow(props){

    


    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.privilege}</td>
                    {/* <td>{props.category_id}</td> */}
                 </tr>
            )
    }
    
        

export default ChartRow;