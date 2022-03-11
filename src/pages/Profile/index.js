import Header from "../../components/Header";
import {
  Container,
  Title,
  Content,
  Message,
  ContainerImg,
  ContentText,
} from "./styles";
import profileImg from "../../assets/profile2.jpeg";

function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentText>
          <Title>Hi, I'm Vinicius Trajano</Title>
          <Message>
            Backend Developer,
            <br /> currently focused on Node.js technology and student of data
            science.
            <br /> It will be a pleasure to work together.
          </Message>
          <a
            href="https://github.com/trajanovinicius"
            target="_blank"
            rel="noreferrer"
          >
            <button>My Projects</button>
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
