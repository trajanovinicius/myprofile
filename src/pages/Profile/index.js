import Header from "../../components/Header";
import {
  Container,
  Title,
  Content,
  Message,
  ContainerImg,
  ContentText,
} from "./styles";
import profileImg from "../../assets/profile.png";

function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentText>
          <Title>Olá, eu sou Vinicius</Title>
          <Message>
            Desenvolvedor fullstack,
            <br /> atualmente focado nas tecnologias JS(React) e Node.js.
            <br /> Será um prazer trabalharmos juntos.
          </Message>
          <a href="https://github.com/viniluk" target="_blank" rel="noreferrer">
            <button>Meus Projetos</button>
          </a>
        </ContentText>
        <ContainerImg>
          <img src={profileImg} alt="imagem de perfil" />
        </ContainerImg>
      </Content>
    </Container>
  );
}

export default Profile;
