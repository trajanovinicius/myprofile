import { Route } from "react-router-dom";
import Profile from "../src/pages/Profile";
import { GlobalStyle } from "./styles/global";
import Technologies from "./pages/Technologies";
function App() {
  return (
    <>
      <GlobalStyle />
      <Profile />
      <Route path="/technologies" element={<Technologies />} />
    </>
  );
}

export default App;
