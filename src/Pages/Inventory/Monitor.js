import React from 'react';
import { useNavigate } from 'react-router-dom';

const Monitor = ({ monitor }) => {
    const { _id, name, price, image, description, quantity, supplier } = monitor;
    const navigate = useNavigate()
    return (
        <div className="card lg:max-w-lg bg-base-100">
            <div className="card-body">
                <img src={image} alt={name} />
                <p className="font-bold">{name}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><small>{description}</small></p>
                <p><strong>Quantity: </strong> {quantity}</p>
                <p><strong>Supplier: </strong> {supplier}</p>
                <button onClick={() => navigate(`/tv/${_id}`, { replace: true })} className='btn btn-primary w-full'>Update</button>
            </div>
        </div>
    );
};

export default Monitor;