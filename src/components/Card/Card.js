import React from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';


export const Card = (props) => (
    <div className="card">
        <img src={""} alt={""} className="card-img-top" />
        <div className="card-body">
        <h5 className="card-title">Заголовок карточки {props.title}</h5>
            <Link to={"/profile/"} className="btn btn-primary">Открыть</Link>
        </div>
        
    </div>
)
