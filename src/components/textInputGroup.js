import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TextInputGroup extends Component {
    render() {
        const {type,placeholder,name,value,onChange,error} = this.props
        return (
            <>
                <input 
                    type={type} 
                    className={classnames('form-control form-control-lg mb-1',{
                        'is-invalid' : error
                    })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    error={error}
                />           
                {
                    error && <div className="invalid-feedback">
                    {error}
                </div> 
                }                          
            </>
        )
    }
}

TextInputGroup.propTypes = {
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    erorr:PropTypes.string
}
