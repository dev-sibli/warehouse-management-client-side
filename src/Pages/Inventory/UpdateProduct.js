import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tv/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [id]);

    const handleUpdate = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const quantityUpdate = { quantity }

        const url = `http://localhost:5000/tv/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantityUpdate)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Stock updated successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div className='flex gap-3'>
            <div className='w-4/6 '>
                <h2 className='text-2xl text-center'>Update </h2>
                <img src={products.image} alt={products.name} />
                <p className="font-bold">{products.name}</p>
                <p><strong>Price:</strong> {products.price}</p>
                <p>{products.description}</p>
                <p><strong>Quantity: </strong> {products.quantity}</p>
                <p><strong>Supplier: </strong> {products.supplier}</p>
                <button className='btn btn-primary text-white mt-3'>Delivered</button>

            </div>
            <div className='w-2/6'>
                <form onSubmit={handleUpdate} >
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">restock the items</span>
                        </label>
                        <input type="text" placeholder="Enter Quantity"
                            name="quantity"
                            class="input input-bordered w-full max-w-xs" />
                        <input className='btn btn-primary text-white my-3' type="submit" value="Restock" />
                    </div>
                </form>

                <Link to="/manageItems">
                    <button class="btn btn-wide my-3 text-white font-bold" type="button">
                        Manage Inventories
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UpdateProduct;