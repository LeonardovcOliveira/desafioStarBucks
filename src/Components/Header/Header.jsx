import {Link} from "react-router-dom"
import { HeaderStyle, StyleLink, Ul } from "./style";

export default function Header() {
    return(
        <HeaderStyle>
            <img src="src/assets/images/logo.png" alt="logomarca" />
            <nav>
                <Ul>
                    <li>
                        <StyleLink to="/">Home</StyleLink>
                    </li>
                    <li>
                        <StyleLink to="/novidades">Novidades</StyleLink>
                    </li>
                    <li>
                        <StyleLink to="/sobre">Sobre</StyleLink>
                    </li>
                </Ul>
            </nav>
        </HeaderStyle>
    );
}