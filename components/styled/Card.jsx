import React from 'react'
import styled from 'styled-components'

// const Wrapper = styled.div`
//     display: flex;
//     width: 100%;
//     flex-direction: ${props => ["row-responsive", "row"].includes(props.direction) ? 'row' : 'column'};
//     flex: ${props => props.flex || 'auto'};
//     padding: ${props => props.pad || 'auto'};
//     justify-content: ${props => props.justify || 'normal'};
//     margin: ${props => props.margin || 'auto'};
//     align-items: ${props => props.align || 'normal'};

//     @media only screen and (max-width: 786px){
//         flex-direction: ${props => props.direction === `row-responsive` && 'column'};
//     }
// `

const Wrapper = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
`

export default function Card(props) {
    const { children, ...rest } = props
    return (
        <Wrapper {...rest}>{children}</Wrapper>
    )
}
