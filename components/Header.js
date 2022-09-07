import Link from "next/link"
import about from "../data/about"
import { ALink, Menu, NavBar, SubLink, Title } from "../styled-components/header";

export default function Header(props){
    return (
        <NavBar>
            <Title>{about.title}</Title>
            <Menu>
                <ALink href={about.github}>GitHub</ALink>
                <ALink href={about.linkedin}>LinkedIn</ALink>
                <ALink href={about.twitter}>Twitter</ALink>
            </Menu>
        </NavBar>
    )
}