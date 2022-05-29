import React from 'react';
import { Link } from 'react-router-dom';
import AllMonitor from '../../Inventory/AllMonitor';
import Banner from '../Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllMonitor></AllMonitor>
            <Link to="/manageItems">
                <button class="btn btn-wide my-3 text-white font-bold" type="button">
                    Manage Inventories
                </button>
            </Link>

        </div>
    );
};

export default Home;