import { Container, ContainerMenu, Label } from "./styles";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ContainerMenu>
        <a
          href="https://github.com/trajanovinicius"
          target="_blank"
          rel="noreferrer"
        >
          <Label>Projects </Label>
        </a>
        <a
          href="https://www.linkedin.com/in/vinicius-trajano-3266a4204/"
          target="_blank"
          rel="noreferrer"
        >
          <Label>Services</Label>
        </a>
        <a
          href="https://www.linkedin.com/in/vinicius-trajano-3266a4204/"
          target="_blank"
          rel="noreferrer"
        >
          <Label>Contact</Label>
        </a>
      </ContainerMenu>
    </Container>
  );
}
export default Header;
