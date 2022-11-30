import PropTypes from 'prop-types';
import styled from 'styled-components';

const style = (vendor = "webkit") => {
    return `-${vendor}-appearance: none;
    appearance: none;
    width: 18px;
    height: 20px;
    border-radius: 50%;
    background: #5669FF;
    cursor: pointer;
    border: none;`
}

const Input = styled.input`
    &::-webkit-slider-thumb{
        ${style()}
    }
    &::-ms-thumb {
        ${style('ms')}
    } 
    ::-moz-range-thumb {
        ${style('moz')}
    }
`

export function Range({ options }) {
    const { handleChange, ...rest } = options
    return <Input type="range" {...rest} onChange={handleChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />

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

