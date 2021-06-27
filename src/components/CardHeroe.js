import React from 'react';
import Card from 'react-bootstrap/Card';

function CardHeroe ({strength, name, image, onClose, id}) {
    return (
      <div className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{strength}
                </Card.Text>
                <Card.Button variant="primary" onClick={onClose} className="btn btn-sm btn-danger">X</Card.Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardHeroe