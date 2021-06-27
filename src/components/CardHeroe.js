import React from 'react';
import './CardHeroe.css';

function CardHeroe ({strength, name, image, onClose, id}) {
    return (
      <div className="card">
            
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Strength</p>
              <p>{strength}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="imageHeroe" src={image} width="100" height="100" alt="" />
            </div>
          </div>
        </div>
     
        </div>
    );
};

export default CardHeroe;