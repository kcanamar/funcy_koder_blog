import about from "../data/about"
import { FooterWrapper } from "../styled-components/footer"

export default function Footer(props){
//  Todo add social to footer
    return (
        <FooterWrapper>
            Created by { about.name } copyright { new Date().getFullYear() }
        </FooterWrapper>
    )
}