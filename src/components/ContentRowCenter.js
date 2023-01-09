import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriaDb from './CategoriaDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
                    <LastProductInDb />
            <CategoriaDb />
            

        </div>
    )
}

export default ContentRowCenter;