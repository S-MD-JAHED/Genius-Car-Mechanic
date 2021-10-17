import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/404.png"

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "80%", height: "500px", margin: "20px 0 5px 0" }} src={img} alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary px-3 py-2">Go Back</button></Link>
        </div>
    );
};

export default NotFound;