import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputEl = styled.input`
    display: none;
    &:checked+label {
        background-color: var(--highlight);
    }
`

const LabelEL = styled.label`
    display: inline-block;
    background-color: var(--stroke);
    padding: 4px 11px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: var(--primary)
`

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
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
