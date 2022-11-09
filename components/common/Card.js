import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    &:hover {
        color: #0070f3;
        border-color: #0070f3;
    }
`

export default function Card({ children }) {
    return (
        <Div>{children}</Div>
    )
}
