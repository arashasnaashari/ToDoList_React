import React from 'react'
import PropTypes from 'prop-types';


export default function Header(props) {
    const { brand } = props;
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        {brand}
                    </a>
                
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
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
