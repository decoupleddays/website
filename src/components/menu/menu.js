import React from 'react';
import Link from 'gatsby-link';

const Menu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/404">Page not Found</Link>
        </nav>
    );
}

export default Menu;