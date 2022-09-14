import { Link } from "react-router-dom";

import styled from "styled-components";
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
            </Link>
            <List>
                <StyledLink to="/">
                    <NavList>Home</NavList>
                </StyledLink>
                <StyledLink to="/projects">
                    <NavList>Projects</NavList>
                </StyledLink>
                <StyledLink to="contact">
                    <NavList>Contact</NavList>
                </StyledLink>
            </List>
        </Nav>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Nav = styled.nav`
    margin: 0;
    display: flex;
    justify-content: space-between;
    height: 10vh;
    overflow: hidden;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;

    img {
        width: 40px;
        height: 40px;
    }
`
const List = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1em;
`

const NavList = styled.a`
    color: #fff;
    margin: 0 1em;
    text-decoration: none;
    transition: .5s ease-in-out;

    &:hover {
        color: #ffbb33;
        cursor: pointer;
        text-decoration: none;
    }
`
export default Navbar