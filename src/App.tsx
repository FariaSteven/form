import SignUp from "./pages/signUp/SignUp";
import "./styles/global.css";

import UserContext from "./context";

function App() {
  return (
    <UserContext>
      <SignUp/>
    </UserContext>
  );
}

export default App;
