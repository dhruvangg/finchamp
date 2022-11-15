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

export default function RadioButton(props) {
    const { label, ...rest } = props
    return (
        <>
            <InputEl type="radio" {...rest} id={props.value} />
            <LabelEL htmlFor={props.value}>{label}</LabelEL>
        </>
    )
}


RadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
