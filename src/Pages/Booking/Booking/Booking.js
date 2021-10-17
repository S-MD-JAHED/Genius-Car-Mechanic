import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>

            <h1>this is booking page {serviceId}</h1>
            <Link to="/"><button>go back</button></Link>
        </div>
    );
};

export default Booking;