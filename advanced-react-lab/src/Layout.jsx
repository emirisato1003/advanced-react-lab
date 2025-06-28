import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/protected'>Protected</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
