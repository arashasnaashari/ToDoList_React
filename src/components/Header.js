import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default function Header(props) {
    const { brand } = props;
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {brand}
                    </Link>
                
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                <i className="fas fa-question"></i>About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">
                                <i className="fas fa-plus"></i>Add
                                </Link>
                            </li>
                        </ul>
                </div>
                </div>
            </nav>
        </>
    )
}

Header.defaultProps = {
    brand : 'My App'
}

Header.prototype = {
    brand:PropTypes.string.isRequired
}
