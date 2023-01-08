import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import CategoriaDb from './CategoriaDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriaDb />

        </div>
    )
}

export default ContentRowCenter;