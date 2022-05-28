import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tv')
            .then(res => res.json())
            .then(data => setMonitors(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        monitors.map(monitor => <Service
                            key={monitor.key}
                            monitor={monitor}></Service>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Services;