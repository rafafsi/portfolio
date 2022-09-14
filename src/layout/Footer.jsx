import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <Foot>
            <SocialList>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rafaelafsi/">
                    <FaInstagram />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rafaela-in%C3%A1cio">
                    <FaLinkedin />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/rafafsi">
                    <FaGithub />
                </a>
            </SocialList>
            <Right>
                <span>Rafaela Inácio</span> &copy; 2022
            </Right>
        </Foot>
    )
}

const Foot = styled.footer`
    height: 10vh;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
`

const SocialList = styled.div`
    display: flex;
    align-items: center;

    a {
        color: #fff;
        cursor: pointer;
        transition: .5s ease-in-out;
        margin: 5px;
    }

    a:hover {
        color: #f27609;
    }

`

const Right = styled.div`
    color: #fff;
    padding: 2px;

    span {
        font-weight: 400;
        color: #f27609;
    }
`


export default Footer;