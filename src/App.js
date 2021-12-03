import "./App.css";

import Photos from "./components/photos";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import NotFoundPage from "./components/notFoundpage";
import Navbarq from "./components/navigation";
function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            {/* <nav>
              <Link to="/">Home</Link>

              <Link to="/about">About</Link>
            </nav> */}
            <Navbarq />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/albums" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/albums/:id" element={<Photos />}></Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
