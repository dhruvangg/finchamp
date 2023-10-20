import React from 'react'
import PropTypes from 'prop-types';

export function RadioButton(props) {
    const { label, ...rest } = props
    return (
        <div className='flex mr-4'>
            <input type="radio" id={props.value} {...rest} className="hidden peer" />
            <label htmlFor={props.value} className="font-semibold justify-between items-center px-5 py-2 w-full bg-gray-100 rounded-lg cursor-pointer peer-checked:bg-primary peer-checked:text-white">{label}</label>
        </div>
    )
}

RadioButton.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
