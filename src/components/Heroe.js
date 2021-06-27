import React from 'react';

import CardHeroe from './CardHeroe';

function Heroe({heroes, onClose}) {
    if(heroes) {
    return (
        <div>
            { heroes.map( h =>
                <CardHeroe 
                image={h.image}
                name={h.name}
                strength={h.strength}
                onClose={() => onClose(h.id)}
                id={h.id}
            /> )}
        </div>
    );
    } else {
        return (
            <h2>Arma tu equipo de heroes</h2>
        )
    }
}

export default Heroe
