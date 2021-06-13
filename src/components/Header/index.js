import { Container, ContainerMenu, Label } from "./styles";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ContainerMenu>
        <a href="https://github.com/viniluk" target="_blank" rel="noreferrer">
          <Label>Projetos</Label>
        </a>
        <Label>Serviços</Label>
        <Label>Contato</Label>
      </ContainerMenu>
    </Container>
  );
}
export default Header;
