import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Layout from "./styles/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import UserStore from "./context/UserStore";
import Setting from "./pages/Setting";
import ImageUploader from "./pages/ImageUploader";
import MaterialEx from "./pages/MaterialEx";
import CardEx from "./pages/CardEx";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />{" "}
              {/*루트 / 밑에 about*/}
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/firebase" element={<ImageUploader />} />
              <Route path="/material" element={<MaterialEx />} />
              <Route path="/card" element={<CardEx />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
