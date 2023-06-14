import Profile from "../src/pages/Profile";
import TechSection from "./components/techSection";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <Profile />
      <TechSection/>
    </>
  );
}

export default App;
