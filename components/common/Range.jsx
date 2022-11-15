import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    margin: 20px 0;
    background: var(--primary);
    outline: none;
    opacity: 1;
    -webkit-transition: .2s;
    transition: opacity .2s;
    &:hover {
        opacity: 1;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--highlight);
        cursor: pointer;
    } 
    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--highlight);
        cursor: pointer;
    }
`

export default function Range({ options }) {
    const { handleChange, ...rest } = options
    return (
        <Input type="range" {...rest} onChange={handleChange} />
    )
}

Range.propTypes = {
    options: PropTypes.shape({
        name: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
        defaultValue: PropTypes.number.isRequired,
        handleChange: PropTypes.func.isRequired
    })
}