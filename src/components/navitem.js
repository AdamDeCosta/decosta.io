import React from 'react'
import { Link } from 'gatsby'

import './nav.scss';

const NavItem = (props) => {
    return (
        <li>
            <Link
                to={props.link}
                className="nav__link"
                activeClassName="nav__link--active"
            >
            {props.title}
            </Link>
        </li>
    )
}

export default NavItem;