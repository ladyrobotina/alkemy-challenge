import React from 'react';
import Card from 'react-bootstrap/Card';

function Heroe({heroes, image, name, strength, id, onClose}) {
    if(heroes) {
    return (
        <div>
            { heroes.map( h =>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{strength}
                </Card.Text>
                <Card.Button variant="primary" onClose={() => onClose(id)}>Go somewhere</Card.Button>
                </Card.Body>
            </Card>)}
        </div>
    );
    } else {
        return (
            <h2>Arma tu equipo de heroes</h2>
        )
    }
}

export default Heroe
