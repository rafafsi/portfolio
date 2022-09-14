import styled from "styled-components";

const Container = ({ children }) => {
    return (
        <Body>{children}</Body>

    )
}


const Body = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;

    .orange {
    height: 100vh;
    background: linear-gradient(
        to right,
        #222 0%,
        #222 50%,
        #f27609 50%,
        #f27609 100%
    );

    }
`
export default Container;

