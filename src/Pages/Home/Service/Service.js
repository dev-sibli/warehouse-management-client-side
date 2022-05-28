import React from 'react';

const Service = ({ monitor }) => {
    const { name, price, quantity, supplier } = monitor;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{supplier}</td>
                <td><>
                    <button className='btn'>Edit</button>
                </></td>
            </tr>
        </>

    );
};

export default Service;
