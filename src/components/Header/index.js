import { Container, ContainerMenu, Label } from "./styles";
import { useState } from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <div onClick={toggleClass} className="cursor-pointer"></div>
      <img src={logo} alt="logo"/>
      <ContainerMenu>
        <a
          href="https://github.com/trajanovinicius"
          target="_blank"
          rel="noreferrer"
        >
          <Label>Projects</Label>
        </a>
        <a
          href="https://www.linkedin.com/in/vinicius-trajano-3266a4204/"
          target="_blank"
          rel="noreferrer"
        >
          <Label>Contact</Label>
        </a>
        <li className="pb-1 md:pb-0">
          <NavLink to="/technologies" onClick={toggleClass}>
            Technologies
          </NavLink>
        </li>
      </ContainerMenu>
    </Container>
  );
}
export default Header;
