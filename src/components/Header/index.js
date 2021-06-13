import { Container, ContainerMenu, Label } from "./styles";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <ContainerMenu>
        <Label>Projetos</Label>
        <Label>Serviços</Label>
        <Label>Contato</Label>
      </ContainerMenu>
    </Container>
  );
}
export default Header;
