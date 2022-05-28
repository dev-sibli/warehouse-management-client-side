import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Service = ({ tv }) => {
    const { _id, name, price, quantity, supplier } = tv;

    const handleInventory = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/tv/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');

                    }
                })
        }

    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{supplier}</td>
                <td><>
                    <button onClick={() => handleInventory(_id)} className='btn'>Delete</button>
                </></td>
            </tr>
        </>

    );
};

export default Service;
