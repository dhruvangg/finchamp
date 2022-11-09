import styled from "styled-components"

const Div = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`

export default function Container({ children }) {
    return (
        <Div>{children}</Div>
    )
}
