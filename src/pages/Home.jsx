import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import picture from '../img/rafa-profile.jpeg';

const Home = () => {
    return (
        <Container>
            <Section>
                <Image>
                    <img src={picture} alt="" />
                </Image>
                <Name>
                    <h3>Hello!</h3>
                    <h2>I'm <span>Rafaela Inácio</span></h2> 
                    <h2>a front-end developer</h2>
                </Name>
            </Section>
        </Container>
    )
}
const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;


`
const Image = styled.div`
    padding: 5em;

    img {
        width: 20em;
        height: 20em;
        border: #f27609 solid 2px;
        box-shadow: #00000082 2px 10px 20px;
        border-radius: 50%;
    }
`
const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    span {
        color: #f27609;

    }
`

export default Home