import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className="service py-3">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price : {price}</h3>
            <p> {description} </p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;