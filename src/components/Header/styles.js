import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: #010101;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
    margin-left: 28px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    img {
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 90px;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;
  padding: 2rem;

  &:hover {
    color: ${lighten(0.1, "#00C2FF")};
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
