import React, { useEffect, useState } from 'react';
import Monitor from './Monitor';

const AllMonitor = () => {
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tv')
            .then(res => res.json())
            .then(data => setMonitors(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                monitors.slice(-6).map(monitor => <Monitor
                    key={monitor.key}
                    monitor={monitor}></Monitor>)
            }
        </div>
    );
};

export default AllMonitor;