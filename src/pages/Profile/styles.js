import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  background-color: #101414;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-weight: 600;
  margin-left: 28px;
  font-size: 60px;

  &:hover {
    color: ${lighten(0.1, "#00C2FF")};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 155px;
`;
export const Message = styled.p`
  font-family: "Poppins", sans-serif;
  color: #a9a9a9;
  font-weight: 500;
  font-size: 30px;
  margin-left: 28px;

  &:hover {
    color: ${lighten(0.1, "#00C2FF")};
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  background-color: #090e10;
  border-radius: 1rem;
  margin-left: 40px;

  img {
    width: 20vh;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;

  button {
    width: 216px;
    height: 50px;
    margin-left: 28px;
    border: none;

    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #fff;

    background-color: #00c2ff;
    border-radius: 50px;
    margin-top: 1rem;

    &:hover {
      background-color: ${lighten(0.1, "#00C2FF")};
    }

    text-decoration: none;
  }
`;
