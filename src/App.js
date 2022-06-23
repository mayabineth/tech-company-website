import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
