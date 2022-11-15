import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${props => ["row-responsive", "row"].includes(props.direction) ? 'row' : 'column'};
    flex: ${props => props.flex || 'auto'};
    padding: ${props => props.pad || 'auto'};
    justify-content: ${props => props.justify || 'normal'};
    margin: ${props => props.margin || 'auto'};
    align-items: ${props => props.align || 'normal'};
    
    @media only screen and (max-width: 786px){
        flex-direction: ${props => props.direction === `row-responsive` && 'column'};
    }
`

export default function Box(props) {
    const { children, ...rest } = props
    return (
        <Wrapper {...rest}>{children}</Wrapper>
    )
}
