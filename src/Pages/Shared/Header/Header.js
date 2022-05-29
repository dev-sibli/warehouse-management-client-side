import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const headerItem =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            {
                user &&
                <ul className='lg:flex'>
                    <li><Link to="/manageItems">Manage Inventories</Link></li>
                    <li><Link to="/addItem">Add Item</Link></li>
                    <li><Link to="/myItems">My items</Link></li>
                </ul>
            }
            <li>{user ? <button onClick={() => signOut(auth)} className="btn btn-ghost" >Logout</button> : <Link to="/login">Login</Link>}</li>
        </>

    return (
        <div className="navbar bg-cyan-500 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {headerItem}
                    </ul>
                </div>
                <Link className='btn btn-ghost normal-case text-xl' to="/">Tv Star</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {headerItem}
                </ul>
            </div>
        </div>
    );
};

export default Header;