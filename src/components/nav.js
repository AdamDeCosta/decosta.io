import React from 'react'

import NavItem from './navitem';
import './nav.scss'

const Nav = () => {
    return (
        <nav className="nav__container">
            <ul className="nav__list">
                <NavItem link="/" title="Home" />
                <NavItem link="/work" title="Work" />
                <NavItem link="/blog" title="Blog" />
                <NavItem link="/about" title="About" />
            </ul>
        </nav>
    )
}

export default Nav;