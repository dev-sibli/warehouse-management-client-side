import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/tv'
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;