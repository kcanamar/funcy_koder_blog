import theme from "../data/theme"
import styled from "styled-components"

export const Title = styled.h1`
    text-align: center;
    color: ${theme.primary};
`
export const NavBar = styled.nav`
    width: ${theme.pageWidth};
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    margin: auto;
    border: 4px solid ${theme.primary};
`
export const Menu = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
`

export const SubLink = styled.div`
    color: ${theme.primary};
    &:hover {
        color: ${theme.secondary};
        cursor: pointer;
    };
`

export const ALink = styled.a`
    color: ${theme.primary};
    text-decoration: none;
    &:hover {
        color: ${theme.secondary};
        cursor: pointer;
    };
`