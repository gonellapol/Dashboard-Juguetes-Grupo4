import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriaDb from './CategoriaDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriaDb />

        </div>
    )
}

export default ContentRowCenter;