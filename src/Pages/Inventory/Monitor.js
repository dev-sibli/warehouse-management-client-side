import React from 'react';

const Monitor = ({ monitor }) => {
    const { name, price, image, description, quantity, supplier } = monitor;
    return (
        <div className="card lg:max-w-lg bg-base-100">
            <div className="card-body">
                <img src={image} alt={name} />
                <p className="font-bold">{name}</p>
                <p><strong>Price:</strong> {price}</p>
                <p><small>{description}</small></p>
                <p><strong>Quantity: </strong> {quantity}</p>
                <p><strong>Supplier: </strong> {supplier}</p>
            </div>
        </div>
    );
};

export default Monitor;