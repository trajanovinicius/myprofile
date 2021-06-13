import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 74px;
  background-color: #010101;
  justify-content: space-between;

  img {
    width: 10rem;
    margin-left: 28px;
  }
`;
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 74px;
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;
  padding: 2rem;

  &:hover {
    color: ${lighten(0.1, "#00C2FF")};
  }
`;
