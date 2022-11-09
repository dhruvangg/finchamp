import React from 'react'
import styled from 'styled-components';

const Title = styled.span`color: var(--highlight);`
export default function HighText({ children }) {
    return (
        <Title>{children}</Title>
    )
}
