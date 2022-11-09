import styled from 'styled-components';

const Wrapper = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`
export default function Main({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}
