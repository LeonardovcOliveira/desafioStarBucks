import { Link } from 'react-router-dom';
import { Lista, Nav, Principal } from './style';
import Logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <Principal>
      <img src={Logo} alt="logomarca" />
      <Nav>
        <Lista>
          <Link to="/">Home</Link>
        </Lista>
        <Lista>
          <Link to="/novidades">Novidades</Link>
        </Lista>
        <Lista>
          <Link to="/sobre">Sobre</Link>
        </Lista>
      </Nav>
    </Principal>
  );
}