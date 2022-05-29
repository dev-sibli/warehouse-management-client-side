import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);
        const tv = {
            name: data.name,
            image: data.image,
            price: parseInt(data.price),
            description: data.description,
            quantity: parseInt(data.quantity),
            supplier: data.supplier
        }
        fetch('https://aqueous-ravine-97743.herokuapp.com/tv', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tv)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product added successfully')
                    reset();
                }
                else {
                    toast.error('Failed to add the Product');
                }
            })
    }
    return (
        <div>
            <h2 className="text-2xl">Add inventory item</h2>
            <form className='py-2' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {

                        })}
                    />
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Supplier"
                        className="input input-bordered w-full max-w-xs"
                        {...register("supplier", {

                        })}
                    />

                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {

                        })}
                    />
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                        })}
                    />
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Image Link"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                        })}
                    />
                    <input className='btn w-full max-w-xs text-white my-4' type="submit" value="Add Product" />
                </div>

            </form>

        </div>
    );
};

export default AddItem;