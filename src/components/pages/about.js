import React from 'react'

export default props => {
    return (
        <div>
            <h1 className="display-4">About Contact</h1>
            <h1 className="display-4">{props.match.params.id}</h1>
            <p className="lead">it should have ID on path</p>
        </div>
    )
}
