import React, { useEffect, useState } from 'react';

const ManageItems = () => {
    const [tvs, setTvs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tv')
            .then(res => res.json())
            .then(data => setTvs(data))
    }, [])

    const handleDelete = id => {
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
                        const remaining = tvs.filter(tv => tv._id !== id)
                        setTvs(remaining)
                    }
                })
        }
    }

    const handleInventory = id => {
        console.log(id);
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tvs.map(tv => <tr key={tv._id}>
                            <td>{tv.name}</td>
                            <td>{tv.price}</td>
                            <td>{tv.quantity}</td>
                            <td>{tv.supplier}</td>
                            <td>
                                <button onClick={() => handleInventory(tv._id)} className='btn'>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(tv._id)} className='btn'>Delete</button>
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;